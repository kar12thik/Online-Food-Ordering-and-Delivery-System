import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../screens/Home";
import { SearchRest } from "../components/SearchRest";

window.scrollTo = jest.fn();

afterEach(() => {
  cleanup();
  jest.resetAllMocks();
});
afterAll(() => {
  jest.clearAllMocks();
});

test("should render Search Restaurants component", (done) => {
  render(
    <BrowserRouter>
      {" "}
      <Home />{" "}
    </BrowserRouter>
  );
  const searchRestElement = screen.getAllByTestId("Search_Restaurants");
  expect(searchRestElement[0]).toBeInTheDocument();
  done();
});

test("should render How it works component", (done) => {
  render(
    <BrowserRouter>
      {" "}
      <Home />{" "}
    </BrowserRouter>
  );

  const processInfoElement = screen.getAllByTestId("Howitworks");
  expect(processInfoElement[0]).toBeInTheDocument();
  done();
});

test("should render Order Now component", (done) => {
  render(
    <BrowserRouter>
      {" "}
      <Home />{" "}
    </BrowserRouter>
  );

  const processInfoElement = screen.getAllByTestId("OrderNow");
  expect(processInfoElement[0]).toBeInTheDocument();
  done();
});

test("should render Featured Restaurants component", (done) => {
  render(
    <BrowserRouter>
      {" "}
      <Home />{" "}
    </BrowserRouter>
  );

  const processInfoElement = screen.getAllByTestId("FeaturedRestaurants");
  expect(processInfoElement[0]).toBeInTheDocument();
  done();
});
