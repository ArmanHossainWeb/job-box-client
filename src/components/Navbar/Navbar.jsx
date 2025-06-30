import React from "react";
import logo from "../../assets/images/logo.svg";
import { NavLink } from "react-router";
import UseAuth from "../../hooks/UseAuth";

const Navbar = () => {
  const { user, logout } = UseAuth();
  const links = (
    <div className="space-x-3">
      <NavLink to={"/"}>Home</NavLink>
    {/* for applicate  links . check roles as well  */}
      {
        user && <>
        <NavLink to={"/myApplications"}>My Applications</NavLink>
        </>
      }
      {/* for recruter . check role as well  */}
      {
        user && <>
        <NavLink to={"/addJob"}>Add Job</NavLink>
        <NavLink to={"/myPostedJobs"}>My Posted Jobs</NavLink>
        </>
      }
    </div>
  );

  // logout
  const handleSignOut = () => {
    logout()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <div className="">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button
              className="btn bg-primary hover:bg-secondary text-white"
              onClick={handleSignOut}
            >
              sign out
            </button>
          ) : (
            <NavLink
              className={"btn bg-primary hover:bg-secondary text-white"}
              to={"/register"}
            >
              Register
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
