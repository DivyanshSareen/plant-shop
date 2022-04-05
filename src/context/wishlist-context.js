import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([
    {
      _id: 66,
      name: "areca",
      categoryName: "palm",
      image: "/palm/areca.webp",
      price: "500",
      discount: "10",
      discount_amt: "50",
    },
    {
      _id: 77,
      name: "cycas",
      categoryName: "palm",
      image: "/palm/cycas.webp",
      price: "500",
      discount: "10",
      discount_amt: "50",
    },
  ]);

  const [noItemsWishlist, setNoItemsWishlist] = useState(2);
  return (
    <WishlistContext.Provider
      value={{ wishlist, setWishlist, noItemsWishlist, setNoItemsWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () => useContext(WishlistContext);
