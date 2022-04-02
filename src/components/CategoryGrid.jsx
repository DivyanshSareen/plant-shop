import CategoryCard from "./CategoryCard";

export default function CategoryGrid() {
  return (
    <>
      <section class='category'>
        <div class='category-grid'>
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </section>
    </>
  );
}
