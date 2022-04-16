import { Link } from "react-router-dom";
import { useAuth } from "../context/auth-context";

export default function LoginForm() {
  const { authState, authDispatch } = useAuth();
  return (
    <form>
      <h5 className='h5 center-text login-head'>Login</h5>
      <div className='input'>
        <label htmlFor='userEmail' className='input-label'>
          Email address
        </label>
        <input
          name='userEmail'
          type='email'
          className='input-data'
          placeholder='example@gmail.com'
          value={authState.userEmail}
          onChange={(e) =>
            authDispatch({
              type: "UPDATE_FORM_ELEMENT",
              field: e.target.name,
              payload: e.target.value,
            })
          }
          required></input>
      </div>
      <div className='input'>
        <label htmlFor='userPassword' className='input-label'>
          Password
        </label>
        <input
          name='userPassword'
          type='password'
          id='password'
          className='input-data'
          placeholder='********'
          value={authState.userPassword}
          onChange={(e) =>
            authDispatch({
              type: "UPDATE_FORM_ELEMENT",
              field: e.target.name,
              payload: e.target.value,
            })
          }
          required></input>
      </div>
      <div className='options'>
        <div className='input remember-check'>
          <input
            name='remember_me'
            type='checkbox'
            className='input-data'
            id='remember'
            onChange={(e) =>
              authDispatch({
                type: "TOGGLE_ELEMENT",
                field: e.target.name,
                payload: authState.remember_me,
              })
            }></input>
          <label htmlFor='remember_me'>Remember me</label>
        </div>
        <div className='paragraph2 forgot-password'>Forgot your Password?</div>
      </div>
      <div
        className='btn btn-login center-text'
        onClick={() => {
          authDispatch({ type: "LOGIN_USER" });
        }}>
        Log In
      </div>
      <Link to='/signup'>
        <div className='paragraph1 center-text'>
          Create New Account <i className='fa-solid fa-chevron-right'></i>
        </div>
      </Link>
    </form>
  );
}
