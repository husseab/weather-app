import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: 1111111,
    temperature: {
      max: 22,
      min: 12,
    },
    humidity: 11,
    wind: {
      speed: 50,
      direction: "s",
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders correct values for props", () => {
    const { getByText } = render(<ForecastDetails forecast={validProps} />);

    expect(getByText("Thu Jan 01 1970")).toHaveClass("forecast-details_date");
    expect(getByText("Max temperature: 22°C")).toHaveAttribute(
      "class",
      "forecast-details__temperature_max"
    );
    expect(getByText("Min temperature: 12°C")).toHaveAttribute(
      "class",
      "forecast-details__temperature_min"
    );
    expect(getByText("Humidity: 11")).toHaveAttribute(
      "class",
      "forecast-details_humidity"
    );
    expect(getByText("Wind Speed: 50")).toHaveAttribute(
      "class",
      "forecast-details__wind_speed"
    );
    expect(getByText("Wind Direction: s")).toHaveAttribute(
      "class",
      "forecast-details__wind_direction"
    );
  });
});
