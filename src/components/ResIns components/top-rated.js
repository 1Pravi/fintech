import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { FaStar } from 'react-icons/fa'; // Importing star icons from react-icons
import ClipLoader from 'react-spinners/ClipLoader';
import '../../styles/toprs.css'; // Importing the CSS file for the component
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registering necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TopRatedRestaurants = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/top-rated-restaurants');
        if (!response.ok) {
          throw new Error('Failed to fetch top-rated restaurants data.');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <ClipLoader color="#3498db" size={50} />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Helper function to render stars based on the rating
  const renderStars = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          color={i <= rating ? '#FFD700' : '#D3D3D3'}
          size={18}
        />
      );
    }
    return stars;
  };

  // Helper function to format cost for better readability
  const formatCost = (cost) => {
    return `$${cost.toLocaleString()}`;
  };

  // Chart data for ratings
  const chartData = {
    labels: data.map((restaurant) => restaurant.name),
    datasets: [
      {
        label: 'Ratings',
        data: data.map((restaurant) => restaurant.rating),
        backgroundColor: '#4CAF50',
        borderColor: '#2E7D32',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Top Rated Restaurants</h2>

      {/* Bar Chart for Ratings */}
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Bar
          data={chartData}
          options={{
            responsive: true,
            scales: {
              y: { min: 0, max: 5 },
            },
          }}
        />
      </div>

      {/* Grid layout for the restaurant cards */}
      <div className="restaurant-grid">
        {data.map((restaurant, index) => (
          <div className="restaurant-card" key={index}>
            <h3>{restaurant.name}</h3>
            <div className="restaurant-info">
              <div className="restaurant-rating">
                {/* Rating stars */}
                {renderStars(restaurant.rating)}
                <span className="rating-text">({restaurant.rating})</span>
              </div>
              <div className="restaurant-cuisine">
                <strong>Cuisine:</strong> {restaurant.cusine}
              </div>
              <div className="restaurant-cost">
                <strong>Cost for Two:</strong> {formatCost(restaurant.cost_for_two)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedRestaurants;
