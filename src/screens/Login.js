import React, { useState } from "react";
// import Navbar from '../components/Navbar';
/* import Navbar2 from '../components/Navbar2'; */
/* import Footer from '../components/Footer'; */
// import { signUp, logIn } from "../config/firebase";

// firebase related imports
import { signInWithEmailAndPassword } from "firebase/auth";
//import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { auth } from "../config/firebase";
import { db } from "../config/firebase";

import { useNavigate } from "react-router-dom";

import "../App.css";

const Login = (props) => {
  const navigate = useNavigate();
  const [isRegisterForm, setIsRegisterForm] = useState(false);
  const [registerFormError, setRegisterFormError] = useState("");
  const [setUserProfileImageLable] = useState("Choose image");
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
  const [userLoginEmail, setUserLoginEmail] = useState("");
  const [userLoginPassword, setUserLoginPassword] = useState("");
  const [noUserFound, setNoUserFound] = useState(false);

  // redux state
  //const loggedInUser = useSelector((state) => state.loggedInUser);
  const dispatch = useDispatch();

  const handleForms = () => {
    setIsRegisterForm(!isRegisterForm);
  };

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
        "Invalid Input !! Please enter a valid email address.",
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
        "Invalid Input !! Use alphanumeric, uppercase, lowercase & greater than 10 characters.",
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
        "Invalid Input !! Confirmation password not matched.",
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
        "Invalid Input !! Please enter a valid country name.",
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
      setUserProfileImageLable("Choose image...");
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
        "Invalid Input !! Please accept terms and conditions.",
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
        "Invalid Input !! Please enter a valid email address.",
      );
      setUserEmail("");
    } else if (!userPassword.match(userPasswordFormate)) {
      setShowError(true);
      setRegisterFormError(
        "Invalid Password !! Use alphanumeric, uppercase, lowercase & greater than 10 characters.",
      );
      setUserPassword("");
    } else if (!userConfirmPassword) {
      setShowError(true);
      setRegisterFormError(
        "Invalid Input !! Confirmation password not matched.",
      );
      setUserConfirmPassword(false);
    } else if (!userCity.match(userCityFormate)) {
      setShowError(true);
      setRegisterFormError("Invalid Input !! Please enter a valid city name.");
      setUserCity("");
    } else if (!userCountry.match(userCountryFormate)) {
      setShowError(true);
      setRegisterFormError(
        "Invalid Input !! Please enter a valid country name.",
      );
      setUserCountry("");
    } else if (!(userAge > 0 && userAge < 101)) {
      setShowError(true);
      setRegisterFormError("Invalid Input !! Please enter a valid age.");
      setUserAge("");
    } else if (userProfileImage === null) {
      setShowError(true);
      setRegisterFormError("Invalid Input !! Please select a profile image.");
      setUserProfileImageLable("Choose image...");
      setUserProfileImage("");
    } else if (!userTNC) {
      setUserTNC(false);
      setShowError(true);
      setRegisterFormError("Please accept terms and conditions.");
    } else {
      let userDetails = {
        userName: userName,
        userEmail: userEmail,
        userPassword: userPassword,
        userCity: userCity,
        userCountry: userCountry,
        userGender: userGender,
        userAge: userAge,
        userProfileImage: userProfileImage,
        isRestaurant: false,
        propsHistory: props.history,
        typeOfFood: [],
      };
      try {
        navigate("/");
        console.log(userDetails);
        // const signUpReturn = await signUp(userDetails);
        // if (signUpReturn.success) {
        //   // Redirect to the login page
        //   navigate("/login");
        //   //window.location.href = "/login";
        // }
      } catch (error) {
        console.log("Error in Sign up => ", error);
      }
    }
  };

  const handleLoginNowBtn = async (event) => {
    event.preventDefault();
    const userLoginDetails = {
      userLoginEmail: userLoginEmail,
      userLoginPassword: userLoginPassword,
      propsHistory: props.history,
    };
    signInWithEmailAndPassword(auth, userLoginEmail, userLoginPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        if (user) {
          // get user name
          const q = db.collection("users").doc(user.uid);

          q.get().then((doc) => {
            // console.log(doc);
            if (doc.exists) {
              dispatch({
                type: "LOGGED_IN_USER",
                payload: {
                  userEmail: user.email,
                  userId: user.uid,
                  userName: doc.data().userName,
                  isRestaurant:doc.data().isRestaurant
                },
              });
            }
          });
          console.log(userLoginDetails);
          // console.log(user);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        //const errorMessage = error.message;
        if (errorCode === "auth/user-not-found") {
          setNoUserFound(true);
        }
      });

    // try {
    //   navigate("/");
    //   // const LoginReturn = await logIn(userLoginDetails);
    //   // //console.log(LoginReturn)
    //   // if (LoginReturn) {
    //   //   //         // Redirect to the login page

    //   //   console.log("You have successfully Logged in...");
    //   //   // props.history.push("../screens/Home");
    //   // }
    // } catch (error) {
    //   console.log("Error in Login => ", error);
    // }
  };

  return (
    <div>
      <div className="container-fluid py-5 bg-gray-100">
        {isRegisterForm ? (
          <div className="bg-white shadow p-4 mx-auto sm:w-full md:w-1/2 lg:w-2/3">
            <h1 className="text-center text-2xl tracking-widest py-2  border-b-2 border-yellow-500 font-bold text-gray-800">
              Create an Account
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
                  //onClick={handleForms}
                >
                  <b>Create an Account</b>
                </button>
              </center>
            </form>
            <center>
              <p className="m-0 px-1 py-1">
                Already have an account?{" "}
                <span
                  className="cursor-pointer text-yellow-500"
                  onClick={handleForms}
                >
                  Login Here
                </span>
              </p>
            </center>
          </div>
        ) : (
          // Login Form
          <div className="bg-white shadow p-4 mx-auto sm:w-full md:w-1/2 lg:w-1/3">
            <h1 className="text-center text-2xl tracking-widest py-2  border-b-2 border-yellow-500 font-bold text-gray-800">
              Login Your Account
            </h1>
            <form action=" ">
              <div className="mb-4 px-2 py-2">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="userLoginEmail"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="userLoginEmail"
                  placeholder="Email"
                  onChange={(e) => setUserLoginEmail(e.target.value)}
                />
              </div>
              <div className="mb-4 py-2 px-2">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="userLoginPassword"
                >
                  Password
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="userLoginPassword"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setUserLoginPassword(e.target.value)}
                />
              </div>
              <center>
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded mb-1 text-uppercase"
                  onClick={handleLoginNowBtn}
                >
                  <b>Login Now</b>
                </button>{" "}
                {noUserFound ? (
                  <p className="text-red-700">
                    No user found - Signup / Re-Login{" "}
                  </p>
                ) : (
                  ""
                )}
              </center>
            </form>
            <p className="mt-4 text-center">
              Don't have an account yet?{" "}
              <span
                className="cursor-pointer text-yellow-500"
                onClick={handleForms}
              >
                Create an Account
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;