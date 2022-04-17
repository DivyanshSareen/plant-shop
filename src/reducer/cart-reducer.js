export function CartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log(state.cart.includes(action.payload));
      if (state.cart.find((e) => e._id === action.payload._id) !== undefined) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item._id === action.payload._id
              ? { ...item, quantity: item.quantity + 1 }
              : { ...item }
          ),
        };
      } else
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
          noItemsCart: state.noItemsCart + 1,
        };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload._id),
        noItemsCart: state.noItemsCart - 1,
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item._id === action.payload._id
            ? { ...item, quantity: parseInt(action.quantity) }
            : { ...item }
        ),
      };
    case "UPDATE_BILL":
      return {
        ...state,
        bill: {
          ...state.bill,
          total: action.payload.total,
          discount: action.payload.discount,
        },
      };
    default:
      return state;
  }
}
