import React from "react";
import { Link } from "react-router-dom";
import fb from "../../../public/image/fb.png";
import "./topBar.scss";
import { CiSearch } from "react-icons/ci";
import { AiOutlineHome, AiOutlineShop } from "react-icons/ai";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { VscGame } from "react-icons/vsc";

const TopBar = () => {
  return (
    <>
      <div className="topbar">
        <div className="top-container">
          <div className="top-search">
            <Link>
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
          <div className="top-user">jkjkh</div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
