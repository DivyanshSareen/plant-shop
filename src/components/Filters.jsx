export default function Filters() {
  return (
    <aside>
      <div className='filter'>
        <div className='filter-and-clear'>
          <div>Filters</div>
          <div>
            <u>Clear</u>
          </div>
        </div>
        <form action=''>
          <div className='input price'>
            <label className='input-label' htmlFor='price'>
              Price
            </label>
            <input
              className='input-data'
              type='range'
              id='price'
              name='price'
              min='0'
              value={100}
              max='500'></input>
            <div className='price-values'>
              <div>0</div>
              <div>250</div>
              <div>500</div>
            </div>
          </div>
          <p className='filter-heading'>Category</p>
          <div className='input inline-input'>
            <input type='checkbox' id='perennial' name='perennial'></input>
            <label htmlFor='perennial'>Perennial</label>
          </div>
          <div className='input inline-input'>
            <input type='checkbox' id='palm' name='palm'></input>
            <label htmlFor='palm'>Palm</label>
          </div>
          <div className='input inline-input'>
            <input type='checkbox' id='indoor' name='indoor'></input>
            <label htmlFor='indoor'>Indoor</label>
          </div>
          <div className='input inline-input'>
            <input type='checkbox' id='fruit' name='fruit'></input>
            <label htmlFor='fruit'>Fruit</label>
          </div>
          <p className='filter-heading'>Rating</p>
          <div className='input inline-input'>
            <input type='radio' id='aboveFour' name='aboveFour'></input>
            <label htmlFor='aboveFour'>4 Star and above</label>
          </div>
          <div className='input inline-input'>
            <input type='radio' id='aboveThree' name='aboveThree'></input>
            <label htmlFor='aboveThree'>3 Star and above</label>
          </div>
          <div className='input inline-input'>
            <input type='radio' id='aboveTwo' name='aboveTwo'></input>
            <label htmlFor='aboveTwo'>2 Star and above</label>
          </div>
          <div className='input inline-input'>
            <input type='radio' id='aboveOne' name='aboveOne'></input>
            <label htmlFor='aboveOne'>1 Star and above</label>
          </div>
          <p className='filter-heading'>Sort by</p>
          <div className='input inline-input'>
            <input type='radio' id='low-to-high' name='low-to-high'></input>
            <label htmlFor='low-to-high'>Price- Low to High</label>
          </div>
          <div className='input inline-input'>
            <input type='radio' id='high-to-low' name='high-to-low'></input>
            <label htmlFor='high-to-low'>Price- High to Low</label>
          </div>
        </form>
      </div>
    </aside>
  );
}
