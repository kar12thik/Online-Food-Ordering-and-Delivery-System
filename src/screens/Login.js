import React, { useState } from "react";
// import Navbar from '../components/Navbar';
/* import Navbar2 from '../components/Navbar2'; */
/* import Footer from '../components/Footer'; */
import { signUp } from "../config/firebase";
import Swal from "sweetalert2";

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
  let { restaurantProp } = props;
  if (restaurantProp !== true) restaurantProp = false;
  const [isRestaurantUser, setIsRestaurantUser] = useState(restaurantProp);
  const [isRegisterForm, setIsRegisterForm] = useState(false);
  const [registerFormError, setRegisterFormError] = useState("");
  const [setUserProfileImageLable] = useState("Choose image");
  const [userName, setUserName] = useState("");
  const [restName, setrestName] = useState("");
  const [restDescription, setRestDescription] = useState("");
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
  const [selectedOption, setSelectedOption] = useState("Indian");
  const [message, setMessage] = useState(false);

  const options = ["Indian", "Thai", "Mexican", "Italian", "Chinese", "Greek"];
  // redux state
  //const loggedInUser = useSelector((state) => state.loggedInUser);
  const dispatch = useDispatch();

  const handleForms = () => {
    setIsRestaurantUser(false);
    setIsRegisterForm(!isRegisterForm);
  };

  const handlerestName = (e) => {
    const restaurantName = e;

    const restaurantNameFormate = /^([A-Za-z.\s_-]).{5,}$/;
    if (restaurantName.match(restaurantNameFormate)) {
      setShowError(false);
      setRegisterFormError("");
      setrestName(restaurantName);
    } else {
      setShowError(true);
      setrestName(" ");
    }
  };

  const handleRestDescription = (e) => {
    const restaurantDescription = e;

    const restaurantDescriptionFormate = /^([A-Za-z.\s_-]).{5,}$/;
    if (restaurantDescription.match(restaurantDescriptionFormate)) {
      setShowError(false);
      setRegisterFormError("");
      setRestDescription(restaurantDescription);
    } else {
      setShowError(true);
      setRestDescription(" ");
    }
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
      setUserName(" ");
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
      setUserConfirmPassword(false);
    }
  };

  const handleUserCity = (e) => {
    const userCity = e;
    const userCityFormate = /^([A-Za-z.\s_-]).*$/;
    if (userCity.match(userCityFormate)) {
      setShowError(false);
      setRegisterFormError("");
      setUserCity(userCity);
    } else {
      setShowError(true);
      setUserCity("");
    }
  };

  const handleUserCountry = (e) => {
    const userCountry = e;
    const userCountryFormate = /^([A-Za-z.\s_-]).*$/;
    if (userCountry.match(userCountryFormate)) {
      setShowError(false);
      setRegisterFormError("");
      setUserCountry(userCountry);
    } else {
      setShowError(true);
      setUserCountry("");
    }
  };

  const handleUserGender = (e) => {
    setUserGender(e.target.value);
  };

  const handleOptionClick = (value) => {
    setSelectedOption(value);
  };

  const handleUserAge = (e) => {
    const userAge = e;
    if (userAge > 0 && userAge < 101) {
      setShowError(false);
      setRegisterFormError("");
      setUserAge(userAge);
    } else {
      setShowError(true);
      setUserAge("");
    }
  };

  const handleUserProfileImage = (e) => {
    const file = e.target.files[0];
    const allowedTypes = ["image/png", "image/jpeg"];
    if (file && allowedTypes.includes(file.type)) {
      // handle the valid file
      setUserProfileImage(e.target.files[0]);
      setShowError(false);
      setRegisterFormError("");
    } else {
      // handle invalid file type
      setShowError(true);
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
    }
  };

  const handleCreateAccountBtn = async () => {
    const userNameFormate = /^([A-Za-z.\s_-]).{5,}$/;
    const userEmailFormate =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const restDescriptionFormate = /^(?:\S+\s+){9,}\S+$/;
    const userPasswordFormate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;
    const userCountryFormate = /^([A-Za-z.\s_-]).*$/;
    const userCityFormate = /^([A-Za-z.\s_-]).*$/;

    if (isRestaurantUser && !restName.match(userNameFormate)) {
      setShowError(true);
      window.alert("Invalid Input !! Please enter a valid restaurant name.");
    } else if (
      isRestaurantUser &&
      !restDescription.match(restDescriptionFormate)
    ) {
      setShowError(true);
      window.alert(
        "Invalid Input !! Please enter a description of minimum 10 words."
      );
    } else if (!userName.match(userNameFormate)) {
      setShowError(true);
      window.alert("Invalid Input !! Please enter a valid name.");
    } else if (!userEmail.match(userEmailFormate)) {
      setShowError(true);
      window.alert("Invalid Input !! Please enter a valid email address.");
      setUserEmail("");
    } else if (!userPassword.match(userPasswordFormate)) {
      setShowError(true);
      window.alert(
        "Invalid Password !! Use alphanumeric, uppercase, lowercase & greater than 10 characters."
      );
      setUserPassword("");
    } else if (!userConfirmPassword) {
      setShowError(true);
      window.alert("Invalid Input !! Confirmation password not matched.");
      setUserConfirmPassword(false);
    } else if (!userCity.match(userCityFormate)) {
      setShowError(true);
      window.alert("Invalid Input !! Please enter a valid city name.");
      setUserCity("");
    } else if (!userCountry.match(userCountryFormate)) {
      setShowError(true);
      window.alert("Invalid Input !! Please enter a valid country name.");
      setUserCountry("");
    } else if (!(userAge > 0 && userAge < 101)) {
      setShowError(true);
      window.alert("Invalid Input !! Please enter a valid age.");
      setUserAge("");
    } else if (userProfileImage === null) {
      setShowError(true);
      window.alert(
        "Invalid Input !! Please select a profile image in JPG or JPEG Format."
      );
      setUserProfileImageLable("Choose image...");
      setUserProfileImage("");
    } else if (!userTNC) {
      setUserTNC(false);
      setShowError(true);
      window.alert("Please accept terms and conditions.");
    } else {
      let userDetails = {
        restName,
        category: selectedOption,
        restDescription,
        userName: userName,
        userEmail: userEmail,
        userPassword: userPassword,
        userCity: userCity,
        userCountry: userCountry,
        userGender: userGender,
        userAge: userAge,
        userProfileImage: userProfileImage,
        isRestaurant: isRestaurantUser,
        propsHistory: props.history,
        typeOfFood: [],
        restDescription: "",
      };
      try {
        console.log(userDetails);
        // Sign-up Fix
        const signUpReturn = await signUp(userDetails);
        console.log(signUpReturn);
        if (signUpReturn.success) {
          setMessage(false);
          navigate("/");
          Swal.fire({
            title: "Sign-up Successfully",
            html: 'Please <a class="text-blue-500 hover:text-red-500" href="#" id="login-link">Login</a> to the system',
            icon: "success",
            timer: 5000,
            timerProgressBar: true,
            showConfirmButton: false,
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
          }).then((result) => {
            if (result.isDismissed) {
              // Do nothing
            } else if (result.isConfirmed) {
              navigate("/");
              window.scrollTo(0, 0);
            }
          });
          document
            .querySelector("#login-link")
            .addEventListener("click", () => {
              Swal.close();
            });

          document
            .getElementById("login-link")
            .addEventListener("click", () => {
              navigate("/Login");
              window.scrollTo(0, 0);
            });
        }
      } catch (error) {
        setMessage(true);
        if (isRestaurantUser) {
          console.log("Error in Register Restaurant => ", error);
        } else {
          console.log("Error in Sign up => ", error);
        }
      }
    }
  };

  const handleLoginNowBtn = async (event) => {
    event.preventDefault();
    setIsRestaurantUser(false);
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
            if (doc.exists) {
              dispatch({
                type: "LOGGED_IN_USER",
                payload: {
                  userEmail: user.email,
                  userId: user.uid,
                  userName: doc.data().userName,
                  isRestaurant: doc.data().isRestaurant,
                  typeOfFood: doc.data().typeOfFood,
                  userProfileImageUrl: doc.data().userProfileImageUrl,
                  restDescription: doc.data().restDescription,
                },
              });
            }
          });
          console.log(userLoginDetails);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        window.alert(
          "User Not Found, Please try again with Valid Email & Password"
        );
        if (errorCode === "auth/user-not-found") {
          setNoUserFound(true);
        }
      });
  };
  return (
    <div>
      <div className="container-fluid py-5 bg-gray-100">
        {isRegisterForm || isRestaurantUser ? (
          <div className="bg-white shadow p-4 mx-auto sm:w-full md:w-1/2 lg:w-2/3">
            <h1 className="text-center text-2xl tracking-widest py-2  border-b-2 border-yellow-500 font-bold text-gray-800">
              {isRestaurantUser ? "Register Restaurant" : "Create an Account"}
            </h1>
            <br />
            <form>
              {isRestaurantUser ? (
                <div className="flex flex-row items-center px-1 py-1">
                  <div className="form-item w-full mx-auto md:w-1/2">
                    <label
                      className="text-left block text-gray-700 font-bold mb-2"
                      htmlFor="restOwnerName"
                    >
                      Restaurant Name
                    </label>
                    <input
                      type="text"
                      data-testid="restfullname-input"
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                      id="restOwnerName"
                      placeholder="Restaurant Name"
                      onKeyUp={(e) => handlerestName(e.target.value)}
                    />
                  </div>
                </div>
              ) : null}
              {isRestaurantUser ? (
                <div className="flex flex-row items-center px-1 py-1">
                  <div className="form-item w-full mx-auto md:w-1/2">
                    <label
                      className="text-left block text-gray-700 font-bold mb-2"
                      htmlFor="passwordConfirmation"
                    >
                      Restaurant Category
                    </label>
                    <select
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      onChange={(e) => handleOptionClick(e.target.value)}
                    >
                      {options.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>
              ) : null}
              {isRestaurantUser ? (
                <div className="flex flex-row items-center px-1 py-1">
                  <div className="form-item w-full mx-auto md:w-1/2">
                    <label
                      className="text-left block text-gray-700 font-bold mb-2"
                      htmlFor="restDescription"
                    >
                      Restaurant Description
                    </label>
                    <textarea
                      type="text"
                      data-testid="restDescription-input"
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                      id="restDescription"
                      placeholder="Restaurant Description"
                      onKeyUp={(e) => handleRestDescription(e.target.value)}
                    />
                  </div>
                </div>
              ) : null}
              <div className="flex flex-row items-center px-1 py-1">
                <div className="form-item w-full mx-auto md:w-1/2">
                  <label
                    className="text-left block text-gray-700 font-bold mb-2"
                    htmlFor="userFullName"
                  >
                    {isRestaurantUser ? "Restaurant Owner Name" : "Full Name"}
                  </label>
                  <input
                    type="text"
                    data-testid="fullname-input"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    id="userFullName"
                    placeholder={
                      isRestaurantUser ? "Restaurant Owner Name" : "Full Name"
                    }
                    onKeyUp={(e) => handleUserName(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <div className="flex flex-row items-center px-1 py-1"></div>
                <div className="form-item w-full mx-auto md:w-1/2">
                  <label
                    className="text-left block text-gray-700 font-bold mb-2"
                    htmlFor="userEmail"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    data-testid="email-input"
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
                    className="text-left block text-gray-700 font-bold mb-2"
                    htmlFor="userPassword"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    data-testid="password-input"
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
                    className="text-left block text-gray-700 font-bold mb-2"
                    htmlFor="userConfirmPassword"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    data-testid="confirmpassword-input"
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
                    className="text-left block text-gray-700 font-bold mb-2"
                    htmlFor="userCity"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    data-testid="city-input"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    id="userCity"
                    onKeyUp={(e) => handleUserCity(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-row items-center px-1 py-1">
                <div className="form-item w-full mx-auto md:w-1/2">
                  <label
                    className="text-left block text-gray-700 font-bold mb-2"
                    htmlFor="userCountry"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    data-testid="country-input"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    id="userCountry"
                    onKeyUp={(e) => handleUserCountry(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-row items-center px-1 py-1">
                <div className="form-item w-full mx-auto md:w-1/2">
                  <label
                    className="text-left block text-gray-700 font-bold mb-2"
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
                    className="text-left block text-gray-700 font-bold mb-2"
                    htmlFor="userAge"
                  >
                    Age
                  </label>
                  <input
                    data-testid="age-input"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    id="userAge"
                    onKeyUp={(e) => handleUserAge(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-row items-center px-1 py-1">
                <div className="form-item w-full mx-auto md:w-1/2">
                  <p className="text-left block text-gray-700 font-bold mb-2">
                    Profile Image
                  </p>
                  <div className="relative border-2 border-gray-300 border-dashed rounded-md">
                    <input
                      type="file"
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                      id="userProfileImage"
                      accept="image/png, image/jpeg"
                      onChange={handleUserProfileImage}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center px-2 py-2">
                <div className="text-left form-item w-full mx-auto md:w-1/2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="userTNC"
                    checked={userTNC}
                    onChange={handleUserTNC}
                  />
                  <label
                    className="text-left custom-control-label"
                    htmlFor="userTNC"
                  >
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
            {isRestaurantUser ? null : (
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
            )}
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
                  className="text-left block text-gray-700 font-bold mb-2"
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
                  data-testid="login-email"
                />
              </div>
              <div className="mb-4 py-2 px-2">
                <label
                  className="text-left block text-gray-700 font-bold mb-2"
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
                  data-testid="login-password"
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
