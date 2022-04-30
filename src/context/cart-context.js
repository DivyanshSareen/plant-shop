import { createContext, useContext, useEffect, useReducer } from "react";
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

  const billReducer = (acc, ele) => {
    return {
      ...acc,
      total: acc.total + ele.price * ele.quantity,
      discount: acc.discount + ele.discount_amt * ele.quantity,
    };
  };

  useEffect(() => {
    const updatedBill = cartState.cart.reduce(billReducer, {
      total: 0,
      discount: 0,
    });
    cartDispatch({ type: "UPDATE_BILL", payload: updatedBill });
  }, [cartState.cart]);

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
