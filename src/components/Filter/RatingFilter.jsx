export default function RatingFilter({ rating, productDispatch }) {
  return (
    <>
      <div className='input inline-input'>
        <input
          type='radio'
          id={`above${rating.stars}`}
          name='rating'
          onChange={() => {
            productDispatch({
              type: "FILTER_BY_RATING",
              payload: rating.stars,
            });
          }}></input>
        <label htmlFor={`above${rating.stars}`}>
          {rating.stars} Star and above
        </label>
      </div>
    </>
  );
}
