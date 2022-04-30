import { createContext, useContext, useReducer } from "react";
import wishlistReducer from "../reducer/wishlist-reducer";

const WishlistContext = createContext();

const wishlist = [];

const noItemsWishlist = wishlist.length;

export function WishlistProvider({ children }) {
  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, {
    wishlist,
    noItemsWishlist,
  });
  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () => useContext(WishlistContext);
