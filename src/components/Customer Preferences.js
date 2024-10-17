import React, { useState } from 'react';
import '../styles/Customer Preferences.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function CustomerPreferences() {
  // Simulated raw data from analytics and ML results
  const [consumptionData] = useState([
    { name: 'Paracetamol', units: 120, prediction: 130 },
    { name: 'Ibuprofen', units: 90, prediction: 95 },
    { name: 'Amoxicillin', units: 60, prediction: 65 },
    { name: 'Aspirin', units: 150, prediction: 160 },
    { name: 'Ciprofloxacin', units: 80, prediction: 85 },
  ]);

  // Example insights generated from data analytics and ML
  const insights = {
    highestConsumption: 'Aspirin',
    highestConsumptionUnits: 150,
    predictedIncrease: '10% increase for Paracetamol',
    anomalyDetected: 'No anomalies detected in current data',
  };

  return (
    <div className="drug-consumption-container">
      <h1>Drug Consumption Patterns and ML Insights</h1>

      {/* Displaying Insights */}
      <div className="insights-container">
        <h2>Analytics & ML Insights</h2>
        <p><strong>Highest Consumption Drug:</strong> {insights.highestConsumption} ({insights.highestConsumptionUnits} units)</p>
        <p><strong>Predicted Increase:</strong> {insights.predictedIncrease}</p>
        <p><strong>Anomalies Detected:</strong> {insights.anomalyDetected}</p>
      </div>

      {/* Visualizing Data */}
      <div className="data-container">
        {consumptionData.length > 0 ? (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={consumptionData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="units" fill="#8884d8" name="Current Consumption" />
              <Bar dataKey="prediction" fill="#82ca9d" name="Predicted Consumption" />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
}

export default CustomerPreferences;