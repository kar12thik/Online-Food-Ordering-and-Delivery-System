import { Link } from "react-router-dom";

function AddMenuItem({mockstore}) {
  const isLoggedIn = mockstore.isLoggedIn
  const isRestaurant = mockstore.isRestaurant
  return (
    <div data-testid="add-food-form">
      {isLoggedIn && isRestaurant ? (
        <div className="flex items-center bg-center bg-restaurant-cover justify-center w-screen h-screen sm:h-4/5 bg-gray-100 text-gray-800 p-8 sm:pt-0 overflow-hidden">
          <div className="p-4 sm:p-8 rounded border border-gray-200 bg-white mt-1 shadow-lg">
            <h1 className="font-medium text-3xl">Add Menu Items</h1>
            <p className="text-gray-600 mt-6 italic">
              A meal without new menu items is like a day without sunshine.
            </p>

            <form>
              <div className="mt-8 grid lg:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm text-gray-700 block mb-1 font-medium"
                  >
                    Item Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                    placeholder="Enter Dish Name"
                    data-testid="itemname-input"
                  />
                </div>

                <div>
                  <label
                    htmlFor="ingredients"
                    className="text-sm text-gray-700 block mb-1 font-medium"
                  >
                    Item Ingredients
                  </label>
                  <input
                    type="text"
                    name="ingredients"
                    id="ingredients"
                    className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                    placeholder="Enter Dish Ingredients"
                    data-testid="itemingredients-input"
                  />
                </div>

                <div>
                  <label
                    htmlFor="job"
                    className="text-sm text-gray-700 block mb-1 font-medium"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                    placeholder="Enter price"
                    onChange={(e) => {
                    }}
                    data-testid="price-input"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-700 block mb-1 font-medium">
                    Select Item Category:
                  </label>
                </div>
              </div>
              <div className="mt-4 grid lg:grid-cols-1 gap-4">
                <div>
                  <p className="text-sm text-gray-700 block mb-1 font-medium">
                    Item Image
                  </p>
                  <div className="relative border-2 border-gray-300 border-dashed rounded-md">
                    <input
                      type="file"
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                      id="itemProfileImage"
                      accept="image/*"
                    />
                  </div>
                </div>
              </div>

              <div className="space-x-4 mt-8">
                <button
                  type="submit"
                  className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50"
                >
                  ADD ITEM
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="text-center font-extrabold p-28">
          Only Logged-In Restaurant Owners Can Add Menu Items. Please{" "}
          <Link className="text-blue-600" to="/login">
            Login
          </Link>{" "}
          to continue!
        </div>
      )}
    </div>
  );
}

export default AddMenuItem;
