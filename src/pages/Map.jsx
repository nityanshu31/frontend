import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MapComponent from '../components/MapComponent';

const Map = () => {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    fetchIncidents();
  }, []);

  const fetchIncidents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/incidents");
      setIncidents(res.data);
    } catch (error) {
      console.error("Error fetching incidents:", error);
    }
  };

  // Filter incidents based on type
  const recentIncidents = incidents.slice(0, 3);
  const majorIncidents = incidents.filter(incident => 
    incident.type === "Explosion" || incident.type === "Fire" || incident.type === "Bridge Collapse"
  );
  const allIncidents = incidents;

  return (
    <div className="h-screen w-screen flex flex-col">
      {/* Map Section (Top Half) */}
      <div className="flex-grow">
        <MapComponent />
      </div>

      {/* Incident Sections (Bottom Half) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-100 h-1/2 overflow-auto">
        
        {/* Recent Incidents */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Recent Incidents</h2>
          <ul className="space-y-2">
            {recentIncidents.length > 0 ? (
              recentIncidents.map((incident) => (
                <li key={incident._id} className="p-2 border-b text-gray-600">
                  {incident.title}
                </li>
              ))
            ) : (
              <li className="text-gray-500">No recent incidents</li>
            )}
          </ul>
        </div>

        {/* All Incidents */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">All Incidents</h2>
          <ul className="space-y-2">
            {allIncidents.length > 0 ? (
              allIncidents.map((incident) => (
                <li key={incident._id} className="p-2 border-b text-gray-600">
                  {incident.title}
                </li>
              ))
            ) : (
              <li className="text-gray-500">No incidents reported</li>
            )}
          </ul>
        </div>

        {/* Major Incidents */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Major Incidents</h2>
          <ul className="space-y-2">
            {majorIncidents.length > 0 ? (
              majorIncidents.map((incident) => (
                <li key={incident._id} className="p-2 border-b text-red-600 font-bold">
                  {incident.title}
                </li>
              ))
            ) : (
              <li className="text-gray-500">No major incidents</li>
            )}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Map;
