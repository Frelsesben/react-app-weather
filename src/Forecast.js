import "./styles.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast() {
  let forecastData = {
    temperature: 20,
    hour: 15,
    minutes: "00",
    description: "no clouds",
  };
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <h4>Upcoming hours</h4>
          <ul className="listGroup">
            <li className="listGroupItem">
              <WeatherIcon code="01d" size={25} animate={false} />
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
        <div className="col">
          <h4>Upcoming days</h4>
          <ul className="listGroup">
            <li className="listGroupItem">
              <WeatherIcon code="11d" size={25} animate={false} />
              <br />
              <strong>Wednesday</strong> <br />
              <em>
                {forecastData.temperature}
                <sup>°c</sup> with {forecastData.description}
              </em>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
