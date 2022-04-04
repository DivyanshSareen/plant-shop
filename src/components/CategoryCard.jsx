import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  return (
    <Link to='listing'>
      <div className='card card-overlay'>
        <div className='card-head'>
          <div className='card-title h4'>{category.categoryName}</div>
        </div>
        <div className='card-img resp-img'>
          <img
            src={require(`../assests/${category.image}`)}
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
