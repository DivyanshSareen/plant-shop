export default function ProductDetail() {
  return (
    <div className='card card-horizontal'>
      <div className='card-img'>
        <img src={require("../assests/fruit/mango.webp")} alt='card' />
      </div>
      <div className='card-content'>
        <div className='card-head'>
          <div className='card-title h5'>Gift Box</div>
          <div className='card-subtitle h4'>
            <ins>Rs. 2000</ins> <del>Rs. 3000</del>
          </div>
          <div className='offer'>50% off</div>
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
