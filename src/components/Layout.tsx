import React from "react";
import { Outlet } from "react-router-dom";
import MenuDesktop from "./MenuDesktop"; // Adjust path as necessary
import MenuMobile from "./MenuMobile"; // Adjust path as necessary

const Layout: React.FC = () => {
  return (
    <div className="main">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-auto sticky-sm-top bg-white">
            <MenuDesktop />
          </div>
          <div className="col-sm p-0 min-vh-100 bg-light overflow-auto">
            <Outlet /> {/* Renders the current route */}
          </div>
        </div>
      </div>
      <MenuMobile />
    </div>
  );
};

export default Layout;