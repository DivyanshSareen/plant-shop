export default function Filters(){
    return(<aside>
            <div class="filter">
                <div class="filter-and-clear">
                    <div>Filters</div>
                    <div>
                        <u>Clear</u>
                    </div>
                </div>
                <form action="">
                    <div class="input price">
                        <label class="input-label" for="price">Price</label>
                        <input class="input-data" type="range" id="price" name="price" min="0" max="100"></input>
                        <div class="price-values">
                            <div>0</div>
                            <div>50</div>
                            <div>100</div>
                        </div>
                    </div>
                    <p class="filter-heading">Category</p>
                    <div class="input inline-input">
                        <input type="checkbox" id="men-clothing" name="men-clothing" checked></input>
                        <label for="men-clothing">Men Clothing</label>
                    </div>
                    <div class="input inline-input">
                        <input type="checkbox" id="men-clothing" name="men-clothing"></input>
                        <label for="men-clothing">Men Clothing</label>
                    </div>
                    <p class="filter-heading">Rating</p>
                    <div class="input inline-input">
                        <input type="radio" id="4star" name="rating" checked></input>
                        <label for="men-clothing">4 Star and above</label>
                    </div>
                    <div class="input inline-input">
                        <input type="radio" id="2star" name="rating"></input>
                        <label for="men-clothing">2 Star and above</label>
                    </div>
                    <div class="input inline-input">
                        <input type="radio" id="2star" name="rating"></input>
                        <label for="men-clothing">2 Star and above</label>
                    </div>
                    <div class="input inline-input">
                        <input type="radio" id="1star" name="rating"></input>
                        <label for="men-clothing">1 Star and above</label>
                    </div>
                    <p class="filter-heading">Sort by</p>
                    <div class="input inline-input">
                        <input type="radio" id="low-to-high" name="sort-by" checked></input>
                        <label for="men-clothing">Price- Low to High</label>
                    </div>
                    <div class="input inline-input">
                        <input type="radio" id="high-to-low" name="sort-by"></input>
                        <label for="men-clothing">Price- High to Low</label>
                    </div>
                </form>
                </div>
        </aside>);
}