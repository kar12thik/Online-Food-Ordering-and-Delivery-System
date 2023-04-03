import { useState } from "react";
import { addItem } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function AddMenuItem() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.loggedInUser.loggedIn);
  const isRestaurant = useSelector((state) => state.loggedInUser.isRestaurant);
  const [selectedOption, setSelectedOption] = useState("Starter");
  const [itemProfileImage, setItemProfileImage] = useState(null);
  const [itemName, setItemName] = useState("");
  const [itemIngredients, setItemIngredients] = useState("");
  const [itemPrice, setItemPrice] = useState(0);

  const options = ["Starter", "Mains", "Sides", "Salads", "Drinks", "Desert"];

  const handleItemName = (e) => {
    const value = e;

    const itemNameFormate = /^[A-Za-z0-9\s]+$/i;
    if (value.match(itemNameFormate)) {
      setItemName(value);
    } else {
      setItemName(" ");
    }
  };

  const handleItemIngredients = (e) => {
    const value = e;

    const itemIngredientsFormate = /^[A-Za-z0-9\s,]+$/i;
    if (value.match(itemIngredientsFormate)) {
      setItemIngredients(value);
    } else {
      setItemIngredients(" ");
    }
  };

  const handleItemProfileImage = (e) => {
    const file = e.target.files[0];
    const fileType = file.type.split("/")[0];
    if (fileType !== "image") {
      window.alert("Please enter a valid item image in jpg/jpeg.");
      e.target.value = null;
      setItemProfileImage(null);
    } else {
      setItemProfileImage(e.target.files[0]);
    }
  };

  const handleOptionClick = (value) => {
    setSelectedOption(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const itemNameFormate = /^[A-Za-z0-9\s]+$/i;
    const itemIngredientsFormate = /^[A-Za-z0-9\s,]+$/i;
    if (!itemName.match(itemNameFormate)) {
      window.alert("Please enter a valid item name.");
      setItemName("");
      return;
    } else if (!itemIngredients.match(itemIngredientsFormate)) {
      window.alert(
        "Please enter a valid list of ingredients seperated by comma."
      );
      setItemIngredients("");
      return;
    } else if (itemPrice <= 0) {
      window.alert("Please enter a valid item price.");
      setItemPrice(0);
      return;
    } else if (itemProfileImage == null) {
      window.alert("Please enter a valid item image in jpg/jpeg.");
      setItemProfileImage(null);
      return;
    }

    const data = {
      itemName: itemName,
      itemIngredients: itemIngredients,
      itemPrice: itemPrice,
      itemCategory: selectedOption,
      itemImage: itemProfileImage,
    };
    try {
      const addItemReturn = await addItem(data);
      Swal.fire({
        title: "Success",
        text: addItemReturn,
        type: "success",
      }).then(() => {
        navigate("/my-foods");
      });
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error,
        type: "error",
      });
    }
  };

  return (
    <div>
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
                    onKeyUp={(e) => handleItemName(e.target.value)}
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
                    onKeyUp={(e) => handleItemIngredients(e.target.value)}
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
                      setItemPrice(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-700 block mb-1 font-medium">
                    Select Item Category:
                  </label>
                  <select
                    className="block w-full py-1 px-3 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    onChange={(e) => handleOptionClick(e.target.value)}
                  >
                    {options.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
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
                      onChange={handleItemProfileImage}
                    />
                  </div>
                </div>
              </div>

              <div className="space-x-4 mt-8">
                <button
                  type="submit"
                  className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50"
                  onClick={handleSubmit}
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
