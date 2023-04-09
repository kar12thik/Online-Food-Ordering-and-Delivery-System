import { useEffect, useState, React } from "react";
import { useSelector } from "react-redux";
import { myFoodList } from "../config/firebase";

function MyFoodList() {
  const [FoodList, setFoodList] = useState([]);
  const isLoggedIn = useSelector((state) => state.loggedInUser.loggedIn);

  useEffect(() => {
    myFoodList()
      .then((result) => {
        setFoodList(result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  function renderFoodList() {
    return Object.keys(FoodList).map((val) => {
      return (
        <div className="pb-10">
          <ul className="w-2/4 flex-col md:flex-row lg:flex-row ml-72 pl-20 divide-y divide-gray-200 dark:divide-gray-700">
            {isLoggedIn ? (
              <li className="pl-10 pr-10 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="w-14 h-14"
                      alt="Food"
                      src={FoodList[val].itemImageUrl}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-lg font-bold text-black truncate dark:text-white">
                      {FoodList[val].itemName}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {FoodList[val].itemIngredients}
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    ${FoodList[val].itemPrice}
                  </div>
                </div>
              </li>
            ) : null}
          </ul>
        </div>
      );
    });
  }

  return (
    <div>
      <h4 className="text-center pt-10 pb-10 text-2xl font-extrabold" data-testid="foods-list">
        My Food List
      </h4>
      {renderFoodList()}
    </div>
  );
}

export default MyFoodList;
