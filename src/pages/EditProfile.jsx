import React, { useState, useEffect } from "react";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    bloodGroup: "",
    emergencyContact: { name: "", phone: "", relation: "" },
    medicalConditions: "",
    allergies: "",
    medications: "",
  });

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/auth/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const data = await response.json();
        if (response.ok) {
          setFormData({
            name: data.user.name || "",
            email: data.user.email || "",
            address: data.user.address || "",
            bloodGroup: data.user.bloodGroup || "",
            emergencyContact: data.user.emergencyContact || { name: "", phone: "", relation: "" },
            medicalConditions: data.user.medicalConditions || "",
            allergies: data.user.allergies || "",
            medications: data.user.medications || "",
          });
        } else {
          console.error("Failed to fetch user data:", data.message);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEmergencyContactChange = (e) => {
    setFormData({
      ...formData,
      emergencyContact: { ...formData.emergencyContact, [e.target.name]: e.target.value },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/auth/edit-profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Profile updated successfully!");
      } else {
        setMessage("Error updating profile: " + data.message);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      setMessage("An error occurred while updating your profile.");
    }
  };

  if (loading) return <p className="text-center text-lg">Loading user data...</p>;

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6">Edit Profile</h2>
      {message && <p className="text-center text-green-600 font-semibold mb-4">{message}</p>}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-medium">Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block font-medium">Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block font-medium">Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block font-medium">Blood Group:</label>
          <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} className="w-full border rounded p-2">
            <option value="">Select</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-lg font-semibold mt-4">Emergency Contact</h3>
        </div>
        <div>
          <label className="block font-medium">Contact Name:</label>
          <input type="text" name="name" value={formData.emergencyContact.name} onChange={handleEmergencyContactChange} className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block font-medium">Contact Phone:</label>
          <input type="text" name="phone" value={formData.emergencyContact.phone} onChange={handleEmergencyContactChange} className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block font-medium">Relation:</label>
          <input type="text" name="relation" value={formData.emergencyContact.relation} onChange={handleEmergencyContactChange} className="w-full border rounded p-2" />
        </div>
        <div className="col-span-1 md:col-span-2">
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;