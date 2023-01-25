/* eslint-disable no-unused-vars */
import { useCart } from "../context/cart-context";
import axios from "axios";
import { useEffect, useState } from "react";
const FINMO_APP_KEY = "QUtfRklOTU9fU0JYX0VDMzMxRkU0MDg4MjRFRDNBRENCMzA5NTQ5OUFFQzY0OlNLX0ZJTk1PX1NCWF8wMjhGMTJGMl84MkYzXzQ5ODhfODIwQV8yNjA1NjMwNzY0OEI="
const FINMO_BASE_URL = "";

async function createFinmoLink(breakdown, totalAmount) {
  let data = JSON.stringify({
    amount: totalAmount,
    currency: "AUD",
    country: "AU",
    redirect_url: "https://g6x46s.csb.app/",
    amount_breakdown: breakdown,
  });

  let config = {
    method: "post",
    url: `https://api.qafinmo.net/v1/checkout`,
    headers: {
      Authorization: `Basic ${FINMO_APP_KEY}`,
      "Content-Type": "application/json",
    },
    data: data,
  };
  console.log(data)
  
  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      localStorage.setItem("checkout_id", response.data.data.checkout_id)
      window.location.replace(response.data.data.checkout_url)
    })
    .catch(function (error) {
      console.log(error);
    });
}

const BillingDetail = () => {
  const { cartState, cartDispatch } = useCart();
  console.log(cartState.cart)
  const [breakdown, setBreakdown] = useState({});

  useEffect(()=>{
    const newBreakdown = cartState.cart.reduce((acc, curr) => {
      acc[curr.name] = (curr.price - curr.discount_amt) * curr.quantity;
      return acc; 
    }, {delivery: 75})  
    setBreakdown(newBreakdown);
  },[cartState.cart])

  return (
    <>
      <div className='bill'>
        <div className='h6 bill-heading'>PRICE DETAILS</div>
        <hr />
        <div className='price-details'>
          <div className='price-detail'>Price</div>
          <div className='price-value'>AUD {cartState.bill.total}</div>
          <div className='price-detail'>Discount</div>
          <div className='price-value'>- AUD {cartState.bill.discount}</div>
          <div className='price-detail'>Delivery Charges</div>
          <div className='price-value'>AUD {cartState.bill.deliveryCharge}</div>
        </div>
        <hr />
        <div className='price-details'>
          <div className='bill-heading price-detail'>TOTAL AMOUNT</div>
          <div className='price-value'>
            AUD{" "}
            {cartState.bill.total -
              cartState.bill.discount +
              cartState.bill.deliveryCharge}
          </div>
        </div>
        <hr />
        <div className='paragraph2'>
          You will save AUD {cartState.bill.discount} on this order
        </div>
        <hr />
        <div
          className='btn bill-btn'
          onClick={ async () => {
            await createFinmoLink(breakdown, cartState.bill.total -
              cartState.bill.discount +
              cartState.bill.deliveryCharge);
          }}>
          Place Order
        </div>
      </div>
    </>
  );
};
export default BillingDetail;
