import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>
        It is <WeatherTemp celsius={props.data.temperature} /> with{" "}
        {props.data.description} in {props.data.city}
      </h1>
      <WeatherIcon
        code={props.data.icon}
        size={150}
        alt={props.data.description}
        animate={true}
        color="white"
      />
      <p>
        Humidity is at {props.data.humidity}% and the wind is blowing with{" "}
        {Math.round(props.data.wind)} m/s <br />
      </p>
      <FormattedDate date={props.data.date} />
    </div>
  );
}
