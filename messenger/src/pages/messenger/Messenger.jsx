import React from "react";
import "./Messenger.scss";
import { BsThreeDots } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { IoCall } from "react-icons/io5";
import { FaVideo } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";

const Messenger = () => {
  return (
    <>
      <div className="messenger-container">
        <div className="messenger-user">
          <div className="user-header">
            <div className="user-header-top">
              <h3>Chats</h3>
              <div className="user-button">
                <button>
                  <BsThreeDots />
                </button>
                <button>
                  <BiEdit />
                </button>
              </div>
            </div>
            <div className="search">
              <CiSearch />
              <input type="text" placeholder="Search Messenger" />
            </div>
            <div className="inbox">
              <span>Inbox</span>
              <h5>Communities </h5>
            </div>
          </div>
          <div className="messenger-user-list">
            <div className="messenger-user-listinfo">
              <div className="user-photo">
                <img
                  src="https://scontent.fdac136-1.fna.fbcdn.net/v/t39.30808-1/379244052_2016373532094591_4818048961772273910_n.jpg?stp=dst-jpg_p100x100&_nc_cat=107&cb=99be929b-b574a898&ccb=1-7&_nc_sid=11e7ab&_nc_ohc=Tn-Jmm8727YAX8wP0lF&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdac136-1.fna&oh=00_AfDwBWuCeQ9UVZw_roZfmf_L2LNGcLJWrPjxSgprFPfoUg&oe=658BC57D"
                  alt=""
                />
              </div>
              <div className="user-info">
                <h5>Mssud Rana</h5>
                <span>wait ami dicci .1h</span>
              </div>
            </div>
            <div className="messenger-user-listinfo">
              <div className="user-photo">
                <img
                  src="https://scontent.fdac136-1.fna.fbcdn.net/v/t39.30808-1/379244052_2016373532094591_4818048961772273910_n.jpg?stp=dst-jpg_p100x100&_nc_cat=107&cb=99be929b-b574a898&ccb=1-7&_nc_sid=11e7ab&_nc_ohc=Tn-Jmm8727YAX8wP0lF&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdac136-1.fna&oh=00_AfDwBWuCeQ9UVZw_roZfmf_L2LNGcLJWrPjxSgprFPfoUg&oe=658BC57D"
                  alt=""
                />
              </div>
              <div className="user-info">
                <h5>Mssud Rana</h5>
                <span>wait ami dicci .1h</span>
              </div>
            </div>
            <div className="messenger-user-listinfo">
              <div className="user-photo">
                <img
                  src="https://scontent.fdac136-1.fna.fbcdn.net/v/t39.30808-1/379244052_2016373532094591_4818048961772273910_n.jpg?stp=dst-jpg_p100x100&_nc_cat=107&cb=99be929b-b574a898&ccb=1-7&_nc_sid=11e7ab&_nc_ohc=Tn-Jmm8727YAX8wP0lF&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdac136-1.fna&oh=00_AfDwBWuCeQ9UVZw_roZfmf_L2LNGcLJWrPjxSgprFPfoUg&oe=658BC57D"
                  alt=""
                />
              </div>
              <div className="user-info">
                <h5>Mssud Rana</h5>
                <span>wait ami dicci .1h</span>
              </div>
            </div>
            <div className="messenger-user-listinfo">
              <div className="user-photo">
                <img
                  src="https://scontent.fdac136-1.fna.fbcdn.net/v/t39.30808-1/379244052_2016373532094591_4818048961772273910_n.jpg?stp=dst-jpg_p100x100&_nc_cat=107&cb=99be929b-b574a898&ccb=1-7&_nc_sid=11e7ab&_nc_ohc=Tn-Jmm8727YAX8wP0lF&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdac136-1.fna&oh=00_AfDwBWuCeQ9UVZw_roZfmf_L2LNGcLJWrPjxSgprFPfoUg&oe=658BC57D"
                  alt=""
                />
              </div>
              <div className="user-info">
                <h5>Mssud Rana</h5>
                <span>wait ami dicci .1h</span>
              </div>
            </div>
            <div className="messenger-user-listinfo">
              <div className="user-photo">
                <img
                  src="https://scontent.fdac136-1.fna.fbcdn.net/v/t39.30808-1/379244052_2016373532094591_4818048961772273910_n.jpg?stp=dst-jpg_p100x100&_nc_cat=107&cb=99be929b-b574a898&ccb=1-7&_nc_sid=11e7ab&_nc_ohc=Tn-Jmm8727YAX8wP0lF&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdac136-1.fna&oh=00_AfDwBWuCeQ9UVZw_roZfmf_L2LNGcLJWrPjxSgprFPfoUg&oe=658BC57D"
                  alt=""
                />
              </div>
              <div className="user-info">
                <h5>Mssud Rana</h5>
                <span>wait ami dicci .1h</span>
              </div>
            </div>
            <div className="messenger-user-listinfo">
              <div className="user-photo">
                <img
                  src="https://scontent.fdac136-1.fna.fbcdn.net/v/t39.30808-1/379244052_2016373532094591_4818048961772273910_n.jpg?stp=dst-jpg_p100x100&_nc_cat=107&cb=99be929b-b574a898&ccb=1-7&_nc_sid=11e7ab&_nc_ohc=Tn-Jmm8727YAX8wP0lF&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdac136-1.fna&oh=00_AfDwBWuCeQ9UVZw_roZfmf_L2LNGcLJWrPjxSgprFPfoUg&oe=658BC57D"
                  alt=""
                />
              </div>
              <div className="user-info">
                <h5>Mssud Rana</h5>
                <span>wait ami dicci .1h</span>
              </div>
            </div>
            <div className="messenger-user-listinfo">
              <div className="user-photo">
                <img
                  src="https://scontent.fdac136-1.fna.fbcdn.net/v/t39.30808-1/379244052_2016373532094591_4818048961772273910_n.jpg?stp=dst-jpg_p100x100&_nc_cat=107&cb=99be929b-b574a898&ccb=1-7&_nc_sid=11e7ab&_nc_ohc=Tn-Jmm8727YAX8wP0lF&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdac136-1.fna&oh=00_AfDwBWuCeQ9UVZw_roZfmf_L2LNGcLJWrPjxSgprFPfoUg&oe=658BC57D"
                  alt=""
                />
              </div>
              <div className="user-info">
                <h5>Mssud Rana</h5>
                <span>wait ami dicci .1h</span>
              </div>
            </div>
            <div className="messenger-user-listinfo">
              <div className="user-photo">
                <img
                  src="https://scontent.fdac136-1.fna.fbcdn.net/v/t39.30808-1/379244052_2016373532094591_4818048961772273910_n.jpg?stp=dst-jpg_p100x100&_nc_cat=107&cb=99be929b-b574a898&ccb=1-7&_nc_sid=11e7ab&_nc_ohc=Tn-Jmm8727YAX8wP0lF&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdac136-1.fna&oh=00_AfDwBWuCeQ9UVZw_roZfmf_L2LNGcLJWrPjxSgprFPfoUg&oe=658BC57D"
                  alt=""
                />
              </div>
              <div className="user-info">
                <h5>Mssud Rana</h5>
                <span>wait ami dicci .1h</span>
              </div>
            </div>
            <div className="messenger-user-listinfo">
              <div className="user-photo">
                <img
                  src="https://scontent.fdac136-1.fna.fbcdn.net/v/t39.30808-1/379244052_2016373532094591_4818048961772273910_n.jpg?stp=dst-jpg_p100x100&_nc_cat=107&cb=99be929b-b574a898&ccb=1-7&_nc_sid=11e7ab&_nc_ohc=Tn-Jmm8727YAX8wP0lF&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdac136-1.fna&oh=00_AfDwBWuCeQ9UVZw_roZfmf_L2LNGcLJWrPjxSgprFPfoUg&oe=658BC57D"
                  alt=""
                />
              </div>
              <div className="user-info">
                <h5>Mssud Rana</h5>
                <span>wait ami dicci .1h</span>
              </div>
            </div>
            <div className="messenger-user-listinfo">
              <div className="user-photo">
                <img
                  src="https://scontent.fdac136-1.fna.fbcdn.net/v/t39.30808-1/379244052_2016373532094591_4818048961772273910_n.jpg?stp=dst-jpg_p100x100&_nc_cat=107&cb=99be929b-b574a898&ccb=1-7&_nc_sid=11e7ab&_nc_ohc=Tn-Jmm8727YAX8wP0lF&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdac136-1.fna&oh=00_AfDwBWuCeQ9UVZw_roZfmf_L2LNGcLJWrPjxSgprFPfoUg&oe=658BC57D"
                  alt=""
                />
              </div>
              <div className="user-info">
                <h5>Mssud Rana</h5>
                <span>wait ami dicci .1h</span>
              </div>
            </div>
            <div className="messenger-user-listinfo">
              <div className="user-photo">
                <img
                  src="https://scontent.fdac136-1.fna.fbcdn.net/v/t39.30808-1/379244052_2016373532094591_4818048961772273910_n.jpg?stp=dst-jpg_p100x100&_nc_cat=107&cb=99be929b-b574a898&ccb=1-7&_nc_sid=11e7ab&_nc_ohc=Tn-Jmm8727YAX8wP0lF&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdac136-1.fna&oh=00_AfDwBWuCeQ9UVZw_roZfmf_L2LNGcLJWrPjxSgprFPfoUg&oe=658BC57D"
                  alt=""
                />
              </div>
              <div className="user-info">
                <h5>Mssud Rana</h5>
                <span>wait ami dicci .1h</span>
              </div>
            </div>
            <div className="messenger-user-listinfo">
              <div className="user-photo">
                <img
                  src="https://scontent.fdac136-1.fna.fbcdn.net/v/t39.30808-1/379244052_2016373532094591_4818048961772273910_n.jpg?stp=dst-jpg_p100x100&_nc_cat=107&cb=99be929b-b574a898&ccb=1-7&_nc_sid=11e7ab&_nc_ohc=Tn-Jmm8727YAX8wP0lF&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdac136-1.fna&oh=00_AfDwBWuCeQ9UVZw_roZfmf_L2LNGcLJWrPjxSgprFPfoUg&oe=658BC57D"
                  alt=""
                />
              </div>
              <div className="user-info">
                <h5>Mssud Rana</h5>
                <span>wait ami dicci .1h</span>
              </div>
            </div>
          </div>
        </div>
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
        </div>
        <div className="messenger-user-info">info</div>
      </div>
    </>
  );
};

export default Messenger;
