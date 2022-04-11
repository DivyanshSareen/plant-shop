import ProductCard from "./ProductCard";
import { useProduct } from "../context/product-context";

export default function ProductGrid() {
  const { products } = useProduct([]);
  return (
    <main>
      <div className='product-grid'>
        {products.map((pd) => (
          <ProductCard key={pd._id} product={pd} />
        ))}
      </div>
    </main>
  );
}
