import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/layout styles/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        {/* Overview Section */}
        <li>
          <NavLink to="/overview" activeClassName="active">
            Overview
          </NavLink>
        </li>

        {/* Restaurant Insights */}
        <li>
          <NavLink to="/" exact activeClassName="active">
            Realtime cashflow
          </NavLink>
        </li>

        {/* Customer Preferences */}
        <li>
          <NavLink to="/consumption" activeClassName="active">
            Revenue Expense Analysis
          </NavLink>
        </li>

        {/* Location Based Analysis */}
        <li>
          <NavLink to="/vendors" activeClassName="active">
            Profit and loss
          </NavLink>
        </li>

        {/* Operational Analytics */}
        <li>
          <NavLink to="/DeliveryPerformance" activeClassName="active">
            Financial forecast
          </NavLink>
        </li>

        {/* Data Filters */}
        <li>
          <NavLink to="/Data" activeClassName="active">
            Automated Financial Reports
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
