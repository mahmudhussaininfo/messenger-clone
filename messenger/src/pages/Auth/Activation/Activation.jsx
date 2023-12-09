import PageHelmet from "../../../components/PageHelmet/PageHelmet";
import AuthHeader from "../../../components/AuthHeader/AuthHeader";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";

const Activation = () => {
  const navigate = useNavigate();
  const token = Cookies.get("verifyToken");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);
  return (
    <>
      {" "}
      <PageHelmet title="Account Activation" />
      <div className="auth-container">
        <div className="auth-wrapper">
          <div className="auth-top">
            <AuthHeader title="Active Your Account" description="Hello Guys" />

            <div className="auth-form">
              <form action="">
                <input type="text" placeholder="opt" />
                <button className="fb-bg">Active</button>
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

export default Activation;
