import { useEffect, useState, React } from "react";
import { useSelector } from "react-redux";

function MyFoodsCover() {

  const [userName, setuserName] = useState('');
  const [typeOfFood, settypeOfFood] = useState([]);
  const [userProfileImageUrl, setuserProfileImageUrl] = useState('');
  const [restDescription, setrestDescription] = useState('');
  
  const isLoggedIn = useSelector((state) => state.loggedInUser.loggedIn);
  const loggeduserName = useSelector((state) => state.loggedInUser.userName);
  const loggedtypeOfFood = useSelector((state) => state.loggedInUser.typeOfFood);
  const loggeduserProfileImageUrl = useSelector((state) => state.loggedInUser.userProfileImageUrl);
  const loggedrestDescription = useSelector((state) => state.loggedInUser.restDescription);

  useEffect(() => {
    setuserName(loggeduserName);
    settypeOfFood(loggedtypeOfFood);
    setuserProfileImageUrl(loggeduserProfileImageUrl);
    setrestDescription(loggedrestDescription);
  }, [loggeduserName, loggedtypeOfFood, loggeduserProfileImageUrl, loggedrestDescription]);

  return (
    <div className="container-fluid h-72 bg-cover bg-restaurant-cover">
        <div>
            <div className="container p-20 mx-0">
                <div className="container">
                    {
                        isLoggedIn ? (
                            <div className="flex">
                                <div className="items-center col-span-2">
                                    <img className="w-48 scale-75" alt="Food" src={ userProfileImageUrl } />
                                </div>
                                <div className="pt-16">
                                    <h1 className="text-2xl text-white font-semibold">{ userName }</h1>
                                    <p className="text-white">{ restDescription }</p>
                                </div>
                            </div>
                        ) : null
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyFoodsCover;
