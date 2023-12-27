import Home from "../pages/Auth/Home/Home";
import ProfileEdit from "../pages/ProfileEdit/ProfileEdit";
import PrivateGard from "./PrivateGard";

// create Private router
const privateRouter = [
  {
    element: <PrivateGard />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile-edit",
        element: <ProfileEdit />,
      },
    ],
  },
];

// export router
export default privateRouter;
