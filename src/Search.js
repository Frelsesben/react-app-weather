import React, { useState } from "react";
import "./styles.css";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function showWeather(response) {
    setLoaded(true);
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let weatherApiKey = "ad4802884d586a02c0e38d20a9a32180";
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

  if (loaded) {
    return (
      <div className="Search">
        {form}
        <h3>
          It is {Math.round(temperature)}°C with {description}
        </h3>
      </div>
    );
  } else {
    return (
      <div className="Search">
        {form}
        <h3>SheCodes React Week 3 challenge ⬆</h3>
        <button className="btn btn-primary">Hello</button>
      </div>
    );
  }
}
