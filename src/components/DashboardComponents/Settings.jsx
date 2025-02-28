import React, { useEffect, useState } from "react";
import axios from "axios";

const Settings = () => {
  const [emergencyData, setEmergencyData] = useState({
    total: 0,
    critical: 0,
    high: 0,
    medium: 0,
    low: 0,
  });
  const [emergencies, setEmergencies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmergencyData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/emergency");
        const emergenciesList = response.data;

        const stats = {
          total: emergenciesList.length,
          critical: emergenciesList.filter((e) => e.urgency === "Critical").length,
          high: emergenciesList.filter((e) => e.urgency === "High").length,
          medium: emergenciesList.filter((e) => e.urgency === "Medium").length,
          low: emergenciesList.filter((e) => e.urgency === "Low").length,
        };

        setEmergencyData(stats);
        setEmergencies(emergenciesList);
      } catch (err) {
        setError("Failed to fetch emergency data.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEmergencyData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-center text-red-600 mb-6">
        Emergency Dashboard
      </h2>

      {loading ? (
        <p className="text-center">Loading data...</p>
      ) : error ? (
        <p className="text-center text-red-600">{error}</p>
      ) : (
        <>
          {/* Dashboard Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-bold">Total Emergencies</h3>
              <p className="text-3xl font-bold">{emergencyData.total}</p>
            </div>
            <div className="bg-red-600 text-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-bold">Critical Cases</h3>
              <p className="text-3xl font-bold">{emergencyData.critical}</p>
            </div>
            <div className="bg-orange-500 text-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-bold">High Urgency</h3>
              <p className="text-3xl font-bold">{emergencyData.high}</p>
            </div>
            <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-bold">Medium Urgency</h3>
              <p className="text-3xl font-bold">{emergencyData.medium}</p>
            </div>
            <div className="bg-green-500 text-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-bold">Low Urgency</h3>
              <p className="text-3xl font-bold">{emergencyData.low}</p>
            </div>
          </div>

          {/* List of All Emergency Requests */}
          <h3 className="text-xl font-semibold mb-4">All Emergency Requests</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-2 px-4 text-left">Type</th>
                  <th className="py-2 px-4 text-left">Urgency</th>
                  <th className="py-2 px-4 text-left">Location</th>
                  <th className="py-2 px-4 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
  {emergencies.length > 0 ? (
    emergencies.map((emergency, index) => (
      <tr key={index} className="border-b hover:bg-gray-100">
        <td className="py-2 px-4">{emergency.emergencyType}</td>
        <td className={`py-2 px-4 font-semibold ${getUrgencyColor(emergency.urgency)}`}>
          {emergency.urgency}
        </td>
        {/* ✅ Fetch and display the text-based location */}
        <td className="py-2 px-4">{emergency.location || "Unknown Location"}</td>
        <td className="py-2 px-4">{emergency.description}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="4" className="text-center py-4">
        No emergency requests found.
      </td>
    </tr>
  )}
</tbody>


            </table>
          </div>
        </>
      )}
    </div>
  );
};

// Function to assign colors to urgency levels
const getUrgencyColor = (urgency) => {
  switch (urgency) {
    case "Critical":
      return "text-red-600";
    case "High":
      return "text-orange-500";
    case "Medium":
      return "text-yellow-500";
    case "Low":
      return "text-green-500";
    default:
      return "";
  }
};

export default Settings;
