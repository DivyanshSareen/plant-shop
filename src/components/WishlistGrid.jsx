import WishlistCard from "./WishlistCard";
import { useWishlist } from "../context/wishlist-context";

export default function ProductGrid() {
  const { wishlist } = useWishlist();

  return (
    <main>
      <div className='wishlist'>
        {wishlist.map((wish) => (
          <WishlistCard key={wish._id} wishProduct={wish} />
        ))}
      </div>
    </main>
  );
}
