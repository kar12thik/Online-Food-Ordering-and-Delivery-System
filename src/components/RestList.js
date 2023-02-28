import FeaturedRestCards1 from "./FeaturedRestCards1";

function RestList({dataTestId}) {
  const imgUrl =
    "https://react-quick-food.firebaseapp.com/static/media/listing-logo12.c9102623.png";
  return (
    // <div className="border bg-white p-8" data-testid={dataTestId}>
    //   <h1 className="text-4xl font-bold">FEATURED RESTAURANTS</h1>
    //   <div className="flex justify-center items-center">
    //     <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
    //       <FeaturedRestCards1
    //         restImg={imgUrl}
    //         restName="Chefs"
    //         restDish="Egg Fry, Noodles, Pastry"
    //       />
    //       <FeaturedRestCards1
    //         restImg={imgUrl}
    //         restName="Chefs"
    //         restDish="Egg Fry, Noodles, Pastry"
    //       />
    //       <FeaturedRestCards1
    //         restImg={imgUrl}
    //         restName="Chefs"
    //         restDish="Egg Fry, Noodles, Pastry"
    //       />
    //       <FeaturedRestCards1
    //         restImg={imgUrl}
    //         restName="Chefs"
    //         restDish="Egg Fry, Noodles, Pastry"
    //       />
    //       <FeaturedRestCards1
    //         restImg={imgUrl}
    //         restName="Chefs"
    //         restDish="Egg Fry, Noodles, Pastry"
    //       />
    //       <FeaturedRestCards1
    //         restImg={imgUrl}
    //         restName="Chefs"
    //         restDish="Egg Fry, Noodles, Pastry"
    //       />
    //     </div>
    //   </div>
    // </div>
    <div className="container-fluid bg-slate-200">
            <div className="container">
                <div className="flex mx-auto flex-col md:flex-row lg:flex-row sm:space-x-0 md:space-x-4 lg:space-x-4 pt-10 pl-20 pb-10 ml-10">
                    <aside className="w-1/3 justify-center">
                        <div>
                            <h3 class="mb-4 font-bold text-gray-900 dark:text-white">Categories</h3>
                            <ul class="w-60 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                    <div class="flex items-center pl-3">
                                        <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                        <label for="vue-checkbox" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Chicken</label>
                                    </div>
                                </li>
                                <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                    <div class="flex items-center pl-3">
                                        <input id="react-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                        <label for="react-checkbox" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Burgers</label>
                                    </div>
                                </li>
                                <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                    <div class="flex items-center pl-3">
                                        <input id="angular-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                        <label for="angular-checkbox" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pizza</label>
                                    </div>
                                </li>
                                <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                    <div class="flex items-center pl-3">
                                        <input id="laravel-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                        <label for="laravel-checkbox" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sauces</label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </aside>
                    <div className="w-2/3 justify-center h-[calc(100vh-5.75rem)] sticky overflow-y-scroll overscroll-contain">
                    <h3 class="justify-center mb-4 font-bold text-gray-900 dark:text-white">Featured Restaurants</h3>
                        <div className="flex justify-center items-center">
                            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                            <FeaturedRestCards1
                                restImg={imgUrl}
                                restName="Chefs"
                                restDish="Egg Fry, Noodles, Pastry"
                            />
                            <FeaturedRestCards1
                                restImg={imgUrl}
                                restName="Chefs"
                                restDish="Egg Fry, Noodles, Pastry"
                            />
                            <FeaturedRestCards1
                                restImg={imgUrl}
                                restName="Chefs"
                                restDish="Egg Fry, Noodles, Pastry"
                            />
                            <FeaturedRestCards1
                                restImg={imgUrl}
                                restName="Chefs"
                                restDish="Egg Fry, Noodles, Pastry"
                            />
                            <FeaturedRestCards1
                                restImg={imgUrl}
                                restName="Chefs"
                                restDish="Egg Fry, Noodles, Pastry"
                            />
                            <FeaturedRestCards1
                                restImg={imgUrl}
                                restName="Chefs"
                                restDish="Egg Fry, Noodles, Pastry"
                            />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
  );
}

export default RestList;
