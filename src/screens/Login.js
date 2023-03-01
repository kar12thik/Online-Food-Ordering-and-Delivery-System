import React, { useState } from 'react';
import Navbar from '../components/NavBar';
/* import Navbar2 from '../components/Navbar2'; */
import Footer from '../components/Footer'; 
import {signUp, logIn} from '../config/firebase'; 

//import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'

const Login = (props) => {
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
    const [userLoginEmail] = useState("");
    const [userLoginPassword] = useState("");

    const handleForms = () => {
        setIsRegisterForm(!isRegisterForm);
      }
    
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
    }

    const handleUserEmail = (e) => {
        const userEmail = e;
        const userEmailFormate = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (userEmail.match(userEmailFormate)) {
            setShowError(false);
            setRegisterFormError("");
            setUserEmail(userEmail);
        } else {
            setShowError(true);
            setRegisterFormError("Invalid Input !! Please enter a valid email address.");
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
            setRegisterFormError("Invalid Input !! Use alphanumeric, uppercase, lowercase & greater than 10 characters.");
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
            setRegisterFormError("Invalid Input !! Confirmation password not matched.");
            setUserConfirmPassword(false);
        }
    };

    const handleUserCity = (e) => {
        const userCity = e;
        const userCityFormate = /^([A-Za-z.\s_-]).{5,}$/;
        if (userCity.match(userCityFormate)) {
            setShowError(false);
            setRegisterFormError('');
            setUserCity(userCity);
        } else {
            setShowError(true);
            setRegisterFormError('Invalid Input !! Please enter a valid city name.');
            setUserCity('');
        }
    };

    const handleUserCountry = (e) => {
        const userCountry = e;
        const userCountryFormate = /^([A-Za-z.\s_-]).{5,}$/;
        if (userCountry.match(userCountryFormate)) {
            setShowError(false);
            setRegisterFormError('');
            setUserCountry(userCountry);
        } else {
            setShowError(true);
            setRegisterFormError('Invalid Input !! Please enter a valid country name.');
            setUserCountry('');
        }
    };

    const handleUserGender = (e) => {
        setUserGender(e.target.value);
    };

    const handleUserAge = (e) => {
        const userAge = e;
        if (userAge > 0 && userAge < 101) {
            setShowError(false);
            setRegisterFormError('');
            setUserAge(userAge);
        } else {
            setShowError(true);
            setRegisterFormError('Invalid Input !! Please enter a valid age.');
            setUserAge('');
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
            setRegisterFormError('');
        } else {
            setUserTNC(false);
            setShowError(true);
            setRegisterFormError('Invalid Input !! Please accept terms and conditions.');
        }
    };

    const handleCreateAccountBtn = async () => {
        const userNameFormate = /^([A-Za-z.\s_-]).{5,}$/;
        const userEmailFormate = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const userPasswordFormate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;
        const userCountryFormate = /^([A-Za-z.\s_-]).{5,}$/;
        const userCityFormate = /^([A-Za-z.\s_-]).{5,}$/;

        if (!userName.match(userNameFormate)) {
            setShowError(true);
            setRegisterFormError("Invalid Input !! Please enter a valid name.");
        } else if (!userEmail.match(userEmailFormate)) {
            setShowError(true);
            setRegisterFormError("Invalid Input !! Please enter a valid email address.");
            setUserEmail("");
        } else if (!userPassword.match(userPasswordFormate)) {
            setShowError(true);
            setRegisterFormError("Invalid Password !! Use alphanumeric, uppercase, lowercase & greater than 10 characters.");
            setUserPassword("");
        } else if (!userConfirmPassword) {
            setShowError(true);
            setRegisterFormError("Invalid Input !! Confirmation password not matched.");
            setUserConfirmPassword(false);
        } else if (!userCity.match(userCityFormate)) {
            setShowError(true);
            setRegisterFormError("Invalid Input !! Please enter a valid city name.");
            setUserCity("");
        } else if (!userCountry.match(userCountryFormate)) {
            setShowError(true);
            setRegisterFormError("Invalid Input !! Please enter a valid country name.");
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
            try {
                const signUpReturn = await signUp(userDetails)
                //console.log(signUpReturn)
                if (signUpReturn.success) {
                    // Redirect to the login page
                    props.history.push("/login");
                }
            }catch(error){
                console.log("Error in Sign up => ",error)
            }
        }
    };
            
    const handleLoginNowBtn = async () => {
        const userLoginDetails = {
            userLoginEmail: userLoginEmail,
            userLoginPassword: userLoginPassword,
            propsHistory: props.history,
        };
        try {
            const LoginReturn = await logIn(userLoginDetails)
            //console.log(LoginReturn)
            // if (LoginReturn.success) {
            //         // Redirect to the login page
            //         console.log("You have successfully Logged in...")
            //         props.history.push("../screens/Home");
            // }
        }catch(error){
            console.log("Error in Login => ",error)
        }
    };

    return (
      <div>
                <div class="container-fluid py-5 bg-gray-100">
                    {isRegisterForm ?
                    
                        <div class="bg-white shadow p-4 mx-auto sm:w-full md:w-1/2 lg:w-2/3">
                            <h1 class="text-center text-2xl tracking-widest py-2  border-b-2 border-yellow-500 font-bold text-gray-800">Create an Account</h1>
                            <br />
                            <form>
                                <div class = "flex flex-row items-center px-1 py-1">
                                <div class="form-item w-full mx-auto md:w-1/2">
                                  <label class="block text-gray-700 font-bold mb-2" htmlFor="userFullName">Full Name</label>
                                  <input type="text" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" id="userName" placeholder="Full Name" onKeyUp={(e) => handleUserName(e.target.value)} />
                                </div>
                                </div><div>
                                <div class = "flex flex-row items-center px-1 py-1"></div>
                                    <div class="form-item w-full mx-auto md:w-1/2">
                                        <label class="block text-gray-700 font-bold mb-2" htmlFor="userEmail">Email</label>
                                        <input type="email" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" id="userEmail" placeholder="Email" onKeyUp={(e) => handleUserEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div class = "flex flex-row items-center px-1 py-1">
                                    <div class="form-item w-full mx-auto md:w-1/2">
                                        <label class="block text-gray-700 font-bold mb-2" htmlFor="userPassword">Password</label>
                                        <input type="password" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" id="userPassword" placeholder="Password" onKeyUp={(e) => handleUserPassword(e.target.value)} />
                                    </div>
                                </div><div>
                                    <div class="form-item w-full mx-auto md:w-1/2 px-1 py-1">
                                        <label class="block text-gray-700 font-bold mb-2" htmlFor="userConfirmPassword">Confirm Password</label>
                                        <input type="password" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" id="userConfirmPassword" placeholder="Password" onKeyUp={(e) => handleUserConfirmPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div class = "flex flex-row items-center px-1 py-1">
                                    <div class="form-item w-full mx-auto md:w-1/2">
                                        <label class="block text-gray-700 font-bold mb-2" htmlFor="userCity">City</label>
                                        <input type="text" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" id="userCity" onKeyUp={(e) => handleUserCity(e.target.value)} />
                                    </div>
                                </div><div class = "flex flex-row items-center px-1 py-1" >
                                    <div class="form-item w-full mx-auto md:w-1/2">
                                        <label class="block text-gray-700 font-bold mb-2" htmlFor="userCountry">Country</label>
                                        <input type="text" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" id="userCountry" onKeyUp={(e) => handleUserCountry(e.target.value)} />
                                    </div>
                                </div>
                                <div class = "flex flex-row items-center px-1 py-1">
                                    <div class="form-item w-full mx-auto md:w-1/2">
                                        <label class="block text-gray-700 font-bold mb-2" htmlFor="userGender">Gender</label>
                                        <select id="userGender" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" value={userGender} onChange={handleUserGender}>
                                            <option defaultValue>Male</option>
                                            <option>Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div class = "flex flex-row items-center px-1 py-1">
                                    <div class="form-item w-full mx-auto md:w-1/2">
                                      <label class="block text-gray-700 font-bold mb-2" htmlFor="userAge" >Age</label>
                                      <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" id="userAge" onKeyUp={(e) => handleUserAge(e.target.value)} />
                                    </div>
                                </div>

                                <div class = "flex flex-row items-center px-1 py-1">
                                    <div class="form-item w-full mx-auto md:w-1/2">
                                      <p class="block text-gray-700 font-bold mb-2">Profile Image</p>
                                      <div class="relative border-2 border-gray-300 border-dashed rounded-md">
                                        <input type="file" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" id="userProfileImage" accept="image/*" onChange={handleUserProfileImage} />
                                      </div>
                                    </div>
                                </div>
                                <div class = "flex flex-row items-center px-2 py-2">
                                    <div class="form-item w-full mx-auto md:w-1/2">
                                      <input type="checkbox" class="custom-control-input" id="userTNC" checked={userTNC} onChange={handleUserTNC} />
                                      <label class="custom-control-label" for="userTNC">Accept Terms and Conditions</label>
                                    </div>
                                </div>
                                <div class = "flex flex-row items-center px-1 py-1">
                                    <p class="form-item w-full mx-auto md:w-1/2 px-1 py-1 text-red-600">{showError ? registerFormError : null}</p>
                                </div>                                
                                    <center><button type="button" class=" cen-ter bg-yellow-500 text-white uppercase font-bold py-2 px-4 rounded mb-4" onClick={handleCreateAccountBtn}><b>Create an Account</b></button>
                                    </center>
                                
                            </form>
                            <center><p class="m-0 px-1 py-1">Already have an account? <span class="cursor-pointer text-yellow-500" onClick={handleForms}>Login Here</span></p>
                            </center>
                        </div> :
                        <div class="bg-white shadow p-4 mx-auto sm:w-full md:w-1/2 lg:w-1/3">
                        <h1 class="text-center text-2xl tracking-widest py-2  border-b-2 border-yellow-500 font-bold text-gray-800">Login Your Account</h1>
                        <form action=" ">
                            <div class="mb-4 px-2 py-2">
                                <label class="block text-gray-700 font-bold mb-2" for="userLoginEmail">Email</label>
                                <input type="email" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="userLoginEmail" placeholder="Email" onChange={handleUserEmail}/>
                            </div>
                            <div class="mb-4 py-2 px-2">
                                <label class="block text-gray-700 font-bold mb-2" for="userLoginPassword">Password</label>
                                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="userLoginPassword" type="password" placeholder="Password" onChange={handleUserPassword}/>
                            </div>
                            <center><button type="submit" class="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded mb-1 text-uppercase" onClick={handleLoginNowBtn}><b>Login Now</b></button> </center>
                        </form>
                        <p class="mt-4 text-center">Don't have an account yet? <span class="cursor-pointer text-yellow-500" onClick={handleForms}>Create an Account</span></p>
                    </div>
                  }
                </div>
            </div>
    ); 
}

export default Login;
