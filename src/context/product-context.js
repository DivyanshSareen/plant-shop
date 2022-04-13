import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import productReducer from "../reducer/product-reducer";

const ProductContext = createContext();

const products = [];
const filteredProducts = [];
const noProducts = 0;
const categories = [
  { name: "perennial", isChecked: true },
  { name: "palm", isChecked: true },
  { name: "indoor", isChecked: true },
  { name: "fruit", isChecked: true },
];
const rating = [
  { stars: 4, isChecked: false },
  { stars: 3, isChecked: false },
  { stars: 2, isChecked: false },
  { stars: 1, isChecked: true },
];
const range = { min: 0, max: 500 };
const sort = { ascending: false, descending: false };

export function ProductProvider({ children }) {
  const [productState, productDispatch] = useReducer(productReducer, {
    products,
    filteredProducts,
    noProducts,
    categories,
    rating,
    range,
    sort,
  });

  async function getProducts() {
    let response = [];
    try {
      response = await axios.get("/api/products");
    } catch (error) {
      console.log(error);
    } finally {
      productDispatch({
        type: "ADD_PRODUCTS",
        payload: response.data.products,
      });
    }
  }

  function filterProducts(categories) {
    // console.log(categories);
    productDispatch({ type: "APPLY_FILTERS" });
  }

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    filterProducts(productState.categories);
  }, [productState.categories]);

  return (
    <ProductContext.Provider value={{ productState, productDispatch }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  return useContext(ProductContext);
}
