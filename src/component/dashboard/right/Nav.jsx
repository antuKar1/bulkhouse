import React from "react";
import { Link } from "react-router-dom";
import { IoAddCircle } from "react-icons/io5";

const Nav = () => {
  return (
    <>
      <div className="navbar bg-base-100 pl-0 fixed z-40">
        <div className="flex  justify-center w-full">
          <ul className="menu bg-base-200 w-full lg:menu-horizontal rounded-box">
            <li>
              <Link className="text-base font-bold" to={"addproduct"}>
                <IoAddCircle className="text-3xl" />
                Add Product
                
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
