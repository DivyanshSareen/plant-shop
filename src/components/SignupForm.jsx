import "../styles/login.css";

export default function SignupForm(){
    return(
        <section class="login-area">
        <form action="">
            <h5 class="h5 center-text login-head">Signup</h5>
            <div class="input">
                <label for="email" class="input-label">Email address</label>
                <input type="email" class="input-data" placeholder="example@gmail.com" required></input>
            </div>
            <div class="input">
                <label for="password" class="input-label">Password</label>
                <input type="password" id="password" class="input-data" placeholder="********" required></input>
            </div>
            <div class="input terms">
                <input type="checkbox" class="input-data" id="terms"></input>
                <label for="terms">I accept all Terms & Conditions</label>
            </div>
            <div class="btn btn-login center-text">Create Account</div>
            <a href="./login.html">
                <div class="paragraph1 center-text">Already have an account <i class="fa-solid fa-chevron-right"></i>
                </div>
            </a>
        </form>
    </section>
    );
}