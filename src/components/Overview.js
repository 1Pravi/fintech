import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line, Bar } from 'react-chartjs-2';
import '../styles/Overview.css';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

function Overview() {
  const [metrics, setMetrics] = useState({
    totalShipments: 1500,
    deliveriesInProgress: 200,
    successfulDeliveries: 1200,
    failedDeliveries: 100,
    averageLeadTime: 3
  });

  const [chartData, setChartData] = useState({
    shipmentVolumeByRegion: {
      labels: ['North', 'South', 'East', 'West'],
      datasets: [
        {
          label: 'Shipments',
          data: [500, 300, 400, 300],
          backgroundColor: 'rgba(75, 192, 192, 0.6)'
        }
      ]
    },
    leadTimeOverTime: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [
        {
          label: 'Average Lead Time (days)',
          data: [2.5, 3.1, 3.7, 3.0],
          borderColor: 'rgba(153, 102, 255, 1)',
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          fill: true
        }
      ]
    }
  });

  const [filters, setFilters] = useState({
    startDate: '',
    endDate: '',
    status: 'All',
    channels: 'All',
    carriers: 'All',
  });

  // Define fetchMetrics before useEffect
  const fetchMetrics = async () => {
    try {
      const response = await axios.get('/api/overview', { params: filters });
      setMetrics(response.data.metrics || metrics);
      setChartData(response.data.charts || chartData);
    } catch (error) {
      console.error("Error fetching metrics:", error);
    }
  };

  useEffect(() => {
    fetchMetrics();
  }, [filters]);

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
        </select>
        <select
          value={filters.carriers}
          onChange={(e) => setFilters({ ...filters, carriers: e.target.value })}
        >
          <option value="All">All Carriers</option>
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