import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { useState } from "react";

// #todo: Convert firebaseConfig to Environment Variables
const firebaseConfig = {
  apiKey: "AIzaSyAlI4g1RYjy9Ea3l632wFzkPL_kYZs08L4",
  authDomain: "ofods-app.firebaseapp.com",
  projectId: "ofods-app",
  storageBucket: "ofods-app.appspot.com",
  messagingSenderId: "912102731712",
  appId: "1:912102731712:web:06089e16176ff47963a225",
  measurementId: "G-FX9YTWS39P",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// async function logIn(userLoginDetails) {
//   const { userLoginEmail, userLoginPassword } = userLoginDetails;
//   console.log(userLoginEmail)
//   console.log(userLoginPassword)

//   try {
//     userLoginDetails.propsHistory.push("/Restaurants");
//     const success = await firebase.auth().signInWithEmailAndPassword(userLoginEmail, userLoginPassword);
//     const snapshot = await db.collection('users').doc(success.user.uid).get();

//     if(snapshot.data().isRestaurant) {
//       userLoginDetails.propsHistory.push("/Restaurants");
//     } else {
//       userLoginDetails.propsHistory.push("/Restaurants");
//     }

//     return success;
//   } catch (error) {
//    return Promise.reject(error.message);
//   }
// }

function logIn(userLoginDetails) {
  return new Promise((resolve, reject) => {
    const { userLoginEmail, userLoginPassword, propsHistory } =
      userLoginDetails;
    let userFound = false;
    // console.log (userLoginEmail,userLoginPassword);
    firebase
      .auth()
      .signInWithEmailAndPassword(userLoginEmail, userLoginPassword)
      .then((success) => {
        console.log(" 00 - Second Iteration");
        userFound = true;
        db.collection("users")
          .doc(success.user.uid)
          .get()
          .then((snapshot) => {
            // propsHistory.push("/");
            // //debugger
            // console.log("11");
            // console.log("snapshot.data =>>", snapshot.data().isRestaurant);
            // if(snapshot.data().isRestaurant){
            //     userLoginDetails.propsHistory.push("/Restaurants");
            //     resolve(success)
            // }else{
            //     userLoginDetails.propsHistory.push("/");
            //     resolve(success)
            // }
          });
      })
      .catch((error) => {
        console.log("22");
        // Handle Errors here.
        // var errorCode = error.code;
        var errorMessage = error.message;
        reject(errorMessage);
      });
    return userFound;
  });
}

export default firebase;
export { logIn };
