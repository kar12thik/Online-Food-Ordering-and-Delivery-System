import { render, screen } from "@testing-library/react";
import Restaurants from "../screens/Restaurants";
import FeaturedRestCardsForRestPage from "../components/FeaturedMenuCardsForRestPage";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/index";
import { Provider } from "react-redux";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

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

  describe("Restaurants", () => {
    let firestore;
    beforeAll(() => {
      firestore = firebase.firestore();
    });

    afterEach(() => {
      // Re-enable network access after each test
      // firestore.enableNetwork();
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

    test("should render Menu button", () => {
      const rest_data = {
        restName: "Testing Restaurant",
        userProfileImageUrl: "restName.jpg",
        category: "Testing Category",
      };

      render(
        <Provider store={store}>
          <FeaturedRestCardsForRestPage rest_data={rest_data} />
        </Provider>
      );

      const restName = screen.getByTestId("Testing Restaurant");
      const userProfileImageUrl = screen.getByTestId("restName.jpg");
      const category = screen.getByText("Testing Category");

      expect(restName).toBeInTheDocument();
      expect(userProfileImageUrl).toBeInTheDocument();
      expect(category).toBeInTheDocument();
    });
  });
});
