import { createContext, useContext, useState } from "react";
const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([
    {
      _id: 1818,
      name: "mango",
      categoryName: "fruit",
      image: "/fruit/mango.webp",
      price: "400",
      discount: "10",
      discount_amt: "40",
    },
    {
      _id: 1919,
      name: "orange",
      categoryName: "fruit",
      image: "/fruit/orange.webp",
      price: "400",
      discount: "10",
      discount_amt: "40",
    },
  ]);

  function addToCart(productDetail) {
    setCart((cart) => [...cart, productDetail]);
    console.log("nnew cart:", cart);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
      }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
