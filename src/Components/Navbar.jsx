import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useState } from "react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const normalLink = "lg:font-bold lg:text-lg lg:mr-2 mt-2 lg:mt-0";
  const activeLink = `bg-gradient-to-r from-[#B18B5E] to-[#d6aa76] border border-blure-500 text-white border-none hover:bg-transparent focus:bg-transparent focus:text-white ${normalLink}`;
  const [theme, setTheme] = useState("light");

  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  document.querySelector("html").setAttribute("data-theme", theme);
  return (
    <div className="sticky top-0 z-40 bg-base-100 shadow-xl ">
      <div className="navbar bg-base-100 container mx-auto p-4 ">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className=" menu menu-sm dropdown-content mt-3 z-[11] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/allcarft"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  All Art & craft Items
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/addcarft"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Add Craft Item
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/mycarft"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  My Art & craft Items
                </NavLink>
              </li>
              {user ? (
                <li className="md:hidden">
                  <button
                    onClick={logout}
                    className="btn mt-4 bg-[#b39b7e] text-white font-bold hover:bg-[#997851]"
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <div className="mt-4">
                  <Link to="/login">
                    <button className="btn bg-[#b39b7e] text-white font-bold hover:bg-[#997851]">
                      Login
                    </button>
                  </Link>
                  <Link to="/registration">
                    <button className="btn bg-[#b39b7e] text-white font-bold hover:bg-[#997851]">
                      Register
                    </button>
                  </Link>
                </div>
              )}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost text-3xl font-garamond text-[#B18B5E]"
          >
            Crafty Corner
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allcarft"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                All Art & craft Items
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addcarft"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Add Craft Item
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mycarft"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                My Art & craft Items
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex ">
          <div className="mr-6 hidden md:flex">
            <label className="swap swap-rotate pt-1">
              {/* this hidden checkbox controls the state */}
              <input
                onChange={handleTheme}
                type="checkbox"
                className="theme-controller"
                value="synthwave"
              />

              {/* sun icon */}
              <svg
                className="swap-off fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
          {user ? (
            <div className="flex  items-center gap-2 pr-2 md:pr-0">
              <div
                className="flex tooltip tooltip-bottom z-[10]"
                data-tip={user.displayName || "Unknown"}
              >
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-20 rounded-full">
                    <img
                      alt="profile picture"
                      src={
                        user.photoURL || "https://i.ibb.co/4SrK9pD/profile.jpg"
                      }
                    />
                  </div>
                </div>
              </div>
              <button
                onClick={logout}
                className="btn bg-[#B18B5E] text-white font-bold hover:bg-[#997851] hidden md:flex"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="hidden md:flex">
              <div>
                <Link to="/login">
                  <button className="btn bg-[#B18B5E] text-white font-bold hover:bg-[#997851]">
                    Login
                  </button>
                </Link>
                <Link to="/registration">
                  <button className="btn bg-[#B18B5E] text-white font-bold hover:bg-[#997851]">
                    Register
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
