import React, { useState } from "react";
import "./styles.css";

export default function Header() {
  let weatherData = {
    city: "Copenhagen",
    celciusTemp: 21,
    day: "Thurs",
    month: "June",
    date: 9,
    year: "2022",
    hour: 14,
    minutes: 21,
    description: "No clouds",
    imgUrl: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg",
    humidity: 80,
    wind: 10,
  };
  let [temperature, setTemperature] = useState(weatherData.celciusTemp);

  function showFahrenheit(event) {
    event.preventDefault();
    setTemperature(Math.round((weatherData.celciusTemp * 9) / 5 + 32));
  }

  function showCelsius(event) {
    event.preventDefault();
    setTemperature(weatherData.celciusTemp);
  }

  return (
    <div className="Header">
      <h1>
        <img
          src={weatherData.imgUrl}
          alt={weatherData.description}
          className="headerIcon"
        />
        <br />
        It is {temperature}
        <sup>
          <a href="/" onClick={showCelsius}>
            °C
          </a>
          |
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </sup>{" "}
        with {weatherData.description} in {weatherData.city} right now
      </h1>
      <p>
        Humidity is at {weatherData.humidity}% and the wind is blowing with{" "}
        {weatherData.wind} m/h
      </p>
      <h2>
        Last updated: {weatherData.day}day, {weatherData.month}{" "}
        {weatherData.date}, {weatherData.year} at {weatherData.hour}:
        {weatherData.minutes}
      </h2>
    </div>
  );
}
