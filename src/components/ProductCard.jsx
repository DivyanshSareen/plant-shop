export default function ProductCard(){
    return(
       <div className="card">
  <div className="card-img resp-img">
    <img
      src="https://images.pexels.com/photos/264791/pexels-photo-264791.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="card"
    />
  </div>
  <div className="card-head">
    <div className="card-title subtitle2 center-text">Gift Box</div>
    <div className="card-subtitle h5 center-text">Rs. 500</div>
  </div>
  <div className="card-option">
    <button className="btn">Add to cart</button>
  </div>
</div>

    );
}