import PageHelmet from "../../../components/PageHelmet/PageHelmet";
import AuthHeader from "../../../components/AuthHeader/AuthHeader";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuthData, setMessageEmpty } from "../../../features/auth/authSlice";
import useFormFields from "../../../hooks/useFormFields";
import { useEffect } from "react";
import { createToast } from "../../../utils/toast";
import { loginUser } from "../../../features/auth/authApiSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { message, error, loader, user } = useSelector(getAuthData);
  const { input, setInput, handleInputChange, resetForm } = useFormFields({
    email: "",
    password: "",
  });

  //handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(input));
  };

  //useEffect
  useEffect(() => {
    if (message) {
      createToast(message, "success");
      dispatch(setMessageEmpty());
      resetForm();
    }
    if (error) {
      createToast(error);
      dispatch(setMessageEmpty());
    }

    if (user) {
      navigate("/");
    }
  }, [message, error, dispatch, navigate, resetForm, user]);
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
              <form action="" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="email or phone number"
                  value={input.email}
                  name="email"
                  onChange={handleInputChange}
                />
                <input
                  type="password"
                  placeholder="password"
                  value={input.password}
                  name="password"
                  onChange={handleInputChange}
                />
                <button type="submit" className="fb-bg">
                  Login
                </button>
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
