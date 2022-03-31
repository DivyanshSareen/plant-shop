import Nav from "../components/Nav";
import WishlistCArd from "../components/WishlistCard";
import "../styles/wishlist.css"

export default function WishlistPage(){
    return(
        <>
            <Nav />
  <h5 className="h5 center-text">Wishlist</h5>
  <section className="wishlist">
    <WishlistCArd/>
    <WishlistCArd/>
    <WishlistCArd/>
    <WishlistCArd/>
    <WishlistCArd/>
    <WishlistCArd/>
    <WishlistCArd/>
    <WishlistCArd/>
  </section>
</>


    );
}