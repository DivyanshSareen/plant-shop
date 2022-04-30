import CartCard from "../Cards/CartCard";
import { useCart } from "../../context/cart-context";
const CartGrid = () => {
  const { cartState } = useCart();
  return (
    <div className='products'>
      {cartState?.cart?.map((cartProduct) => (
        <CartCard key={cartProduct._id} cartProduct={cartProduct} />
      ))}
    </div>
  );
};
export default CartGrid;
