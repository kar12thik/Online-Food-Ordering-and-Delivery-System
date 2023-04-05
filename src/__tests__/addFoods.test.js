import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AddMenuItem from "../_mocks_/mockAddMenuItems";
import React from "react";
import "@testing-library/jest-dom";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/index";
import { Provider } from "react-redux";

const store = configureStore({ reducer: rootReducer });

const mockstore = {
    isLoggedIn: true,
    isRestaurant: true
}

  test('Should render the form title', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          {" "}
          <AddMenuItem mockstore={mockstore} />{" "}
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText("Add Menu Items")).toBeInTheDocument();
  });

  test('Should render all labels', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          {" "}
          <AddMenuItem mockstore={mockstore} />{" "}
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText("A meal without new menu items is like a day without sunshine.")).toBeInTheDocument();
    expect(screen.getByText("Item Name")).toBeInTheDocument();
    expect(screen.getByText("Item Ingredients")).toBeInTheDocument();
    expect(screen.getByText("Price")).toBeInTheDocument();
    expect(screen.getByText("Select Item Category:")).toBeInTheDocument();
    expect(screen.getByText("Item Image")).toBeInTheDocument();
  });

  test("Should render Item Name input field",() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          {" "}
          <AddMenuItem mockstore={mockstore} />{" "}
        </BrowserRouter>
      </Provider>
      );
    const inputEl = screen.getByTestId("itemname-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");
  });

  test("Should render Item Ingredients input field",() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          {" "}
          <AddMenuItem mockstore={mockstore} />{" "}
        </BrowserRouter>
      </Provider>
      );
    const inputEl = screen.getByTestId("itemingredients-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");
  });

  test("Should render price input field",() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          {" "}
          <AddMenuItem mockstore={mockstore} />{" "}
        </BrowserRouter>
      </Provider>
      );
    const inputEl = screen.getByTestId("price-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "number");
  });