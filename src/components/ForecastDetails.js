import React from "react";
import PropTypes from "prop-types";

function ForecastDetails({ forecast }) {
  const { date, temperature, humidity, wind } = forecast;
  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-details">
      <div className="forecast-details_Date">{formattedDate}</div>
      <div className="forecast-details__temperature_Max">
        Max temperature: {temperature.max}
        &deg;C
      </div>
      <div className="forecast-details__temperature_Min">
        Min temperature: {temperature.min}
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
