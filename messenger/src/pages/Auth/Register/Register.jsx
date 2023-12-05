import PageHelmet from "../../../components/PageHelmet/PageHelmet";
import AuthHeader from "../../../components/AuthHeader/AuthHeader";
import { Link } from "react-router-dom";
import useFormFields from "../../../hooks/useFormFields";
import { useDispatch } from "react-redux";
import { createUser } from "../../../features/auth/authApiSlice";

const Register = () => {
  const dispatch = useDispatch();
  const { input, setInput, handleInputChange, resetForm } = useFormFields({
    name: "",
    auth: "",
    password: "",
  });

  //handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createUser(input));

    resetForm();
  };
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
                  Register
                </button>
              </form>
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
