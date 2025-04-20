import React from "react";

const DestinationSelector = ({ destinations, filter, setFilter }) => {
  return (
    <div className="filter-container">
      <label htmlFor="destination-filter">Filter by Destination:</label>
      <select
        id="destination-filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        {destinations.map((destination) => (
          <option key={destination} value={destination}>
            {destination}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DestinationSelector;
