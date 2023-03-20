import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "../screens/Login";
import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
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

test("Should render Login form title", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        {" "}
        <Login />{" "}
      </BrowserRouter>
    </Provider>
  );
  const formElement = screen.getByText("Login Your Account");
  expect(formElement).toBeInTheDocument();
});

test("Should render User Email input fields", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        {" "}
        <Login />{" "}
      </BrowserRouter>
    </Provider>
  );

  const inputPassword = screen.getByTestId("login-email");
  expect(inputPassword).toBeInTheDocument();
});

test("Should render password input fields and make sure field is of type password", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        {" "}
        <Login />{" "}
      </BrowserRouter>
    </Provider>
  );

  const inputPassword = screen.getByTestId("login-password");
  expect(inputPassword).toBeInTheDocument();
  expect(inputPassword).toHaveAttribute("type", "password");
});

test("Should render Create account link if you don't have account", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        {" "}
        <Login />{" "}
      </BrowserRouter>
    </Provider>
  );
  const formElement = screen.getByText("Create an Account");
  expect(formElement).toBeInTheDocument();
});
