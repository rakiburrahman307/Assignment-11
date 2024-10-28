import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage404 from "../ErrorPage404/ErrorPage404";
import PrivateRoute from "./PrivateRoute";
import { lazy } from "react";

// Lazy load components
const Home = lazy(() => import("../Home/Home"));
const Login = lazy(() => import("../Login/Login"));
const AllJobs = lazy(() => import("../NavbarRoute/AllJobs"));
const Blogs = lazy(() => import("../NavbarRoute/Blogs"));
const SignUp = lazy(() => import("../SignUpPage/SignUp"));
const MyJob = lazy(() => import("../NavbarRoute/MyJob"));
const Profile = lazy(() => import("../NavbarRoute/Profile"));
const AddJob = lazy(() => import("../NavbarRoute/AddJob"));
const AppliedJobs = lazy(() => import("../NavbarRoute/AppliedJobs"));
const DetailsPage = lazy(() => import("../Pages/DetailsPage"));
const UpdatePage = lazy(() => import("../Pages/UpdatePage"));
const About = lazy(() => import("../Pages/About"));
const Contact = lazy(() => import("../Pages/Contact"));
const PrivacyPolicy = lazy(() => import("../Pages/PrivacyPolicy"));
const TermsOfUse = lazy(() => import("../Pages/TermsOfUse"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
        element: <SignUp />
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
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/privacy',
        element: <PrivacyPolicy />
      },
      {
        path: 'terms-of-use',
        element: <TermsOfUse />
      }
    ],
  },
]);

export default router;
