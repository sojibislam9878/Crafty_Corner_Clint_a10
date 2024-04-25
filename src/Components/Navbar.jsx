import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const normalLink = "lg:font-bold lg:text-lg lg:mr-2 mt-2 lg:mt-0";
  const activeLink = `bg-gradient-to-r from-[#4facfe] to-blue-500 border border-blure-500 text-white hover:bg-transparent focus:bg-transparent focus:text-white ${normalLink}`;
    return (
        <div className="sticky top-0 z-40 bg-white">
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
                  to="/bookmark"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Book Mark
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/updateProfile"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Update Profile
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-3xl font-garamond">
            Elite Haven
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
                to="/bookmark"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Book Mark
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/updateProfile"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Update Profile
              </NavLink>
            </li>
          </ul>
        </div>
        {/* <div className="navbar-end">
          {user ? (
            <div className="flex  items-center gap-2 pr-2 md:pr-0">
              <div
                className="flex tooltip tooltip-bottom z-[10]"
                data-tip={"Unknown"}
              >
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-20 rounded-full">
                    <Link to="/updateprofile">
                      <img
                        alt="profile picture"
                        src={"https://i.ibb.co/4SrK9pD/profile.jpg"
                        }
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <button
                
                className="btn bg-blue-500 text-white font-bold hover:bg-blue-700 hidden md:flex"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn bg-blue-500 text-white font-bold hover:bg-blue-700">
                Login
              </button>
            </Link>
          )}
        </div> */}
      </div>
    </div>
    );
};

export default Navbar;