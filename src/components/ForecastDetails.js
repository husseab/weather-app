import React from "react";
import PropTypes from "prop-types";
import "../styles/forecast-details.css";

function ForecastDetails({ forecast }) {
  const { date, temperature, humidity, wind } = forecast;
  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-details">
      <div className="forecast-details_date">{formattedDate}</div>
      <div className="forecast-details__temperature_max">
        Max temperature: {temperature.max}
        &deg;C
      </div>
      <div className="forecast-details__temperature_min">
        Min temperature: {temperature.min}
        &deg;C
      </div>
      <div className="forecast-details_humidity">Humidity: {humidity}</div>
      <div className="forecast-details__wind_speed">
        Wind Speed: {wind.speed}
      </div>
      <div className="forecast-details__wind_direction">
        Wind Direction: {wind.direction}
      </div>
    </div>
  );
}

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }),
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
