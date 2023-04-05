import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Restaurants from "../screens/Restaurants";
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

// test("should render Featured Restaurants component", (done) => {
//   render(
//     <BrowserRouter>
//       {" "}
//       <Restaurants />{" "}
//     </BrowserRouter>
//   );

//   const processInfoElement = screen.getAllByTestId("Featured Restaurants");
//   expect(processInfoElement[0]).toBeInTheDocument();
//   done();
// });
