import React, { useEffect, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import '../styles/Restaurant Insights.css'; // Import the CSS file

const App = () => {
  const [insights, setInsights] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/insights');
        if (!response.ok) {
          throw new Error('Failed to fetch insights data.');
        }
        const data = await response.json();
        setInsights(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchInsights();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!insights) {
    return (
      <div className="spinner-container">
        <div>
          <ClipLoader color="#3498db" size={50} />
          <div className="loading-text">Loading insights...</div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Restaurant Insights</h1>
      <p><strong>Average Rating:</strong> {insights.average_rating}</p>
      <p><strong>Average Cost for Two:</strong> ${insights.average_cost_for_two}</p>
      <h2>Top Restaurants</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {insights.top_restaurants.map((restaurant, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <strong>{restaurant.name}</strong>: {restaurant.rating}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
