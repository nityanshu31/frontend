import React, { useState, useEffect } from 'react';

const TransactionMonitor = () => {
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Fetch transaction data (replace with actual API call)
    setTransactions([
      { id: 1, date: '2025-02-20', amount: 100, sender: 'John', receiver: 'Charity', status: 'Completed' },
      { id: 2, date: '2025-02-19', amount: 50, sender: 'Alice', receiver: 'School', status: 'Pending' },
      { id: 3, date: '2025-02-18', amount: 200, sender: 'Bob', receiver: 'Hospital', status: 'Completed' },
      // More transactions...
    ]);
  }, []);

  const filteredTransactions = transactions.filter(transaction => filter === 'all' || transaction.status === filter);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Transaction Monitor</h2>

      {/* Filter Options */}
      <div className="mb-4">
        <select onChange={(e) => setFilter(e.target.value)} className="p-2 border border-gray-300 rounded-md">
          <option value="all">All</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>
      </div>

      {/* Transaction Table */}
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-left">Transaction ID</th>
            <th className="p-2 text-left">Date</th>
            <th className="p-2 text-left">Amount</th>
            <th className="p-2 text-left">Sender</th>
            <th className="p-2 text-left">Receiver</th>
            <th className="p-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map(transaction => (
            <tr key={transaction.id} className="border-t">
              <td className="p-2">{transaction.id}</td>
              <td className="p-2">{transaction.date}</td>
              <td className="p-2">${transaction.amount}</td>
              <td className="p-2">{transaction.sender}</td>
              <td className="p-2">{transaction.receiver}</td>
              <td className="p-2">
                <span className={`p-1 rounded-full ${transaction.status === 'Completed' ? 'bg-green-500' : 'bg-yellow-500'} text-white`}>
                  {transaction.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const DonationFundDashboard = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    // Fetch donation data (replace with actual API call)
    setDonations([
      { donor: 'John Doe', amount: 200, date: '2025-02-20' },
      { donor: 'Jane Smith', amount: 150, date: '2025-02-19' },
      { donor: 'David Lee', amount: 300, date: '2025-02-18' },
      // More donations...
    ]);
  }, []);

  const totalDonations = donations.reduce((acc, donation) => acc + donation.amount, 0);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Donation Fund Dashboard</h2>

      {/* Donation Stats */}
      <div className="mb-6 flex justify-between items-center">
        <div className="text-lg font-medium">
          Total Donations: <span className="text-green-500">${totalDonations}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-green-500 h-2 rounded-full" style={{ width: `${(totalDonations / 1000) * 100}%` }}></div>
        </div>
      </div>

      {/* Recent Donations */}
      <h3 className="text-xl font-semibold mb-4">Recent Donations</h3>
      <ul className="space-y-4">
        {donations.map((donation, index) => (
          <li key={index} className="p-4 border rounded-md bg-gray-50">
            <div className="flex justify-between">
              <span className="font-semibold">{donation.donor}</span>
              <span className="text-green-500">${donation.amount}</span>
            </div>
            <span className="text-gray-500">{donation.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const DonationFund = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Emergency Fund Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <TransactionMonitor />
        <DonationFundDashboard />
      </div>
    </div>
  );
};

export default DonationFund;
