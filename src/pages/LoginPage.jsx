import Nav from "../components/Nav";
import LoginForm from "../components/LoginForm";
import "../styles/login.css";

export default function LoginPage() {
  return (
    <>
      <Nav />
      <section className='login-area'>
        <LoginForm />
      </section>
    </>
  );
}
