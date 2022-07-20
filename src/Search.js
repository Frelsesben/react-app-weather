import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(null);

  function showWeather(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    const weatherApiKey = "ad4802884d586a02c0e38d20a9a32180";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`;
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="searchForm" onSubmit={handleSubmit}>
      <input type="search" placeholder="Search.." onChange={updateCity} />
      <input type="submit" value="🔎" />
    </form>
  );

  if (weatherData.ready) {
    return (
      <div className="Search">
        <lottie-player
          src="https://assets6.lottiefiles.com/packages/lf20_iombyzfq.json"
          id="animation"
          background="transparent"
          speed="0.5"
          loop
          autoplay
        ></lottie-player>
        <WeatherInfo data={weatherData} />
        {form}
      </div>
    );
  } else {
    return (
      <div className="Search">
        <lottie-player
          src="https://assets6.lottiefiles.com/packages/lf20_iombyzfq.json"
          id="animation"
          background="transparent"
          speed="0.5"
          loop
          autoplay
        ></lottie-player>
        <h1>Find the weather in any city: </h1>
        {form}
      </div>
    );
  }
}
