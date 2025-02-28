import React, { useState, useEffect } from "react";
import { PlusCircle, Users, Building2, Trash2 } from "lucide-react";
import axios from "axios"; // Import axios

const API_BASE_URL = "http://localhost:5000"; // Adjust based on your backend

const RoomandGuest = () => {
  const [rooms, setRooms] = useState([]);
  const [guests, setGuests] = useState([]);
  const [guestName, setGuestName] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [emergencies, setEmergencies] = useState([]);
  const [emergencyData, setEmergencyData] = useState({
    total: 0,
    critical: 0,
    high: 0,
    medium: 0,
    low: 0,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch rooms, guests, and emergencies from backend
  useEffect(() => {
    fetchRooms();
    fetchGuests();
    fetchEmergencies();
  }, []);

  const fetchRooms = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/rooms`);
      const data = await response.json();
      setRooms(data);
      if (data.length > 0) setSelectedRoom(data[0]._id);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  const fetchGuests = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/guests`);
      const data = await response.json();
      setGuests(data);
    } catch (error) {
      console.error("Error fetching guests:", error);
    }
  };

  const fetchEmergencies = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/emergency`);
      const emergenciesList = response.data;
  
      // Filter for emergencies with emergencyType 'ShelterNeeded'
      const shelterNeededEmergencies = emergenciesList.filter((e) => e.emergencyType === "ShelterNeeded");
  
      const stats = {
        total: shelterNeededEmergencies.length,
        critical: shelterNeededEmergencies.filter((e) => e.urgency === "Critical").length,
        high: shelterNeededEmergencies.filter((e) => e.urgency === "High").length,
        medium: shelterNeededEmergencies.filter((e) => e.urgency === "Medium").length,
        low: shelterNeededEmergencies.filter((e) => e.urgency === "Low").length,
      };
  
      setEmergencyData(stats);
      setEmergencies(shelterNeededEmergencies);
    } catch (err) {
      setError("Failed to fetch emergency data.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  
  
  

  const addRoom = async () => {
    const roomName = prompt("Enter the room name:");
    if (!roomName) return;

    const capacity = parseInt(prompt("Enter total capacity for the new room:"), 10);
    if (isNaN(capacity) || capacity <= 0) {
      alert("Invalid capacity. Please enter a valid number.");
      return;
    }

    const location = prompt("Enter room location:");
    if (!location) return;

    const newRoom = { name: roomName, location, capacity, occupied: 0, status: "operational" };

    try {
      const response = await fetch(`${API_BASE_URL}/rooms`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newRoom),
      });

      if (response.ok) {
        fetchRooms();
      } else {
        console.error("Failed to add room");
      }
    } catch (error) {
      console.error("Error adding room:", error);
    }
  };

  const addGuest = async () => {
    if (!guestName || !selectedRoom) {
      alert("Please enter guest name and select a room.");
      return;
    }

    const newGuest = {
      name: guestName.trim(),
      roomId: selectedRoom,
      status: "Checked-in",
      timeStamp: new Date().toISOString(),
    };

    try {
      const response = await fetch(`${API_BASE_URL}/guests`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newGuest),
      });

      if (response.ok) {
        fetchGuests();
        setGuestName("");
        fetchRooms(); 
      } else {
        console.error("Failed to add guest");
      }
    } catch (error) {
      console.error("Error adding guest:", error);
    }
  };

  const removeGuest = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/guests/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        fetchGuests();
        fetchRooms(); 
      } else {
        console.error("Failed to remove guest");
      }
    } catch (error) {
      console.error("Error removing guest:", error);
    }
  };

  const removeRoom = async (id) => {
    const room = rooms.find((r) => r._id === id);
    if (room && room.occupied > 0) {
      alert("Cannot remove room with active guests!");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/rooms/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        fetchRooms();
      } else {
        console.error("Failed to remove room");
      }
    } catch (error) {
      console.error("Error removing room:", error);
    }
  };

  const totalCapacity = rooms.reduce((acc, room) => acc + room.capacity, 0);
  const totalOccupied = rooms.reduce((acc, room) => acc + room.occupied, 0);
  const occupancyRate = totalCapacity > 0 ? ((totalOccupied / totalCapacity) * 100).toFixed(1) : 0;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Emergency Relief Room Management</h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-6 bg-white shadow-lg rounded-xl border-l-4 border-blue-500">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500 mb-1">Total Rooms</p>
              <p className="text-2xl font-bold">{rooms.length}</p>
            </div>
            <Building2 className="h-8 w-8 text-blue-500" />
          </div>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-xl border-l-4 border-green-500">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500 mb-1">Occupancy</p>
              <p className="text-2xl font-bold">
                {totalOccupied}/{totalCapacity} ({occupancyRate}%)
              </p>
            </div>
            <Users className="h-8 w-8 text-green-500" />
          </div>
        </div>
      </div>

      {/* Emergency Stats Section */}
      <div>
  {emergencies.length > 0 ? (
    emergencies.map((emergency) => (
      <div key={emergency._id} className="bg-white p-6 mb-6 border border-gray-300 rounded-lg relative">
        <h3 className="text-2xl font-semibold mb-4">Emergency Details</h3>
        <p><strong>Full Name:</strong> {emergency.fullName}</p>
        <p><strong>Contact Number:</strong> {emergency.contact}</p>
        <p><strong>Email:</strong> {emergency.email}</p>
        <p><strong>Address:</strong> {emergency.address}</p>
        <p><strong>Location:</strong> {emergency.location}</p>
        <p><strong>Description:</strong> {emergency.description}</p>
        <p><strong>Urgency:</strong> {emergency.urgency}</p>
        
        {/* Step indicators */}
        <div className="flex gap-4">
  <button
    onClick={(e) => e.target.classList.toggle('bg-green-500')}
    className="px-4 py-2 rounded-lg bg-gray-300 text-white"
  >
    Room Assigned
  </button>

  <button
    onClick={(e) => e.target.classList.toggle('bg-green-500')}
    className="px-4 py-2 rounded-lg bg-gray-300 text-white"
  >
    Checked In
  </button>

  <button
    onClick={(e) => e.target.classList.toggle('bg-red-500')}
    className="px-4 py-2 rounded-lg bg-gray-300 text-white"
  >
    Checkout
  </button>
</div>



        {/* Assign actions based on status */}
        <div className="absolute top-4 right-4">
          {emergency.status === 'Checked Out' ? (
            <p className="text-gray-500">User Checked Out</p>
          ) : null}
        </div>
      </div>
    ))
  ) : (
    <p>No emergencies found.</p>
  )}
</div>





      {/* Room Management */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Relief Rooms</h2>
          <button onClick={addRoom} className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <PlusCircle className="h-5 w-5" />
            Add Room
          </button>
        </div>

        {rooms.map((room) => (
          <div key={room._id} className="p-4 bg-white shadow-md rounded-lg mb-4 flex justify-between">
            <div>
              <h3 className="font-semibold text-lg">{room.name}</h3>
              <p className="text-gray-600">{room.location}</p>
            </div>
            <button onClick={() => removeRoom(room._id)} className="text-red-500">
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>

      {/* Guest Management */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Guest Management</h2>
        <input
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
          placeholder="Guest Name"
          className="border p-2 rounded-lg mr-2"
        />
        <select value={selectedRoom} onChange={(e) => setSelectedRoom(e.target.value)} className="border p-2 rounded-lg mr-2">
          {rooms.map((room) => (
            <option key={room._id} value={room._id}>{room.name}</option>
          ))}
        </select>
        <button onClick={addGuest} className="bg-green-600 text-white px-4 py-2 rounded-lg">Add Guest</button>
      </div>

      {/* Guest List Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
        <h2 className="text-xl font-semibold mb-4">Guest List</h2>

        {guests.length === 0 ? (
          <p className="text-gray-500">No guests have checked in yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3 text-left">Name</th>
                  <th className="border p-3 text-left">Room</th>
                  <th className="border p-3 text-left">Status</th>
                  <th className="border p-3 text-left">Check-in Time</th>
                  <th className="border p-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {guests.map((guest) => {
                  const room = rooms.find((r) => r._id === guest.roomId); // Get room name
                  return (
                    <tr key={guest._id} className="border">
                      <td className="border p-3">{guest.name}</td>
                      <td className="border p-3">{room ? room.name : "Unknown Room"}</td>
                      <td className="border p-3">{guest.status}</td>
                      <td className="border p-3">{new Date(guest.timeStamp).toLocaleString()}</td>
                      <td className="border p-3 text-center">
                        <button onClick={() => removeGuest(guest._id)} className="text-red-500 hover:text-red-700">
                          <Trash2 className="h-5 w-5 inline" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomandGuest;
