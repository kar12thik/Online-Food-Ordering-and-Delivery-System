import React from "react";
import { NavLink } from "react-redux";
import { render, screen, waitFor } from "@testing-library/react";
//import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Restaurants from "../screens/Restaurants";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";
import "firebase/firestore";
import FeaturedRestCardsForRestPage from "../components/FeaturedRestCardsForRestPage";

window.scrollTo = jest.fn();

jest.mock("firebase/app", () => {
  return {
    firestore: jest.fn().mockReturnValue({
      collection: jest.fn().mockReturnThis(),
      doc: jest.fn().mockReturnThis(),
      update: jest.fn().mockResolvedValue(),
    }),
  };
});
describe("Restaurants", () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: rootReducer,
    });
  });
  describe("Restaurant details page link", () => {
    const data = { restaurantId: 123, restaurantName: "Sample Restaurant" };
    const link = '<Link to="/restaurant-details" state={{ data: (data)} }}>';

    test("Link points to correct URL", () => {
      expect(link).toMatch(/to="\/restaurant-details"/);
    });
  });

  test("should render Search Restaurants component", (done) => {
    render(
      <BrowserRouter>
        {" "}
        <Restaurants />{" "}
      </BrowserRouter>
    );
    const searchRestElement = screen.getAllByTestId(
      "Search_Restaurants_On_RestPage"
    );
    expect(searchRestElement[0]).toBeInTheDocument();
    done();
  });

  test("should render Featured Restaurants component", (done) => {
    render(
      <BrowserRouter>
        <Restaurants />
      </BrowserRouter>
    );
    expect(screen.getByTestId("Featured_Restaurants")).toBeInTheDocument();
    done();
  });
  test("should render Featured Restaurants component", (done) => {
    render(
      <BrowserRouter>
        <Restaurants />
      </BrowserRouter>
    );
    expect(screen.getByText("Featured Restaurants")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Sorry, we couldn't find any restaurants matching your search."
      )
    ).toBeInTheDocument();

    done();
  });

  test("should render Categories component", (done) => {
    render(
      <BrowserRouter>
        <Restaurants />
      </BrowserRouter>
    );
    expect(screen.getByText("Categories")).toBeInTheDocument();
    done();
  });

  test("should render Restaurant Categories component", (done) => {
    render(
      <BrowserRouter>
        <Restaurants />
      </BrowserRouter>
    );

    expect(screen.getByTestId("Rest_Categories")).toBeInTheDocument();
    done();
  });
  test("should render Restaurant component", (done) => {
    render(
      <BrowserRouter>
        <Restaurants />
      </BrowserRouter>
    );

    expect(screen.getByTestId("Rest_Categories")).toBeInTheDocument();
    done();
  });

  test("renders Restaurants component", () => {
    const rest_data = {
      restName: "Testing Restaurant",
      category: "Restaurant Category",
    };

    render(
      <BrowserRouter store={rest_data}>
        <FeaturedRestCardsForRestPage rest_data={rest_data} />
      </BrowserRouter>
    );

    const restComponents = screen.getByTestId("rest-components");
    const restName = screen.getByText("Testing Restaurant");
    const category = screen.getByText("Restaurant Category");

    expect(restComponents).toBeInTheDocument();
    expect(restName).toBeInTheDocument();
    expect(category).toBeInTheDocument();
  });
});
