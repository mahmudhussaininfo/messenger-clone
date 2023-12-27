import { BsThreeDots } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserInfo, setMessageEmpty } from "../../features/user/userSlice";
import { useEffect } from "react";
import { createToast } from "../../utils/toast";
import { getAllUser } from "../../features/user/userApiSlice";
import { Avatar } from "@chakra-ui/react";
const User = () => {
  const dispatch = useDispatch();
  const { user, error, message } = useSelector(getAllUserInfo);

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

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

  return (
    <>
      {" "}
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
          {user?.map((item, index) => {
            return (
              <div className="messenger-user-listinfo" key={index}>
                <div className="user-photo">
                  <Avatar name={item.name} src={item.photo} />
                </div>
                <div className="user-info">
                  <h5>{item.name}</h5>
                  <span>wait ami dicci .1h</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default User;
