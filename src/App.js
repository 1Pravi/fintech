// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/layout components/Sidebar';
import Topbar from './components/layout components/topbar';
import RestaurantInsights from './components/Restaurant Insights';
import CustomerPreferences from './components/Customer Preferences';
import LocationBasedAnalysis from './components/Location Based Analysis';
import Overview from './components/Overview';
import Operationp from './components/DeliveryPerformance';
import DataFilters from './components/Data Filters'
import TopRated from "./components/ResIns components/top-rated";
import './styles/layout styles/App.css';



function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="main-content">
          <Topbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<RestaurantInsights />} />
              <Route path="/consumption" element={<CustomerPreferences />} />
              <Route path="/vendors" element={<LocationBasedAnalysis />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/DeliveryPerformance" element={<Operationp />} />
              <Route path="/Data" element={<DataFilters />} />
              <Route path="/insights/top-rated" element={<TopRated />} />

            </Routes>
            </div>
          </div>
        </div>
    </Router>
  );
}

export default App;

