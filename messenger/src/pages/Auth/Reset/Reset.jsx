import React, { useEffect } from "react";
import PageHelmet from "../../../components/PageHelmet/PageHelmet";
import AuthHeader from "../../../components/AuthHeader/AuthHeader";
import { Link, useNavigate } from "react-router-dom";
import { createToast } from "../../../utils/toast";
import { useDispatch, useSelector } from "react-redux";
import useAuthUser from "../../../hooks/useAuthUser";
import useFormFields from "../../../hooks/useFormFields";
import { getAuthData, setMessageEmpty } from "../../../features/auth/authSlice";
import { resetPassword } from "../../../features/auth/authApiSlice";
import Cookies from "js-cookie";

const Reset = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useAuthUser();
  const token = Cookies.get("verifyToken");
  const { message, error, loader } = useSelector(getAuthData);
  const { input, setInput, handleInputChange, resetForm } = useFormFields({
    newPass: "",
    confPass: "",
    otp: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPassword({ token, input }));
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
      {" "}
      <PageHelmet title="Reset Password" />
      <div className="auth-container">
        <div className="auth-wrapper">
          <div className="auth-top">
            <AuthHeader title="Reset Your Password" description="" />

            <div className="auth-form">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="newPass"
                  value={input.newPass}
                  onChange={handleInputChange}
                  placeholder="New Password"
                />
                <input
                  type="text"
                  name="confPass"
                  value={input.confPass}
                  onChange={handleInputChange}
                  placeholder="Confirm Password"
                />
                <input
                  type="text"
                  name="otp"
                  value={input.otp}
                  onChange={handleInputChange}
                  placeholder="otp"
                />
                <button className="fb-bg" type="submit">
                  Reset
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

export default Reset;
