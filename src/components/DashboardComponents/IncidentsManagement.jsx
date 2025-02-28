import React, { useEffect, useState } from "react";

const IncidentsManagement = () => {
  const [incidents, setIncidents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIncidents = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/incidents");
        if (!response.ok) {
          throw new Error("Failed to fetch incidents");
        }
        const data = await response.json();
        setIncidents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchIncidents();
  }, []);

  const totalIncidents = incidents.length;
  const solvedIncidents = incidents.filter((incident) => incident.solved).length;
  const remainingIncidents = totalIncidents - solvedIncidents;

  const handleMarkSolved = async (id) => {
    try {
      // Send PUT request to backend to mark the incident as solved
      await fetch(`http://localhost:5000/api/incidents/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ solved: true }),
      });

      // Update the incidents list locally to reflect the change
      setIncidents((prev) =>
        prev.map((incident) =>
          incident._id === id ? { ...incident, solved: true } : incident
        )
      );
    } catch (err) {
      console.error("Error marking incident as solved:", err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Incident Management</h2>

      {loading && <p className="text-center text-gray-600">Loading incidents...</p>}
      {error && <p className="text-red-600 text-center">{error}</p>}

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
        <div className="bg-blue-500 rounded-xl p-6 text-white shadow-md text-center">
          <h3 className="font-medium text-lg">Total Incidents</h3>
          <div className="text-5xl font-bold my-2">{totalIncidents}</div>
          <p className="text-sm opacity-80">Total reported incidents</p>
        </div>
        <div className="bg-green-500 rounded-xl p-6 text-white shadow-md text-center">
          <h3 className="font-medium text-lg">Solved Incidents</h3>
          <div className="text-5xl font-bold my-2">{solvedIncidents}</div>
          <p className="text-sm opacity-80">Successfully resolved</p>
        </div>
        <div className="bg-red-500 rounded-xl p-6 text-white shadow-md text-center">
          <h3 className="font-medium text-lg">Remaining Incidents</h3>
          <div className="text-5xl font-bold my-2">{remainingIncidents}</div>
          <p className="text-sm opacity-80">Still requiring attention</p>
        </div>
      </div>

      {/* Incidents List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* All Incidents */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">All Incidents</h3>
          <div className="space-y-4">
            <div className="max-h-100 overflow-y-auto">
              {incidents.slice(0, 5).map((incident) => (
                <div key={incident._id} className="bg-gray-100 border-l-4 border-gray-500 p-4 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-gray-800">{incident.title}</h4>
                  <p className="text-gray-600">{incident.description}</p>
                  <span className="text-sm text-gray-500 font-medium">{incident.type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Solved Incidents */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-green-700 text-center">Solved Incidents</h3>
          <div className="space-y-4">
            <div className="max-h-100 overflow-y-auto">
              {incidents
                .filter((incident) => incident.solved)
                .slice(0, 5)
                .map((incident) => (
                  <div key={incident._id} className="bg-green-100 border-l-4 border-green-500 p-4 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold text-gray-800">{incident.title}</h4>
                    <p className="text-gray-600">{incident.description}</p>
                    <span className="text-sm text-green-500 font-medium">{incident.type}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Remaining Incidents */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-red-700 text-center">Remaining Incidents</h3>
          <div className="space-y-4">
            <div className="max-h-100 overflow-y-auto">
              {incidents
                .filter((incident) => !incident.solved)
                .slice(0, 5)
                .map((incident) => (
                  <div key={incident._id} className="bg-white border-l-4 border-red-500 p-4 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold text-gray-800">{incident.title}</h4>
                    <p className="text-gray-600">{incident.description}</p>
                    <span className="text-sm text-red-500 font-medium">{incident.type}</span>
                    <button
                      className="mt-3 w-full bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition duration-300"
                      onClick={() => handleMarkSolved(incident._id)}
                    >
                      Mark as Solved
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncidentsManagement;
