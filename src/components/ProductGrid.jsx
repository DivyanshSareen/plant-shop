import ProductCard from "./ProductCard";
import { useProduct } from "../context/product-context";

export default function ProductGrid() {
  const { productState } = useProduct();

  return (
    <main>
      <div className='product-grid'>
        {productState.products.map((pd) => (
          <ProductCard key={pd._id} product={pd} />
        ))}
      </div>
    </main>
  );
}
