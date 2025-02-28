import React, { useEffect, useState } from "react";
import axios from "axios";
import Mapreq from "../../components/VolComp/Mapreq";

const Requests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/emergency");
        setRequests(response.data);
      } catch (err) {
        setError("Failed to fetch requests.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold text-center text-red-600 mb-4">
        Emergency Requests
      </h2>

      <div className="">



        {/* Map Component */}
        <div>
          <Mapreq />
        </div>

        {/* Emergency Requests List */}
        <div className="bg-white p-4 rounded-lg shadow-md overflow-y-auto max-h-[600px]">
          {loading ? (
            <p className="text-center">Loading requests...</p>
          ) : error ? (
            <p className="text-center text-red-600">{error}</p>
          ) : requests.length === 0 ? (
            <p className="text-center">No emergency requests available.</p>
          ) : (
            <ul className="space-y-4">
              {requests.map((req) => (
                <li
                  key={req._id}
                  className="border p-4 rounded-md shadow-sm hover:shadow-md transition"
                >
                  <h3 className="text-lg font-bold">{req.fullName}</h3>
                  <p className="text-sm text-gray-600">{req.contact}</p>
                  <p className="text-sm">{req.emergencyType}</p>
                  <p className="text-sm text-gray-700">{req.description}</p>
                  <span
                    className={`inline-block mt-2 px-2 py-1 rounded text-white ${
                      req.urgency === "Critical"
                        ? "bg-red-600"
                        : req.urgency === "High"
                        ? "bg-orange-500"
                        : req.urgency === "Medium"
                        ? "bg-yellow-500"
                        : "bg-green-500"
                    }`}
                  >
                    {req.urgency}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>


      </div>
    </div>
  );
};

export default Requests;
