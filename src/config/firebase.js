import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = firebase.firestore(app);

export default app;


function signUp(userDetails) {
  return new Promise((resolve, reject) => {
    const {
      userName,
      userEmail,
      userPassword,
      userCity,
      userCountry,
      userGender,
      userAge,
      userProfileImage,
      isRestaurant,
      typeOfFood,
    } = userDetails;
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        userDetails.userEmail,
        userDetails.userPassword
      )
      .then((success) => {
        let user = firebase.auth().currentUser;
        var uid;
        if (user != null) {
          uid = user.uid;
        }
        firebase
          .storage()
          .ref()
          .child(`userProfileImage/${uid}/` + userProfileImage.name)
          .put(userProfileImage)
          .then((url) => {
            url.ref.getDownloadURL().then((success) => {
              const userProfileImageUrl = success;
              console.log(userProfileImageUrl);
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
              };
              db.collection("users")
                .doc(uid)
                .set(userDetailsForDb)
                .then((docRef) => {
                  if (userDetailsForDb.isRestaurant) {
                    userDetails.propsHistory.push("/Restaurants");
                    resolve(userDetailsForDb);
                  } else {
                    userDetails.propsHistory.push("/");
                    resolve(userDetailsForDb);
                  }
                })
                .catch(function (error) {
                  console.error("Error adding document: ", error);
                  reject(error);
                });
            });
          })
          .catch((error) => {
            // Handle Errors here.
            // let errorCode = error.code;
            let errorMessage = error.message;
            console.log("Error in Image Uploading", errorMessage);
            reject(errorMessage);
          });
      })
      .catch((error) => {
        var errorMessage = error.message;
        console.log("Error in Authentication", errorMessage);
        reject(errorMessage);
      });
  });
}

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

function orderNow(cartItemsList, totalPrice, resDetails, userDetails) {
  console.log("Inside orderNow");
  console.log("userDetails => ", userDetails);
  console.log("resDetails => ", resDetails);
  console.log("resDetails.id => ", resDetails.id);
  return new Promise((resolve, reject) => {
      let user = firebase.auth().currentUser;
      let uid;
      if (user != null) {
          uid = user.uid;
      };

      console.log("User id", uid);
      uid = 'TestUser5'

      const myOrder = {
          itemsList: cartItemsList,
          totalPrice: totalPrice,
          status: "PENDING",
          ...resDetails,
      }

      const orderRequest = {
          itemsList: cartItemsList,
          totalPrice: totalPrice,
          status: "PENDING",
          ...userDetails,
      }

      console.log("myOrder => ", myOrder)
      console.log("orderRequest => ", orderRequest)
      db.collection("users").doc(uid).collection("myOrder").add(myOrder).then((docRef) => {
          console.log("docRef.id", docRef.id)
          db.collection("users").doc(resDetails.id).collection("orderRequest").doc(docRef.id).set(orderRequest).then((docRef) => {
              resolve('Successfully ordered')
          }).catch(function (error) {
              console.error("Error adding document: ", error.message);
              reject(error.message)
          })
      }).catch(function (error) {
          console.error("Error adding document: ", error.message);
          reject(error.message)
      })
  })
}

//export default firebase;
export { signUp, logIn, orderNow };
