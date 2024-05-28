import React, { useContext } from "react";
import { BiLogIn } from "react-icons/bi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { AuthContext } from "../../context/AuthProvider";
import { FaCircleUser } from "react-icons/fa6";
const NavBar = () => {
  const navLink = (
    <>
      <NavLink to={"about"}>About</NavLink>
      <NavLink to={"projects"}>Projects</NavLink>
      <NavLink to={"blog"}>Blog</NavLink>
      <NavLink to={"contact"}>Contact</NavLink>
    </>
  );
const navigate=useNavigate();
  const { user, logOut } = useContext(AuthContext);

  //  Logout
  const userLogOut = () => {
    logOut()
      .then((res) => {
        swal("Aww yiss!😊", "You have Successfully Loged Out!", "success").then(
          (value) => navigate("/")
        );
      })
      .fetch((error) => swal("OOpss!😊", "Something Went Wrong!", "error"));
  };

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link className=" text-xl font-bold"> bulkHouse</Link>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div className=" flex justify-center items-center gap-4">
            {
              user && <Link
                className="text-lg font-semibold flex justify-center items-center gap-1"
                to={"dashboard"}
              >
               <MdDashboard /> Dashboard{" "}
              </Link>
            }
              {user ? 
                <Link onClick={userLogOut}
                  className="text-lg font-semibold flex justify-center items-center gap-1"
                 
                >
                Log out <HiOutlineLogout />
                 
                </Link>
               : 
                <Link
                  className="text-lg font-semibold flex justify-center items-center gap-1"
                  to={"login"}
                >
                  Login <BiLogIn className="font-bold text-lg my-auto" />{" "}
                </Link>
              }

              <Link className="text-3xl">
                {user ? (
                  <img
                    className="w-12 rounded-full"
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
                  />
                ) : (
                  <FaCircleUser />
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
