import Nav from "../components/Nav";
import BillingDetail from "../components/BillingDetail";
import ProductDetail from "../components/ProductDetail";
import "../styles/cart.css";

export default function CartPage(){
    return(
        <>
            <Nav/>
            <h5 class="h6 center-text cart-head">MY CART(3)</h5>
            <div class="cart">
                <div class="products">
                    <ProductDetail/>
                    <ProductDetail/>
                    <ProductDetail/>
                </div>
                <div class="bill">
                    <BillingDetail/>
                </div>
            </div>
        </>
    )
}