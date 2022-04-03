import Nav from "../components/Nav";
import SignupForm from "../components/SignupForm";
import "../styles/login.css";

export default function SignupPage() {
  return (
    <>
      <Nav />
      <section className='login-area'>
        <SignupForm />
      </section>
    </>
  );
}
