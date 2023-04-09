import { useEffect, useState, React } from "react";
import { useSelector } from "react-redux";

function MyFoodsCover() {

  const [typeOfFood, settypeOfFood] = useState([]);
  const [userProfileImageUrl, setuserProfileImageUrl] = useState('');
  const [restDescription, setrestDescription] = useState('');
  const [restName, setrestName] = useState('');
  
  const isLoggedIn = useSelector((state) => state.loggedInUser.loggedIn);
  const loggedtypeOfFood = useSelector((state) => state.loggedInUser.typeOfFood);
  const loggeduserProfileImageUrl = useSelector((state) => state.loggedInUser.userProfileImageUrl);
  const loggedrestDescription = useSelector((state) => state.loggedInUser.restDescription);
  const loggedrestName = useSelector((state) => state.loggedInUser.restName);

  useEffect(() => {
    settypeOfFood(loggedtypeOfFood);
    setuserProfileImageUrl(loggeduserProfileImageUrl);
    setrestDescription(loggedrestDescription);
    setrestName(loggedrestName);
  }, [loggedtypeOfFood, loggeduserProfileImageUrl, loggedrestDescription, loggedrestName]);

  return (
    <div className="container-fluid h-72 bg-cover bg-restaurant-cover">
        <div>
            <div className="container p-20 mx-0">
                <div className="container" data-testid="rest-cover">
                    {
                        isLoggedIn ? (
                            <div className="flex">
                                <div className="items-center col-span-2">
                                    <img className="w-48 scale-75" alt="Food" src={ userProfileImageUrl } />
                                </div>
                                <div className="pt-16">
                                    <h1 className="text-2xl text-white font-semibold">{ restName }</h1>
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
