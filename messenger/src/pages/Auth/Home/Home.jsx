import React from "react";
import "../auth.scss";
import { Link } from "react-router-dom";
import PageHelmet from "../../../components/PageHelmet/PageHelmet";
import AuthHeader from "../../../components/AuthHeader/AuthHeader";
import TopBar from "../../../components/TopBar/TopBar";

const Home = () => {
  return (
    <>
      <PageHelmet title="Welcome to Messenger" />
      <TopBar />
    </>
  );
};

export default Home;
