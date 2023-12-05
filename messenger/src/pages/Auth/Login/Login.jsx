import PageHelmet from "../../../components/PageHelmet/PageHelmet";
import AuthHeader from "../../../components/AuthHeader/AuthHeader";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <PageHelmet title="Sign in Here" />
      <div className="auth-container">
        <div className="auth-wrapper">
          <div className="auth-top">
            <AuthHeader
              title="Login with Your Account"
              description="Hello Guys"
            />

            <div className="auth-form">
              <form action="">
                <input type="text" placeholder="email or phone number" />
                <input type="password" placeholder="password" />
                <button className="fb-bg">Login</button>
              </form>
            </div>

            <p>
              <Link to="/forgot">Forgot Your password</Link>
            </p>
          </div>
          <div className="auth-bottom">
            <Link to="/register" className="fb-bg-green">
              Create an Account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
