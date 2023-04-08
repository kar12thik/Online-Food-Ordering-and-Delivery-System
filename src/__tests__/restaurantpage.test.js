import React from "react";
import { Provider } from "react-redux";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Restaurants from "../screens/Restaurants";

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";
import "firebase/firestore";

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
