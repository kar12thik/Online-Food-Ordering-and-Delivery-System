import { render, screen, cleanup, act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Restaurants from "../screens/Restaurants";
import React from "react";
//import App from "../App";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/index";
import { Provider } from "react-redux";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

//import RestaurantDetails from "../screens/RestaurantDetails";

window.scrollTo = jest.fn();

afterEach(() => {
  cleanup();
  jest.resetAllMocks();
});
afterAll(() => {
  jest.clearAllMocks();
});

const store = configureStore({ reducer: rootReducer });

describe("Wrapping Firebase For Restaurants Test", () => {
  let firestore;
  beforeAll(() => {
    firestore = firebase.firestore();
  });

  afterEach(() => {
    // Re-enable network access after each test
    // firestore.enableNetwork();
  });
});

test("should render Search Restaurants component", (done) => {
  render(
    <BrowserRouter>
      {" "}
      <Restaurants />{" "}
    </BrowserRouter>
  );
  const searchRestElement = screen.getAllByTestId(
    "Search_Restaurants_On_RestPage"
  );
  expect(searchRestElement[0]).toBeInTheDocument();
  done();
});

test("should render Featured Restaurants component", (done) => {
  render(
    <BrowserRouter>
      <Restaurants />
    </BrowserRouter>
  );
  expect(screen.getByTestId("Featured_Restaurants")).toBeInTheDocument();
  done();
});
test("should render Featured Restaurants component", (done) => {
  render(
    <BrowserRouter>
      <Restaurants />
    </BrowserRouter>
  );
  expect(screen.getByText("Featured Restaurants")).toBeInTheDocument();
  expect(
    screen.getByText(
      "Sorry, we couldn't find any restaurants matching your search."
    )
  ).toBeInTheDocument();

  done();
});

test("should render Categories component", (done) => {
  render(
    <BrowserRouter>
      <Restaurants />
    </BrowserRouter>
  );
  expect(screen.getByText("Categories")).toBeInTheDocument();
  done();
});

test("should render Restaurant Categories component", (done) => {
  render(
    <BrowserRouter>
      <Restaurants />
    </BrowserRouter>
  );

  expect(screen.getByTestId("Rest_Categories")).toBeInTheDocument();
  done();
});

// test("full app rendering/navigating to Restaurant Details page", async () => {
//   // const store = {};
//   firestore.disableNetwork();
//   render(
//     <Provider store={store}>
//       <BrowserRouter>
//         <Restaurants />
//       </BrowserRouter>
//     </Provider>
//   );
//   const user = userEvent.setup();
//   expect(screen.getByText(/Menu/i)).toBeInTheDocument();
//   expect(screen.queryByText("Menu")).toBeNull();

//   // verify page content for expected route after navigating
//   await act(async () => {
//     await user.click(screen.getByText("Menu"));
//   });
//   expect(screen.getByText("Featured Restaurants")).toBeInTheDocument();
// });

test("should render Menu Button", (done) => {
  firestore.disableNetwork();
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Restaurants />
      </BrowserRouter>
    </Provider>
  );
  const menuElement = screen.getByText("Menu");
  expect(menuElement).toBeInTheDocument();
  done();
});
