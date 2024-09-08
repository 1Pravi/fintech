import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import DrugConsumption from './components/DrugConsumption';
import VendorTracking from './components/VendorTracking';
import Overview from './components/Overview';
import DeliveryPerformance from './components/DeliveryPerformance'
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/consumption" element={<DrugConsumption />} />
            <Route path="/vendors" element={<VendorTracking />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/DeliveryPerformance" element={<DeliveryPerformance />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
