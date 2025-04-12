import React, { useState } from 'react';
import {
  LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import '../styles/DeliveryPerformance.css';

const sampleData = [
  { name: 'Jan', revenue: 100000, expense: 75000, profit: 25000, cashFlow: 30000 },
  { name: 'Feb', revenue: 120000, expense: 80000, profit: 40000, cashFlow: 35000 },
  { name: 'Mar', revenue: 130000, expense: 90000, profit: 40000, cashFlow: 37000 },
  { name: 'Apr', revenue: 110000, expense: 85000, profit: 25000, cashFlow: 28000 },
  { name: 'May', revenue: 140000, expense: 95000, profit: 45000, cashFlow: 41000 },
  { name: 'Jun', revenue: 150000, expense: 100000, profit: 50000, cashFlow: 46000 },
  { name: 'Jul', revenue: 160000, expense: 105000, profit: 55000, cashFlow: 49000 },
  { name: 'Aug', revenue: 155000, expense: 100000, profit: 55000, cashFlow: 50000 },
  { name: 'Sep', revenue: 170000, expense: 110000, profit: 60000, cashFlow: 53000 },
  { name: 'Oct', revenue: 175000, expense: 115000, profit: 60000, cashFlow: 52000 },
  { name: 'Nov', revenue: 180000, expense: 120000, profit: 60000, cashFlow: 55000 },
  { name: 'Dec', revenue: 190000, expense: 130000, profit: 60000, cashFlow: 58000 },
];

const FinancialForecast = () => {
  const [timeframe, setTimeframe] = useState('Quarter');

  const handleDownload = () => {
    // Placeholder for download logic (CSV/PDF export etc.)
    alert("Download functionality will be implemented soon.");
  };

  return (
    <div className="container">
      <main className="main">
        <div className="header">
          <div>
            <h1>Financial Forecast</h1>
            <p>A forecast of the company’s financial performance.</p>
          </div>
          <div className="controls">
            <select>
              <option>Scenarios</option>
            </select>
            <div className="timeframe-buttons">
              {['Month', 'Quarter', 'Year'].map((t) => (
                <button
                  key={t}
                  className={timeframe === t ? 'active' : ''}
                  onClick={() => setTimeframe(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="summary">
          <div>
            <h2>Expected Revenue</h2>
            <p className="amount">$1,200,000</p>
          </div>
          <div>
            <h2>Projected Expenses</h2>
            <p className="amount">$900,000</p>
          </div>
          <div>
            <h2>Net Profit</h2>
            <p className="amount">$300,000</p>
          </div>
        </div>

        <div className="charts">
  <div className="chart-box">
    <h3>Revenue Forecast</h3>
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={sampleData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="revenue" stroke="#4F46E5" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  </div>

  <div className="chart-box">
    <h3>Expense Forecast</h3>
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={sampleData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="expense" fill="#F97316" />
      </BarChart>
    </ResponsiveContainer>
  </div>

  <div className="chart-box">
    <h3>Cash Flow Projection</h3>
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={sampleData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="cashFlow" stroke="#10B981" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  </div>

  <div className="chart-box">
    <h3>Profit & Loss Forecast</h3>
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={sampleData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="profit" fill="#EC4899" />
      </BarChart>
    </ResponsiveContainer>
  </div>
</div>


        <div className="download-section">
          <button className="download-btn" onClick={handleDownload}>Download</button>
        </div>
      </main>
    </div>
  );
};

export default FinancialForecast;

