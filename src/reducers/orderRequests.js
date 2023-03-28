const initialState = {
    loading: false,
    userId: null,
    userEmail: null,
    userName: null,
    orders: [],
  };
  
  const orderRequests = (state = initialState, action) => {
    switch (action.type) {
      case "RECEIVE_ORDER":
        return {
          ...state,
          userId: action.payload.userId,
          userEmail: action.payload.userEmail,
          orders: action.payload.orders,
        };
      default:
        return state;
    }
  };
  
  export default orderRequests;
  