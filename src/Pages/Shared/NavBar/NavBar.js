import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import createUserName from "../../../utilities/createUserName";

const NavBar = () => {
  const navigate = useNavigate();
  const { user, logOutHandler } = useContext(AuthContext);

  const userLogoutHandler = () => {
    logOutHandler()
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <nav className="navbar bg-base-100">
      <div className="navbar-start">
        {user && (
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={`/home/${user?.uid}`}>Home</Link>
              </li>

              <li>
                <Link to={`/blogs/${user?.uid}`}>My Blogs</Link>
              </li>
            </ul>
          </div>
        )}
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Express Blog
        </Link>
      </div>
      {user && (
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to={`/home/${user?.uid}`}>Home</Link>
            </li>
            <li>
              <Link to={`/blogs/${user?.uid}`}>My Blogs</Link>
            </li>
          </ul>
        </div>
      )}
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" alt="User" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={`/profile/${user?.uid}`} className="justify-center">
                  Profile
                </Link>
              </li>
              <li>
                <button onClick={userLogoutHandler} className="btn btn-ghost">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-outline">Get Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
