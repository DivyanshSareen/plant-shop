export default function SortFilter({ productDispatch }) {
  return (
    <>
      <div className='input inline-input'>
        <input
          type='radio'
          id='low-to-high'
          name='sort_order'
          onChange={() => {
            productDispatch({ type: "SORT_LOW_TO_HIGH" });
          }}></input>
        <label htmlFor='low-to-high'>Price- Low to High</label>
      </div>
      <div className='input inline-input'>
        <input
          type='radio'
          id='high-to-low'
          name='sort_order'
          onChange={() => {
            productDispatch({ type: "SORT_HIGH_TO_LOW" });
          }}></input>
        <label htmlFor='high-to-low'>Price- High to Low</label>
      </div>
    </>
  );
}
