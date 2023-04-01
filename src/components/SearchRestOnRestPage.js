import { useEffect, React } from "react";
import { useState } from "react";

function SearchRestOnRestPage({ dataTestId, handleSearchBar, placeholder }) {
  const [searchBoxText, setsearchBoxText] = useState("");

  function handleInputChange(event) {
    setsearchBoxText(event.target.value);
  }

  useEffect(() => { 
    handleSearchBar(searchBoxText);
  }, [searchBoxText])

  return (
    <div className="border" data-testid={dataTestId}>
      <div className="flex h-52 bg-rest-page-bg1 bg-cover bg-no-repeat">
        <form className="m-auto items-center">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
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
                placeholder= { placeholder ? (placeholder) : ("Search Restaurants...")}
                value={searchBoxText}
                onChange={ handleInputChange }
                required
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchRestOnRestPage;
