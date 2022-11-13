import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import getForecast from "./getForecast";
import SearchForm from "./SearchForm";
import "../styles/App.css";

function App() {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleCitySearch = () => {
    setTimeout(function () {
      window.location.reload(1);
    }, 3000);
    getForecast(
      searchText,
      setSelectedDate,
      setForecasts,
      setLocation,
      setErrorMessage
    );
  };
  useEffect(() => {
    getForecast(searchText, setSelectedDate, setForecasts, setLocation);
  }, [searchText]);
  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );
  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="weather-app">
      <LocationDetails
        city={location.city}
        country={location.country}
        errorMessage={errorMessage}
      />
      <SearchForm
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={handleCitySearch}
      />
      {!errorMessage && (
        <>
          <ForecastSummaries
            forecasts={forecasts}
            onForecastSelect={handleForecastSelect}
          />
          {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
        </>
      )}
    </div>
  );
}

export default App;

SearchForm.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
};
