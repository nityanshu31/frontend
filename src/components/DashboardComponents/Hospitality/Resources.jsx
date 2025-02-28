import React, { useState, useEffect } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const Resources = () => {
  const [filter, setFilter] = useState("All");
  const [resources, setResources] = useState([]);
  const [newResource, setNewResource] = useState({ name: "", category: "Essentials", stock: "", threshold: "" });
  const [allocation, setAllocation] = useState({ resourceId: "", user: "" });

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      const response = await axios.get("http://localhost:5000/resources");
      setResources(response.data);
    } catch (error) {
      console.error("Error fetching resources:", error);
    }
  };

  const getStockStatus = (stock, threshold) => {
    if (stock <= threshold * 0.5) return "bg-red-100 text-red-800";
    if (stock <= threshold) return "bg-yellow-100 text-yellow-800";
    return "bg-green-100 text-green-800";
  };

  const addResource = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/resources", newResource);
      fetchResources();
      setNewResource({ name: "", category: "Essentials", stock: "", threshold: "" });
    } catch (error) {
      console.error("Error adding resource:", error);
    }
  };

  const allocateResource = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/resources/${allocation.resourceId}/allocate`, { allocatedTo: allocation.user });
      fetchResources();
      setAllocation({ resourceId: "", user: "" });
    } catch (error) {
      console.error("Error allocating resource:", error);
    }
  };

  const filteredResources = filter === "All" ? resources : resources.filter(r => r.category === filter);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Resource Allocation Dashboard</h1>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <form onSubmit={addResource} className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold mb-2">Add New Resource</h2>
            <input className="w-full p-2 border mb-2" placeholder="Resource Name" value={newResource.name} onChange={(e) => setNewResource({ ...newResource, name: e.target.value })} required />
            <select className="w-full p-2 border mb-2" value={newResource.category} onChange={(e) => setNewResource({ ...newResource, category: e.target.value })}>
              <option>Essentials</option><option>Healthcare</option><option>Shelter</option>
            </select>
            <input className="w-full p-2 border mb-2" type="number" placeholder="Stock" value={newResource.stock} onChange={(e) => setNewResource({ ...newResource, stock: e.target.value })} required />
            <input className="w-full p-2 border mb-2" type="number" placeholder="Threshold" value={newResource.threshold} onChange={(e) => setNewResource({ ...newResource, threshold: e.target.value })} required />
            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Add Resource</button>
          </form>
          
          <form onSubmit={allocateResource} className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold mb-2">Allocate Resource</h2>
            <select className="w-full p-2 border mb-2" value={allocation.resourceId} onChange={(e) => setAllocation({ ...allocation, resourceId: e.target.value })} required>
              <option value="">Select Resource</option>
              {resources.map(r => <option key={r._id} value={r._id}>{r.name}</option>)}
            </select>
            <input className="w-full p-2 border mb-2" placeholder="Allocate to (User)" value={allocation.user} onChange={(e) => setAllocation({ ...allocation, user: e.target.value })} required />
            <button type="submit" className="w-full bg-green-600 text-white p-2 rounded">Allocate</button>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200 flex justify-between">
            <h2 className="text-xl font-bold text-gray-900">Resource Overview</h2>
            <select value={filter} onChange={(e) => setFilter(e.target.value)} className="p-2 border rounded">
              <option value="All">All Categories</option><option value="Essentials">Essentials</option><option value="Healthcare">Healthcare</option><option value="Shelter">Shelter</option>
            </select>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead><tr className="bg-gray-50 border-b"><th className="p-3">ID</th><th className="p-3">Resource</th><th className="p-3">Category</th><th className="p-3">Stock</th><th className="p-3">Allocated To</th><th className="p-3">Status</th></tr></thead>
              <tbody>
                {filteredResources.map(res => (
                  <tr key={res._id} className="border-b">
                    <td className="p-3">{res._id}</td>
                    <td className="p-3">{res.name}</td>
                    <td className="p-3">{res.category}</td>
                    <td className="p-3">{res.stock}</td>
                    <td className="p-3">{res.allocatedTo || "Unallocated"}</td>
                    <td className={`p-3 ${getStockStatus(res.stock, res.threshold)}`}>{res.stock <= res.threshold * 0.5 ? 'Critical' : res.stock <= res.threshold ? 'Low' : 'Good'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
