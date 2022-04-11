export default function RatingFilter({ rating }) {
  console.log(rating);
  return (
    <>
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
    </>
  );
}
