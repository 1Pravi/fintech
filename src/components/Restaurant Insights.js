import React, { useEffect, useState } from 'react';
import axios from 'axios';


function RestaurantInsights() {
  const [restaurants, setRestaurants] = useState([]);
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
  axios.get('/api/restaurants')
    .then(response => {
      console.log(response.data);  // Log data to check response
      setRestaurants(response.data.data);
      setAnalytics(response.data.analytics);
    })
    .catch(error => {
      console.error("Error fetching the restaurant data", error);
    });
}, []);

  return (
    <div className="restaurant-insights">
      <h1>Restaurant Insights</h1>

      <h2>Analytics</h2>

      {/* Top-rated Restaurants */}
      <section>
        <h3>Top-Rated Restaurants</h3>
        <ul>
          {analytics && analytics.top_rated_restaurants.map((item, index) => (
            <li key={index}>{item.name} - {item.rating} (City: {item.city}, Area: {item.area})</li>
          ))}
        </ul>
      </section>

      {/* Popular Cuisines */}
      <section>
        <h3>Popular Cuisines</h3>
        <ul>
          {analytics && Object.entries(analytics.popular_cuisines).map(([cuisine, count], index) => (
            <li key={index}>{cuisine}: {count}</li>
          ))}
        </ul>
      </section>

      {/* Average Cost for Two by City */}
      <section>
        <h3>Average Cost for Two by City</h3>
        <ul>
          {analytics && Object.entries(analytics.average_cost_by_city).map(([city, cost], index) => (
            <li key={index}>{city}: ₹{cost}</li>
          ))}
        </ul>
      </section>

      {/* Top Famous Foods */}
      <section>
        <h3>Top Famous Foods</h3>
        <ul>
          {analytics && analytics.top_famous_foods.map((item, index) => (
            <li key={index}>{item.famous_food} - {item.rating} (Restaurant: {item.name}, City: {item.city})</li>
          ))}
        </ul>
      </section>

      {/* Restaurant Data Table */}
      <h2>All Restaurants</h2>
      <table className="restaurant-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Area</th>
            <th>Rating</th>
            <th>Cuisine</th>
            <th>Cost for Two</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant, index) => (
            <tr key={index}>
              <td>{restaurant.name}</td>
              <td>{restaurant.city}</td>
              <td>{restaurant.area}</td>
              <td>{restaurant.rating}</td>
              <td>{restaurant.cusine}</td>
              <td>{restaurant.cost_for_two}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RestaurantInsights;
