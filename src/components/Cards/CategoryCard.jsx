import { Link } from "react-router-dom";
import { useProduct } from "../../context/product-context";

export default function CategoryCard({ category }) {
  const { productDispatch } = useProduct();
  return (
    <Link to='listing'>
      <div
        className='card card-overlay'
        onClick={() => {
          return productDispatch({
            type: "CATEGORY_INIT",
            payload: category.categoryName,
          });
        }}>
        <div className='card-head'>
          <div className='card-title h4'>{category.categoryName}</div>
        </div>
        <div className='card-img resp-img'>
          <img
            src={require(`../../assests/${category.image}`)}
            alt='product-category'></img>
        </div>
        <div className='card-badge'>
          <div className='badge'>new</div>
          <div className='badge'>sale</div>
        </div>
      </div>
    </Link>
  );
}
