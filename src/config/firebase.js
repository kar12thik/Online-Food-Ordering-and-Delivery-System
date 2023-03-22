import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,getAuth,signInWithPopup,signInWithEmailAndPassword,createUserWithEmailAndPassword,sendPasswordResetEmail,signOut,} from "firebase/auth";
import { getFirestore,query,getDocs,collection,where,addDoc,} from "firebase/firestore";

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

// Added for Sign-in-with google 
function signInWithGoogle() {
  return new Promise((resolve, reject) => {
    const provider = new GoogleAuthProvider();
   signInWithPopup(auth, provider)
       .then((result) => {
         // This gives you a Google Access Token. You can use it to access the Google API.
         const credential = GoogleAuthProvider.credentialFromResult(result);
         const token = credential.accessToken;
         // The signed-in user info.
         const user = result.user;
         // IdP data available using getAdditionalUserInfo(result)
         // ...
       }).catch((error) => {
         // Handle Errors here.
         const errorCode = error.code;
         const errorMessage = error.message;
         // The email of the user's account used.
         const email = error.customData.email;
         // The AuthCredential type that was used.
         const credential = GoogleAuthProvider.credentialFromError(error);
         // ...
       });
   });
}

// export const signInWithGoogle = () => {
//   const provider = new GoogleAuthProvider();
//   return signInWithPopup(auth, provider);
// };

// const signInButton = () => {
//   const provider = new GoogleAuthProvider();
//   const signInButton = document.getElementById("google-sign-in-button");
//   //const signInButton = document.getElementById('sign-in-button');
//   signInButton.addEventListener('click', () => {
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         // This gives you a Google Access Token. You can use it to access the Google API.
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;
//         // The signed-in user info.
//         const user = result.user;
//         // IdP data available using getAdditionalUserInfo(result)
//         // ...
//       }).catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // The email of the user's account used.
//         const email = error.customData.email;
//         // The AuthCredential type that was used.
//         const credential = GoogleAuthProvider.credentialFromError(error);
//         // ...
//       });
//   });
// };
// const googleProvider = new GoogleAuthProvider();
// const signInWithGoogle = async () => {
//   try {
//     const res = await signInWithPopup(auth, googleProvider);
//     const user = res.user;
//     const q = query(collection(db, "users"), where("uid", "==", user.uid));
//     const docs = await getDocs(q);
//     if (docs.docs.length === 0) {
//       await addDoc(collection(db, "users"), {
//         uid: user.uid,
//         name: user.displayName,
//         authProvider: "google",
//         email: user.email,
//       });
//     }
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

// Added for Sign-in-with google

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

function restaurant_list(){
  return new Promise((resolve, reject) => {
    let restaurantList = [];
    db.collection('users').get().then((querySnapshot) => {
      querySnapshot.forEach(doc => {
        if (doc.data().isRestaurant) {
          const obj = { id: doc.id, ...doc.data() }
          restaurantList.push(obj);
        }
      })
      resolve(restaurantList);
    }).catch((error) => {
      reject(error);
    });
  });
}

// export default firebase;
export { signUp, logIn, orderNow, restaurant_list , signInWithPopup, signInWithGoogle};
