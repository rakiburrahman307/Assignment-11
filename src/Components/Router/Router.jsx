import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Login from "../Login/Login";
import AllJobs from "../NavbarRoute/AllJobs";
import Blogs from "../NavbarRoute/Blogs";
import ErrorPage404 from "../ErrorPage404/ErrorPage404";
import SignUp from "../SignUpPage/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage404 />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path:'/login',
          element: <Login />,
        },
        {
          path:'/all_jobs',
          element: <AllJobs/>,
        },
        {
          path: '/blogs',
          element: <Blogs/>,
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        }
      ],
    },
  ]);

  export default router;