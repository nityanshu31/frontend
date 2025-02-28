import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const InventoryManagement = () => {
  const [inventory, setInventory] = useState([
    { name: "Total Stock", value: 1200, color: "#10B981" },
    { name: "Low Stock", value: 150, color: "#F59E0B" },
    { name: "Out of Stock", value: 50, color: "#EF4444" },
    { name: "Recently Added", value: 200, color: "#3B82F6" },
  ]);

  const [newStock, setNewStock] = useState({ name: "", quantity: 0, color: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle adding a new stock item
  const handleAddStock = () => {
    if (newStock.name && newStock.quantity > 0 && newStock.color) {
      setInventory([...inventory, newStock]);
      setNewStock({ name: "", quantity: 0, color: "" });
      setIsModalOpen(false);
    }
  };


  const salesPipelineData = [
    { name: "Project A", value: 50 },
    { name: "Project B", value: 80 },
    { name: "Project C", value: 70 },
    { name: "Project D", value: 100 },
  ];
  
  // Handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-3 gap-6">
        {/* Custom Cards for Inventory and Stock Management */}
        <Card title="Total Stock" value="1200 Items" growth="5%" icon="📦" />
        <Card title="Low Stock Alert" value="150 Items" growth="20%" icon="⚠" />
        <Card title="Out of Stock Items" value="50 Items" growth="10%" icon="🚫" />
      </div>

      <div className="grid grid-cols-2 gap-6 mt-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Stock Breakdown</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={inventory} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#8884d8" label>
                {inventory.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <ul>
            {inventory.map((item, index) => (
              <li key={index} className="text-lg" style={{ color: item.color }}>
                {item.name}: {item.value} items
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Sales Pipeline</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={salesPipelineData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#2563EB" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Inventory Overview</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={inventory} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#10B981" label>
                {inventory.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <ul>
            {inventory.map((item, index) => (
              <li key={index} className="text-lg" style={{ color: item.color }}>
                {item.name}: {item.value} items
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Manage Stock
        </button>
      </div>

      {/* Modal for Adding New Stock */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow w-1/3">
            <h2 className="text-xl font-bold mb-4">Add New Stock Item</h2>
            <div className="mb-4">
              <label className="block text-sm font-semibold">Stock Name</label>
              <input
                type="text"
                value={newStock.name}
                onChange={(e) => setNewStock({ ...newStock, name: e.target.value })}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold">Quantity</label>
              <input
                type="number"
                value={newStock.quantity}
                onChange={(e) => setNewStock({ ...newStock, quantity: +e.target.value })}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold">Stock Color</label>
              <input
                type="color"
                value={newStock.color}
                onChange={(e) => setNewStock({ ...newStock, color: e.target.value })}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleAddStock}
                className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
              >
                Add Stock
              </button>
              <button
                onClick={handleCloseModal}
                className="px-6 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Card = ({ title, value, growth, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow flex items-center justify-between">
    <div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-green-600">⬆ {growth}</p>
    </div>
    <span className="text-4xl">{icon}</span>
  </div>
);

export default InventoryManagement;