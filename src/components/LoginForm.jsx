import "../styles/login.css";

export default function LoginForm(){
    return(<form action="">
            <h5 class="h5 center-text login-head">Login</h5>
            <div class="input">
                <label for="email" class="input-label">Email address</label>
                <input type="email" class="input-data" placeholder="example@gmail.com" required></input>
            </div>
            <div class="input">
                <label for="password" class="input-label">Password</label>
                <input type="password" id="password" class="input-data" placeholder="********" required></input>
            </div>
            <div class="options">
                <div class="input remember-check">
                    <input type="checkbox" class="input-data" id="remember"></input>
                    <label for="remember">Remember me</label>
                </div>
                <div class="paragraph2 forgot-password">Forgot your Password?</div>
            </div>
            <div class="btn btn-login center-text">Login</div>
            <a href="./register.html">
                <div class="paragraph1 center-text">Create New Account <i class="fa-solid fa-chevron-right"></i></div>
            </a>
        </form>);
}