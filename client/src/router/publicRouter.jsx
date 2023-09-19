import Forgot from "../pages/auth/Forgot.jsx";
import Login from "../pages/auth/Login.jsx";
import Register from "../pages/auth/Register.jsx";
import Verify from "../pages/auth/Verify.jsx";
import Dashboard from "../pages/dashboard/Dashboard.jsx";

import PublicGard from "./PublicGard.jsx";

// create public router
const publicRouter = [
  {
    element: <PublicGard />,
    children: [
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
        element: <Forgot />,
      },
      {
        path: "/verify/:token",
        element: <Verify />,
      },

    ],
  },
];

// export router
export default publicRouter;
