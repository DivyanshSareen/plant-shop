import category from "../assests/category1.jpeg";

export default function CategoryCard() {
  return (
    <a href='./product-list.html'>
      <div className='card card-overlay'>
        <div className='card-head'>
          <div className='card-title h4'>Category</div>
        </div>
        <div className='card-img resp-img'>
          <img src={category} alt='product-category'></img>
        </div>
        <div className='card-badge'>
          <div className='badge'>new</div>
          <div className='badge'>sale</div>
        </div>
      </div>
    </a>
  );
}
