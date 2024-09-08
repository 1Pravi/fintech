import React, { useEffect, useState } from 'react';
import api from '../services/api';

function VendorTracking() {
  const [vendorData, setVendorData] = useState([]);

  useEffect(() => {
    api.getVendors().then((response) => setVendorData(response.data));
  }, []);

  return (
    <div>
      <h1>Vendor Activity Tracking</h1>
      <p>Data: {JSON.stringify(vendorData)}</p>
    </div>
  );
}

export default VendorTracking;
