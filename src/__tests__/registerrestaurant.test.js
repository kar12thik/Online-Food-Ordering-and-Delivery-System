/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,
  screen,
  cleanup,
  fireEvent,
  act,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RegisterRestaurant from "../screens/RegisterRestaurant";
import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/index";
import { Provider } from "react-redux";

jest.spyOn(window, "alert").mockImplementation(() => {});

window.scrollTo = jest.fn();
afterEach(() => {
  cleanup();
  jest.resetAllMocks();
});
afterAll(() => {
  jest.clearAllMocks();
});

const store = configureStore({ reducer: rootReducer });

test("should render Register Restaurant component correctly", (done) => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        {" "}
        <RegisterRestaurant />{" "}
      </BrowserRouter>
    </Provider>
  );
  const element = screen.getByRole("heading");
  expect(element).toBeInTheDocument();
  done();
});

test("should show error message when all the fields are not entered", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        {" "}
        <RegisterRestaurant />{" "}
      </BrowserRouter>
    </Provider>
  );
  const buttonElement = screen.getByRole("button");
  await act(async () => {
    await userEvent.click(buttonElement);
  });
});

test("should render Register a Restaurant form title", (done) => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        {" "}
        <RegisterRestaurant />{" "}
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
        <RegisterRestaurant />{" "}
      </BrowserRouter>
    </Provider>
  );
  await act(async () => {
    await fireEvent.click(screen.getByText("Create an Account"));
  });
  expect(screen.getByText("Restaurant Name")).toBeInTheDocument();
  expect(screen.getByText("Restaurant Category")).toBeInTheDocument();
  expect(screen.getByText("Restaurant Description")).toBeInTheDocument();
  expect(screen.getByText("Restaurant Owner Name")).toBeInTheDocument();
  expect(screen.getByText("Email")).toBeInTheDocument();
  expect(screen.getByText("Password")).toBeInTheDocument();
  expect(screen.getByText("Confirm Password")).toBeInTheDocument();
  expect(screen.getByText("City")).toBeInTheDocument();
  expect(screen.getByText("Country")).toBeInTheDocument();
  expect(screen.getByText("Gender")).toBeInTheDocument();
  expect(screen.getByText("Age")).toBeInTheDocument();
});

test("Should render Terms and Conditions label", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        {" "}
        <RegisterRestaurant />{" "}
      </BrowserRouter>
    </Provider>
  );
  await act(async () => {
    await fireEvent.click(screen.getByText("Create an Account"));
  });
  expect(screen.getByText("Accept Terms and Conditions")).toBeInTheDocument();
});

test("Should render restaurant name input field", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        {" "}
        <RegisterRestaurant />{" "}
      </BrowserRouter>
    </Provider>
  );
  await act(async () => {
    await fireEvent.click(screen.getByText("Create an Account"));
  });
  const inputEl = screen.getByTestId("restfullname-input");
  expect(inputEl).toBeInTheDocument();
  expect(inputEl).toHaveAttribute("type", "text");
});

test("Should render restaurant category dropdown", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        {" "}
        <RegisterRestaurant />{" "}
      </BrowserRouter>
    </Provider>
  );
  await act(async () => {
    await fireEvent.click(screen.getByText("Create an Account"));
  });
  const dropdown = screen.getByTestId("restaurant-category-dropdown");
  expect(dropdown).toBeInTheDocument();
});

test("Should render restaurant description input field", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        {" "}
        <RegisterRestaurant />{" "}
      </BrowserRouter>
    </Provider>
  );
  await act(async () => {
    await fireEvent.click(screen.getByText("Create an Account"));
  });
  const inputEl = screen.getByTestId("restDescription-input");
  expect(inputEl).toBeInTheDocument();
  expect(inputEl).toHaveAttribute("type", "text");
});

test("Should render restaurant owner name input field", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        {" "}
        <RegisterRestaurant />{" "}
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
        <RegisterRestaurant />{" "}
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
        <RegisterRestaurant />{" "}
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

test("Should render city and country and age input fields", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        {" "}
        <RegisterRestaurant />{" "}
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
        <RegisterRestaurant />{" "}
      </BrowserRouter>
    </Provider>
  );
  await act(async () => {
    await fireEvent.click(screen.getByText("Create an Account"));
  });
  const submitButton = screen.getByText("Create an Account");
  await act(async () => {
    fireEvent.click(submitButton);
  });
  expect(window.alert).toBeCalledWith(
    "Invalid Input !! Please enter a valid restaurant name."
  );
});
