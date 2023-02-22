import FeaturedRestCards from "./FeaturedRestCards";

function RestList({dataTestId}) {
  const imgUrl =
    "https://react-quick-food.firebaseapp.com/static/media/listing-logo12.c9102623.png";
  return (
    <div className="border bg-white p-8" data-testid={dataTestId}>
      <h1 className="text-4xl font-bold">FEATURED RESTAURANTS</h1>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
          <FeaturedRestCards
            restImg={imgUrl}
            restName="Chefs"
            restDish="Egg Fry, Noodles, Pastry"
          />
          <FeaturedRestCards
            restImg={imgUrl}
            restName="Chefs"
            restDish="Egg Fry, Noodles, Pastry"
          />
          <FeaturedRestCards
            restImg={imgUrl}
            restName="Chefs"
            restDish="Egg Fry, Noodles, Pastry"
          />
          <FeaturedRestCards
            restImg={imgUrl}
            restName="Chefs"
            restDish="Egg Fry, Noodles, Pastry"
          />
          <FeaturedRestCards
            restImg={imgUrl}
            restName="Chefs"
            restDish="Egg Fry, Noodles, Pastry"
          />
          <FeaturedRestCards
            restImg={imgUrl}
            restName="Chefs"
            restDish="Egg Fry, Noodles, Pastry"
          />
        </div>
      </div>
    </div>
  );
}

export default RestList;
