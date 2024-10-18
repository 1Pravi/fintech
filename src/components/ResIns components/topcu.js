import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import '../../styles/cu.css';
import ClipLoader from "react-spinners/ClipLoader";

const PopularCuisines = () => {
  const [cuisines, setCuisines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCuisines = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/popular-cuisines');
        const data = await response.json();
        setCuisines(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cuisines:', error);
        setLoading(false);
      }
    };

    fetchCuisines();
  }, []);

  if (loading) {
    return <ClipLoader color="#3498db" size={50} />;
  }

  const getCondensedFoods = (foods) => {
    const topFoods = foods.slice(0, 5);
    const remainingFoodsCount = foods.length - 5;
    return `${topFoods.join(', ')}${remainingFoodsCount > 0 ? `, and ${remainingFoodsCount} more...` : ''}`;
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>Popular Cuisines Insights</h1>
      {cuisines.map((cuisine, index) => (
        <div
          key={index}
          style={{
            marginBottom: '40px',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '15px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease-in-out',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <h2 style={{ color: '#555' }}>{cuisine.cuisine}</h2>
          <p><strong>Average Rating:</strong> {cuisine.average_rating}</p>
          <p><strong>Average Cost for Two:</strong> ₹{cuisine.average_cost_for_two}</p>
          <p><strong>Total Restaurants:</strong> {cuisine.total_restaurants}</p>

          {/* City Distribution Bar Chart */}
          <h3 style={{ color: '#333' }}>City Distribution:</h3>
          <Bar
            data={{
              labels: Object.keys(cuisine.city_distribution),
              datasets: [{
                label: 'Number of Restaurants',
                data: Object.values(cuisine.city_distribution),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
              }],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                },
              },
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
            style={{ maxHeight: '400px' }}
          />

          {/* Famous Foods (Condensed list) */}
          <h3 style={{ color: '#333' }}>Famous Foods:</h3>
          <div style={{ backgroundColor: '#fafafa', padding: '10px', borderRadius: '5px' }}>
            <p>{getCondensedFoods(cuisine.famous_foods)}</p>
          </div>

          {/* Ratings Over Time (Line Chart) */}
          <h3 style={{ color: '#333' }}>Rating Distribution Over Time:</h3>
          <Line
            data={{
              labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
              datasets: [{
                label: 'Ratings',
                data: [cuisine.average_rating, cuisine.average_rating + 0.2, cuisine.average_rating - 0.1, cuisine.average_rating + 0.3, cuisine.average_rating - 0.2],
                fill: false,
                borderColor: 'rgba(54, 162, 235, 1)',
                tension: 0.1,
              }],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                },
              },
            }}
            style={{ maxHeight: '300px' }}
          />
        </div>
      ))}
    </div>
  );
};

export default PopularCuisines;
