export default function productReducer(state, action) {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        noProducts: state.noProducts + action.payload.length,
      };
    case "SORT_LOW_TO_HIGH":
      return {
        ...state,
        products: state.products.sort((a, b) => a.price - b.price),
      };
    case "SORT_HIGH_TO_LOW":
      return {
        ...state,
        products: state.products.sort((a, b) => b.price - a.price),
      };
    default:
      return state;
  }
}
