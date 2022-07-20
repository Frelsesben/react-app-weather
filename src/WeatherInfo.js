import React from "react";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>
        It is {Math.round(props.data.temperature)}°C with{" "}
        {props.data.description} in {props.data.city} right now
      </h1>
      <p>
        Humidity is at {props.data.humidity}% and the wind is blowing with{" "}
        {Math.round(props.data.wind)} m/s
      </p>
    </div>
  );
}
