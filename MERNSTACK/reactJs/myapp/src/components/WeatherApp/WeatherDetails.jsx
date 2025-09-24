import React from "react";

const WeatherDetails = ({ weather, darkMode }) => {
  return (
    <div className="weather-grid">
      <div className={`detail ${darkMode ? "dark" : ""}`}>
        <p>Humidity</p>
        <p>{weather.humidity}%</p>
      </div>
      <div className={`detail ${darkMode ? "dark" : ""}`}>
        <p>Wind</p>
        <p>{weather.wind} m/s</p>
      </div>
      <div className={`detail ${darkMode ? "dark" : ""}`}>
        <p>Visibility</p>
        <p>{weather.visibility} km</p>
      </div>
      <div className={`detail ${darkMode ? "dark" : ""}`}>
        <p>Pressure</p>
        <p>{weather.pressure} hPa</p>
      </div>
      <div className={`detail ${darkMode ? "dark" : ""}`} style={{ gridColumn: "span 2" }}>
        <p>Sunrise & Sunset</p>
        <p> {weather.sunrise}</p>
        <p> {weather.sunset}</p>
      </div>
    </div>
  );
};

export  {WeatherDetails};
