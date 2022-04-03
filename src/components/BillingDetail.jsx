export default function BillingDetail() {
  return (
    <>
      <div className='bill'>
        <div className='h6 bill-heading'>PRICE DETAILS</div>
        <hr />
        <div className='price-details'>
          <div className='price-detail'>Price (2 items)</div>
          <div className='price-value'>Rs. 4999</div>
          <div className='price-detail'>Discount</div>
          <div className='price-value'>- Rs.1999</div>
          <div className='price-detail'>Dlivery Charges</div>
          <div className='price-value'>Rs. 499</div>
        </div>
        <hr />
        <div className='price-details'>
          <div className='bill-heading price-detail'>TOTAL AMOUNT</div>
          <div className='price-value'>Rs. 3499</div>
        </div>
        <hr />
        <div className='paragraph2'>You will save Rs. 1999 on this order</div>
        <hr />
        <div className='btn bill-btn'>Place Order</div>
      </div>
    </>
  );
}
