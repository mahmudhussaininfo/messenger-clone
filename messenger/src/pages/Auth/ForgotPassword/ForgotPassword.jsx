import PageHelmet from "../../../components/PageHelmet/PageHelmet";
import AuthHeader from "../../../components/AuthHeader/AuthHeader";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuthData, setMessageEmpty } from "../../../features/auth/authSlice";
import useFormFields from "../../../hooks/useFormFields";
import { createToast } from "../../../utils/toast";
import { forgetPassword } from "../../../features/auth/authApiSlice";
import { useEffect } from "react";
import useAuthUser from "../../../hooks/useAuthUser";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useAuthUser();
  const { message, error, loader } = useSelector(getAuthData);
  const { input, setInput, handleInputChange, resetForm } = useFormFields({
    auth: "",
  });

  //handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(forgetPassword(input));
  };

  //useEffect
  useEffect(() => {
    if (message) {
      createToast(message, "success");
      dispatch(setMessageEmpty());
      resetForm();
      navigate("/reset");
    }
    if (error) {
      createToast(error);
      dispatch(setMessageEmpty());
    }
  }, [message, error, dispatch, navigate, resetForm]);
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
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="auth"
                  value={input.auth}
                  onChange={handleInputChange}
                  placeholder="email or phone number"
                />
                <button className="fb-bg" type="submit">
                  Recover
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

export default ForgotPassword;
