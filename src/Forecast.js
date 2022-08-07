import React, { useState, useEffect } from "react";
import "./styles.css";
import ForecastDay from "./ForecastDay";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <ForecastDay data={forecast[1]} />
          </div>
          <div className="col-4">
            <ForecastDay data={forecast[2]} />
          </div>
          <div className="col-4">
            <ForecastDay data={forecast[3]} />
          </div>
          <p></p>
          <div className="col-4">
            <ForecastDay data={forecast[4]} />
          </div>
          <div className="col-4">
            <ForecastDay data={forecast[5]} />
          </div>
          <div className="col-4">
            <ForecastDay data={forecast[6]} />
          </div>
        </div>
      </div>
    );
  } else {
    let weatherApiKey = "ad4802884d586a02c0e38d20a9a32180";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coord.lat}&lon=${props.coord.lon}&appid=${weatherApiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
