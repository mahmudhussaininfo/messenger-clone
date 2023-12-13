import PageHelmet from "../../../components/PageHelmet/PageHelmet";
import AuthHeader from "../../../components/AuthHeader/AuthHeader";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";
import useFormFields from "../../../hooks/useFormFields";
import { useDispatch, useSelector } from "react-redux";
import { activationLogin } from "../../../features/auth/authApiSlice";
import { createToast } from "../../../utils/toast";
import { getAuthData, setMessageEmpty } from "../../../features/auth/authSlice";
import { dotToHyphene } from "../../../../../helpers/helpers";
const Activation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = Cookies.get("verifyToken");

  const { message, error, loader, user } = useSelector(getAuthData);

  const { input, setInput, handleInputChange, resetForm } = useFormFields({
    otp: "",
  });

  //handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(activationLogin({ token: dotToHyphene(token), otp: input.otp }));
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

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
      {" "}
      <PageHelmet title="Account Activation" />
      <div className="auth-container">
        <div className="auth-wrapper">
          <div className="auth-top">
            <AuthHeader title="Active Your Account" description="Hello Guys" />

            <div className="auth-form">
              <form action="" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="otp"
                  name="otp"
                  value={input.otp}
                  onChange={handleInputChange}
                />
                <button type="submit" className="fb-bg">
                  Active
                </button>
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
