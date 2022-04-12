export default function RatingFilter({ rating }) {
  return (
    <>
      <div className='input inline-input'>
        <input type='radio' id={`above${rating.stars}`} name='rating'></input>
        <label htmlFor={`above${rating.stars}`}>
          {rating.stars} Star and above
        </label>
      </div>
    </>
  );
}
