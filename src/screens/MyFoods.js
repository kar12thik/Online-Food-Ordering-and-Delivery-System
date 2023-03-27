import { useEffect, React } from "react";
import MyFoodsCover from '../components/MyFoodsCover';
import MyFoodList from '../components/MyFoodList';

function MyFoods() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
        <MyFoodsCover />
        <MyFoodList />
    </div>
  )
}

export default MyFoods;
