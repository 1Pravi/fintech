import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Drug Inventory supply chain</h2>
        <ul>
            <li><Link to="/overview">Overview</Link></li>
            <li><Link to="/">Inventory and Stock Levels</Link></li>
            <li><Link to="/consumption">Drug Consumption</Link></li>
            <li><Link to="/vendors">Distribution Monitoring</Link></li>
            <li><Link to="/DeliveryPerformance">DeliveryPerformance</Link></li>
            <li><Link to="/DeliveryPerformance">Predictive Analytics</Link></li>
        </ul>
    </div>
  );
}

export default Sidebar;
