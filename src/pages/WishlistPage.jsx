import Nav from "../components/Nav";
import ProductGrid from "../components/ProductGrid";
import "../styles/wishlist.css";

export default function WishlistPage() {
  return (
    <>
      <Nav />
      <h4 className='h4 center-text'>Wishlist</h4>
      <ProductGrid />
    </>
  );
}
