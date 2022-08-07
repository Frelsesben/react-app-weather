import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="forecastItem">
      <h6>{day()}</h6>
      <WeatherIcon
        code={props.data.weather[0].icon}
        size={25}
        animate={true}
        color="#383233"
      />
      <br />
      <em>
        Max: {maxTemperature()}
        <sup>°c</sup>
        <br />
        Min: {minTemperature()}
        <sup>°c</sup>
      </em>
    </div>
  );
}
