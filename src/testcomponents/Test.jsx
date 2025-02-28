import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Test = () => {
  // Sample data for performance and sales charts
  const performanceData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Delivery Time (hrs)",
        data: [12, 14, 10, 11, 9, 12],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        label: "Cost per Delivery ($)",
        data: [50, 55, 52, 54, 50, 56],
        fill: false,
        borderColor: "rgb(255, 99, 132)",
        tension: 0.1,
      },
    ],
  };

  const salesData = {
    labels: ["Product 1", "Product 2", "Product 3", "Product 4", "Product 5"],
    datasets: [
      {
        label: "Sales Volume",
        data: [300, 500, 200, 400, 600],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
      },
    ],
  };

  // Sample state data
  const [orders, setOrders] = useState([
    { id: 1, customerName: "John Doe", status: "Pending", deliveryAddress: "123 Main St" },
    { id: 2, customerName: "Jane Smith", status: "Shipped", deliveryAddress: "456 Oak St" },
    { id: 3, customerName: "Alice Johnson", status: "Delivered", deliveryAddress: "789 Pine St" },
  ]);

  const [vendors, setVendors] = useState([
    { id: 1, name: "Vendor A", rating: 4.5 },
    { id: 2, name: "Vendor B", rating: 3.8 },
    { id: 3, name: "Vendor C", rating: 4.2 },
  ]);

  const [returns, setReturns] = useState([
    { id: 1, orderId: 1, reason: "Damaged", status: "Processed" },
    { id: 2, orderId: 2, reason: "Wrong Item", status: "Pending" },
  ]);

  const [costs, setCosts] = useState([
    { category: "Shipping", amount: 500 },
    { category: "Warehousing", amount: 300 },
    { category: "Handling", amount: 150 },
  ]);

  return (
    <div className="App p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Retail Logistics Dashboard</h1>

      {/* Shipping & Delivery Status */}
      <div className="p-6 bg-white rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">Shipping & Delivery Status</h2>
        <table className="min-w-full table-auto mb-4">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Order ID</th>
              <th className="px-4 py-2 text-left">Customer Name</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Delivery Address</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="px-4 py-2">{order.id}</td>
                <td className="px-4 py-2">{order.customerName}</td>
                <td className="px-4 py-2">{order.status}</td>
                <td className="px-4 py-2">{order.deliveryAddress}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Logistics Performance Analytics */}
      <div className="p-6 bg-white rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">Logistics Performance Analytics</h2>
        <Line data={performanceData} options={{ responsive: true, plugins: { title: { display: true, text: "Performance Overview" } } }} />
      </div>

      {/* Vendor/Partner Management */}
      <div className="p-6 bg-white rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">Vendor/Partner Management</h2>
        <table className="min-w-full table-auto mb-4">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Vendor Name</th>
              <th className="px-4 py-2 text-left">Rating</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((vendor) => (
              <tr key={vendor.id} className="border-b">
                <td className="px-4 py-2">{vendor.name}</td>
                <td className="px-4 py-2">{vendor.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Returns Management */}
      <div className="p-6 bg-white rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">Returns Management</h2>
        <table className="min-w-full table-auto mb-4">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Return ID</th>
              <th className="px-4 py-2 text-left">Order ID</th>
              <th className="px-4 py-2 text-left">Reason</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {returns.map((returnItem) => (
              <tr key={returnItem.id} className="border-b">
                <td className="px-4 py-2">{returnItem.id}</td>
                <td className="px-4 py-2">{returnItem.orderId}</td>
                <td className="px-4 py-2">{returnItem.reason}</td>
                <td className="px-4 py-2">{returnItem.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Sales Analytics */}
      <div className="p-6 bg-white rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">Sales Analytics</h2>
        <Line data={salesData} options={{ responsive: true, plugins: { title: { display: true, text: "Sales Volume Overview" } } }} />
      </div>

      {/* Alerts & Notifications */}
      <div className="p-6 bg-white rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">Alerts & Notifications</h2>
        <p>Configure alerts for stock levels, delivery delays, etc.</p>
      </div>

      {/* Cost & Budget Management */}
      <div className="p-6 bg-white rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">Cost & Budget Management</h2>
        <table className="min-w-full table-auto mb-4">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-left">Amount ($)</th>
            </tr>
          </thead>
          <tbody>
            {costs.map((cost) => (
              <tr key={cost.category} className="border-b">
                <td className="px-4 py-2">{cost.category}</td>
                <td className="px-4 py-2">{cost.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Test;