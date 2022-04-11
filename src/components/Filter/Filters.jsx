import CategoryFilter from "./CategoryFilter";
import RatingFilter from "./RatingFilter";
import { useProduct } from "../../context/product-context";

export default function Filters() {
  const { productState } = useProduct();
  return (
    <aside>
      <div className='filter'>
        <div className='filter-and-clear'>
          <div>Filters</div>
          <div>
            <u>Clear</u>
          </div>
        </div>
        <form action=''>
          <div className='input price'>
            <label className='input-label' htmlFor='price'>
              Price
            </label>
            <input
              className='input-data'
              type='range'
              id='price'
              name='price'
              min='0'
              value={100}
              max='500'></input>
            <div className='price-values'>
              <div>0</div>
              <div>250</div>
              <div>500</div>
            </div>
          </div>
          <p className='filter-heading'>Category</p>
          {productState.categories.map((cat) => (
            <CategoryFilter key={cat} category={cat} />
          ))}

          <p className='filter-heading'>Rating</p>
          {productState.rating.map((rate) => (
            <RatingFilter key={rate.stars} rating={rate} />
          ))}
          <p className='filter-heading'>Sort by</p>
          <div className='input inline-input'>
            <input type='radio' id='low-to-high' name='low-to-high'></input>
            <label htmlFor='low-to-high'>Price- Low to High</label>
          </div>
          <div className='input inline-input'>
            <input type='radio' id='high-to-low' name='high-to-low'></input>
            <label htmlFor='high-to-low'>Price- High to Low</label>
          </div>
        </form>
      </div>
    </aside>
  );
}
