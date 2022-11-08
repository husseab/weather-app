import React from "react";
import PropTypes from "prop-types";

function ForecastDetails({ forecast }) {
  const { date, temperature, humidity, wind } = forecast;
  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-details">
      <div className="forecast-details_Date">{formattedDate}</div>
      <div className="forecast-details__temperature">
        {temperature.max}
        &deg;C, {temperature.min}
        &deg;C
      </div>
      <div className="forecast-details_humidity">{humidity}</div>
      <div className="forecast-details__wind">
        {wind.speed}, {wind.direction}
      </div>
    </div>
  );
}

export default ForecastDetails;

ForecastDetails.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.shape({
    speed: PropTypes.number,
    direction: PropTypes.string,
  }).isRequired,
};
