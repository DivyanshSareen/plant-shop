import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import productReducer from "../reducer/product-reducer";

const ProductContext = createContext();

const products = [];
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
const filter = { range: { min: 0, max: 500 }, category: [] };

export function ProductProvider({ children }) {
  const [productState, productDispatch] = useReducer(productReducer, {
    products,
    noProducts,
    categories,
    rating,
    getProducts,
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

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ productState, productDispatch }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  return useContext(ProductContext);
}
