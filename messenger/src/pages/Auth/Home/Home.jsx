import React from "react";
import "../auth.scss";
import { Link } from "react-router-dom";
import PageHelmet from "../../../components/PageHelmet/PageHelmet";
import AuthHeader from "../../../components/AuthHeader/AuthHeader";

const Home = () => {
  return (
    <>
      <PageHelmet title="Welcome to Messenger" />
      <div className="auth-container">
        <div className="auth-wrapper">
          <div className="auth-top">
            <AuthHeader title="Welcome to Messenger" description="Hello Guys" />
          </div>
          <div className="auth-bottom">
            <Link className="fb-bg"> Login With Facebook</Link>
            <Link to="/login"> Login With Google</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
