import PageHelmet from "../../../components/PageHelmet/PageHelmet";
import AuthHeader from "../../../components/AuthHeader/AuthHeader";
import { Link, useNavigate } from "react-router-dom";
import useFormFields from "../../../hooks/useFormFields";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../../features/auth/authApiSlice";
import { getAuthData, setMessageEmpty } from "../../../features/auth/authSlice";
import { useEffect } from "react";
import { createToast } from "../../../utils/toast";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { message, error, loader, user } = useSelector(getAuthData);
  const { input, setInput, handleInputChange, resetForm } = useFormFields({
    name: "",
    auth: "",
    password: "",
  });

  //handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(input));
  };

  //useEffect
  useEffect(() => {
    if (message) {
      createToast(message, "success");
      dispatch(setMessageEmpty());
      resetForm();
      navigate("/login");
    }
    if (error) {
      createToast(error);
      dispatch(setMessageEmpty());
    }
  }, [message, error, dispatch, navigate, resetForm]);
  return (
    <>
      <PageHelmet title="Create an account" />
      <div className="auth-container">
        <div className="auth-wrapper">
          <div className="auth-top">
            <AuthHeader
              title="Register Your Account"
              description="Hello Guys"
            />

            <div className="auth-form">
              {loader ? (
                <>
                  <h1>Loading.........</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure, adipisci ipsam eligendi reprehenderit nobis nesciunt
                    maxime tenetur mollitia dignissimos, quisquam quas ea
                    architecto unde nemo, porro libero velit dolores. Cumque?
                  </p>
                </>
              ) : (
                <>
                  {" "}
                  <form action="" onSubmit={handleSubmit}>
                    <input
                      type="text"
                      placeholder="Your Name"
                      name="name"
                      value={input.name}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      placeholder="Email or Phone number"
                      name="auth"
                      value={input.auth}
                      onChange={handleInputChange}
                    />
                    <input
                      type="password"
                      placeholder="password"
                      name="password"
                      value={input.password}
                      onChange={handleInputChange}
                    />
                    <button type="submit" className="fb-bg">
                      Register {loader ? "loading..." : ""}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
          <div className="auth-bottom">
            <Link to="/login" className="fb-bg-green">
              {" "}
              Login Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
