import FeaturedRestCards from "./FeaturedRestCards";

function FeaturedRest({ dataTestId }) {
  return (
    <div className="border bg-slate-200 p-8" data-testid={dataTestId}>
      <h1 className="text-4xl font-bold">FEATURED RESTAURANTS</h1>

      <div className="flex justify-center items-center">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
          data-testid="rest-cards"
        >
          <FeaturedRestCards
            restImg={require("../assets/images/mcdonald.png")}
            restName="McDonald's"
            restDish="Burgers, Fries, Drinks"
            rating={3}
            liked={true}
          />
          <FeaturedRestCards
            restImg={require("../assets/images/melsdinner.png")}
            restName="Mel's Diner"
            restDish="Sandwiches, Breakfast Platters"
            rating={4}
            liked={false}
          />
          <FeaturedRestCards
            restImg={require("../assets/images/AWcanada.jpg")}
            restName="A&W Canada"
            restDish="Burgers, Chicken"
            rating={5}
            liked={false}
          />
          <FeaturedRestCards
            restImg={require("../assets/images/williams.jpeg")}
            restName="Williams Fresh Cafe"
            restDish="Sandwiches, Wraps, Coffee"
            rating={3}
            liked={false}
          />
          <FeaturedRestCards
            restImg={require("../assets/images/hometaste.png")}
            restName="HomeTaste"
            restDish="Wraps, Curry"
            rating={5}
            liked={true}
          />
          <FeaturedRestCards
            restImg={require("../assets/images/harveys.png")}
            restName="Harveys"
            restDish="Burgers, Poutines"
            rating={3}
            liked={false}
          />
        </div>
      </div>
    </div>
  );
}

export default FeaturedRest;
