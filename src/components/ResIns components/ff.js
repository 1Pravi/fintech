import React, { useEffect, useState } from 'react';
import '../../styles/ff.css';

const FamousFoods = () => {
  const [insights, setInsights] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFamousFoods = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/famous-foods');
        if (!response.ok) {
          throw new Error('Failed to fetch famous food insights.');
        }
        const data = await response.json();
        setInsights(data.detailed_famous_foods);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchFamousFoods();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!insights) {
    return <div>Loading famous food insights...</div>;
  }

  return (
    <div>
      <h2>Top 50 Famous Foods Insights</h2>
      <table>
        <thead>
          <tr>
            <th>Famous Food</th>
            <th>City</th>
            <th>Restaurant Count</th>
            <th>Average Rating</th>
            <th>Average Cost for Two</th>
          </tr>
        </thead>
        <tbody>
          {insights.map((item, index) => (
            <tr key={index}>
              <td>{item.famous_food || 'Not Available'}</td>
              <td>{item.city || 'Not Available'}</td>
              <td>{item.restaurant_count ?? 'N/A'}</td>
              <td>{item.avg_rating ? item.avg_rating.toFixed(2) : 'No Rating'}</td>
              <td>{item.avg_cost_for_two ? item.avg_cost_for_two.toFixed(2) : 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FamousFoods;
