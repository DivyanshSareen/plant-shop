import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "../reducer/cart-reducer";

const CartContext = createContext();

const cart = [];
const noItemsCart = cart.length;

const bill = { total: 0, discount: 0, deliveryCharge: 75 };

export function CartProvider({ children }) {
  const [cartState, cartDispatch] = useReducer(CartReducer, {
    cart,
    noItemsCart,
    bill,
  });

  // calculate bill through reducer

  return (
    <CartContext.Provider
      value={{
        cartState,
        cartDispatch,
      }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
