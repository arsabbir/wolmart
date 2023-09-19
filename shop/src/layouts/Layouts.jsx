import Footer from "./footer/Footer.jsx";
import Header from "./header/Header.jsx";
import { Outlet } from "react-router-dom";

const Layouts = () => {
  return (
    <>
      <div className="page-wrapper">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layouts;
