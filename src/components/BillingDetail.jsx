import { useCart } from "../context/cart-context";

export default function BillingDetail() {
  const { cartState } = useCart();

  return (
    <>
      <div className='bill'>
        <div className='h6 bill-heading'>PRICE DETAILS</div>
        <hr />
        <div className='price-details'>
          <div className='price-detail'>Price</div>
          <div className='price-value'>Rs. {cartState.bill.total}</div>
          <div className='price-detail'>Discount</div>
          <div className='price-value'>- Rs. {cartState.bill.discount}</div>
          <div className='price-detail'>Dlivery Charges</div>
          <div className='price-value'>Rs. {cartState.bill.deliveryCharge}</div>
        </div>
        <hr />
        <div className='price-details'>
          <div className='bill-heading price-detail'>TOTAL AMOUNT</div>
          <div className='price-value'>
            Rs.{" "}
            {cartState.bill.total -
              cartState.bill.discount +
              cartState.bill.deliveryCharge}
          </div>
        </div>
        <hr />
        <div className='paragraph2'>
          You will save Rs. {cartState.bill.discount} on this order
        </div>
        <hr />
        <div className='btn bill-btn'>Place Order</div>
      </div>
    </>
  );
}
