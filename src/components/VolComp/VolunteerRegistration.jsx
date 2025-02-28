import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VolunteerRegistration() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("");
  const [govtIdType, setGovtIdType] = useState("");
  const [govtIdFile, setGovtIdFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const roles = [
    "Disaster Relief",
    "Medical Assistance",
    "Food Distribution",
    "Shelter Management",
    "Education & Awareness",
    "Logistics & Transport",
  ];

  const govtIdTypes = ["Aadhaar", "PAN Card", "Passport", "Voter ID", "Driving License"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e) => {
    setGovtIdFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !selectedRole || !govtIdType || !govtIdFile) {
      alert("Please fill all fields, select a role, and upload a valid Government ID!");
      return;
    }
    alert("Volunteer Registration Successful!");
    navigate("/volunteer-home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-300 to-orange-100 p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Register as Volunteer</h2>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400"
              placeholder="Enter your name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400"
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Phone Number</label>
            <input
              type="text"
              name="phone"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400"
              placeholder="Enter your phone number"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Select Role</label>
            <select
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              required
            >
              <option value="">Choose a role</option>
              {roles.map((role, index) => (
                <option key={index} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Government ID Type</label>
            <select
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400"
              value={govtIdType}
              onChange={(e) => setGovtIdType(e.target.value)}
              required
            >
              <option value="">Select ID Type</option>
              {govtIdTypes.map((id, index) => (
                <option key={index} value={id}>
                  {id}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Upload Government ID</label>
            <input
              type="file"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400"
              onChange={handleFileUpload}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-all"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
