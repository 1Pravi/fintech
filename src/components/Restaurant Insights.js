import React, { useState, useEffect } from 'react';

const OrderingAndRatings = ({ endpoint }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Validate the endpoint to ensure it’s one of the two supported endpoints
    const validEndpoints = ['online-ordering-trends', 'ratings-analysis'];
    if (!validEndpoints.includes(endpoint)) {
      setError(`Invalid endpoint: ${endpoint}`);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/online-ordering-trends}`);
        if (!response.ok) throw new Error('Failed to fetch data.');
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [endpoint]);

  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h2>{endpoint === 'online-ordering-trends' ? 'Online Ordering Trends' : 'Ratings Analysis'}</h2>
      {endpoint === 'online-ordering-trends' && (
        <div>
          <h3>Percentage of Restaurants Offering Online Ordering:</h3>
          <p>{`Yes: ${(data.online_ordering_trends.true * 100).toFixed(2)}%`}</p>
          <p>{`No: ${(data.online_ordering_trends.false * 100).toFixed(2)}%`}</p>
        </div>
      )}
      {endpoint === 'ratings-analysis' && (
        <div>
          <h3>Rating Distribution:</h3>
          <ul>
            {Object.entries(data.ratings_distribution).map(([rating, count]) => (
              <li key={rating}>{`Rating ${rating}: ${count} restaurants`}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default OrderingAndRatings;
