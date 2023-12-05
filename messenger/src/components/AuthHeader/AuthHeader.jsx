import React from "react";

const AuthHeader = ({ title, description }) => {
  return (
    <>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/1200px-Facebook_Messenger_logo_2020.svg.png"
        alt=""
      />
      <h4>{title}</h4>
      <p>{description}</p>
    </>
  );
};

export default AuthHeader;
