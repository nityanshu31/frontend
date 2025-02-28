import React, { useState, useEffect } from "react";
import axios from "axios";

const IncidentReport = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("Fire");
  const [location, setLocation] = useState({ lat: "", lng: "" });
  const [mapVisible, setMapVisible] = useState(false);

  useEffect(() => {
    getUserLocation();
  }, []);

  // Get User’s Current Location
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude.toFixed(6),
            lng: position.coords.longitude.toFixed(6),
          });
        },
        (error) => {
          console.error("Error getting location: ", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  // Load HERE Maps
  const loadHereMap = () => {
    const platform = new window.H.service.Platform({
      apikey: "mwSGd_thMziSd8hBzz4OQT5b9goG8RAyNCZq8-5onz0",
    });

    const defaultLayers = platform.createDefaultLayers();

    const map = new window.H.Map(
      document.getElementById("mapContainer"),
      defaultLayers.vector.normal.map,
      {
        zoom: 12,
        center: { lat: parseFloat(location.lat), lng: parseFloat(location.lng) },
      }
    );

    // Enable user interaction
    new window.H.mapevents.Behavior(new window.H.mapevents.MapEvents(map));

    window.H.ui.UI.createDefault(map, defaultLayers);

    // Add a draggable marker
    const marker = new window.H.map.Marker(
      { lat: parseFloat(location.lat), lng: parseFloat(location.lng) },
      { volatility: true }
    );

    map.addObject(marker);

    // Listen for map clicks and update coordinates
    map.addEventListener("tap", function (evt) {
      const coord = map.screenToGeo(
        evt.currentPointer.viewportX,
        evt.currentPointer.viewportY
      );

      setLocation({ lat: coord.lat.toFixed(6), lng: coord.lng.toFixed(6) });

      marker.setGeometry({ lat: coord.lat.toFixed(6), lng: coord.lng.toFixed(6) });
    });
  };

  useEffect(() => {
    if (mapVisible) {
      setTimeout(loadHereMap, 500); // Delay to ensure div is loaded
    }
  }, [mapVisible]);

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !type || !location.lat || !location.lng) {
      alert("All fields are required");
      return;
    }

    const incidentData = { title, description, type, location };

    try {
      await axios.post("http://localhost:5000/api/incidents", incidentData);
      alert("Incident reported successfully!");
      setTitle("");
      setDescription("");
      setType("Fire");
      setLocation({ lat: "", lng: "" });
    } catch (err) {
      console.error("Error submitting incident", err);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Report an Incident</h2>

      <form onSubmit={handleSubmit} className="bg-white shadow-md p-4 rounded-md">
        <div className="mb-4">
          <label className="block text-gray-700">Title:</label>
          <input
            type="text"
            className="border p-2 w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Description:</label>
          <textarea
            className="border p-2 w-full"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Incident Type:</label>
          <select
            className="border p-2 w-full"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Fire">Fire</option>
            <option value="Flood">Flood</option>
            <option value="Accident">Accident</option>
            <option value="Medical Emergency">Medical Emergency</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Location (Latitude, Longitude):</label>
          <input
            type="text"
            className="border p-2 w-full"
            placeholder="Latitude"
            value={location.lat}
            readOnly
          />
          <input
            type="text"
            className="border p-2 w-full mt-2"
            placeholder="Longitude"
            value={location.lng}
            readOnly
          />
          <button
            type="button"
            onClick={() => setMapVisible(true)}
            className="bg-blue-500 text-white p-2 rounded-md mt-2 w-full"
          >
            Open to Select Manually
          </button>
        </div>

        <button type="submit" className="bg-green-500 text-white p-2 rounded-md mt-4 w-full">
          Report Incident
        </button>
      </form>

      {mapVisible && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
        >
          <div className="bg-white p-4 rounded-md w-3/4 h-3/4 relative">
            <button
              onClick={() => setMapVisible(false)}
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-md"
            >
              Close
            </button>
            <div id="mapContainer" className="w-full h-full"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IncidentReport;
