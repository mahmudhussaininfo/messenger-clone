import React, { useEffect, useState } from "react";
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
import NoChat from "../../../public/image/nochat.png";
import { Avatar } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  chatCreate,
  getUserToUserChat,
} from "../../features/chat/chatApiSlice";
import { getAllChatInfo } from "../../features/chat/chatSlice";
import useAuthUser from "../../hooks/useAuthUser";

const Messenger = () => {
  const dispatch = useDispatch();
  const [chat, setChat] = useState("");

  const { chats } = useSelector(getAllChatInfo);
  const { user } = useAuthUser();

  const { isOpen, toggleMenu } = useDropdownPopupControl();

  const [activeChat, setActiveChat] = useState(false);

  //on key donw handle
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      dispatch(
        chatCreate({
          chat: chat,
          receverId: activeChat._id,
        })
      );
      setChat("");
    }
  };

  useEffect(() => {
    dispatch(getUserToUserChat(activeChat._id));
  }, [activeChat]);

  return (
    <>
      <div className="messenger-container">
        <User activeChat={activeChat} setActiveChat={setActiveChat} />
        <div className="messenger-user-body">
          {activeChat ? (
            <>
              {" "}
              <div className="chat-user-body-header">
                <div className="body-user-info">
                  <div className="user-img">
                    <Avatar name={activeChat?.name} src={activeChat?.photo} />
                  </div>
                  <div className="user-title">
                    <h4>{activeChat?.name}</h4>
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
                  <Avatar name={activeChat?.name} src={activeChat?.photo} />
                  <span>{activeChat?.name}</span>
                </div>
                <div className="chat-msg-list">
                  {chats.length > 0
                    ? chats.map((item, index) => {
                        return (
                          <>
                            <div key={index}>
                              {item.senderId === user._id ? (
                                <div className="my-msg">
                                  <div className="msg-text">
                                    {item.message.text}
                                  </div>
                                  <div className="msg-photo">
                                    <img src={item.message.photo} alt="" />
                                  </div>
                                </div>
                              ) : (
                                <div className="friend-msg">
                                  <div className="friend-img">
                                    <img src={activeChat?.photo} alt="" />
                                  </div>
                                  <div className="friend-msg-details">
                                    <div className="msg-text">
                                      {item.message.text}
                                    </div>
                                    <div className="msg-photo">
                                      <img src={item.message.photo} alt="" />
                                    </div>
                                  </div>
                                </div>
                              )}

                              <div className="msg-time">
                                <span>{item.createdAt}</span>
                              </div>
                            </div>
                          </>
                        );
                      })
                    : ""}
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
                  <input
                    type="text"
                    value={chat}
                    onChange={(e) => setChat(e.target.value)}
                    onKeyDown={handleEnter}
                  />
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
            </>
          ) : (
            <>
              <div className="null-chat">
                <div className="null-chat-img">
                  <img src={NoChat} alt="" />
                </div>
                <div className="no-chat-title">
                  <span>No chats selected</span>
                </div>
              </div>
            </>
          )}
        </div>
        {activeChat ? (
          <>
            {" "}
            <div className="messenger-user-info">
              <div className="user-info-header">
                <div className="user-info-img">
                  <Avatar name={activeChat?.name} src={activeChat?.photo} />
                </div>
                <div className="user-info-title">
                  <h4>{activeChat?.name}</h4>
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
                    This is the collapsible content. It can be any element or
                    React component you like.
                  </p>
                </Collapsible>
                <Collapsible trigger="Customize chat">
                  <p>
                    This is the collapsible content. It can be any element or
                    React component you like.
                  </p>
                </Collapsible>
                <Collapsible trigger="Media, files and links">
                  <p>
                    This is the collapsible content. It can be any element or
                    React component you like.
                  </p>
                </Collapsible>
                <Collapsible trigger="Privacy & support">
                  <p>
                    This is the collapsible content. It can be any element or
                    React component you like.
                  </p>
                </Collapsible>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Messenger;
