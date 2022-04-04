import CategoryCard from "./CategoryCard";
import { categories } from "../data/cat";

export default function CategoryGrid() {
  console.log(categories);
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
