import BillingDetail from "../components/BillingDetail";
import ProductDetail from "../components/ProductDetail";
import "../styles/cart.css";

import { useState, useEffect } from "react";

export default function CartPage() {
  return (
    <>
      <h4 className='h4 center-text cart-head'>My Cart</h4>
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
