import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
        {
            index:true,
            Component: Home
        },
        {
          path:'/register',
          Component: Register
        },
        {
          path:"/login",
          Component: Login
        }
    ]
  },
]);

export default router;