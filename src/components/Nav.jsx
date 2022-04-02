export default function Nav() {
  return (
    <>
      <nav>
        <div class='nav-wrapper'>
          <div class='nav-logo h6'>
            <i class='fa-solid fa-seedling'></i> PlantShop
          </div>
          <div class='nav-list'>
            <div class='nav-item input search'>
              <label for='search'>
                <i class='fa-solid fa-magnifying-glass'></i>{" "}
              </label>
              <input
                class='input-data'
                type='text'
                id='search'
                placeholder='Search Products'></input>
            </div>
            <a href='./login.html'>
              <button class='nav-item btn btn-ghost login-btn'>
                <i class='fa-solid fa-arrow-right-to-bracket'></i>
                Login
              </button>
            </a>
            <a href='./wishlist.html'>
              <div class='nav-item icon-badge btn btn-ghost'>
                <i class='fa-regular fa-heart icon'>
                  <div class='badge-num'>6</div>
                </i>
              </div>
            </a>
            <a href='./cart.html'>
              <div class='nav-item icon-badge btn btn-ghost'>
                <i class='fa-solid fa-cart-shopping icon'>
                  <div class='badge-num'>6</div>
                </i>
              </div>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
