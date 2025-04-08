// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/layout components/Sidebar';
import Topbar from './components/layout components/topbar';
import SearchBox from './components/layout components/SearchBox';
import RestaurantInsights from './components/Restaurant Insights';
import CustomerPreferences from './components/Customer Preferences';
import LocationBasedAnalysis from './components/Location Based Analysis';
import Overview from './components/Overview';
import Operationp from './components/DeliveryPerformance';
import DataFilters from './components/Data Filters';
import './styles/layout styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="main-content">
          <Topbar />
          <div className="se">
            <SearchBox />
            <div className="content">
              <Routes>
                <Route path="/" element={<RestaurantInsights />} />
                <Route path="/overview" element={<Overview />} />
                <Route path="/consumption" element={<CustomerPreferences />} />
                <Route path="/vendors" element={<LocationBasedAnalysis />} />
                <Route path="/DeliveryPerformance" element={<Operationp />} />
                <Route path="/Data" element={<DataFilters />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
