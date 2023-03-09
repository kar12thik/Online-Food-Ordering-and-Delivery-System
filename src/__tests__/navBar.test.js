import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar";
import React from "react";
import App from "../App";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/index";
import { Provider } from "react-redux";
// import { shallow, configure } from "enzyme";
// import Adapter from "enzyme-adapter-react-15";

window.scrollTo = jest.fn();

afterEach(() => {
  cleanup();
  jest.resetAllMocks();
});
afterAll(() => {
  jest.clearAllMocks();
});

const store = configureStore({ reducer: rootReducer });

test("full app rendering/navigating to Restaurant page", async () => {
  // const store = {};
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );

  const user = userEvent.setup();

  // verify page content for default route
  expect(screen.getByText(/ORGANIC/i)).toBeInTheDocument();
  expect(screen.queryByText("Featured Restaurants")).toBeNull();

  // verify page content for expected route after navigating
  await user.click(screen.getByText("RESTAURANTS"));
  expect(screen.getByText("Featured Restaurants")).toBeInTheDocument();
});

test("full app rendering/navigating to Login page", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );

  const user = userEvent.setup();

  // verify page content for default route
  expect(screen.getByText(/Featured Restaurants/i)).toBeInTheDocument();

  // verify page content for expected route after navigating
  await user.click(screen.getByText("LOGIN/REGISTER"));
  expect(screen.getByText("Login Your Account")).toBeInTheDocument();
});

test("full app rendering/navigating to Register Restaurant page", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );

  const user = userEvent.setup();

  // verify page content for default route
  expect(screen.getByText(/Login Your Account/i)).toBeInTheDocument();

  // verify page content for expected route after navigating
  await user.click(screen.getByText("REGISTER RESTAURANT"));
  expect(screen.getByText("Register RegisterRestaurants")).toBeInTheDocument();
});

test("should render Quick Food Button", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </Provider>
  );
  const navBarElement = screen.getByText("Quick Food");
  expect(navBarElement).toBeInTheDocument();
});

test("should render Restaurants Button", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </Provider>
  );
  const navBarElement = screen.getByText("RESTAURANTS");
  expect(navBarElement).toBeInTheDocument();
});

test("should render LOGIN/REGISTER Button", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </Provider>
  );
  const navBarElement = screen.getByText("LOGIN/REGISTER");
  expect(navBarElement).toBeInTheDocument();
});

test("should render Register Restaurant Button", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </Provider>
  );
  const navBarElement = screen.getByText("REGISTER RESTAURANT");
  expect(navBarElement).toBeInTheDocument();
});
