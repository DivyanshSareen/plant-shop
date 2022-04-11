import { createContext, useContext, useReducer } from "react";
import wishlistReducer from "../reducer/wishlist-reducer";

const WishlistContext = createContext();

const wishlist = [
  {
    _id: 2121,
    name: "litchi",
    categoryName: "fruit",
    image: "/fruit/litchi.webp",
    price: 400,
    discount: 10,
    discount_amt: 40,
    rating: 4,
  },
  {
    _id: 1212,
    name: "mango",
    categoryName: "fruit",
    image: "/fruit/mango.webp",
    price: 400,
    discount: 10,
    discount_amt: 40,
    rating: 5,
  },
];

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
