import React from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, LineElement } from 'chart.js';
import '../styles/VendorTracking.css'; // Make sure to include this CSS file or use inline styles

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement
);

function VendorTracking() {
  // Sample data
  const sampleVendorData = [
    { id: 1, name: 'Vendor A', shipments: 120 },
    { id: 2, name: 'Vendor B', shipments: 80 },
    { id: 3, name: 'Vendor C', shipments: 200 },
  ];

  const sampleDeliveryData = {
    labels: ['Successful Deliveries', 'Failed Deliveries'],
    datasets: [{
      label: 'Deliveries',
      data: [1350, 30],
      backgroundColor: ['#4CAF50', '#F44336'],
    }],
  };

  const sampleRegionData = {
    labels: ['North', 'South', 'East', 'West'],
    datasets: [{
      label: 'Shipment Volume by Region',
      data: [500, 300, 400, 300],
      backgroundColor: ['#2196F3', '#FFC107', '#4CAF50', '#FF5722'],
    }],
  };

  const sampleTrendData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Deliveries Over Time',
      data: [200, 300, 250, 400, 350, 450],
      borderColor: '#2196F3',
      backgroundColor: 'rgba(33, 150, 243, 0.2)',
    }],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows you to control the aspect ratio
  };

  return (
    <div>
      <h1>Vendor Activity Tracking</h1>
      <h2>Vendor Data</h2>
      {sampleVendorData.length ? (
        <ul>
          {sampleVendorData.map((vendor) => (
            <li key={vendor.id}>
              {vendor.name}: {vendor.shipments} shipments
            </li>
          ))}
        </ul>
      ) : (
        <p>No vendor data available</p>
      )}

      <h2>Delivery Status</h2>
      <div className="chart-container">
        <div className="chart">
          <Pie data={sampleDeliveryData} options={options} />
        </div>
      </div>

      <h2>Shipment Volume by Region</h2>
      <div className="chart-container">
        <div className="chart">
          <Bar data={sampleRegionData} options={options} />
        </div>
      </div>

      <h2>Deliveries Over Time</h2>
      <div className="chart-container">
        <div className="chart">
          <Line data={sampleTrendData} options={options} />
        </div>
      </div>
    </div>
  );
}

export default VendorTracking;