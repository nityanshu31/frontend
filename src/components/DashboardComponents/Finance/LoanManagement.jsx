import React, { useState } from "react";
import { 
  FaUsers, FaFileInvoiceDollar, FaBell, FaCheckCircle, 
  FaTimesCircle, FaChartPie 
} from "react-icons/fa";
import { MdOutlinePendingActions } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

const LoanManagement = () => {
  const [showReport, setShowReport] = useState(false);
  const [loanData] = useState([
    { id: 1, borrower: "John Doe", amount: "$10,000", date: "2024-01-15", status: "Approved" },
    { id: 2, borrower: "Jane Smith", amount: "$8,500", date: "2024-02-10", status: "Pending" },
    { id: 3, borrower: "Alice Johnson", amount: "$15,000", date: "2024-03-05", status: "Overdue" },
  ]);

  const [showLoansReport, setShowLoansReport] = useState(false);
  const [activeLoansData] = useState([
    { id: 1, borrower: "Emily Davis", amount: "$12,000", date: "2024-01-20", status: "Ongoing" },
    { id: 2, borrower: "Michael Brown", amount: "$9,000", date: "2024-02-15", status: "Ongoing" },
    { id: 3, borrower: "Sophia Wilson", amount: "$20,000", date: "2024-03-10", status: "Ongoing" },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="bg-white shadow-md p-4 flex justify-between items-center rounded-md">
        <h1 className="text-xl font-semibold">Loan Management Dashboard</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">Settings</button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        <Card title="Total Loans Issued" count={3} icon={<FaFileInvoiceDollar />} color="bg-blue-500" onClick={() => setShowReport(true)} />
        <Card title="Active Loans" count={3} icon={<RiMoneyDollarCircleFill />} color="bg-green-500" onClick={() => setShowLoansReport(true)} />
        <Card title="Pending Applications" count={3} icon={<MdOutlinePendingActions />} color="bg-yellow-500" onClick={() => setShowLoansReport(true)} />
        <Card title="Overdue Loans" count={3} icon={<FaTimesCircle />} color="bg-red-500" onClick={() => setShowLoansReport(true)} />
        <Card title="Total Interest Earned" count="$1.2M" icon={<FaChartPie />} color="bg-purple-500" onClick={() => setShowLoansReport(true)} />
        <Card title="Borrowers" count={3} icon={<FaUsers />} color="bg-indigo-500" onClick={() => setShowLoansReport(true)}/>
        <Card title="Loan Requests" count={8} icon={<FaBell />} color="bg-teal-500" onClick={() => setShowLoansReport(true)}/>
      </div>

      {showReport && <ReportPopup title="Total Loans Issued Report" data={loanData} onClose={() => setShowReport(false)} />}
      {showLoansReport && <ReportPopup title="Active Loans Report" data={activeLoansData} onClose={() => setShowLoansReport(false)} />}
    </div>
  );
};

const Card = ({ title, count, icon, color, onClick }) => {
  return (
    <div className={`${color} text-white p-4 rounded-md flex items-center justify-between shadow-lg cursor-pointer`} onClick={onClick}>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-2xl font-bold">{count}</p>
      </div>
      <div className="text-3xl">{icon}</div>
    </div>
  );
};

const ReportPopup = ({ title, data, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md shadow-lg w-2/3 max-h-[80vh] overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">ID</th>
              <th className="border border-gray-300 p-2">Borrower</th>
              <th className="border border-gray-300 p-2">Amount</th>
              <th className="border border-gray-300 p-2">Date Issued</th>
              <th className="border border-gray-300 p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((loan) => (
              <tr key={loan.id} className="text-center border border-gray-300">
                <td className="border border-gray-300 p-2">{loan.id}</td>
                <td className="border border-gray-300 p-2">{loan.borrower}</td>
                <td className="border border-gray-300 p-2">{loan.amount}</td>
                <td className="border border-gray-300 p-2">{loan.date}</td>
                <td className="border border-gray-300 p-2 text-green-600 font-semibold">{loan.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default LoanManagement;
