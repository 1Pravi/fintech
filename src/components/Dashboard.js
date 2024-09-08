import React, { useState, useEffect } from 'react';
import api from '../services/api';
import '../styles/Dashboard.css';

function Dashboard() {
  const [drugData, setDrugData] = useState([]);

  useEffect(() => {
    api.getDrugs().then((response) => setDrugData(response.data));
  }, []);

  return (

    <div>
      <h1>Drug Inventory Inventory levels</h1>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Stock</th>
            <th>Consumed</th>
          </tr>
        </thead>
        <tbody>
          {drugData.map((drug) => (
            <tr key={drug.id}>
              <td data-label="Name">{drug.name}</td>
              <td data-label="Stock">{drug.stock}</td>
              <td data-label="Consumed">{drug.consumed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
