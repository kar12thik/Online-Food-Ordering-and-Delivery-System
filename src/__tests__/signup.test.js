import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "../screens/Login";
import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

window.scrollTo = jest.fn();

afterEach(() => {
  cleanup();
  jest.resetAllMocks();
});
afterAll(() => {
  jest.clearAllMocks();
});

test("should render Register component correctly", () => {
  render(<BrowserRouter>
    {" "}
    <Login />{" "}
  </BrowserRouter>);
  const element = screen.getByRole("heading");
  expect(element).toBeInTheDocument();
});

test("should show error message when all the fields are not entered", async () => {
  render(<BrowserRouter>
    {" "}
    <Login />{" "}
  </BrowserRouter>);
  const buttonElement = screen.getByRole("button");
  userEvent.click(buttonElement);
});

test("should render Create an Account form title", () => {
  render(<BrowserRouter>
    {" "}
    <Login />{" "}
  </BrowserRouter>);
  const formElement = screen.getByText("Create an Account");
  expect(formElement).toBeInTheDocument();
});

test("Should render all labels", () => {
  render(<BrowserRouter>
    {" "}
    <Login />{" "}
  </BrowserRouter>);
  fireEvent.click(screen.getByText("Create an Account"));
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
  render(<BrowserRouter>
    {" "}
    <Login />{" "}
  </BrowserRouter>);
  fireEvent.click(screen.getByText("Create an Account"));
  expect(screen.getByText("Accept Terms and Conditions")).toBeInTheDocument();
});

test("Should render Login here link", async () => {
  render(<BrowserRouter>
    {" "}
    <Login />{" "}
  </BrowserRouter>);
  fireEvent.click(screen.getByText("Create an Account"));
  expect(screen.getByText("Login Here")).toBeInTheDocument();
});

test("Should render full name input field", async () => {
  render(<BrowserRouter>
    {" "}
    <Login />{" "}
  </BrowserRouter>);
  fireEvent.click(screen.getByText("Create an Account"));
  const inputEl = screen.getByTestId("fullname-input");
  expect(inputEl).toBeInTheDocument();
  expect(inputEl).toHaveAttribute("type", "text");
});

test("Should render email input field", async () => {
  render(<BrowserRouter>
    {" "}
    <Login />{" "}
  </BrowserRouter>);
  fireEvent.click(screen.getByText("Create an Account"));

  const inputEmail = screen.getByTestId("email-input");
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveAttribute("type", "email");

});

test("Should render password input fields", async () => {
  render(<BrowserRouter>
    {" "}
    <Login />{" "}
  </BrowserRouter>);
  fireEvent.click(screen.getByText("Create an Account"));

  const inputPassword = screen.getByTestId("password-input");
  expect(inputPassword).toBeInTheDocument();
  expect(inputPassword).toHaveAttribute("type", "password");

  const inputConfirmPassword = screen.getByTestId("confirmpassword-input");
  expect(inputConfirmPassword).toBeInTheDocument();
  expect(inputConfirmPassword).toHaveAttribute("type", "password");
});

test("Should render city, country and age input fields", async () => {
  render(<BrowserRouter>
    {" "}
    <Login />{" "}
  </BrowserRouter>);
  fireEvent.click(screen.getByText("Create an Account"));

  const inputCity = screen.getByTestId("city-input");
  expect(inputCity).toBeInTheDocument();
  expect(inputCity).toHaveAttribute("type", "text");

  const inputCountry = screen.getByTestId("country-input");
  expect(inputCountry).toBeInTheDocument();
  expect(inputCountry).toHaveAttribute("type", "text");

  const ageCountry = screen.getByTestId("age-input");
  expect(ageCountry).toBeInTheDocument();

});


