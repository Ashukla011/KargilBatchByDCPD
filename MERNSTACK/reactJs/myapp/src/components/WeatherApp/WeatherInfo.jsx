import React from "react";
import {WeatherDetails} from "./WeatherDetails";

const WeatherInfo = ({ weather, darkMode }) => {
  if (!weather) return null;

  return (
    <div className="weather-info">
      <h2>{weather.name}</h2>
      <img src={weather.icon} alt="Weather Icon" />
      <p style={{ fontSize: "2rem", fontWeight: "bold" }}>{weather.temp}°C</p>
      <p style={{ textTransform: "capitalize" }}>{weather.description}</p>
      <WeatherDetails weather={weather} darkMode={darkMode} />
    </div>
  );
};

export  {WeatherInfo};
