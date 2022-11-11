import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "../../components/App";
import forecast from "../../data/forecast.json";

describe("App", () => {
  test("renders App component correctly", () => {
    const { asFragment } = render(
      <App
        location={forecast.location}
        forecasts={forecast.forecasts}
        forecast={forecast.forecasts[0]}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
