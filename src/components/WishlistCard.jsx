export default function WishlistCard({ wishProduct }) {
  console.log(wishProduct);
  return (
    <div className='card card-horizontal'>
      <div className='card-img'>
        <img src={require(`../assests${wishProduct.image}`)} alt='card' />
      </div>
      <div className='card-content'>
        <div className='card-head'>
          <div className='card-title h5'>{wishProduct.name}</div>
          <div className='card-subtitle h4'>
            <ins>Rs. {wishProduct.price - wishProduct.discount_amt}</ins>{" "}
            <del>Rs. {wishProduct.price}</del>
          </div>
          <div className='offer'>{wishProduct.discount_amt}% off</div>
        </div>
        <div className='card-option'>
          <button className='btn'>Move to Cart</button>
          <button className='btn'>Remove</button>
        </div>
      </div>
    </div>
  );
}
