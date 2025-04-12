import React, { useState, useEffect } from 'react';

import data from './combinedData.json';

const App = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [timeFilter, setTimeFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [departmentFilter, setDepartmentFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    let result = data;

    if (timeFilter) {
      result = result.filter((item) => {
        const date = new Date(item.Date);
        return (
          date.toLocaleString('default', { month: 'long', year: 'numeric' }) ===
          timeFilter
        );
      });
    }

    if (categoryFilter !== 'All') {
      result = result.filter((item) => item.Category === categoryFilter);
    }

    if (departmentFilter !== 'All') {
      result = result.filter((item) => item.Department === departmentFilter);
    }

    if (searchQuery) {
      result = result.filter((item) =>
        item.Description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredData(result);
  }, [timeFilter, categoryFilter, departmentFilter, searchQuery]);

  const uniqueDepartments = [...new Set(data.map((item) => item.Department))];
  const uniqueMonths = [...new Set(
    data.map((item) => {
      const date = new Date(item.Date);
      return date.toLocaleString('default', { month: 'long', year: 'numeric' });
    })
  )];

  return (
    <div className="container">
      <div className="filters">
        <select onChange={(e) => setTimeFilter(e.target.value)} value={timeFilter}>
          <option value="">Filter by Time</option>
          {uniqueMonths.map((month, index) => (
            <option key={index}>{month}</option>
          ))}
        </select>

        <select onChange={(e) => setCategoryFilter(e.target.value)} value={categoryFilter}>
          <option>All</option>
          <option>Revenue</option>
          <option>Expense</option>
          <option>Mixed</option>
        </select>

        <select onChange={(e) => setDepartmentFilter(e.target.value)} value={departmentFilter}>
          <option>All</option>
          {uniqueDepartments.map((dep, index) => (
            <option key={index}>{dep}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search Description..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Department</th>
            <th>Amount</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, i) => (
            <tr key={i}>
              <td>{item.Date}</td>
              <td>{item.Category}</td>
              <td>{item.Department}</td>
              <td>{item.Amount}</td>
              <td>{item.Description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;