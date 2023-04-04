/* eslint-disable no-undef */
import { render, screen, cleanup, act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/Footer";
import React from "react";
import App from "../App";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/index";
import { Provider } from "react-redux";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

window.scrollTo = jest.fn();

afterEach(() => {
  cleanup();
  jest.resetAllMocks();
});
afterAll(() => {
  jest.clearAllMocks();
});

const store = configureStore({ reducer: rootReducer });

describe("Wrapping Firebase For Footer Test", () => {
  let firestore;
  beforeAll(() => {
    firestore = firebase.firestore();
  });

  afterEach(() => {
    // Re-enable network access after each test
    // firestore.enableNetwork();
  });

  test("full app rendering/navigating to Restaurant page", async () => {
    // const store = {};
    firestore.disableNetwork();
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const user = userEvent.setup();
    expect(screen.getByText(/FAVOURITE/i)).toBeInTheDocument();
    expect(screen.queryByText("Featured Restaurants")).toBeNull();

    // verify page content for expected route after navigating
    await act(async () => {
      await user.click(screen.getByText("RESTAURANTS"));
    });
    expect(screen.getByText("Featured Restaurants")).toBeInTheDocument();
  });

  test("full app rendering/navigating to Login page", async () => {
    firestore.disableNetwork();
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
    await act(async () => {
      await user.click(
        screen.getByRole("link", {
          name: /login\/register/i,
        })
      );
    });
    expect(screen.getByText("Login Your Account")).toBeInTheDocument();
  });

  test("full app rendering/navigating to Register Restaurant page", async () => {
    firestore.disableNetwork();
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
    await act(async () => {
      await user.click(screen.getByText("REGISTER RESTAURANT"));
    });
    expect(screen.getByText("Restaurant Name")).toBeInTheDocument();
  });

  test("should render Quick Food Button", (done) => {
    firestore.disableNetwork();
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      </Provider>
    );
    const FooterElement = screen.getByText("Quick Food");
    expect(FooterElement).toBeInTheDocument();
    done();
  });

  test("should render Restaurants Button", (done) => {
    firestore.disableNetwork();
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      </Provider>
    );
    const FooterElement = screen.getByText("RESTAURANTS");
    expect(FooterElement).toBeInTheDocument();
    done();
  });

  test("should render LOGIN/REGISTER Button", (done) => {
    firestore.disableNetwork();
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      </Provider>
    );
    const FooterElement = screen.getByText("LOGIN/REGISTER");
    expect(FooterElement).toBeInTheDocument();
    done();
  });

  test("should render Register Restaurant Button", (done) => {
    firestore.disableNetwork();
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      </Provider>
    );
    const FooterElement = screen.getByText("REGISTER RESTAURANT");
    expect(FooterElement).toBeInTheDocument();
    done();
  });
});
