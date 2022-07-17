import "./styles.css";

export default function Forecast() {
  let forecastData = {
    temperature: 20,
    hour: 15,
    minutes: "00",
    description: "no clouds",
    imgUrl: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg",
  };
  return (
    <div className="Forecast">
      <h4>Upcoming hours</h4>
      <ul className="listGroup">
        <li className="listGroupItem">
          <img
            src={forecastData.imgUrl}
            alt={forecastData.description}
            className="forecastIcon"
          />
          <br />
          <strong>
            {forecastData.hour}:{forecastData.minutes}
          </strong>{" "}
          <br />
          <em>
            {forecastData.temperature}
            <sup>°c</sup> with {forecastData.description}
          </em>
        </li>
      </ul>
    </div>
  );
}
