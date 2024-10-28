import { lazy, Suspense } from "react";
import Spinner from "../Spinner/Spinner";
const Navbar = lazy(() => import("../NavBar/Navbar"));
const Footer = lazy(() => import("../Footer/Footer"));
const Outlet = lazy(() =>
  import("react-router-dom").then((module) => ({ default: module.Outlet }))
);

const Root = () => {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Navbar />
        <Outlet />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Root;
