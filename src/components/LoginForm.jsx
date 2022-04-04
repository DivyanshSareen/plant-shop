import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <form action=''>
      <h5 className='h5 center-text login-head'>Login</h5>
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
        <label for='password' className='input-label'>
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
        <div className='input remember-check'>
          <input type='checkbox' className='input-data' id='remember'></input>
          <label for='remember'>Remember me</label>
        </div>
        <div className='paragraph2 forgot-password'>Forgot your Password?</div>
      </div>
      <div className='btn btn-login center-text'>Login</div>
      <Link to='/signup'>
        <div className='paragraph1 center-text'>
          Create New Account <i className='fa-solid fa-chevron-right'></i>
        </div>
      </Link>
    </form>
  );
}
