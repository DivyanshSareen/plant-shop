export default function productReducer(state, action) {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        noProducts: state.noProducts + action.payload.length,
      };
    default:
      return state;
  }
}
