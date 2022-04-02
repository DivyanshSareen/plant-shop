export default function Nav() {
  return (
    <>
      <nav>
        <div className='nav-wrapper'>
          <div className='nav-logo h6'>
            <i className='fa-solid fa-seedling'></i> PlantShop
          </div>
          <div className='nav-list'>
            <div className='nav-item input search'>
              <label for='search'>
                <i className='fa-solid fa-magnifying-glass'></i>{" "}
              </label>
              <input
                class='input-data'
                type='text'
                id='search'
                placeholder='Search Products'></input>
            </div>
            <a href='./login.html'>
              <button className='nav-item btn btn-ghost login-btn'>
                <i className='fa-solid fa-arrow-right-to-bracket'></i>
                Login
              </button>
            </a>
            <a href='./wishlist.html'>
              <div className='nav-item icon-badge btn btn-ghost'>
                <i className='fa-regular fa-heart icon'>
                  <div className='badge-num'>6</div>
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
