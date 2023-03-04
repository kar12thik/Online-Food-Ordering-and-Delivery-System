import React, { useState } from "react";
import { signUp } from "../config/firebase";
import { useNavigate } from "react-router-dom";

import "../App.css";

const RegisterRestaurant = (props) => {
  const navigate = useNavigate();
  const [registerFormError, setRegisterFormError] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userConfirmPassword, setUserConfirmPassword] = useState(false);
  const [userCity, setUserCity] = useState("");
  const [userCountry, setUserCountry] = useState("");
  const [userGender, setUserGender] = useState("Male");
  const [userAge, setUserAge] = useState("");
  const [userProfileImage, setUserProfileImage] = useState(null);
  const [userTNC, setUserTNC] = useState(false);
  const [showError, setShowError] = useState(false);
  const [message, setMessage] = useState(false);

  const handleUserName = (e) => {
    const userName = e;
    const userNameFormate = /^([A-Za-z.\s_-]).{5,}$/;
    if (userName.match(userNameFormate)) {
      setShowError(false);
      setRegisterFormError("");
      setUserName(userName);
    } else {
      setShowError(true);
      setRegisterFormError("Invalid Input !! Please enter a valid name.");
      setUserName("");
    }
  };

  const handleUserEmail = (e) => {
    const userEmail = e;
    const userEmailFormate =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (userEmail.match(userEmailFormate)) {
      setShowError(false);
      setRegisterFormError("");
      setUserEmail(userEmail);
    } else {
      setShowError(true);
      setRegisterFormError(
        "Invalid Input !! Please enter a valid email address."
      );
      setUserEmail("");
    }
  };

  const handleUserPassword = (e) => {
    const userPassword = e;
    const userPasswordFormate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;
    if (userPassword.match(userPasswordFormate)) {
      setShowError(false);
      setRegisterFormError("");
      setUserPassword(userPassword);
    } else {
      setShowError(true);
      setRegisterFormError(
        "Invalid Input !! Use alphanumeric, uppercase, lowercase & greater than 10 characters."
      );
      setUserPassword("");
    }
  };

  const handleUserConfirmPassword = (e) => {
    const userConfirmPassword = e;
    if (userConfirmPassword.match(userPassword)) {
      setShowError(false);
      setRegisterFormError("");
      setUserConfirmPassword(true);
    } else {
      setShowError(true);
      setRegisterFormError(
        "Invalid Input !! Confirmation password not matched."
      );
      setUserConfirmPassword(false);
    }
  };

  const handleUserCity = (e) => {
    const userCity = e;
    const userCityFormate = /^([A-Za-z.\s_-]).{5,}$/;
    if (userCity.match(userCityFormate)) {
      setShowError(false);
      setRegisterFormError("");
      setUserCity(userCity);
    } else {
      setShowError(true);
      setRegisterFormError("Invalid Input !! Please enter a valid city name.");
      setUserCity("");
    }
  };

  const handleUserCountry = (e) => {
    const userCountry = e;
    const userCountryFormate = /^([A-Za-z.\s_-]).{5,}$/;
    if (userCountry.match(userCountryFormate)) {
      setShowError(false);
      setRegisterFormError("");
      setUserCountry(userCountry);
    } else {
      setShowError(true);
      setRegisterFormError(
        "Invalid Input !! Please enter a valid country name."
      );
      setUserCountry("");
    }
  };

  const handleUserGender = (e) => {
    setUserGender(e.target.value);
  };

  const handleUserAge = (e) => {
    const userAge = e;
    if (userAge > 0 && userAge < 101) {
      setShowError(false);
      setRegisterFormError("");
      setUserAge(userAge);
    } else {
      setShowError(true);
      setRegisterFormError("Invalid Input !! Please enter a valid age.");
      setUserAge("");
    }
  };

  const handleUserProfileImage = (e) => {
    if (e.target.files[0] != null) {
      setUserProfileImage(e.target.files[0]);
      setShowError(false);
      setRegisterFormError("");
    } else {
      setShowError(true);
      setRegisterFormError("Invalid Input !! Please select a profile image.");
      setUserProfileImage("");
    }
  };

  const handleUserTNC = () => {
    if (!userTNC) {
      setUserTNC(true);
      setShowError(false);
      setRegisterFormError("");
    } else {
      setUserTNC(false);
      setShowError(true);
      setRegisterFormError(
        "Invalid Input !! Please accept terms and conditions."
      );
    }
  };

  const handleCreateAccountBtn = async () => {
    const userNameFormate = /^([A-Za-z.\s_-]).{5,}$/;
    const userEmailFormate =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const userPasswordFormate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;
    const userCountryFormate = /^([A-Za-z.\s_-]).{5,}$/;
    const userCityFormate = /^([A-Za-z.\s_-]).{5,}$/;

    if (!userName.match(userNameFormate)) {
      setShowError(true);
      setRegisterFormError("Invalid Input !! Please enter a valid name.");
    } else if (!userEmail.match(userEmailFormate)) {
      setShowError(true);
      setRegisterFormError(
        "Invalid Input !! Please enter a valid email address."
      );
      setUserEmail("");
    } else if (!userPassword.match(userPasswordFormate)) {
      setShowError(true);
      setRegisterFormError(
        "Invalid Password !! Use alphanumeric, uppercase, lowercase & greater than 10 characters."
      );
      setUserPassword("");
    } else if (!userConfirmPassword) {
      setShowError(true);
      setRegisterFormError(
        "Invalid Input !! Confirmation password not matched."
      );
      setUserConfirmPassword(false);
    } else if (!userCity.match(userCityFormate)) {
      setShowError(true);
      setRegisterFormError("Invalid Input !! Please enter a valid city name.");
      setUserCity("");
    } else if (!userCountry.match(userCountryFormate)) {
      setShowError(true);
      setRegisterFormError(
        "Invalid Input !! Please enter a valid country name."
      );
      setUserCountry("");
    } else if (!(userAge > 0 && userAge < 101)) {
      setShowError(true);
      setRegisterFormError("Invalid Input !! Please enter a valid age.");
      setUserAge("");
    } else if (userProfileImage === null) {
      setShowError(true);
      setRegisterFormError("Invalid Input !! Please select a profile image.");
      setUserProfileImage("");
    } else if (!userTNC) {
      setUserTNC(false);
      setShowError(true);
      setRegisterFormError("Please accept terms and conditions.");
    } else {
      const userDetails = {
        userName: userName,
        userEmail: userEmail,
        userPassword: userPassword,
        userCity: userCity,
        userCountry: userCountry,
        userGender: userGender,
        userAge: userAge,
        userProfileImage: userProfileImage,
        isRestaurant: true,
        typeOfFood: [],
      };
      try {
        const signUpReturn = await signUp(userDetails);
        console.log(signUpReturn);
        if (signUpReturn.success) {
          setMessage(false);
          navigate("/order-requests");
        } else {
          setMessage(true);
        }
      } catch (error) {
        setMessage(true);
        console.log("Error in Register Restaurant => ", error);
      }
    }
  };

  return (
    <div>
      <div className="container-fluid py-5 bg-gray-100">
        <div className="bg-white shadow p-4 mx-auto sm:w-full md:w-1/2 lg:w-2/3">
          <h1 className="text-center text-2xl tracking-widest py-2  border-b-2 border-yellow-500 font-bold text-gray-800">
            Register Restaurant
          </h1>
          <br />
          <form>
            <div className="flex flex-row items-center px-1 py-1">
              <div className="form-item w-full mx-auto md:w-1/2">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="userFullName"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                  id="userName"
                  placeholder="Full Name"
                  onKeyUp={(e) => handleUserName(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="flex flex-row items-center px-1 py-1"></div>
              <div className="form-item w-full mx-auto md:w-1/2">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="userEmail"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                  id="userEmail"
                  placeholder="Email"
                  onKeyUp={(e) => handleUserEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-row items-center px-1 py-1">
              <div className="form-item w-full mx-auto md:w-1/2">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="userPassword"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                  id="userPassword"
                  placeholder="Password"
                  onKeyUp={(e) => handleUserPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="form-item w-full mx-auto md:w-1/2 px-1 py-1">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="userConfirmPassword"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                  id="userConfirmPassword"
                  placeholder="Password"
                  onKeyUp={(e) => handleUserConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-row items-center px-1 py-1">
              <div className="form-item w-full mx-auto md:w-1/2">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="userCity"
                >
                  City
                </label>
                <input
                  type="text"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                  id="userCity"
                  onKeyUp={(e) => handleUserCity(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-row items-center px-1 py-1">
              <div className="form-item w-full mx-auto md:w-1/2">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="userCountry"
                >
                  Country
                </label>
                <input
                  type="text"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                  id="userCountry"
                  onKeyUp={(e) => handleUserCountry(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-row items-center px-1 py-1">
              <div className="form-item w-full mx-auto md:w-1/2">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="userGender"
                >
                  Gender
                </label>
                <select
                  id="userGender"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                  value={userGender}
                  onChange={handleUserGender}
                >
                  <option defaultValue>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>
            <div className="flex flex-row items-center px-1 py-1">
              <div className="form-item w-full mx-auto md:w-1/2">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="userAge"
                >
                  Age
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                  id="userAge"
                  onKeyUp={(e) => handleUserAge(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-row items-center px-1 py-1">
              <div className="form-item w-full mx-auto md:w-1/2">
                <p className="block text-gray-700 font-bold mb-2">
                  Profile Image
                </p>
                <div className="relative border-2 border-gray-300 border-dashed rounded-md">
                  <input
                    type="file"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    id="userProfileImage"
                    accept="image/*"
                    onChange={handleUserProfileImage}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center px-2 py-2">
              <div className="form-item w-full mx-auto md:w-1/2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="userTNC"
                  checked={userTNC}
                  onChange={handleUserTNC}
                />
                <label className="custom-control-label" htmlFor="userTNC">
                  Accept Terms and Conditions
                </label>
              </div>
            </div>
            <div className="flex flex-row items-center px-1 py-1">
              <p className="form-item w-full mx-auto md:w-1/2 px-1 py-1 text-red-600">
                {showError ? registerFormError : null}
              </p>
            </div>
            <center>
              <button
                type="button"
                className=" cen-ter bg-yellow-500 text-white uppercase font-bold py-2 px-4 rounded mb-4"
                onClick={handleCreateAccountBtn}
              >
                <b>Create an Account</b>
              </button>
            </center>
          </form>
          {message ? (
            <div className="flex flex-row items-center px-1 py-1">
              <div className="form-item w-full mx-auto md:w-1/2">
                <div
                  className="flex flex-row  justify-center bg-blue-500 text-white text-sm font-bold px-4 py-3 w-full "
                  role="alert"
                >
                  <svg
                    className="fill-current w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
                  </svg>
                  <p>Email Address Already In Use.</p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default RegisterRestaurant;
