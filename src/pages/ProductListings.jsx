import ProductGrid from "../components/Grids/ProductGrid";
import Filters from "../components/Filter/Filters";
import "../styles/product-list.css";

export default function ProductList() {
  return (
    <>
      <section className='content'>
        <Filters />
        <ProductGrid />
      </section>
    </>
  );
}
