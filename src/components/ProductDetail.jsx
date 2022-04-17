import { useCart } from "../context/cart-context";
import { useWishlist } from "../context/wishlist-context";

export default function ProductDetail({ cartProduct }) {
  const { cartDispatch } = useCart();
  const { wishlistDispatch } = useWishlist();
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
          <button
            className='btn'
            onClick={() =>
              cartDispatch({
                type: "REMOVE_FROM_CART",
                payload: cartProduct,
              })
            }>
            Remove From Cart
          </button>
          <button
            className='btn'
            onClick={() => {
              cartDispatch({
                type: "REMOVE_FROM_CART",
                payload: cartProduct,
              });
              wishlistDispatch({
                type: "ADD_TO_WISHLIST",
                payload: cartProduct,
              });
            }}>
            Move to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
