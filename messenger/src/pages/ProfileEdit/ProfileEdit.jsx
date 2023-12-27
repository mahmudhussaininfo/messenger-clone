import React, { useEffect } from "react";
import TopBar from "../../components/TopBar/TopBar";
import { Link } from "react-router-dom";
import PageHelmet from "../../components/PageHelmet/PageHelmet";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "@chakra-ui/react";
import "./Profile.scss";
import { uploadPhoto } from "../../features/auth/authApiSlice";
import { createToast } from "../../utils/toast";
import { setMessageEmpty } from "../../features/auth/authSlice";

const ProfileEdit = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  //photo upload
  const handlePhoto = (e) => {
    const file = e.target.files[0];

    const form_data = new FormData();
    form_data.append("profile-photo", file);

    dispatch(uploadPhoto({ id: user._id, photo: form_data }));

    //useEffect
    useEffect(() => {
      if (message) {
        createToast(message, "success");
        dispatch(setMessageEmpty());
      }
      if (error) {
        createToast(error);
        dispatch(setMessageEmpty());
      }
    }, [message, error, dispatch]);
  };
  return (
    <>
      <TopBar />
      <PageHelmet title="Edit Your Profile" />
      <div className="auth-container">
        <div className="auth-wrapper">
          <div className="auth-top">
            <AuthHeader title="Edit Profile" description="" />
            <div className="profile-photo-upload">
              <Avatar name={user?.name} src={user?.photo} />
              <label className="upload" onChange={handlePhoto}>
                upload a photo
                <input type="file" />
              </label>
            </div>
          </div>
          <div className="auth-bottom">
            <Link to="/register" className="fb-bg-green">
              Create an Account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileEdit;
