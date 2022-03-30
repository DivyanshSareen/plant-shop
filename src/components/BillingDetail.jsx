export default function BillingDetail(){
    return(       <>
            <div class="h6 bill-heading">PRICE DETAILS</div>
            <hr></hr>
            <div class="price-details">
                <div class="price-detail">Price (2 items)</div>
                <div class="price-value">Rs. 4999</div>
                <div class="price-detail">Discount</div>
                <div class="price-value">- Rs.1999</div>
                <div class="price-detail">Dlivery Charges</div>
                <div class="price-value">Rs. 499</div>
            </div>
            <hr></hr>
            <div class="price-details">
                <div class="bill-heading price-detail">TOTAL AMOUNT</div>
                <div class="price-value">Rs. 3499</div>
            </div>
            <hr></hr>
            <div class="paragraph2">You will save Rs. 1999 on this order</div>
            <hr></hr>
            <div class="btn bill-btn">Place Order</div>
            </>);
}