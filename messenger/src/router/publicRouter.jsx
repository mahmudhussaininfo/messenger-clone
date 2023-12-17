import Activation from "../pages/Auth/Activation/Activation";
import ForgotPassword from "../pages/Auth/ForgotPassword/ForgotPassword";
import Home from "../pages/Auth/Home/Home";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import PublicGard from "./PublicGard";

// create public router
const publicRouter = [
  {
    element: <PublicGard />,
    children: [
      {
        path: "/auth",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forgot",
        element: <ForgotPassword />,
      },
      {
        path: "/activation",
        element: <Activation />,
      },
      {
        path: "/activation/:tokenUrl",
        element: <Activation />,
      },
    ],
  },
];

// export router
export default publicRouter;
