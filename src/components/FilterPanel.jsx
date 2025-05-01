import React, { useState } from "react";
import "./FilterPanel.css";

function FilterPanel({ filters, onNameSearch, onRatingChange }) {
  const [localName, setLocalName] = useState(filters.name || "");
  const [nameSectionOpen, setNameSectionOpen] = useState(true);
  const [ratingSectionOpen, setRatingSectionOpen] = useState(true);

  const ratings = [5, 4, 3, 2];

  const toggleNameSection = () => setNameSectionOpen(!nameSectionOpen);
  const toggleRatingSection = () => setRatingSectionOpen(!ratingSectionOpen);

  const handleRatingToggle = (rating) => {
    if (filters.ratings.includes(rating)) {
      onRatingChange(filters.ratings.filter((r) => r !== rating));
    } else {
      onRatingChange([...filters.ratings, rating]);
    }
  };

  return (
    <div className="filter-panel">
      <h3 className="filter-title">Filter Results</h3>

      <div className="filter-section">
        <div className="section-header" onClick={toggleNameSection}>
          <span className={`arrow ${nameSectionOpen ? "open" : ""}`}>▼</span>
          <span>Hotel Name</span>
        </div>
        {nameSectionOpen && (
          <div className="name-search">
            <div className="input-group">
              <input
                type="text"
                value={localName}
                onChange={(e) => setLocalName(e.target.value)}
                placeholder="Enter Hotel Name"
              />
              {localName && (
                <button
                  className="clear-btn"
                  onClick={() => {
                    setLocalName("");
                    onNameSearch("");
                  }}
                >
                  ×
                </button>
              )}
              <button
                className="go-btn"
                onClick={() => onNameSearch(localName)}
              >
                Go
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="filter-section">
        <div className="section-header" onClick={toggleRatingSection}>
          <span className={`arrow ${ratingSectionOpen ? "open" : ""}`}>▼</span>
          <span>Quality Rating</span>
        </div>
        {ratingSectionOpen && (
          <div className="rating-options">
            <label>
              <input
                type="checkbox"
                checked={filters.ratings.length === 0}
                onChange={() => onRatingChange([])}
              />
              All
            </label>
            {ratings.map((rating) => (
              <label key={rating}>
                <input
                  type="checkbox"
                  checked={filters.ratings.includes(rating)}
                  onChange={() => handleRatingToggle(rating)}
                />
                {"★".repeat(rating)}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default FilterPanel;
