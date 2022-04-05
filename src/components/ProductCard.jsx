export default function ProductCard({ product }) {
  console.log(product.image);
  return (
    <div className='card card-horizontal'>
      <div className='card-img'>
        <img src={require(`../assests${product.image}`)} alt='card' />
      </div>
      <div className='card-content'>
        <div className='card-head'>
          <div className='card-title h5'>{product.name}</div>
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
