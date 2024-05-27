import React from "react";
import LeftNav from "../component/dashboard/leftnav/LeftNav";
import { Outlet } from "react-router-dom";
import Nav from "../component/dashboard/right/Nav";

const DashLayout = () => {
  return (
    <div className="grid grid-cols-12 h-screen ">
      <div className="col-span-2 bg-slate-300 h-screen  ">
        <LeftNav></LeftNav>
      </div>
      <div className="col-span-10 pl-5 ">
        <Nav></Nav>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashLayout;
