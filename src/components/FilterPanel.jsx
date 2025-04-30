import React from "react";
import "./FilterPanel.css";

function FilterPanel({ filters, onNameChange, onRatingChange }) {
  return (
    <div className="filter-panel">
      <h3 className="filter-title">Filter Results</h3>

      <div className="filter-section">
        <label className="filter-label">Hotel Name</label>
        <div className="filter-name-input">
          <input
            type="text"
            value={filters.name}
            placeholder="Enter Hotel Name"
            onChange={(e) => onNameChange(e.target.value)}
          />
          <button>Go</button>
        </div>
      </div>

      <div className="filter-section">
        <label className="filter-label">Quality Rating</label>
        <div className="filter-rating-options">
          {[0, 5, 4, 3, 2].map((rating) => (
            <label key={rating}>
              <input
                type="radio"
                name="rating"
                checked={filters.rating === rating}
                onChange={() => onRatingChange(rating)}
              />
              {rating === 0 ? "All" : "★".repeat(rating)}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilterPanel;
