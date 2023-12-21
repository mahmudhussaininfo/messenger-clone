import React from "react";
import "../auth.scss";
import PageHelmet from "../../../components/PageHelmet/PageHelmet";
import TopBar from "../../../components/TopBar/TopBar";
import useAuthUser from "../../../hooks/useAuthUser";
import ActivateAlert from "../../../components/ActivateAlert/ActivateAlert";

const Home = () => {
  const { user } = useAuthUser();
  return (
    <>
      <PageHelmet title="Welcome to Messenger" />
      <TopBar />
      {user.accessToken ? <ActivateAlert /> : <h1>Main content</h1>}
    </>
  );
};

export default Home;
