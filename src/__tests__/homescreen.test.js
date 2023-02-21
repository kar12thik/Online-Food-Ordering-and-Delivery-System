import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../screens/Home";
import Banner from "../components/Banner.js";
import { SearchRest } from "../components/SearchRest";

afterEach(() => {
  cleanup();
});

test("should render Banner Component", () => {
  render(
    <BrowserRouter>
      {" "}
      <Banner />{" "}
    </BrowserRouter>,
  );
  const bannerElement = screen.getByText("Banner");
  expect(bannerElement).toBeInTheDocument();
});

test("should render Search Restaurants component", () => {
  render(
    <BrowserRouter>
      {" "}
      <Home />{" "}
    </BrowserRouter>,
  );
  const bannerElement = screen.getByText("Banner");
  expect(bannerElement).toBeInTheDocument();
  const searchRestElement = screen.getAllByTestId("Search_Restaurants");
  expect(searchRestElement[0]).toBeInTheDocument();
});

test("should render How it works component", () => {
  render(
    <BrowserRouter>
      {" "}
      <Home />{" "}
    </BrowserRouter>,
  );

  const processInfoElement = screen.getAllByTestId("Howitworks");
  expect(processInfoElement[0]).toBeInTheDocument();
});

test("should render Order Now component", () => {
  render(
    <BrowserRouter>
      {" "}
      <Home />{" "}
    </BrowserRouter>,
  );

  const processInfoElement = screen.getAllByTestId("OrderNow");
  expect(processInfoElement[0]).toBeInTheDocument();
});

test("should render Featured Restaurants component", () => {
  render(
    <BrowserRouter>
      {" "}
      <Home />{" "}
    </BrowserRouter>,
  );

  const processInfoElement = screen.getAllByTestId("FeaturedRestaurants");
  expect(processInfoElement[0]).toBeInTheDocument();
});
