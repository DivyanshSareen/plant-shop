export default function PriceFilter({ productState, productDispatch }) {
  return (
    <>
      <input
        className='input-data'
        type='range'
        id='price'
        name='price'
        min='0'
        max='500'
        value={productState.range}
        defaultValue={500}
        onChange={(e) => {
          productDispatch({ type: "UPDATE_RANGE", payload: e.target.value });
        }}></input>
      <div className='price-values'>
        <div>0</div>
        <div>250</div>
        <div>500</div>
      </div>
    </>
  );
}
