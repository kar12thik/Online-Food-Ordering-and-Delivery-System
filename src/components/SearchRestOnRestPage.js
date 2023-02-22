import React from "react";

function SearchRestOnRestPage({ dataTestId }) {
  return (
    <div className="border" data-testid={dataTestId}>
      <div class="flex h-52 bg-orange-500 bg-no-repeat bg-cover">
        <form class="m-auto items-center">
          <label for="simple-search" class="sr-only">
            Search
          </label>
          <div class="mx-auto flex w-auto content-center justify-center">
            <div class=" inset-y-0 flex items-center ">
              <svg
                aria-hidden="true"
                class="ml-2 pointer-events-none absolute h-5 w-5 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-Rule="evenodd"
                ></path>
              </svg>
              <input
                type="text"
                id="simple-search"
                class="block sm:w-auto md:w-80 lg:w-96 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Search Restaurants..."
                required
              />
            </div>

            <button
              type="submit"
              class="ml-2 rounded-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              <svg
                class="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span class="sr-only">Search</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchRestOnRestPage;