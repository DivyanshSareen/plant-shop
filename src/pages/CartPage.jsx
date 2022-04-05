import BillingDetail from "../components/BillingDetail";
import CartGrid from "../components/CartGrid";
import "../styles/cart.css";

export default function CartPage() {
  return (
    <>
      <h4 className='h4 center-text cart-head'>My Cart</h4>
      <div className='cart'>
        <CartGrid />
        <BillingDetail />
      </div>
    </>
  );
}
