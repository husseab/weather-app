import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("SearchForm", () => {
  const validProps = {
    searchText: "London",
    setSearchText: jest.fn(),
    handleCitySearch: jest.fn(),
  };
  it("renders correctly", () => {
    const { asFragment } = render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.handleCitySearch}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it(" the button displays the correct text.", () => {
    render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.handleCitySearch}
      />
    );
    const button = screen.getByText(/Search/i);
    expect(button).toBeInTheDocument();
  });
});
