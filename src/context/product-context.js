import { createContext, useContext, useEffect, useReducer } from "react";
import productReducer from "../reducer/product-reducer";
import axios from "axios";

const ProductContext = createContext();

const products = [];
const noProducts = 0;

export function ProductProvider({ children }) {
  const [productState, productDispatch] = useReducer(productReducer, {
    products,
    noProducts,
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
