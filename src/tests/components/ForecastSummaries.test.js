import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("ForecastSummaries", () => {
  const validProps = [
    {
      date: 1111111,
      description: "Stub description 1",
      icon: "800",
      temperature: {
        max: 22,
        min: 12,
      },
      onSelect: () => {},
    },
    {
      date: 2222222,
      description: "Stub description2",
      icon: "800",
      temperature: {
        max: 24,
        min: 13,
      },
      onSelect: () => {},
    },
  ];
  const onForecastSelect = jest.fn();
  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummaries
        forecasts={validProps}
        onForecastSelect={onForecastSelect}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders the correct number of ForecastSummary instances", () => {
    const { getAllByTestId } = render(
      <ForecastSummaries
        forecasts={validProps}
        onForecastSelect={onForecastSelect}
      />
    );

    expect(getAllByTestId("forecast-summary")).toHaveLength(2);
  });
});
