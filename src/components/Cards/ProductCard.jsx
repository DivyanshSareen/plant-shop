import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";

const ProductCard = ({ product }) => {
  const { cartDispatch } = useCart();
  const { wishlistDispatch } = useWishlist();
  return (
    <div className='card card-horizontal'>
      <div className='card-img'>
        <img src={require(`../../assests${product.image}`)} alt='card' />
      </div>
      <div className='card-content'>
        <div className='card-head'>
          <div className='card-title h5'>{product.name}</div>
          <div className='card-badge'>
            <div className='badge'>
              <i className='fa-solid fa-star checked'></i> {product.rating}
            </div>
          </div>
          <div className='card-subtitle h4'>
            <ins>Rs. {product.price - product.discount_amt}</ins>{" "}
            <del>Rs. {product.price}</del>
          </div>
          <div className='offer'>{product.discount} off</div>
        </div>
        <div className='card-option'>
          <button
            className='btn'
            onClick={() => {
              cartDispatch({ type: "ADD_TO_CART", payload: product });
            }}>
            Add to Cart
          </button>
          <button
            className='btn'
            onClick={() => {
              wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: product });
            }}>
            Move to WishList
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
