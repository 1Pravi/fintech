import React, { useState, useEffect } from 'react';
import api from '../services/api';
import '../styles/Dashboard.css';

function Dashboard() {
  const [drugData, setDrugData] = useState([]);

  useEffect(() => {
    api.getDrugs().then((response) => setDrugData(response.data));
  }, []);

  // Filter drugs with stock below 500
  const lowStockDrugs = drugData.filter(drug => drug.stock < 500);

  return (
    <div>
      <h1>Drug Inventory Levels</h1>

      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Stock</th>
            <th>Consumed</th>
          </tr>
        </thead>
        <tbody>
          {lowStockDrugs.length > 0 && (
            <>
              <tr>
                <td colSpan="3" className="low-stock-header">Low Stock Drugs</td>
              </tr>
              {lowStockDrugs.map((drug) => (
                <tr key={drug.id} className="low-stock-row">
                  <td data-label="Name">{drug.name}</td>
                  <td data-label="Stock">{drug.stock}</td>
                  <td data-label="Consumed">{drug.consumed}</td>
                </tr>
              ))}
            </>
          )}

          {drugData.map((drug) => (
            <tr key={drug.id} className={drug.stock < 500 ? "highlight-row" : ""}>
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