import React from "react";
import { Link } from "react-router-dom";
import fb from "../../../public/image/fb.png";
import "./topBar.scss";
import { CiSearch } from "react-icons/ci";
import { AiOutlineHome, AiOutlineShop } from "react-icons/ai";
import { MdOutlineOndemandVideo, MdDarkMode } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { VscGame } from "react-icons/vsc";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import useDropdownPopupControl from "../../hooks/useDropdownPopupControl";
import useAuthUser from "../../hooks/useAuthUser";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../features/auth/authApiSlice";
import { Avatar } from "@chakra-ui/react";

const TopBar = () => {
  const dispatch = useDispatch();
  const { isOpen, toggleMenu } = useDropdownPopupControl();
  const { user } = useAuthUser();

  //hanldle Logout
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <>
      <div className="topbar">
        <div className="top-container">
          <div className="top-search">
            <Link to="/">
              <img src={fb} alt="" />
            </Link>
            <div className="search">
              <CiSearch />
              <input type="text" placeholder="Search Facebook" />
            </div>
          </div>
          <div className="top-menu">
            <ul>
              <li>
                <Link>
                  <AiOutlineHome />
                </Link>
              </li>
              <li>
                <Link>
                  <MdOutlineOndemandVideo />
                </Link>
              </li>
              <li>
                <Link>
                  <AiOutlineShop />
                </Link>
              </li>
              <li>
                <Link>
                  <CgProfile />
                </Link>
              </li>
              <li>
                <Link>
                  <VscGame />
                </Link>
              </li>
            </ul>
          </div>
          <div className="top-user">
            <button onClick={toggleMenu}>
              <div className="user-photo">
                <Avatar name={user?.name} src={user?.photo} />
              </div>
            </button>
            {isOpen && (
              <div className="dropdown-menu">
                <ul>
                  <li style={{ display: "flex", alignItems: "center" }}>
                    <img style={{ width: "60px" }} src={user?.photo} alt="" />
                    <h6>{user?.name}</h6>
                  </li>
                  <li>
                    <Link>
                      <MdDarkMode />
                      Drak Mode
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <RiLockPasswordLine /> Password Change
                    </Link>
                  </li>
                  <li>
                    <Link to="/profile-edit">
                      <FaUserEdit />
                      Edit Profile
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleLogout}>
                      <HiOutlineLogout /> Logout
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
