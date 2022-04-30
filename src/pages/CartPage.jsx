import BillingDetail from "../components/BillingDetail";
import CartGrid from "../components/Grids/CartGrid";
import "../styles/cart.css";

const CartPage = () => {
  return (
    <>
      <h4 className='h4 center-text cart-head'>My Cart</h4>
      <div className='cart'>
        <CartGrid />
        <BillingDetail />
      </div>
    </>
  );
};
export default CartPage;
