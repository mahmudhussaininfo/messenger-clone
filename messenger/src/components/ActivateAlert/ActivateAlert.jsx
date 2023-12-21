import React from "react";
import useAuthUser from "../../hooks/useAuthUser";
import useFormFields from "../../hooks/useFormFields";
import { hideEmailMiddle } from "../../helpers/helpers";
import { useDispatch, useSelector } from "react-redux";
import {
  activationLogin,
  resendActivitionLink,
} from "../../features/auth/authApiSlice";
import { createToast } from "../../utils/toast";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { getAuthData, setMessageEmpty } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { dotToHyphene } from "../../../../helpers/helpers";

const ActivateAlert = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useAuthUser();
  const token = Cookies.get("verifyToken");
  const { message, error, loader } = useSelector(getAuthData);
  const { input, setInput, handleInputChange, resetForm } = useFormFields({
    otp: "",
  });

  //handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(activationLogin({ token: dotToHyphene(token), otp: input.otp }));
  };

  //handle Resend code
  const handleResendCode = (e, email) => {
    e.preventDefault();
    dispatch(resendActivitionLink(email));
  };

  //useEffect
  useEffect(() => {
    if (message) {
      createToast(message, "success");
      dispatch(setMessageEmpty());
      resetForm();
      navigate("/");
    }
    if (error) {
      createToast(error);
      dispatch(setMessageEmpty());
    }
  }, [message, error, dispatch, navigate, resetForm]);
  return (
    <>
      <div className="auth-container">
        <div className="auth-wrapper">
          <div className="auth-top">
            <h4>Hello {user?.name} please active your account</h4>
            <div className="auth-form">
              <form action="" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Otp Code"
                  name="otp"
                  value={input.otp}
                  onChange={handleInputChange}
                />
                <button type="submit" className="fb-bg">
                  Active
                </button>
              </form>
            </div>
            <p>
              <br />

              <a href="#" onClick={(e) => handleResendCode(e, user?.email)}>
                Resend activation from {hideEmailMiddle(user?.email)}
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivateAlert;
