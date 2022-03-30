import productImg from "../assests/product-img.jpg"

export default function ProductDetail(){
    return(
        <div class="card card-horizontal">
                <div class="card-img">
                    <img src={productImg} alt="card"></img>
                </div>
                <div class="card-content">
                    <div class="card-head">
                        <div class="card-title h5">
                            Gift Box
                        </div>
                        <div class="card-subtitle h4">
                            <ins>Rs. 2000</ins> <del>Rs. 3000</del>
                        </div>
                        <div class="offer">
                            50% off
                        </div>
                    </div>
                    <div class="input quantity-input">
                        <label for="quantity" class="input-label">Quantity: </label>
                        <input class="input-data" type="number" name="quantity" id="quantity"></input>
                    </div>
                    <div class="card-option">
                        <button class="btn">Remove From Cart</button>
                        <button class="btn">Move to Wishlist</button>
                    </div>
                </div>
            </div>
    );
}