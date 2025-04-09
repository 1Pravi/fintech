import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend, PieChart, Pie, Cell
} from "recharts";
import '../styles/r.css';

const inflowIcon = <span className="text-green-500 font-bold">T</span>;
const outflowIcon = <span className="text-red-500 font-bold">U</span>;
const balanceIcon = <span className="text-green-700 font-bold">S</span>;

const lineData = [
  { name: 'Jan 1', value: 25000 },
  { name: 'Feb-1', value: 31000 },
  { name: 'Mar', value: 47000 },
  { name: 'Enh 1', value: 50000 },
  { name: 'Apr*', value: 60000 },
  { name: 'Apr 1', value: 58000 },
  { name: 'Apr 6', value: 65000 },
];

const barData = [
  { name: 'Jan', inflow: 60000, outflow: 30000 },
  { name: 'Feb', inflow: 55000, outflow: 28000 },
  { name: 'Mar', inflow: 65000, outflow: 35000 },
  { name: 'Apr', inflow: 40000, outflow: 25000 },
];

const pieData = [
  { name: "Cheque", value: 47 },
  { name: "NEFT", value: 24 },
  { name: "UPI", value: 21 },
];

const COLORS = ["#4c83ff", "#ff7f50", "#00c49f"];

const transactionData1 = [
  ["Client payment received", "Credit", "105,732.70", "105,573.43", "State Bank of Daths"],
  ["Payment for raw materials", "Debit", "7,461.28", "108,118.99", "Axis Bank"],
  ["Utility bill", "Cheque", "11,799.44", "104,505.38", "Cheque"],
  ["Salary payment", "Debit", "14,555.10", "105,369.77", "ABC Bank"],
  ["Interest received", "UPI", "7,483.10", "105,215.10", "Axis Bank Justredis"],
];

const transactionData2 = [
  ["Client payment received", "Credit", "105,134.27", "105,275.40", "State Bank", "Global Machinery"],
  ["Payment for raw materials", "Debit", "109,111.98", "104,709.44", "Axis Bank", "ABC Steels"],
];

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-6">

      {/* Metric Summary Table */}
      <div className="bg-white p-4 rounded-2xl shadow-md overflow-x-auto">
        <h3 className="text-lg font-semibold mb-4">Metrics Summary</h3>
        <table className="w-full text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Metric</th>
              <th className="p-3 text-left">Value</th>
              <th className="p-3 text-left">Icon</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-3">Total Inflow</td>
              <td className="p-3 text-green-600">₹265,423</td>
              <td className="p-3">{inflowIcon}</td>
            </tr>
            <tr className="border-b">
              <td className="p-3">Total Outflow</td>
              <td className="p-3 text-red-600">₹191,375</td>
              <td className="p-3">{outflowIcon}</td>
            </tr>
            <tr className="border-b">
              <td className="p-3">Net Cash Flow</td>
              <td className="p-3 text-blue-600">₹74,048</td>
              <td className="p-3">{inflowIcon}</td>
            </tr>
            <tr>
              <td className="p-3">Current Balance</td>
              <td className="p-3 text-purple-600">₹55,879</td>
              <td className="p-3">{balanceIcon}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-2xl shadow-md">
          <h3 className="font-semibold mb-4">Cash Balance Over Time</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#4c83ff" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow-md">
          <h3 className="font-semibold mb-4">Inflow vs. Outflow</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="inflow" fill="#00c49f" />
              <Bar dataKey="outflow" fill="#ff7f50" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Transactions Table 1 */}
      <div className="bg-white p-4 rounded-2xl shadow-md overflow-x-auto">
        <h3 className="text-lg font-semibold mb-4">Transactions</h3>
        <table className="w-full text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Description</th>
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 text-left">Balance</th>
              <th className="p-3 text-left">Bank</th>
            </tr>
          </thead>
          <tbody>
            {transactionData1.map((row, i) => (
              <tr key={i} className="border-b">
                {row.map((cell, j) => (
                  <td key={j} className="p-3">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Transaction Mode Pie Chart */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-2xl shadow-md">
          <h3 className="font-semibold mb-4">Transaction Mode</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Transactions Table 2 */}
      <div className="bg-white p-4 rounded-2xl shadow-md overflow-x-auto">
        <h3 className="text-lg font-semibold mb-4">Detailed Transactions</h3>
        <table className="w-full text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Description</th>
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 text-left">Balance</th>
              <th className="p-3 text-left">Bank</th>
              <th className="p-3 text-left">Transaction Mode</th>
            </tr>
          </thead>
          <tbody>
            {transactionData2.map((row, i) => (
              <tr key={i} className="border-b">
                {row.map((cell, j) => (
                  <td key={j} className="p-3">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
