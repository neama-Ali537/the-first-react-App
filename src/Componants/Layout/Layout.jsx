import React from "react";

import Navbar from "../Navbar/Navbar";

import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
function Layout({ userData, setUserData }) {
  let navigate = useNavigate();
  function LogOut() {
    localStorage.removeItem("userToken");
    setUserData(null);
    navigate("/login");
  }
  return (
    <>
      <Navbar  LogOut={LogOut} userData={userData} />
      <div className="container">
          <Outlet></Outlet>
      </div>
    
      <Footer />
    </>
  );
}
export default Layout;
