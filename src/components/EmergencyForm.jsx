import React, { useState, useEffect } from "react";
import axios from "axios";

const EmergencyForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    contact: "",
    email: "",
    address: "",
    location: "",
    emergencyType: "",
    description: "",
    file: null,
    urgency: "Low",
  });

  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await axios.get(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            setFormData((prev) => ({ ...prev, location: response.data.display_name }));
          } catch (error) {
            console.error("Error fetching location name", error);
          }
        },
        (error) => {
          console.error("Error getting location", error);
        }
      );
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLocationChange = async (e) => {
    const query = e.target.value;
    setFormData({ ...formData, location: query });
    if (query.length > 2) {
      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/search?format=json&q=${query}`
        );
        setSuggestions(response.data);
      } catch (error) {
        console.error("Error fetching location suggestions", error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const selectLocation = (location) => {
    setFormData({ ...formData, location });
    setSuggestions([]);
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const payload = {
      fullName: formData.fullName,
      contact: formData.contact,
      email: formData.email,
      address: formData.address,
      location: formData.location,
      emergencyType: formData.emergencyType,
      description: formData.description,
      urgency: formData.urgency,
    };
  
    console.log("Sending data:", payload); // 🔍 Debugging log
  
    try {
      const response = await axios.post("http://localhost:5000/api/emergency", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      alert("Emergency request submitted successfully.");
      setFormData({
        fullName: "",
        contact: "",
        email: "",
        address: "",
        location: "",
        emergencyType: "",
        description: "",
        urgency: "Low",
      });
  
      onClose();
    } catch (error) {
      console.error("Error submitting request:", error.response?.data || error.message);
      alert(`Failed to submit emergency request: ${error.response?.data?.message || "Unknown error"}`);
    }
  };
  

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 flex justify-center items-center p-4">
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4 text-center text-red-600">
          Emergency Help Request Form
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="p-2 border rounded w-full"
          />
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Contact Number"
            required
            className="p-2 border rounded w-full"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="p-2 border rounded w-full"
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Current Address"
            required
            className="p-2 border rounded w-full"
          />

          {/* Location Input with Auto-suggestions */}
          <div className="col-span-2 relative">
            <input
              type="text"
              value={formData.location}
              onChange={handleLocationChange}
              placeholder="Enter Location"
              required
              className="p-2 border rounded w-full"
            />
            {suggestions.length > 0 && (
              <ul className="absolute bg-white border w-full max-h-40 overflow-y-auto mt-1">
                {suggestions.map((item) => (
                  <li
                    key={item.place_id}
                    onClick={() => selectLocation(item.display_name)}
                    className="p-2 cursor-pointer hover:bg-gray-200"
                  >
                    {item.display_name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Emergency Type Selection */}
          <select
            name="emergencyType"
            value={formData.emergencyType}
            onChange={handleChange}
            required
            className="p-2 border rounded w-full"
          >
            <option value="">Select Emergency Type</option>
            <option value="Medical Assistance">Medical Assistance</option>
            <option value="ShelterNeeded">Shelter Needed</option>
            <option value="Food & Water">Food & Water</option>
            <option value="Rescue Operation">Rescue Operation</option>
            <option value="Financial Aid">Financial Aid</option>
            <option value="Other">Other</option>
          </select>

          {/* Urgency (Criticality) Selection */}
          <select
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
            required
            className="p-2 border rounded w-full"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Critical">Critical</option>
          </select>

          {/* Additional Details */}
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Additional details"
            required
            className="p-2 border rounded w-full col-span-2"
          ></textarea>

          {/* File Upload */}
          <input
            type="file"
            onChange={handleFileChange}
            className="p-2 border rounded w-full col-span-2"
          />

          {/* Submit & Close Buttons */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white p-2 rounded font-semibold hover:bg-red-700 transition col-span-2"
          >
            Submit Request
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full bg-gray-400 text-white p-2 rounded font-semibold hover:bg-gray-500 transition col-span-2"
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmergencyForm;
