import { Link } from "react-router-dom";

export default function SignupForm() {
  return (
    <form action=''>
      <h5 className='h5 center-text login-head'>Signup</h5>
      <div className='input'>
        <label for='email' className='input-label'>
          Email address
        </label>
        <input
          type='email'
          className='input-data'
          placeholder='example@gmail.com'
          required></input>
      </div>
      <div className='input'>
        <label for='password' class='input-label'>
          Password
        </label>
        <input
          type='password'
          id='password'
          className='input-data'
          placeholder='********'
          required></input>
      </div>
      <div className='options'>
        <div className='input terms'>
          <input type='checkbox' className='input-data' id='terms'></input>
          <label for='terms'>I accept all Terms & Conditions</label>
        </div>
      </div>
      <div className='btn btn-login center-text'>Create Account</div>
      <Link to='/login'>
        <div className='paragraph1 center-text'>
          Already have an account <i className='fa-solid fa-chevron-right'></i>
        </div>
      </Link>
    </form>
  );
}
