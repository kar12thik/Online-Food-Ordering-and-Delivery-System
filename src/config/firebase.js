import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import "firebase/compat/database";
import * as Sentry from "@sentry/react";

// #todo: Convert firebaseConfig to Environment Variables
const firebaseConfig = {
  apiKey: "AIzaSyAlI4g1RYjy9Ea3l632wFzkPL_kYZs08L4",
  authDomain: "ofods-app.firebaseapp.com",
  databaseURL: "https://ofods-app-default-rtdb.firebaseio.com/",
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
const realtimeDatabase = firebase.database();
export const logsRef = realtimeDatabase.ref("logs");
export default app;

// This function is not used but kept for future use
// Added for Sign-in-with google
export const signInWithGoogle = async (history) => {
  const provider = new GoogleAuthProvider();
  let user = null;
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log(token);
      user = result.user;
    })
    .catch((error) => {
      console.error("Google sign-in failed:", error);
    });

  return user;
};

// Added for Sign-in-with google

function signUp(userDetails) {
  return new Promise((resolve, reject) => {
    const {
      restName,
      category,
      restDescription,
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
              const userDetailsForDb = {
                restName,
                category,
                restDescription,
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
                  userDetailsForDb.success = true;
                  resolve(userDetailsForDb);
                })
                .catch(function (error) {
                  error.success = false;
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

function logIn(userLoginDetails) {
  return new Promise((resolve, reject) => {
    const { userLoginEmail, userLoginPassword } = userLoginDetails;
    let userFound = false;
    // console.log (userLoginEmail,userLoginPassword);
    firebase
      .auth()
      .signInWithEmailAndPassword(userLoginEmail, userLoginPassword)
      .then((success) => {
        userFound = true;
        db.collection("users")
          .doc(success.user.uid)
          .get()
          .then((snapshot) => {});
      })
      .catch((error) => {
        // Handle Errors here.
        let errorMessage = error.message;
        reject(errorMessage);
      });
    return userFound;
  });
}

function orderNow(cartItemsList, totalPrice, resDetails, userDetails) {
  return new Promise((resolve, reject) => {
    let user = firebase.auth().currentUser;
    let uid;
    if (user != null) {
      uid = user.uid;
    }
    const myOrder = {
      itemsList: cartItemsList,
      totalPrice: totalPrice,
      status: "PENDING",
      ...resDetails,
    };

    const orderRequest = {
      itemsList: cartItemsList,
      totalPrice: totalPrice,
      status: "PENDING",
      ...userDetails,
    };

    db.collection("users")
      .doc(uid)
      .collection("myOrder")
      .add(myOrder)
      .then((docRef) => {
        db.collection("users")
          .doc(resDetails.id)
          .collection("orderRequest")
          .doc(docRef.id)
          .set(orderRequest)
          .then((docRef) => {
            resolve("Successfully ordered");
          })
          .catch(function (error) {
            console.error("Error adding document: ", error.message);
            reject(error.message);
          });
      })
      .catch(function (error) {
        console.error("Error adding document: ", error.message);
        reject(error.message);
      });
  });
}

function restaurant_list() {
  return new Promise((resolve, reject) => {
    let restaurantList = [];
    db.collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.data().isRestaurant) {
            const obj = { id: doc.id, ...doc.data() };
            restaurantList.push(obj);
          }
        });
        resolve(restaurantList);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function order_request() {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        let orderRequest = [];
        db.collection("users")
          .doc(user.uid)
          .collection("orderRequest")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              const obj = { id: doc.id, ...doc.data() };
              orderRequest.push(obj);
            });
            resolve(orderRequest);
          })
          .catch((error) => {
            reject(error);
          });
      }
    });
  });
}

function addItem(itemDetails) {
  const { itemName, itemIngredients, itemPrice, itemCategory, itemImage } =
    itemDetails;
  return new Promise((resolve, reject) => {
    let user = firebase.auth().currentUser;
    var uid;
    if (user != null) {
      uid = user.uid;
    }
    firebase
      .storage()
      .ref()
      .child(`itemImage/${uid}/` + itemImage.name)
      .put(itemImage)
      .then((url) => {
        url.ref
          .getDownloadURL()
          .then((success) => {
            const itemImageUrl = success;
            const itemDetailsForDb = {
              itemName,
              itemIngredients,
              itemPrice,
              itemCategory,
              itemImageUrl,
            };
            db.collection("users")
              .doc(uid)
              .collection("menuItems")
              .add(itemDetailsForDb)
              .then((docRef) => {
                resolve("Successfully added food item");
                logsRef.push({
                  message: `Added New Menu Item - ${itemName}!`,
                  userId: uid,
                  timestamp: firebase.database.ServerValue.TIMESTAMP,
                });
                Sentry.captureMessage({
                  message: `Added New Menu Item - ${itemName}!`,
                  userId: uid,
                  timestamp: firebase.database.ServerValue.TIMESTAMP,
                });
              })
              .catch(function (error) {
                let errorMessage = error.message;
                reject(errorMessage);
              });
          })
          .catch((error) => {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log("Error in getDownloadURL function", errorCode);
            console.log("Error in getDownloadURL function", errorMessage);
            reject(errorMessage);
          });
      })
      .catch((error) => {
        let errorMessage = error.message;
        console.log("Error in Image Uploading", errorMessage);
        reject(errorMessage);
      });
  });
}

function myFoodList() {
  return new Promise((resolve, reject) => {
    let user = firebase.auth().currentUser;
    var uid;
    if (user != null) {
      uid = user.uid;
    }
    let myFoods = [];
    db.collection("users")
      .doc(uid)
      .collection("menuItems")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const obj = { id: doc.id, ...doc.data() };
          myFoods.push(obj);
        });
        resolve(myFoods);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function menu_detail_list(rest_id) {
  return new Promise((resolve, reject) => {
    let menuDetailList = [];
    db.collection("users")
      .doc(rest_id)
      .collection("menuItems")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc != null) {
            const obj = { id: doc.id, ...doc.data() };
            menuDetailList.push(obj);
          }
        });
        resolve(menuDetailList);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function getUserDetails(userId) {
  return new Promise((resolve, reject) => {
    db.collection("users")
      .doc(userId)
      .get()
      .then((doc) => {
        resolve(doc.data());
      })
      .catch((error) => {
        reject(error);
      });
  });
}

// export default firebase;
export {
  signUp,
  logIn,
  orderNow,
  restaurant_list,
  addItem,
  myFoodList,
  order_request,
  signInWithPopup,
  menu_detail_list,
  getUserDetails,
};
