import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"];

    return days[day];
  }

  return (
    <div className="row">
      <div className="col">
        <h4>Upcoming hours</h4>
        <ul className="listGroup">
          <li className="listGroupItem">
            <WeatherIcon code="01d" size={25} animate={false} />
            <br />
            <h6>11:55</h6>
            <em>
              19
              <sup>°c</sup> with sun
            </em>
          </li>
        </ul>
      </div>
      <div className="col">
        <h4>Upcoming days</h4>
        <ul className="listGroup">
          <li className="listGroupItem">
            <WeatherIcon
              code={props.data.weather[0].icon}
              size={25}
              animate={false}
            />
            <br />
            <h6>{day()}day</h6>
            <em>
              Max: {maxTemperature()}
              <sup>°c</sup>
              <br />
              Min: {minTemperature()}
              <sup>°c</sup>
            </em>
          </li>
        </ul>
      </div>
    </div>
  );
}
