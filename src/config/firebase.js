import * as firebase from "firebase";
import "firebase/firestore";

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

function signUp(userDetails) {
  return new Promise((resolve, reject) => {
      const { userName, userEmail, userPassword, userCity, userCountry, userGender, userAge, userProfileImage, isRestaurant, typeOfFood } = userDetails;
      firebase.auth().createUserWithEmailAndPassword(userDetails.userEmail, userDetails.userPassword).then((success) => {
          let user = firebase.auth().currentUser;
          var uid;
          if (user != null) {
              uid = user.uid;
          };
          firebase.storage().ref().child(`userProfileImage/${uid}/` + userProfileImage.name).put(userProfileImage).then((url) => {
              url.ref.getDownloadURL().then((success) => {
                  const userProfileImageUrl = success
                  console.log(userProfileImageUrl)
                  const userDetailsForDb = {
                      userName: userName,
                      userEmail: userEmail,
                      userPassword: userPassword,
                      userCity: userCity,
                      userCountry: userCountry,
                      userGender: userGender,
                      userAge: userAge,
                      userUid: uid,
                      isRestaurant: isRestaurant,
                      userProfileImageUrl: userProfileImageUrl,
                      typeOfFood: typeOfFood,
                  }
                  db.collection("users").doc(uid).set(userDetailsForDb).then((docRef) => {
                      // console.log("Document written with ID: ", docRef.id);
                      if(userDetailsForDb.isRestaurant){
                          userDetails.propsHistory.push("/order-requests");
                          resolve(userDetailsForDb)
                      }else{
                          userDetails.propsHistory.push("/");
                          resolve(userDetailsForDb)
                      }
                  }).catch(function (error) {
                      console.error("Error adding document: ", error);
                      reject(error)
                  })
              }).catch((error) => {
                  // Handle Errors here.
                  let errorCode = error.code;
                  let errorMessage = error.message;
                  console.log("Error in getDownloadURL function", errorMessage);
                  reject(errorMessage)
              })
          }).catch((error) => {
              // Handle Errors here.
              let errorCode = error.code;
              let errorMessage = error.message;
              console.log("Error in Image Uploading", errorMessage);
              reject(errorMessage)
          })
      }).catch((error) => {
          var errorMessage = error.message;
          console.log("Error in Authentication", errorMessage);
          reject(errorMessage)
      })
  })
}

function logIn(userLoginDetails) {
  return new Promise((resolve, reject) => {
      const { userLoginEmail, userLoginPassword } = userLoginDetails;
      firebase.auth().signInWithEmailAndPassword(userLoginEmail, userLoginPassword).then((success) => {
          db.collection('users').doc(success.user.uid).get().then((snapshot) => {
              console.log("snapshot.data =>>", snapshot.data().isRestaurant);
              if(snapshot.data().isRestaurant){
                  userLoginDetails.propsHistory.push("/order-requests");
                  resolve(success)
              }else{
                  userLoginDetails.propsHistory.push("/");
                  resolve(success)
              }             
          })
      }).catch((error) => {
          // Handle Errors here.
          // var errorCode = error.code;
          var errorMessage = error.message;
          reject(errorMessage)
      });

  })
}

export default firebase;
export {
    signUp,
    logIn,
}