import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Login from "../Login/Login";
import AllJobs from "../NavbarRoute/AllJobs";
import Blogs from "../NavbarRoute/Blogs";
import ErrorPage404 from "../ErrorPage404/ErrorPage404";
import SignUp from "../SignUpPage/SignUp";
import MyJob from "../NavbarRoute/MyJob";
import Profile from "../NavbarRoute/Profile";
import AddJob from "../NavbarRoute/AddJob";
import AppliedJobs from "../NavbarRoute/AppliedJobs";
import PrivateRoute from "./PrivateRoute";
import DetailsPage from "../Pages/DetailsPage";
import UpdatePage from "../Pages/updatePage";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import TermsOfUse from "../Pages/TermsOfUse";

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
        path: '/login',
        element: <Login />,
      },
      {
        path: '/all_jobs',
        element: <AllJobs />,
        loader: () => fetch('https://assignment-11-server-pi-rouge.vercel.app/all_jobs', { credentials: "include" }),
      },
      {
        path: '/blogs',
        element: <Blogs />,
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/my_job',
        element: <PrivateRoute><MyJob /></PrivateRoute>,
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile /></PrivateRoute>,
      },
      {
        path: '/add_job',
        element: <PrivateRoute><AddJob /></PrivateRoute>,
      },
      {
        path: '/applied_job',
        element: <PrivateRoute><AppliedJobs /></PrivateRoute>,
      },
      {
        path: '/all_job/:id',
        element: <PrivateRoute><DetailsPage /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-11-server-pi-rouge.vercel.app/all_jobs/${params.id}`, { credentials: "include" })
      },
      {
        path: 'update/:id',
        element: <PrivateRoute><UpdatePage /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-11-server-pi-rouge.vercel.app/all_jobs/${params.id}`, { credentials: "include" })

      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/privacy',
        element: <PrivacyPolicy></PrivacyPolicy>
      },
      {
        path: 'terms-of-use',
        element: <TermsOfUse></TermsOfUse>
      }
    ],
  },
]);

export default router;