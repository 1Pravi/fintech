import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line, Bar } from 'react-chartjs-2';
import '../styles/Overview.css';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend);

function Overview() {
  const [metrics, setMetrics] = useState({});
  const [chartData, setChartData] = useState({
    shipmentVolumeByRegion: {
      labels: [],
      datasets: []
    },
    leadTimeOverTime: {
      labels: [],
      datasets: []
    }
  });
  const [filters, setFilters] = useState({
    startDate: '',
    endDate: '',
    status: 'All',
    channels: 'All',
    carriers: 'All',
  });

  useEffect(() => {
    fetchMetrics();
  }, [filters]);

  const fetchMetrics = async () => {
    try {
      const response = await axios.get('/api/overview', { params: filters });
      setMetrics(response.data.metrics);
      setChartData(response.data.charts);
    } catch (error) {
      console.error("Error fetching metrics:", error);
    }
  };

  return (
    <div className="overview-container">
      <div className="filters">
        <input
          type="date"
          value={filters.startDate}
          onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
        />
        <input
          type="date"
          value={filters.endDate}
          onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
        />
        <select
          value={filters.status}
          onChange={(e) => setFilters({ ...filters, status: e.target.value })}
        >
          <option value="All">All Statuses</option>
          <option value="In Progress">In Progress</option>
          <option value="Successful">Successful</option>
          <option value="Failed">Failed</option>
        </select>
        <select
          value={filters.channels}
          onChange={(e) => setFilters({ ...filters, channels: e.target.value })}
        >
          <option value="All">All Channels</option>
          {/* Add more channel options here */}
        </select>
        <select
          value={filters.carriers}
          onChange={(e) => setFilters({ ...filters, carriers: e.target.value })}
        >
          <option value="All">All Carriers</option>
          {/* Add more carrier options here */}
        </select>
      </div>
      <div className="metrics">
        <div className="metric-card">
          <h3>Total Shipments</h3>
          <p>{metrics.totalShipments}</p>
        </div>
        <div className="metric-card">
          <h3>Deliveries in Progress</h3>
          <p>{metrics.deliveriesInProgress}</p>
        </div>
        <div className="metric-card">
          <h3>Successful Deliveries</h3>
          <p>{metrics.successfulDeliveries}</p>
        </div>
        <div className="metric-card">
          <h3>Failed Deliveries</h3>
          <p>{metrics.failedDeliveries}</p>
        </div>
        <div className="metric-card">
          <h3>Average Lead Time</h3>
          <p>{metrics.averageLeadTime} days</p>
        </div>
      </div>
      <div className="charts">
        <div className="chart">
          <h4>Shipment Volume by Region</h4>
          <Bar data={chartData.shipmentVolumeByRegion} />
        </div>
        <div className="chart">
          <h4>Lead Time Over Time</h4>
          <Line data={chartData.leadTimeOverTime} />
        </div>
      </div>
    </div>
  );
}

export default Overview;
