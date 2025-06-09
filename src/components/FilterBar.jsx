import React from 'react';
import '../styles.css';

const FilterBar = ({
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  size,
  setSize,
  allowedOnRoad,
  setAllowedOnRoad,
  allowsHeavyWaste,
  setAllowsHeavyWaste,
}) => {
  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label>Price Range (£):</label>
        <div className="price-range">
          <span>Min: £{minPrice}</span>
          <input
            type="range"
            min="50"
            max="1200"
            step="10"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <span>Max: £{maxPrice}</span>
        </div>
      </div>

      <div className="filter-group">
        <label>Skip Size (Yards):</label>
        <input
          type="number"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          placeholder="e.g. 8"
        />
      </div>

      <div className="filter-group">
        <label>Allowed On Road:</label>
        <select value={allowedOnRoad} onChange={(e) => setAllowedOnRoad(e.target.value)}>
          <option value="">All</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Allows Heavy Waste:</label>
        <select value={allowsHeavyWaste} onChange={(e) => setAllowsHeavyWaste(e.target.value)}>
          <option value="">All</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
