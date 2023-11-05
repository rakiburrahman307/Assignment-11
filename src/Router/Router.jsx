import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
    //   errorElement: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);

  export default router;