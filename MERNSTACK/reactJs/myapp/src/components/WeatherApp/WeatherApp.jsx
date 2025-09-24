import React, { useState, useEffect } from "react";
import {ThemeToggle} from "./ThemeToggle";
import {SearchBar} from "./SearchBar";
import {WeatherInfo} from "./WeatherInfo";
import "./style.css";

const WeatherApp = () => {
  const API_key = "fe9776259896a13c890fd941912aefbc";

  const [city, setCity] = useState("Chandigarh");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const formatTime = (unix, timezone) => {
    const date = new Date((unix + timezone) * 1000);
    return date.toUTCString().match(/(\d{1,2}:\d{2}:\d{2})/)[0];
  };

  const getWeather = async () => {
    if (!city) return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.cod !== 200) {
        setError(true);
        setWeather(null);
        return;
      }

      setError(false);
      setWeather({
        name: data.name,
        temp: data.main.temp,
        description: data.weather[0].description,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        visibility: data.visibility / 1000,
        pressure: data.main.pressure,
        sunrise: formatTime(data.sys.sunrise, data.timezone),
        sunset: formatTime(data.sys.sunset, data.timezone),
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode]);

  return (
    <div className="container">
      <div className={`card ${darkMode ? "dark" : ""}`}>
        <ThemeToggle darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />
        <SearchBar city={city} setCity={setCity} getWeather={getWeather} />
        {weather && <WeatherInfo weather={weather} darkMode={darkMode} />}
        {error && <p className="error">City not found!</p>}
      </div>
    </div>
  );
};

export default WeatherApp;
