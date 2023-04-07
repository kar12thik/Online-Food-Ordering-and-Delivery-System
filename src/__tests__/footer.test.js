/* eslint-disable no-undef */
import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/Footer";
import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/index";
import { Provider } from "react-redux";

const store = configureStore({ reducer: rootReducer });

test("should render social media buttons", (done) => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        {" "}
        <Footer />
      </BrowserRouter>
    </Provider>
  );
  expect(
    screen.getByText("Delivering satisfaction every day")
  ).toBeInTheDocument();
  expect(screen.getByText("Facebook")).toBeInTheDocument();
  expect(screen.getByText("Instagram")).toBeInTheDocument();
  expect(screen.getByText("Twitter")).toBeInTheDocument();
  expect(screen.getByText("Dribbble")).toBeInTheDocument();
  done();
});

test("should render all the static buttons row 1", (done) => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        {" "}
        <Footer />
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getByText("Company")).toBeInTheDocument();

  expect(screen.getByText("Diversity & Inclusion")).toBeInTheDocument();
  expect(screen.getByText("About us")).toBeInTheDocument();
  expect(screen.getByText("Careers")).toBeInTheDocument();
  expect(screen.getByText("Customer Stories")).toBeInTheDocument();
  expect(screen.getByText("Online Communities")).toBeInTheDocument();

  done();
});

test("should render all the static buttons row 2", (done) => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        {" "}
        <Footer />
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getByText("Contact")).toBeInTheDocument();

  expect(screen.getByText("Help & Support")).toBeInTheDocument();
  expect(screen.getByText("Partner with us")).toBeInTheDocument();
  expect(screen.getByText("Ride with us")).toBeInTheDocument();
  done();
});

test("should render all the static buttons row 3", (done) => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        {" "}
        <Footer />
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getByText("Legal")).toBeInTheDocument();

  expect(screen.getByText("Terms & Conditions")).toBeInTheDocument();
  expect(screen.getByText("Refund & Cancellation")).toBeInTheDocument();
  expect(screen.getByText("Privacy Policy")).toBeInTheDocument();
  expect(screen.getByText("Cookie Policy")).toBeInTheDocument();
  expect(screen.getByText("Offer Terms")).toBeInTheDocument();

  done();
});

test("should render all the static buttons row 4", (done) => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        {" "}
        <Footer />
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getByText("We Deliver To")).toBeInTheDocument();

  expect(screen.getByText("Waterloo")).toBeInTheDocument();
  expect(screen.getByText("Kitchener")).toBeInTheDocument();
  expect(screen.getByText("Cambridge")).toBeInTheDocument();
  expect(screen.getByText("Guelph")).toBeInTheDocument();
  expect(screen.getByText("Toronto")).toBeInTheDocument();
  expect(screen.getByText("London")).toBeInTheDocument();

  done();
});
