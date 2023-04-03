/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,
  screen,
  cleanup,
  fireEvent,
  act,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "../screens/Login";
import React from "react";
import "@testing-library/jest-dom";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/index";
import { Provider } from "react-redux";

window.scrollTo = jest.fn();
jest.spyOn(window, "alert").mockImplementation(() => {});

afterEach(() => {
  cleanup();
  jest.resetAllMocks();
});
afterAll(() => {
  jest.clearAllMocks();
});

const store = configureStore({ reducer: rootReducer });

test("should render Register component correctly", (done) => {
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
  done();
});

test("should render Create an account button", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        {" "}
        <Login />{" "}
      </BrowserRouter>
    </Provider>
  );
  await act(async () => {
    await fireEvent.click(screen.getByText("Create an Account"));
  });
  const signupButton = screen.getByTestId("signup-button");
  expect(signupButton).toBeInTheDocument();
});

test("should render Create an Account form title", (done) => {
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
  done();
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
  await act(async () => {
    await fireEvent.click(screen.getByText("Create an Account"));
  });
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
  await act(async () => {
    await fireEvent.click(screen.getByText("Create an Account"));
  });
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
  await act(async () => {
    await fireEvent.click(screen.getByText("Create an Account"));
  });
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
  await act(async () => {
    await fireEvent.click(screen.getByText("Create an Account"));
  });
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
  await act(async () => {
    await fireEvent.click(screen.getByText("Create an Account"));
  });

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
  await act(async () => {
    await fireEvent.click(screen.getByText("Create an Account"));
  });

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
  await act(async () => {
    await fireEvent.click(screen.getByText("Create an Account"));
  });

  const inputCity = screen.getByTestId("city-input");
  expect(inputCity).toBeInTheDocument();
  expect(inputCity).toHaveAttribute("type", "text");

  const inputCountry = screen.getByTestId("country-input");
  expect(inputCountry).toBeInTheDocument();
  expect(inputCountry).toHaveAttribute("type", "text");

  const ageCountry = screen.getByTestId("age-input");
  expect(ageCountry).toBeInTheDocument();
});

test("validates the form fields", async () => {
  window.alert = jest.fn();
  render(
    <Provider store={store}>
      <BrowserRouter>
        {" "}
        <Login />{" "}
      </BrowserRouter>
    </Provider>
  );
  await act(async () => {
    await fireEvent.click(screen.getByText("Create an Account"));
  });
  const submitButton = screen.queryAllByText("Create an Account");
  await act(async () => {
    await fireEvent.click(submitButton[1]);
  });
  expect(window.alert).toBeCalledWith(
    "Invalid Input !! Please enter a valid name."
  );
});
