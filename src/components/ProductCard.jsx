import productImg from "../assests/product-img.jpg";

export default function ProductCard() {
  return (
    <div className='card card-horizontal'>
      <div className='card-img'>
        <img src={productImg} alt='card' />
      </div>
      <div className='card-content'>
        <div className='card-head'>
          <div className='card-title h5'>Gift Box</div>
          <div className='card-subtitle h4'>
            <ins>Rs. 2000</ins> <del>Rs. 3000</del>
          </div>
          <div className='offer'>50% off</div>
        </div>
        <div className='card-option'>
          <button className='btn'>Add to Cart</button>
          <button className='btn'>Move to WishList</button>
        </div>
      </div>
    </div>
  );
}
