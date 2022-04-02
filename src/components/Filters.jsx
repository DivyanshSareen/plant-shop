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
              min={0}
              max={100}
            />
            <div className='price-values'>
              <div>0</div>
              <div>50</div>
              <div>100</div>
            </div>
          </div>
          <p className='filter-heading'>Category</p>
          <div className='input inline-input'>
            <input
              type='checkbox'
              id='men-clothing'
              name='men-clothing'
              defaultChecked=''
            />
            <label htmlFor='men-clothing'>Men Clothing</label>
          </div>
          <div className='input inline-input'>
            <input type='checkbox' id='men-clothing' name='men-clothing' />
            <label htmlFor='men-clothing'>Men Clothing</label>
          </div>
          <p className='filter-heading'>Rating</p>
          <div className='input inline-input'>
            <input type='radio' id='4star' name='rating' defaultChecked='' />
            <label htmlFor='men-clothing'>4 Star and above</label>
          </div>
          <div className='input inline-input'>
            <input type='radio' id='2star' name='rating' />
            <label htmlFor='men-clothing'>2 Star and above</label>
          </div>
          <div className='input inline-input'>
            <input type='radio' id='2star' name='rating' />
            <label htmlFor='men-clothing'>2 Star and above</label>
          </div>
          <div className='input inline-input'>
            <input type='radio' id='1star' name='rating' />
            <label htmlFor='men-clothing'>1 Star and above</label>
          </div>
          <p className='filter-heading'>Sort by</p>
          <div className='input inline-input'>
            <input
              type='radio'
              id='low-to-high'
              name='sort-by'
              defaultChecked=''
            />
            <label htmlFor='men-clothing'>Price- Low to High</label>
          </div>
          <div className='input inline-input'>
            <input type='radio' id='high-to-low' name='sort-by' />
            <label htmlFor='men-clothing'>Price- High to Low</label>
          </div>
        </form>
      </div>
    </aside>
  );
}
