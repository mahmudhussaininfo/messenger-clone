import PageHelmet from "../../../components/PageHelmet/PageHelmet";
import AuthHeader from "../../../components/AuthHeader/AuthHeader";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      <PageHelmet title="Forgot Your Password" />
      <div className="auth-container">
        <div className="auth-wrapper">
          <div className="auth-top">
            <AuthHeader
              title="Recover Your Password"
              description="Hello Guys"
            />

            <div className="auth-form">
              <form action="">
                <input type="text" placeholder="email or phone number" />
                <button className="fb-bg">Recover</button>
              </form>
            </div>
          </div>
          <div className="auth-bottom">
            <Link to="/login" className="fb-bg-green">
              Login now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
