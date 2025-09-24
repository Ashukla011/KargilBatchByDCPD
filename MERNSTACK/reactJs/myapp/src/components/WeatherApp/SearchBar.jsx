import React from "react";

const SearchBar = ({ city, setCity, getWeather }) => {
  return (
    <div style={{ display: 'flex', marginBottom: '1.5rem' }}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city..."
        className="input"
      />
      <button onClick={getWeather} className="button search">
        Search
      </button>
    </div>
  );
};

export  {SearchBar};
