import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { FaUserPlus, FaTrashAlt, FaTasks, FaUsers, FaCalendarAlt, FaChartBar } from "react-icons/fa";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import the calendar's default styles

const StaffandWorkforce = () => {
  const [staff, setStaff] = useState([
    { id: 1, name: "John Doe", role: "Manager", status: "Active", shift: "Morning", area: "Reception" },
    { id: 2, name: "Alice Brown", role: "Chef", status: "On Leave", shift: "Evening", area: "Kitchen" },
    { id: 3, name: "David White", role: "Waiter", status: "Active", shift: "Night", area: "Dining" },
  ]);

  const [newStaff, setNewStaff] = useState({ name: "", role: "", status: "Active", shift: "Morning", area: "" });
  const [tasks, setTasks] = useState([]);
  const [taskDate, setTaskDate] = useState(new Date());
  const [taskDetail, setTaskDetail] = useState("");

  const addStaff = () => {
    setStaff([...staff, { id: staff.length + 1, ...newStaff }]);
    setNewStaff({ name: "", role: "", status: "Active", shift: "Morning", area: "" });
  };

  const removeStaff = (id) => {
    setStaff(staff.filter(member => member.id !== id));
  };

  const addTask = () => {
    if (!taskDetail) {
      alert("Please fill in all fields");
      return;
    }
    setTasks([...tasks, { day: taskDate, value: 1, detail: taskDetail }]);
    setTaskDetail("");
  };

  // Monthly Overview Data
  const monthData = Array(30).fill(null).map((_, idx) => ({
    date: `2025-02-${idx + 1}`,
    tasksAssigned: Math.floor(Math.random() * 5),
  }));

  // Employee Performance Data
  const performanceData = staff.map(member => ({
    name: member.name,
    tasksCompleted: Math.floor(Math.random() * 10),
  }));

  // Attendance Data
  const attendanceData = staff.map(member => ({
    name: member.name,
    status: Math.random() > 0.5 ? "Present" : "Absent",
  }));

  const COLORS = ["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"];

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col items-center">
      <h2 className="text-3xl font-semibold text-gray-700 mb-6">Hospitality Staff Management</h2>

      <div className="flex space-x-4 mb-8">
        <input
          type="text"
          placeholder="Name"
          value={newStaff.name}
          onChange={(e) => setNewStaff({ ...newStaff, name: e.target.value })}
          className="px-4 py-2 border border-gray-300 rounded-lg w-72"
        />
        <input
          type="text"
          placeholder="Role"
          value={newStaff.role}
          onChange={(e) => setNewStaff({ ...newStaff, role: e.target.value })}
          className="px-4 py-2 border border-gray-300 rounded-lg w-72"
        />
        <input
          type="text"
          placeholder="Area"
          value={newStaff.area}
          onChange={(e) => setNewStaff({ ...newStaff, area: e.target.value })}
          className="px-4 py-2 border border-gray-300 rounded-lg w-72"
        />
        <button
          onClick={addStaff}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          <FaUserPlus className="inline mr-2" /> Add Staff
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {/* Staff Overview */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Staff Overview</h3>
          {staff.map((member) => (
            <p key={member.id} className="flex justify-between items-center mb-2 text-gray-600">
              <span>
                <strong>{member.name}</strong> - {member.role} ({member.status})
              </span>
              <button
                onClick={() => removeStaff(member.id)}
                className="text-red-500 hover:text-red-600"
              >
                <FaTrashAlt />
              </button>
            </p>
          ))}
        </div>

        {/* Monthly Overview */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Monthly Overview</h3>
          <Calendar
            value={taskDate}
            onChange={setTaskDate}
            className="rounded-lg border border-gray-300 shadow-md"
          />
        </div>

        {/* Task Overview */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Task Overview</h3>
          {tasks.map((task, index) => (
            <p key={index} className="mb-2 text-gray-600">
              <strong>{task.day.toDateString()}</strong> - {task.detail}
            </p>
          ))}
        </div>

        {/* Employee Performance */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Employee Performance</h3>
          <div className="h-60">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="tasksCompleted" fill={COLORS[3]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Shift Overview */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Shift Overview</h3>
          <div className="h-60">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={staff.reduce((acc, member) => {
                  let existing = acc.find(item => item.id === member.shift);
                  if (existing) existing.value++;
                  else acc.push({ id: member.shift, label: member.shift, value: 1 });
                  return acc;
                }, [])}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="label" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill={COLORS[1]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Attendance Overview */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Staff Attendance</h3>
          {attendanceData.map((member) => (
            <p key={member.name} className="text-gray-600">
              <strong>{member.name}</strong> - {member.status}
            </p>
          ))}
        </div>

        

       
      </div>
    </div>
  );
};

export default StaffandWorkforce;
