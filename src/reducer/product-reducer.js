export default function productReducer(state, action) {
  switch (action.type) {
    case "ADD_PRODUCTS":
      console.log("in reduce", [...state.products, ...action.payload]);
      return {
        ...state,
        products: action.payload,
        noProducts: state.noProducts + action.payload.length,
      };
    default:
      return state;
  }
}
