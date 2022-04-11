export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log(action.payload);
      return {
        ...state,
        cart: [...state.cart, action.payload],
        noItemsCart: state.noItemsCart + 1,
        bill: {
          ...state.bill,
          total: state.bill.total + action.payload.price,
          discount: state.bill.discount + action.payload.discount_amt,
        },
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload._id),
        noItemsCart: state.noItemsCart - 1,
        bill: {
          ...state.bill,
          total: state.bill.total - action.payload.price,
          discount: state.bill.discount - action.payload.discount_amt,
        },
      };
    default:
      return state;
  }
}
