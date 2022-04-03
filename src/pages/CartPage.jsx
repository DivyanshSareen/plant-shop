import Nav from "../components/Nav";
import BillingDetail from "../components/BillingDetail";
import ProductDetail from "../components/ProductDetail";
import "../styles/cart.css";

export default function CartPage() {
  return (
    <>
      <Nav />
      <h5 className='h6 center-text cart-head'>MY CART(3)</h5>
      <div className='cart'>
        <div className='products'>
          <ProductDetail />
          <ProductDetail />
          <ProductDetail />
        </div>

        <BillingDetail />
      </div>
    </>
  );
}
