export default function ProductDetail({ cartProduct }) {
  console.log(cartProduct);
  return (
    <div className='card card-horizontal'>
      <div className='card-img'>
        <img src={require(`../assests${cartProduct.image}`)} alt='card' />
      </div>
      <div className='card-content'>
        <div className='card-head'>
          <div className='card-title h5'>{cartProduct.name}</div>
          <div className='card-subtitle h4'>
            <ins>Rs. {cartProduct.price - cartProduct.discount_amt}</ins>{" "}
            <del>Rs. {cartProduct.price}</del>
          </div>
          <div className='offer'>{cartProduct.discount}% off</div>
        </div>
        <div className='input quantity-input'>
          <label htmlFor='quantity' className='input-label'>
            Quantity:{" "}
          </label>
          <input
            className='input-data'
            type='number'
            name='quantity'
            id='quantity'
          />
        </div>
        <div className='card-option'>
          <button className='btn'>Remove From Cart</button>
          <button className='btn'>Move to Wishlist</button>
        </div>
      </div>
    </div>
  );
}
