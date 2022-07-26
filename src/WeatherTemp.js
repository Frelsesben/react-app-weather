import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span>
        {Math.round(props.celsius)}
        <sup>
          °C|
          <a href="#" onClick={showFahrenheit}>
            °F
          </a>
        </sup>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span>
        {Math.round(fahrenheit)}
        <sup>
          <a href="#" onClick={showCelsius}>
            °C
          </a>
          |°F
        </sup>
      </span>
    );
  }
}
