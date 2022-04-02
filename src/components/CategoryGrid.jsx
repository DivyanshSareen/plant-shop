import CategoryCard from "./CategoryCard";

export default function CategoryGrid() {
  return (
    <>
      <section className='category'>
        <div className='category-grid'>
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </section>
    </>
  );
}
