import Nav from "../components/Nav";
import ProductGrid from "../components/ProductGrid";
import Filters from "../components/Filters";
import "../styles/product-list.css";

export default function ProductList(){
    return(
        <>
            <Nav />
            <section className="content">
                <Filters />
                <ProductGrid />
            </section>
        </>
    );
}