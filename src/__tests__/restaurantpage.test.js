import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Restaurants from "../screens/Restaurants";
import FeaturedRestCardsForRestPage from "../components/FeaturedRestCardsForRestPage";
import RestCategories from "../components/RestCategories";
import RestList from "../components/RestList";
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
