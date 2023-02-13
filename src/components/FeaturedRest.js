import FeaturedRestCards from "./FeaturedRestCards";

function FeaturedRest() {
  const imgUrl =
    "https://react-quick-food.firebaseapp.com/static/media/listing-logo12.c9102623.png";
  return (
    <div className="border bg-white p-8">
      <h1 className="text-4xl font-bold">FEATURED RESTAURANT</h1>
      <p className="py-4">
        {" "}
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using{" "}
      </p>

      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
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

export default FeaturedRest;
