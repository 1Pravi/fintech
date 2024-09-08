import React, { useEffect, useState } from 'react';
import api from '../services/api';
import '../styles/DrugConsumption.css';

function DrugConsumption() {
  const [consumptionData, setConsumptionData] = useState([]);

  useEffect(() => {
    api.getConsumption().then((response) => setConsumptionData(response.data));
  }, []);

  return (
    <div className="drug-consumption-container">
      <h1>Drug Consumption Patterns</h1>
      <div className="data-container">
        {consumptionData.length > 0 ? (
          <ul>
            {consumptionData.map((item, index) => (
              <li key={index}>
                <strong>{item.name}</strong>: {item.name} units
              </li>
            ))}
          </ul>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
}

export default DrugConsumption;
