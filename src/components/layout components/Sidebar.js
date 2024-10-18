import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/layout styles/Sidebar.css';

function Sidebar() {
  // State to keep track of which main item is open
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSubOptions = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="sidebar">
      <ul>
        {/* Overview Section (no sub-options) */}
        <li>
          <NavLink to="/overview" activeClassName="active">
            Overview
          </NavLink>
        </li>

        {/* Restaurant Insights Section */}
        <li>
          <NavLink to="/" exact activeClassName="active" onClick={() => toggleSubOptions(1)}>
            Restaurant Insights
          </NavLink>
          {activeIndex === 1 && (
            <ul className="sub-options">
              <li><NavLink to="/insights/top-rated" activeClassName="active">Top-Rated Restaurants</NavLink></li>
              <li><NavLink to="/insights/popular-cuisines" activeClassName="active">Popular Cuisines</NavLink></li>
              <li><NavLink to="/insights/famous-foods" activeClassName="active">Famous Foods</NavLink></li>
            </ul>
          )}
        </li>

        {/* Customer Preferences Section */}
        <li>
          <NavLink to="/consumption" activeClassName="active" onClick={() => toggleSubOptions(2)}>
            Customer Preferences
          </NavLink>
          {activeIndex === 2 && (
            <ul className="sub-options">
              <li><NavLink to="/consumption/sub1" activeClassName="active">Sub Option 1</NavLink></li>
              <li><NavLink to="/consumption/sub2" activeClassName="active">Sub Option 2</NavLink></li>
              <li><NavLink to="/consumption/sub3" activeClassName="active">Sub Option 3</NavLink></li>
              <li><NavLink to="/consumption/sub4" activeClassName="active">Sub Option 4</NavLink></li>
            </ul>
          )}
        </li>

        {/* Location Based Analysis Section */}
        <li>
          <NavLink to="/vendors" activeClassName="active" onClick={() => toggleSubOptions(3)}>
            Location Based Analysis
          </NavLink>
          {activeIndex === 3 && (
            <ul className="sub-options">
              <li><NavLink to="/vendors/region1" activeClassName="active">Region 1 Analysis</NavLink></li>
              <li><NavLink to="/vendors/region2" activeClassName="active">Region 2 Analysis</NavLink></li>
              <li><NavLink to="/vendors/region3" activeClassName="active">Region 3 Analysis</NavLink></li>
              <li><NavLink to="/vendors/region4" activeClassName="active">Region 4 Analysis</NavLink></li>
            </ul>
          )}
        </li>

        {/* Operational Analytics Section */}
        <li>
          <NavLink to="/DeliveryPerformance" activeClassName="active" onClick={() => toggleSubOptions(4)}>
            Operational Analytics
          </NavLink>
          {activeIndex === 4 && (
            <ul className="sub-options">
              <li><NavLink to="/DeliveryPerformance/efficiency" activeClassName="active">Efficiency Metrics</NavLink></li>
              <li><NavLink to="/DeliveryPerformance/costs" activeClassName="active">Cost Metrics</NavLink></li>
              <li><NavLink to="/DeliveryPerformance/time" activeClassName="active">Time Metrics</NavLink></li>
              <li><NavLink to="/DeliveryPerformance/quality" activeClassName="active">Quality Metrics</NavLink></li>
            </ul>
          )}
        </li>

        {/* Data Filters Section */}
        <li>
          <NavLink to="/Data" activeClassName="active" onClick={() => toggleSubOptions(5)}>
            Data Filters
          </NavLink>
          {activeIndex === 5 && (
            <ul className="sub-options">
              <li><NavLink to="/Data/date-filter" activeClassName="active">Date Filter</NavLink></li>
              <li><NavLink to="/Data/location-filter" activeClassName="active">Location Filter</NavLink></li>
              <li><NavLink to="/Data/category-filter" activeClassName="active">Category Filter</NavLink></li>
              <li><NavLink to="/Data/price-filter" activeClassName="active">Price Filter</NavLink></li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
