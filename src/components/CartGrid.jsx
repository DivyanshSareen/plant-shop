import ProductDetail from "./ProductDetail";
import { useCart } from "../context/cart-context";

export default function CartGrid() {
  const { cart } = useCart();
  return (
    <div className='products'>
      {cart.map((cartProduct) => (
        <ProductDetail cartProduct={cartProduct} />
      ))}
    </div>
  );
}
