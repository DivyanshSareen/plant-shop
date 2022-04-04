import CategoryCard from "./CategoryCard";
import { categories } from "../data/cat";

import { useEffect, useState } from "react";
import axios from "axios";

export default function CategoryGrid() {
  const [category, setCategory] = useState({});

  useEffect(() => {
    getCategories();
  }, []);

  async function getCategories() {
    try {
      const response = await axios.get("/api/categories");
      setCategory(response.data.categories);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(categories);
  return (
    <>
      <section className='category'>
        <div className='category-grid'>
          {category.map((cat) => (
            <CategoryCard key={cat._id} category={cat} />
          ))}
        </div>
      </section>
    </>
  );
}
