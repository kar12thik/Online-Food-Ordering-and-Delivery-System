const initialState = {
  loading: false,
  isRestaurant: false,
  loggedIn: false,
  userId: null, // for user object
  userEmail: null, // for storing the JWT
  userName: null,
  error: null,
  userProfileImageUrl: null,
  success: false, // for monitoring the registration process.
};

const loggedInUser = (state = initialState, action) => {
  switch (action.type) {
    case "LOGGED_IN_USER":
      return {
        ...state,
        loggedIn: true,
        userEmail: action.payload.userEmail,
        userId: action.payload.userId,
        userName: action.payload.userName,
        isRestaurant: action.payload.isRestaurant,
        userProfileImageUrl: action.payload.userProfileImageUrl,
      };
    case "LOG_OUT_USER":
      return initialState;
    default:
      return state;
  }
};

export default loggedInUser;
