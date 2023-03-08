import React from "react";

function SearchRest({ dataTestId }) {
  return (
    <div className="border" data-testid={dataTestId}>
      <div className="flex h-screen bg-[url('https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80')] bg-no-repeat bg-cover">
        <form className="m-auto items-center">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <h2 className="mb-4 font-sans items-center text-center text-2xl font-extrabold uppercase leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl">
            Order your <br/> favorite meals, <br/> anytime, anywhere!
          </h2>
          <div className="mx-auto flex w-auto content-center justify-center">
            <div className=" inset-y-0 flex items-center ">
              <svg
                aria-hidden="true"
                className="ml-2 pointer-events-none absolute h-5 w-5 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <input
                type="text"
                id="simple-search"
                className="block sm:w-auto md:w-80 lg:w-96 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Search Restaurants..."
                required
              />
            </div>

            <button
              type="submit"
              className="ml-2 rounded-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4">
            <div className="font-bold">Restaurants</div>
            <div className="font-bold">Delivery</div>
            <div className="font-bold">Reservations</div>
            <div className="font-bold">Home Services</div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchRest;
