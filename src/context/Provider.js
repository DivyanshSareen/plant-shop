import { CategoryProvider } from "./category-context";
import { ProductProvider } from "./product-context";
import { CartProvider } from "./cart-context";
import { WishlistProvider } from "./wishlist-context";

export default function Provider({ children }) {
  return (
    <CategoryProvider>
      <ProductProvider>
        <CartProvider>
          <WishlistProvider>{children}</WishlistProvider>
        </CartProvider>
      </ProductProvider>
    </CategoryProvider>
  );
}
