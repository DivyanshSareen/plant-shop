import WishlistCard from "../Cards/WishlistCard";
import { useWishlist } from "../../context/wishlist-context";

const WishlistGrid = () => {
  const { wishlistState } = useWishlist();

  return (
    <main>
      <div className='wishlist'>
        {wishlistState.wishlist.map((wish) => (
          <WishlistCard key={wish._id} wishProduct={wish} />
        ))}
      </div>
    </main>
  );
};
export default WishlistGrid;
