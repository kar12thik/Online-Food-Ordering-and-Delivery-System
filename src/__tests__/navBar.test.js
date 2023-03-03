import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar";
import React from "react";
import App from "../App";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
// import { shallow, configure } from "enzyme";
// import Adapter from "enzyme-adapter-react-15";

afterEach(() => {
  cleanup();
});

test("full app rendering/navigating to Restaurant page", async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const user = userEvent.setup();

  // verify page content for default route
  expect(screen.getByText(/Banner/i)).toBeInTheDocument();
  expect(screen.queryByText("Restaurants Page")).toBeNull();

  // verify page content for expected route after navigating
  await user.click(screen.getByText("RESTAURANTS"));
  expect(screen.getByText("Restaurants Page")).toBeInTheDocument();
});

test("full app rendering/navigating to Login page", async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const user = userEvent.setup();

  // verify page content for default route
  expect(screen.getByText(/Restaurants Page/i)).toBeInTheDocument();

  // verify page content for expected route after navigating
  await user.click(screen.getByText("LOGIN/REGISTER"));
  expect(screen.getByText("Login Your Account")).toBeInTheDocument();
});

test("full app rendering/navigating to Register Restaurant page", async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
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
    <BrowserRouter>
      {" "}
      <NavBar />{" "}
    </BrowserRouter>
  );
  const navBarElement = screen.getByText("Quick Food");
  expect(navBarElement).toBeInTheDocument();
});

test("should render Restaurants Button", () => {
  render(
    <BrowserRouter>
      {" "}
      <NavBar />{" "}
    </BrowserRouter>
  );
  const navBarElement = screen.getByText("RESTAURANTS");
  expect(navBarElement).toBeInTheDocument();
});

test("should render LOGIN/REGISTER Button", () => {
  render(
    <BrowserRouter>
      {" "}
      <NavBar />{" "}
    </BrowserRouter>
  );
  const navBarElement = screen.getByText("LOGIN/REGISTER");
  expect(navBarElement).toBeInTheDocument();
});

test("should render Register Restaurant Button", () => {
  render(
    <BrowserRouter>
      {" "}
      <NavBar />{" "}
    </BrowserRouter>
  );
  const navBarElement = screen.getByText("REGISTER RESTAURANT");
  expect(navBarElement).toBeInTheDocument();
});
