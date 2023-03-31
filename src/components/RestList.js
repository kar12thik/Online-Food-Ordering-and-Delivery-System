import FeaturedRestCardsForRestPage from "./FeaturedRestCardsForRestPage";

function RestList({item}) {
    return (
        <div className="">
            <h3 className="justify-center mb-4 font-bold text-gray-900 dark:text-white">Featured Restaurants</h3>
            {item.length > 0 ? 
                <div className="">
                    <div className="filterRest grid sm:w-full md:11/12 lg:w-10/12 grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                        {item.map((Val) => {
                            return(
                            <FeaturedRestCardsForRestPage
                                restVal={Val}
                            />
                    );
                })}
                </div>
                </div>
                 : 
                <div className="flex flex-col item-center h-screen">
                    <p className="text-xl text-gray-600">Sorry, we couldn't find any restaurants matching your search.</p>
                </div>
}
        </div>
    );
}

export default RestList;
