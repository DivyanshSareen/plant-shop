export default function ProductCard(){
    return(
        <div class="card">
                    <div class="card-img resp-img">
                        <img src="https://images.pexels.com/photos/264791/pexels-photo-264791.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="card"></img>
                    </div>
                    <div class="card-head">
                        <div class="card-title subtitle2 center-text">
                            Gift Box
                        </div>
                        <div class="card-subtitle h5 center-text">
                            Rs. 500
                        </div>
                    </div>

                    <div class="card-option">
                        <button class="btn">Add to cart</button>
                    </div>
                </div>
    );
}