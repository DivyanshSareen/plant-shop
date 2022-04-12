export default function PriceFilter() {
  return (
    <>
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
    </>
  );
}
