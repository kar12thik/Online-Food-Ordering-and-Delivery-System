import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MyFoodsCover from "../components/MyFoodsCover";
import MyFoodList from "../components/MyFoodList";
import React from "react";
import "@testing-library/jest-dom";
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

test("should render cover component elements", (done) => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        {" "}
        <MyFoodsCover />{" "}
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getByTestId("rest-cover")).toBeInTheDocument();
  done();
});

test("should render my food list component elements", (done) => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          {" "}
          <MyFoodList />{" "}
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByTestId("foods-list")).toBeInTheDocument();
    done();
  });
