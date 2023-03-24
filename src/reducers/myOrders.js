const initialState = {
  loading: false,
  userId: null,
  userEmail: null,
  userName: null,
  orders: [],
};

const myOrder = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ORDER":
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

export default myOrder;
