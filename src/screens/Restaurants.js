import { useEffect, React } from "react";
import SearchRestOnRestPage from "../components/SearchRestOnRestPage";
import RestList from "../components/RestList";

function Restaurants() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <SearchRestOnRestPage dataTestId="Search_Restaurants_On_RestPage"></SearchRestOnRestPage>
      <RestList dataTestId="Featured_Restaurants"></RestList>
    </div>
  );
}

export default Restaurants
