import CategoryCard from "./CategoryCard";

import { useCategory } from "../context/category-context";

export default function CategoryGrid() {
  const { categories } = useCategory();

  return (
    <>
      <section className='category'>
        <div className='category-grid'>
          {categories.map((cat) => (
            <CategoryCard key={cat._id} category={cat} />
          ))}
        </div>
      </section>
    </>
  );
}
