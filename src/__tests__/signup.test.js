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

test("should render Register component correctly", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        {" "}
        <Login />{" "}
      </BrowserRouter>
    </Provider>
  );
  const element = screen.getByRole("heading");
  expect(element).toBeInTheDocument();
});

test("should show error message when all the fields are not entered", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        {" "}
        <Login />{" "}
      </BrowserRouter>
    </Provider>
  );
  const buttonElement = screen.getByRole("button");
  await userEvent.click(buttonElement);
});

test("should render Create an Account form title", () => {
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

test("Should render all labels", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        {" "}
        <Login />{" "}
      </BrowserRouter>
    </Provider>
    );
  await fireEvent.click(screen.getByText("Create an Account"));
  expect(screen.getByText("Full Name")).toBeInTheDocument();
  expect(screen.getByText("Email")).toBeInTheDocument();
  expect(screen.getByText("Password")).toBeInTheDocument();
  expect(screen.getByText("City")).toBeInTheDocument();
  expect(screen.getByText("Country")).toBeInTheDocument();
  expect(screen.getByText("Gender")).toBeInTheDocument();
  expect(screen.getByText("Age")).toBeInTheDocument();
  expect(screen.getByText("Country")).toBeInTheDocument();
  expect(screen.getByText("Already have an account?")).toBeInTheDocument();
});

test("Should render Terms and Conditions label", async () => {
  render(
  <Provider store={store}>
    <BrowserRouter>
      {" "}
      <Login />{" "}
    </BrowserRouter>
  </Provider>
  );
  await fireEvent.click(screen.getByText("Create an Account"));
  expect(screen.getByText("Accept Terms and Conditions")).toBeInTheDocument();
});

test("Should render Login here link", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        {" "}
        <Login />{" "}
      </BrowserRouter>
    </Provider>
    );
  await fireEvent.click(screen.getByText("Create an Account"));
  expect(screen.getByText("Login Here")).toBeInTheDocument();
});

test("Should render full name input field", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        {" "}
        <Login />{" "}
      </BrowserRouter>
    </Provider>
    );
  await fireEvent.click(screen.getByText("Create an Account"));
  const inputEl = screen.getByTestId("fullname-input");
  expect(inputEl).toBeInTheDocument();
  expect(inputEl).toHaveAttribute("type", "text");
});

test("Should render email input field", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        {" "}
        <Login />{" "}
      </BrowserRouter>
    </Provider>
    );
  await fireEvent.click(screen.getByText("Create an Account"));

  const inputEmail = screen.getByTestId("email-input");
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveAttribute("type", "email");

});

test("Should render password input fields", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        {" "}
        <Login />{" "}
      </BrowserRouter>
    </Provider>
    );
  await fireEvent.click(screen.getByText("Create an Account"));

  const inputPassword = screen.getByTestId("password-input");
  expect(inputPassword).toBeInTheDocument();
  expect(inputPassword).toHaveAttribute("type", "password");

  const inputConfirmPassword = screen.getByTestId("confirmpassword-input");
  expect(inputConfirmPassword).toBeInTheDocument();
  expect(inputConfirmPassword).toHaveAttribute("type", "password");
});

test("Should render city, country and age input fields", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        {" "}
        <Login />{" "}
      </BrowserRouter>
    </Provider>
    );
  await fireEvent.click(screen.getByText("Create an Account"));

  const inputCity = screen.getByTestId("city-input");
  expect(inputCity).toBeInTheDocument();
  expect(inputCity).toHaveAttribute("type", "text");

  const inputCountry = screen.getByTestId("country-input");
  expect(inputCountry).toBeInTheDocument();
  expect(inputCountry).toHaveAttribute("type", "text");

  const ageCountry = screen.getByTestId("age-input");
  expect(ageCountry).toBeInTheDocument();

});

test('validates the form fields', async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        {" "}
        <Login />{" "}
      </BrowserRouter>
    </Provider>
    );
  await fireEvent.click(screen.getByText("Create an Account"));
  const submitButton = screen.queryAllByText("Create an Account");
  await fireEvent.click(submitButton[1]);
  const usernameError = screen.getByText("Invalid Input !! Please enter a valid name.");
  expect(usernameError).toBeInTheDocument();
});


