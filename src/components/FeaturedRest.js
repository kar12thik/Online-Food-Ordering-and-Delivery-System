import FeaturedRestCards from "./FeaturedRestCards";

function FeaturedRest({dataTestId}) {
  const imgUrl =
    "https://react-quick-food.firebaseapp.com/static/media/listing-logo12.c9102623.png";
  return (
    <div className="border bg-slate-200 p-8" data-testid={dataTestId}>
      <h1 className="text-4xl font-bold">FEATURED RESTAURANTS</h1>

      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <FeaturedRestCards
            restImg={require('../assets/images/mcdonald.png')}
            restName="McDonald's"
            restDish="Burgers, Fries, Drinks"
          />
          <FeaturedRestCards
            restImg={require('../assets/images/melsdinner.png')}
            restName="Mel's Diner"
            restDish="Sandwiches, Breakfast Platters"
          />
          <FeaturedRestCards
            restImg={require('../assets/images/AWcanada.jpg')}
            restName="A&W Canada"
            restDish="Burgers, Chicken"
          />
          <FeaturedRestCards
            restImg={require('../assets/images/williams.jpeg')}
            restName="Williams Fresh Cafe"
            restDish="Sandwiches, Wraps, Coffee"
          />
          <FeaturedRestCards
            restImg={require('../assets/images/hometaste.png')}
            restName="HomeTaste"
            restDish="Wraps, Curry"
          />
          <FeaturedRestCards
            restImg={require('../assets/images/harveys.png')}
            restName="Harveys"
            restDish="Burgers, Poutines"
          />
        </div>
      </div>
    </div>
  );
}

export default FeaturedRest;
