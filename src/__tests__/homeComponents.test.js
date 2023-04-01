import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SearchRest from "../components/SearchRest";
import FeaturedRest from "../components/FeaturedRest";
import ProcessInfo from "../components/ProcessInfo";
import OrderNow from "../components/OrderNow";
import React from "react";
import "@testing-library/jest-dom";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/index";
import { Provider } from "react-redux";

window.scrollTo = jest.fn();

afterEach(() => {
  cleanup();
  jest.resetAllMocks();
});
afterAll(() => {
  jest.clearAllMocks();
});

const store = configureStore({ reducer: rootReducer });

test("should render static content on search restaurants component", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        {" "}
        <SearchRest />{" "}
      </BrowserRouter>
    </Provider>
  );
  const inputEl = screen.getByTestId("order-text");
  expect(inputEl).toBeInTheDocument();
  expect(screen.getByText("Restaurants")).toBeInTheDocument();
  expect(screen.getByText("Delivery")).toBeInTheDocument();
  expect(screen.getByText("Reservations")).toBeInTheDocument();
  expect(screen.getByText("Home Services")).toBeInTheDocument();
});

test("should render search text box and button on search restaurants component", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        {" "}
        <SearchRest />{" "}
      </BrowserRouter>
    </Provider>
  );
  const searchtext = screen.getByTestId("search-text");
  expect(searchtext).toBeInTheDocument();
  expect(searchtext).toHaveAttribute("type", "text");
  expect(screen.getByTestId("search-button")).toBeInTheDocument();
});

test("should render static content on process info component", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        {" "}
        <ProcessInfo />{" "}
      </BrowserRouter>
    </Provider>
  );

  expect(screen.getByTestId("title-text")).toBeInTheDocument();
  expect(screen.getByTestId("choose-rest")).toBeInTheDocument();
  expect(screen.getByTestId("choose-dish")).toBeInTheDocument();
  expect(screen.getByTestId("deliver")).toBeInTheDocument();
});

test("should render static content and button on order now component", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        {" "}
        <OrderNow />{" "}
      </BrowserRouter>
    </Provider>
  );

  expect(
    screen.getByText("JUST ORDER AND WE WILL DELIVER YOU")
  ).toBeInTheDocument();
  expect(
    screen.getByText("Avoid the lines and have food delivered by us")
  ).toBeInTheDocument();
});

test("Order now button rendering", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        {" "}
        <OrderNow />{" "}
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getByText("ORDER NOW")).toBeInTheDocument();
});

test("should render contents on Featured restaurants component", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        {" "}
        <FeaturedRest />{" "}
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getByText("FEATURED RESTAURANTS")).toBeInTheDocument();
  expect(screen.getByTestId("rest-cards")).toBeInTheDocument();
});
