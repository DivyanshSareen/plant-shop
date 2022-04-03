import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav>
        <div className='nav-wrapper'>
          <Link to='/'>
            <div className='nav-logo h6'>
              <i className='fa-solid fa-seedling'></i> PlantShop
            </div>
          </Link>
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
            <Link to='./login'>
              <button className='nav-item btn btn-ghost login-btn'>
                <i className='fa-solid fa-arrow-right-to-bracket'></i>
                Login
              </button>
            </Link>
            <Link to='./wishlist'>
              <div className='nav-item icon-badge btn btn-ghost'>
                <i className='fa-regular fa-heart icon'>
                  <div className='badge-num'>6</div>
                </i>
              </div>
            </Link>
            <Link to='./cart'>
              <div className='nav-item icon-badge btn btn-ghost'>
                <i className='fa-solid fa-cart-shopping icon'>
                  <div className='badge-num'>6</div>
                </i>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
