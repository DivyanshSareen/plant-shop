export default function productReducer(state, action) {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
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
    case "FILTER_BY_RATING":
      return {
        ...state,
        products: state.products.filter((pd) => pd.rating >= action.payload),
      };
    case "UPDATE_CATEGORY":
      return {
        ...state,
        categories: state.categories.map((cat) =>
          cat.name === action.payload.name ? action.payload : cat
        ),
      };
    case "APPLY_FILTERS":
      const filteredCategories = state.categories.map((cat) =>
        cat.isChecked === true ? cat.name : null
      );
      console.log(filteredCategories);
      const FilteredProducts = state.products.filter((item) =>
        filteredCategories.includes(item.categoryName)
      );
      return { ...state, filteredProducts: FilteredProducts };
    default:
      return state;
  }
}
