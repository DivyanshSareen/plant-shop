import category from "../assests/category1.jpeg";

export default function CategoryCard() {
  return (
    <a href='./product-list.html'>
      <div class='card card-overlay'>
        <div class='card-head'>
          <div class='card-title h4'>Category</div>
        </div>
        <div class='card-img resp-img'>
          <img src={category} alt='product-category'></img>
        </div>
        <div class='card-badge'>
          <div class='badge'>new</div>
          <div class='badge'>sale</div>
        </div>
      </div>
    </a>
  );
}
