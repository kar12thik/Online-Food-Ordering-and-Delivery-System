import React, { useState } from "react";
// import Navbar from '../components/Navbar';
/* import Navbar2 from '../components/Navbar2'; */
/* import Footer from '../components/Footer'; */
/* import {signUp, logIn} from '../config/firebase'; */

// import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

const Login = (props) => {
  const [isRegisterForm, setIsRegisterForm] = useState(false);
  const [registerFormError, setRegisterFormError] = useState("");
  const [userProfileImageLable, setUserProfileImageLable] =
    useState("Choose image");
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
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
      setUserProfileImageLable(e.target.files[0].name);
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
        "Invalid Input !! Please accept terms and conditions."
      );
    }
  };

  const handleCreateAccountBtn = async () => {
    const userNameFormate = /^([A-Za-z.\s_-]).{5,}$/;
    const userEmailFormate =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
        "Invalid Input !! Use alphanumeric, uppercase, lowercase & greater than 10 characters."
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
      setUserProfileImageLable("Choose image...");
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
        isRestaurant: false,
        propsHistory: props.history,
        typeOfFood: [],
      };
    }
  };

  const handleLoginNowBtn = async () => {
    const userLoginDetails = {
      userLoginEmail: userLoginEmail,
      userLoginPassword: userLoginPassword,
      propsHistory: props.history,
    };
  };

  return (
    <div>
      <div className="container-fluid py-5 bg-light">
        {isRegisterForm ? (
          <div className="col-lg-6 col-md-8 col-sm-12 mx-auto bg-white shadow p-4">
            <h2 className="text-center mb-4">Create an Account</h2>
            <form action="javascript:void(0)">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="userFullName">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="userName"
                    placeholder="Full Name"
                    onKeyUp={(e) => handleUserName(e.target.value)}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="userEmail">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="userEmail"
                    placeholder="Email"
                    onKeyUp={(e) => handleUserEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="userPassword">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="userPassword"
                    placeholder="Password"
                    onKeyUp={(e) => handleUserPassword(e.target.value)}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="userConfirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="userConfirmPassword"
                    placeholder="Password"
                    onKeyUp={(e) => handleUserConfirmPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="userCity">City</label>
                  <input
                    type="text"
                    className="form-control"
                    id="userCity"
                    onKeyUp={(e) => handleUserCity(e.target.value)}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="userCountry">Country</label>
                  <input
                    type="text"
                    className="form-control"
                    id="userCountry"
                    onKeyUp={(e) => handleUserCountry(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label htmlFor="userGender">Gender</label>
                  <select
                    id="userGender"
                    className="form-control"
                    value={userGender}
                    onChange={handleUserGender}
                  >
                    <option defaultValue>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div className="form-group col-md-2">
                  <label htmlFor="userAge">Age</label>
                  <input
                    type="number"
                    className="form-control"
                    id="userAge"
                    onKeyUp={(e) => handleUserAge(e.target.value)}
                  />
                </div>
                <div className="form-group col-md-6">
                  <p className="mb-2">Profile Image</p>
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="userProfileImage"
                      onChange={handleUserProfileImage}
                    />
                    <label
                      className="custom-file-label"
                      htmlFor="userProfileImage"
                    >
                      {userProfileImageLable}
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="userTNC"
                    defaultChecked={userTNC}
                    onChange={handleUserTNC}
                  />
                  <label className="custom-control-label" htmlFor="userTNC">
                    Accept Terms and Conditions
                  </label>
                </div>
              </div>
              <p className="text-danger">
                {showError ? registerFormError : null}
              </p>
              <button
                type="submit"
                className="btn btn-warning text-uppercase mb-3"
                onClick={handleCreateAccountBtn}
              >
                <b>Create an Account</b>
              </button>
            </form>
            <p className="m-0">
              Already have an account?{" "}
              <span
                className="cursor-pointer text-warning"
                onClick={handleForms}
              >
                Login Here
              </span>
            </p>
          </div>
        ) : (
          <div className="col-lg-4 col-md-6 col-sm-12 mx-auto bg-white shadow p-4">
            <h2 className="text-center mb-4">Login Your Account</h2>
            <form action="javascript:void(0)">
              <div className="form-group">
                <label htmlFor="userLoginEmail">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="userLoginEmail"
                  placeholder="Email"
                  onChange={handleUserEmail}
                />
              </div>
              <div className="form-group">
                <label htmlFor="userLoginPassword">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="userLoginPassword"
                  placeholder="Password"
                  onChange={handleUserPassword}
                />
              </div>
              <button
                type="submit"
                className="btn btn-warning text-uppercase mb-3"
                onClick={handleLoginNowBtn}
              >
                <b>Login Now</b>
              </button>
            </form>
            <p className="m-0">
              Don't have an account yet?{" "}
              <span
                className="cursor-pointer text-warning"
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
