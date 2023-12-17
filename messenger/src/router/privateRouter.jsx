import Home from "../pages/Auth/Home/Home";
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
    ],
  },
];

// export router
export default privateRouter;
