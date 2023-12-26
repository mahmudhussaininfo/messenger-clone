import React from "react";
import "./Messenger.scss";

import { IoCall } from "react-icons/io5";
import { FaVideo } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import Action from "../../components/Svg/Action";
import Galllery from "../../components/Svg/Galllery";
import Striker from "../../components/Svg/Striker";
import Gif from "../../components/Svg/Gif";
import Like from "../../components/Svg/Like";
import Emoji from "../../components/Svg/Emoji";
import EmojiPicker from "emoji-picker-react";
import useDropdownPopupControl from "../../hooks/useDropdownPopupControl";
import Profile from "../../components/Svg/Profile";
import Mute from "../../components/Svg/Mute";
import Search from "../../components/Svg/Search";
import Collapsible from "react-collapsible";
import User from "../../components/User/User";

const Messenger = () => {
  const { isOpen, toggleMenu } = useDropdownPopupControl();
  return (
    <>
      <div className="messenger-container">
        <User />
        <div className="messenger-user-body">
          <div className="chat-user-body-header">
            <div className="body-user-info">
              <div className="user-img">
                <img
                  src="https://scontent.fdac136-1.fna.fbcdn.net/v/t39.30808-1/387058219_268883026121694_3130515846429326120_n.jpg?stp=dst-jpg_p100x100&_nc_cat=103&cb=99be929b-b574a898&ccb=1-7&_nc_sid=5740b7&_nc_ohc=uIxmXM1fwTQAX8CBw1b&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdac136-1.fna&oh=00_AfDDuWNCZfCaaA4-7LemFPMbSe7v0d0lG07g5RrFvFIS9w&oe=658BB387"
                  alt=""
                />
              </div>
              <div className="user-title">
                <h4>Raju Uddin</h4>
                <span>Active 28m ago</span>
              </div>
            </div>
            <div className="body-user-icon">
              <span>
                <IoCall />
              </span>
              <span>
                <FaVideo />
              </span>
              <span>
                <FaInfoCircle />
              </span>
            </div>
          </div>
          <div className="chat-user-msg">
            <div className="chat-user-profile">
              <img
                src="https://scontent.fdac136-1.fna.fbcdn.net/v/t39.30808-1/387058219_268883026121694_3130515846429326120_n.jpg?stp=dst-jpg_p100x100&_nc_cat=103&cb=99be929b-b574a898&ccb=1-7&_nc_sid=5740b7&_nc_ohc=uIxmXM1fwTQAX8CBw1b&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdac136-1.fna&oh=00_AfDDuWNCZfCaaA4-7LemFPMbSe7v0d0lG07g5RrFvFIS9w&oe=658BB387"
                alt=""
              />
              <span>Raju Uddin</span>
            </div>

            <div className="user-main">
              <div className="user-main-chat">
                <div className="friend-msg">
                  <div className="friend-img">
                    <img
                      src="https://scontent.fdac136-1.fna.fbcdn.net/v/t39.30808-1/387058219_268883026121694_3130515846429326120_n.jpg?stp=dst-jpg_p100x100&_nc_cat=103&cb=99be929b-b574a898&ccb=1-7&_nc_sid=5740b7&_nc_ohc=uIxmXM1fwTQAX8CBw1b&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdac136-1.fna&oh=00_AfDDuWNCZfCaaA4-7LemFPMbSe7v0d0lG07g5RrFvFIS9w&oe=658BB387"
                      alt=""
                    />
                  </div>
                  <div className="friend-chat">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos ratione placeat ipsa, ab velit suscipit illo debitis
                      amet quis possimus reprehenderit repudiandae odio soluta
                      architecto adipisci quia dolor voluptates quaerat quas. A
                      ea quisquam esse praesentium consequatur voluptatem,
                      obcaecati provident dolorum magni rerum, excepturi
                      suscipit incidunt
                    </p>
                  </div>
                </div>
                <div className="msg-time">
                  <span>Oct 23, 2023, 10:35 PM</span>
                </div>
                <div className="my-msg">
                  <span>Php sara sob jana ase hobe na?</span>
                </div>
              </div>
              <div className="user-main-chat">
                <div className="friend-msg">
                  <div className="friend-img">
                    <img
                      src="https://scontent.fdac136-1.fna.fbcdn.net/v/t39.30808-1/387058219_268883026121694_3130515846429326120_n.jpg?stp=dst-jpg_p100x100&_nc_cat=103&cb=99be929b-b574a898&ccb=1-7&_nc_sid=5740b7&_nc_ohc=uIxmXM1fwTQAX8CBw1b&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdac136-1.fna&oh=00_AfDDuWNCZfCaaA4-7LemFPMbSe7v0d0lG07g5RrFvFIS9w&oe=658BB387"
                      alt=""
                    />
                  </div>
                  <div className="friend-chat">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos ratione placeat ipsa, ab velit suscipit illo debitis
                      amet quis possimus reprehenderit repudiandae odio soluta
                      architecto adipisci quia dolor voluptates quaerat quas. A
                      ea quisquam esse praesentium consequatur voluptatem,
                      obcaecati provident dolorum magni rerum, excepturi
                      suscipit incidunt
                    </p>
                  </div>
                </div>
                <div className="msg-time">
                  <span>Oct 23, 2023, 10:35 PM</span>
                </div>
                <div className="my-msg">
                  <span>Php sara sob jana ase hobe na?</span>
                </div>
              </div>
              <div className="user-main-chat">
                <div className="friend-msg">
                  <div className="friend-img">
                    <img
                      src="https://scontent.fdac136-1.fna.fbcdn.net/v/t39.30808-1/387058219_268883026121694_3130515846429326120_n.jpg?stp=dst-jpg_p100x100&_nc_cat=103&cb=99be929b-b574a898&ccb=1-7&_nc_sid=5740b7&_nc_ohc=uIxmXM1fwTQAX8CBw1b&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdac136-1.fna&oh=00_AfDDuWNCZfCaaA4-7LemFPMbSe7v0d0lG07g5RrFvFIS9w&oe=658BB387"
                      alt=""
                    />
                  </div>
                  <div className="friend-chat">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos ratione placeat ipsa, ab velit suscipit illo debitis
                      amet quis possimus reprehenderit repudiandae odio soluta
                      architecto adipisci quia dolor voluptates quaerat quas. A
                      ea quisquam esse praesentium consequatur voluptatem,
                      obcaecati provident dolorum magni rerum, excepturi
                      suscipit incidunt
                    </p>
                  </div>
                </div>
                <div className="msg-time">
                  <span>Oct 23, 2023, 10:35 PM</span>
                </div>
                <div className="my-msg">
                  <span>Php sara sob jana ase hobe na?</span>
                </div>
              </div>
              <div className="user-main-chat">
                <div className="friend-msg">
                  <div className="friend-img">
                    <img
                      src="https://scontent.fdac136-1.fna.fbcdn.net/v/t39.30808-1/387058219_268883026121694_3130515846429326120_n.jpg?stp=dst-jpg_p100x100&_nc_cat=103&cb=99be929b-b574a898&ccb=1-7&_nc_sid=5740b7&_nc_ohc=uIxmXM1fwTQAX8CBw1b&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdac136-1.fna&oh=00_AfDDuWNCZfCaaA4-7LemFPMbSe7v0d0lG07g5RrFvFIS9w&oe=658BB387"
                      alt=""
                    />
                  </div>
                  <div className="friend-chat">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos ratione placeat ipsa, ab velit suscipit illo debitis
                      amet quis possimus reprehenderit repudiandae odio soluta
                      architecto adipisci quia dolor voluptates quaerat quas. A
                      ea quisquam esse praesentium consequatur voluptatem,
                      obcaecati provident dolorum magni rerum, excepturi
                      suscipit incidunt
                    </p>
                  </div>
                </div>
                <div className="msg-time">
                  <span>Oct 23, 2023, 10:35 PM</span>
                </div>
                <div className="my-msg">
                  <span>Php sara sob jana ase hobe na?</span>
                </div>
              </div>
              <div className="user-main-chat">
                <div className="friend-msg">
                  <div className="friend-img">
                    <img
                      src="https://scontent.fdac136-1.fna.fbcdn.net/v/t39.30808-1/387058219_268883026121694_3130515846429326120_n.jpg?stp=dst-jpg_p100x100&_nc_cat=103&cb=99be929b-b574a898&ccb=1-7&_nc_sid=5740b7&_nc_ohc=uIxmXM1fwTQAX8CBw1b&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdac136-1.fna&oh=00_AfDDuWNCZfCaaA4-7LemFPMbSe7v0d0lG07g5RrFvFIS9w&oe=658BB387"
                      alt=""
                    />
                  </div>
                  <div className="friend-chat">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos ratione placeat ipsa, ab velit suscipit illo debitis
                      amet quis possimus reprehenderit repudiandae odio soluta
                      architecto adipisci quia dolor voluptates quaerat quas. A
                      ea quisquam esse praesentium consequatur voluptatem,
                      obcaecati provident dolorum magni rerum, excepturi
                      suscipit incidunt
                    </p>
                  </div>
                </div>
                <div className="msg-time">
                  <span>Oct 23, 2023, 10:35 PM</span>
                </div>
                <div className="my-msg">
                  <span>Php sara sob jana ase hobe na?</span>
                </div>
              </div>
              <div className="user-main-chat">
                <div className="friend-msg">
                  <div className="friend-img">
                    <img
                      src="https://scontent.fdac136-1.fna.fbcdn.net/v/t39.30808-1/387058219_268883026121694_3130515846429326120_n.jpg?stp=dst-jpg_p100x100&_nc_cat=103&cb=99be929b-b574a898&ccb=1-7&_nc_sid=5740b7&_nc_ohc=uIxmXM1fwTQAX8CBw1b&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdac136-1.fna&oh=00_AfDDuWNCZfCaaA4-7LemFPMbSe7v0d0lG07g5RrFvFIS9w&oe=658BB387"
                      alt=""
                    />
                  </div>
                  <div className="friend-chat">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos ratione placeat ipsa, ab velit suscipit illo debitis
                      amet quis possimus reprehenderit repudiandae odio soluta
                      architecto adipisci quia dolor voluptates quaerat quas. A
                      ea quisquam esse praesentium consequatur voluptatem,
                      obcaecati provident dolorum magni rerum, excepturi
                      suscipit incidunt
                    </p>
                  </div>
                </div>
                <div className="msg-time">
                  <span>Oct 23, 2023, 10:35 PM</span>
                </div>
                <div className="my-msg">
                  <span>Php sara sob jana ase hobe na?</span>
                </div>
              </div>
              <div className="user-main-chat">
                <div className="friend-msg">
                  <div className="friend-img">
                    <img
                      src="https://scontent.fdac136-1.fna.fbcdn.net/v/t39.30808-1/387058219_268883026121694_3130515846429326120_n.jpg?stp=dst-jpg_p100x100&_nc_cat=103&cb=99be929b-b574a898&ccb=1-7&_nc_sid=5740b7&_nc_ohc=uIxmXM1fwTQAX8CBw1b&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdac136-1.fna&oh=00_AfDDuWNCZfCaaA4-7LemFPMbSe7v0d0lG07g5RrFvFIS9w&oe=658BB387"
                      alt=""
                    />
                  </div>
                  <div className="friend-chat">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos ratione placeat ipsa, ab velit suscipit illo debitis
                      amet quis possimus reprehenderit repudiandae odio soluta
                      architecto adipisci quia dolor voluptates quaerat quas. A
                      ea quisquam esse praesentium consequatur voluptatem,
                      obcaecati provident dolorum magni rerum, excepturi
                      suscipit incidunt
                    </p>
                  </div>
                </div>
                <div className="msg-time">
                  <span>Oct 23, 2023, 10:35 PM</span>
                </div>
                <div className="my-msg">
                  <span>Php sara sob jana ase hobe na?</span>
                </div>
              </div>
              <div className="user-main-chat">
                <div className="friend-msg">
                  <div className="friend-img">
                    <img
                      src="https://scontent.fdac136-1.fna.fbcdn.net/v/t39.30808-1/387058219_268883026121694_3130515846429326120_n.jpg?stp=dst-jpg_p100x100&_nc_cat=103&cb=99be929b-b574a898&ccb=1-7&_nc_sid=5740b7&_nc_ohc=uIxmXM1fwTQAX8CBw1b&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdac136-1.fna&oh=00_AfDDuWNCZfCaaA4-7LemFPMbSe7v0d0lG07g5RrFvFIS9w&oe=658BB387"
                      alt=""
                    />
                  </div>
                  <div className="friend-chat">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos ratione placeat ipsa, ab velit suscipit illo debitis
                      amet quis possimus reprehenderit repudiandae odio soluta
                      architecto adipisci quia dolor voluptates quaerat quas. A
                      ea quisquam esse praesentium consequatur voluptatem,
                      obcaecati provident dolorum magni rerum, excepturi
                      suscipit incidunt
                    </p>
                  </div>
                </div>
                <div className="msg-time">
                  <span>Oct 23, 2023, 10:35 PM</span>
                </div>
                <div className="my-msg">
                  <span>Php sara sob jana ase hobe na?</span>
                </div>
              </div>
              <div className="user-main-chat">
                <div className="friend-msg">
                  <div className="friend-img">
                    <img
                      src="https://scontent.fdac136-1.fna.fbcdn.net/v/t39.30808-1/387058219_268883026121694_3130515846429326120_n.jpg?stp=dst-jpg_p100x100&_nc_cat=103&cb=99be929b-b574a898&ccb=1-7&_nc_sid=5740b7&_nc_ohc=uIxmXM1fwTQAX8CBw1b&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdac136-1.fna&oh=00_AfDDuWNCZfCaaA4-7LemFPMbSe7v0d0lG07g5RrFvFIS9w&oe=658BB387"
                      alt=""
                    />
                  </div>
                  <div className="friend-chat">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos ratione placeat ipsa, ab velit suscipit illo debitis
                      amet quis possimus reprehenderit repudiandae odio soluta
                      architecto adipisci quia dolor voluptates quaerat quas. A
                      ea quisquam esse praesentium consequatur voluptatem,
                      obcaecati provident dolorum magni rerum, excepturi
                      suscipit incidunt
                    </p>
                  </div>
                </div>
                <div className="msg-time">
                  <span>Oct 23, 2023, 10:35 PM</span>
                </div>
                <div className="my-msg">
                  <span>Php sara sob jana ase hobe na?</span>
                </div>
              </div>
              <div className="user-main-chat">
                <div className="friend-msg">
                  <div className="friend-img">
                    <img
                      src="https://scontent.fdac136-1.fna.fbcdn.net/v/t39.30808-1/387058219_268883026121694_3130515846429326120_n.jpg?stp=dst-jpg_p100x100&_nc_cat=103&cb=99be929b-b574a898&ccb=1-7&_nc_sid=5740b7&_nc_ohc=uIxmXM1fwTQAX8CBw1b&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdac136-1.fna&oh=00_AfDDuWNCZfCaaA4-7LemFPMbSe7v0d0lG07g5RrFvFIS9w&oe=658BB387"
                      alt=""
                    />
                  </div>
                  <div className="friend-chat">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos ratione placeat ipsa, ab velit suscipit illo debitis
                      amet quis possimus reprehenderit repudiandae odio soluta
                      architecto adipisci quia dolor voluptates quaerat quas. A
                      ea quisquam esse praesentium consequatur voluptatem,
                      obcaecati provident dolorum magni rerum, excepturi
                      suscipit incidunt
                    </p>
                  </div>
                </div>
                <div className="msg-time">
                  <span>Oct 23, 2023, 10:35 PM</span>
                </div>
                <div className="my-msg">
                  <span>Php sara sob jana ase hobe na?</span>
                </div>
              </div>
            </div>
          </div>
          <div className="chat-from-body">
            <div className="chat-from-icons">
              <ul>
                <li>
                  <Action />
                </li>
                <li>
                  <Galllery />
                </li>
                <li>
                  <Striker />
                </li>
                <li>
                  <Gif />
                </li>
              </ul>
            </div>
            <div className="input-body">
              <input type="text" />
              {isOpen && (
                <div className="emoji-picker">
                  <EmojiPicker />
                </div>
              )}

              <button className="emojii" onClick={toggleMenu}>
                <Emoji />
              </button>
            </div>
            <div className="react-icons">
              <Like />
            </div>
          </div>
        </div>

        <div className="messenger-user-info">
          <div className="user-info-header">
            <div className="user-info-img">
              <img
                src="https://scontent.fdac136-1.fna.fbcdn.net/v/t39.30808-1/387058219_268883026121694_3130515846429326120_n.jpg?stp=dst-jpg_p100x100&_nc_cat=103&cb=99be929b-b574a898&ccb=1-7&_nc_sid=5740b7&_nc_ohc=8-r4XVXW9v4AX--uROS&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdac136-1.fna&oh=00_AfBlllOKsE_t5txxasbHzKta05iSm0GQuuegg3tSiOVPbw&oe=658DADC7"
                alt=""
              />
            </div>
            <div className="user-info-title">
              <h4>Raju Uddin</h4>
              <span>Active 12h ago</span>
            </div>
            <div className="user-info-menu">
              <ul>
                <li>
                  <button>
                    <Profile />
                  </button>
                  <span>Profile</span>
                </li>
                <li>
                  <button>
                    <Mute />
                  </button>
                  <span>Mute</span>
                </li>
                <li>
                  <button>
                    <Search />
                  </button>
                  <span>Search</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="user-colapsable">
            <Collapsible trigger="Chat info">
              <p>
                This is the collapsible content. It can be any element or React
                component you like.
              </p>
            </Collapsible>
            <Collapsible trigger="Customize chat">
              <p>
                This is the collapsible content. It can be any element or React
                component you like.
              </p>
            </Collapsible>
            <Collapsible trigger="Media, files and links">
              <p>
                This is the collapsible content. It can be any element or React
                component you like.
              </p>
            </Collapsible>
            <Collapsible trigger="Privacy & support">
              <p>
                This is the collapsible content. It can be any element or React
                component you like.
              </p>
            </Collapsible>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messenger;
