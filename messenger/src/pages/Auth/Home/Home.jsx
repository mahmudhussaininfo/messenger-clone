import React from "react";
import "../auth.scss";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="auth-container">
        <div className="auth-wrapper">
          <div className="auth-top">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/1200px-Facebook_Messenger_logo_2020.svg.png"
              alt=""
            />
            <h4>Welcome to messenger</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="auth-bottom">
            <Link className="fb-bg"> Login With Facebook</Link>
            <Link> Login With Google</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
