import ProductDetail from "../Cards/ProductDetail";
import { useCart } from "../../context/cart-context";

export default function CartGrid() {
  const { cartState } = useCart();
  return (
    <div className='products'>
      {cartState?.cart?.map((cartProduct) => (
        <ProductDetail key={cartProduct._id} cartProduct={cartProduct} />
      ))}
    </div>
  );
}
