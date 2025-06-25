import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import JobDetails from "../pages/jobDetails/JobDetails";

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
          path:"/jobs/:id",
          Component: JobDetails,
          loader:({params})=> fetch(`http://localhost:3000/jobs/${params.id}`)
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