import React, { useEffect, useState } from "react";
import axios from "axios";

const Overview = () => {
  const [incidents, setIncidents] = useState([]);
  const [emergencies, setEmergencies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch both incidents and emergencies
        const [incidentsRes, emergenciesRes] = await Promise.all([
          axios.get("http://localhost:5000/api/incidents"),
          axios.get("http://localhost:5000/api/emergency"),
        ]);

        setIncidents(incidentsRes.data);
        setEmergencies(emergenciesRes.data);
      } catch (err) {
        setError("Failed to fetch data.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6">
      {/* Active Incidents */}
      <div className="md:col-span-1 lg:col-span-3 bg-red-500 rounded-xl p-4 text-white">
        <div className="mb-2">
          <h3 className="font-medium">Active Incidents</h3>
          <p className="text-xs opacity-80">Last updated: just now</p>
        </div>

        {loading ? (
          <p className="text-sm">Loading...</p>
        ) : error ? (
          <p className="text-sm text-red-300">{error}</p>
        ) : (
          <>
            
            <div className="text-6xl font-bold mb-2">{incidents.length}</div>
            <p className="text-sm">Requiring attention</p>
          </>
        )}
      </div>

      {/* Emergency Requests */}
      <div className="md:col-span-1 lg:col-span-3 bg-blue-500 rounded-xl p-4 text-white">
        <div className="mb-2">
          <h3 className="font-medium">Emergency Requests</h3>
          <p className="text-xs opacity-80">Last updated: just now</p>
        </div>

        {loading ? (
          <p className="text-sm">Loading...</p>
        ) : error ? (
          <p className="text-sm text-red-300">{error}</p>
        ) : (
          <>
            
            <div className="text-6xl font-bold mb-2">{emergencies.length}</div>
            <p className="text-sm">Reported emergencies</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Overview;
