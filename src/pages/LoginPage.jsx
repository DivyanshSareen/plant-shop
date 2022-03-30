import Nav from "../components/Nav";
import LoginForm from "../components/LoginForm";

export default function LoginPage(){
    return (<>
        <Nav/>
        <section class="login-area">
        <LoginForm/>
    </section>
    </>
    );
}