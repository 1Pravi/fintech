import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/layout styles/SearchBox.css';

const suggestionsList = [
  "Restaurant Insights",
  "Top-Rated Restaurants",
  "Popular Cuisines",
  "Cost Analysis",
  "Famous Foods",
  "Customer Preferences",
  "Ratings Analysis",
  "Online Ordering Trends",
  "Reservation Insights",
  "Location-Based Analysis",
  "By City",
  "By Area",
  "Delivery Options",
  "Rating Count",
];

const AdvancedSearchBox = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value) {
      const filteredSuggestions = suggestionsList.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      setActiveIndex((prevIndex) => Math.min(prevIndex + 1, suggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      selectSuggestion(suggestions[activeIndex]);
    }
  };

  const selectSuggestion = (suggestion) => {
    setQuery(suggestion);
    setShowSuggestions(false);
    setActiveIndex(-1);

    if (suggestion === "Top-Rated Restaurants") {
      navigate("/top-rated-restaurants");
    } else if (suggestion === "Popular Cuisines") {
      navigate("/popular-cuisines");  // Navigate to the Popular Cuisines page
    } else if (suggestion === "Famous Foods") {
      navigate("/famous-foods");  // Navigate to the Famous Foods page
    }

    // Add more conditions for other suggestions if needed
  };
  const clearInput = () => {
    setQuery('');
    setShowSuggestions(false);
    setSuggestions([]);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Search insights..."
        className="search-input"
      />

      {/* Clear icon */}
      {query && (
        <span className="clear-icon" onClick={clearInput}>
          ✖
        </span>
      )}

      {showSuggestions && suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li
              key={suggestion}
              className={`suggestion-item ${index === activeIndex ? 'active' : ''}`}
              onClick={() => selectSuggestion(suggestion)}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdvancedSearchBox;
