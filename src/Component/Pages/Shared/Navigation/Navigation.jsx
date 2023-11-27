import Logo from "./Logo";
import { HiPhone } from "react-icons/hi";
import { useContext } from "react";
import { UserContext } from "../../../../Provider/AuthProvider/AuthProvider";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAdmin from "../../../../hook/useAdmin";
import MobileDevice from "./MobileDevice";
import { useState } from "react";
import { IoIosNotifications } from "react-icons/io";
import useDonar from "../../../../hook/useDonar";
import useRequestedBlood from "../../../../hook/useRequestedBlood";
const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { user, logOut } = useContext(UserContext);
  const [isDonar] = useDonar();
  const [requestedBlood] = useRequestedBlood();
  const notifications = requestedBlood.filter(
    (notification) => notification.bloodReq === "true"
  );
  const data = notifications?.length;
  const [isAdmin] = useAdmin();
  const naviget = useNavigate();
  const handleLogout = () => {
    logOut();
    naviget("/login");
  };
  return (
    <>
      <nav className="w-full text-white z-50 ">
        <div className="w-fulll sticky md:px-16 bg-emerald-500 h-20 flex justify-between gap-2 items-center px-5">
          <Logo></Logo>
          <div className="hidden md:block ">
            <div className="flex gap-5 items-center">
              <div className="flex gap-2 items-center">
                <HiPhone className="w-6 h-6" />
                <h1 className="text-xl font-semibold">01319101179</h1>
              </div>

              {user ? (
                <>
                  {isAdmin?.admin ? (
                    <Link to="/dashboard/admin-profile">
                      <button className="px-5 py-1 bg-rose-500 text-white font-semibold border rounded">
                        Dashboard
                      </button>
                    </Link>
                  ) : (
                    <Link to="/dashboard/my-profile">
                      <button className="px-5 py-1 bg-rose-500 text-white font-semibold border rounded">
                        Dashboard
                      </button>
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="px-5 py-1 bg-rose-500 text-white font-semibold border rounded"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to={"/login"}>
                    <button className="px-5 py-1 bg-rose-500 text-white font-semibold border rounded">
                      Login
                    </button>
                  </Link>
                  <Link to={"/userType"}>
                    <button className="px-5 py-1 bg-rose-500 text-white font-semibold border rounded">
                      Register
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
          <MobileDevice navOpen={navOpen} setNavOpen={setNavOpen} user={user} logOut={logOut} />
        </div>
        <div className="hidden md:block ">
          <ul className="w-full px-5 py-4 flex justify-center gap-8 items-center text-white bg-rose-500 ">
            <li className="font-semibold">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-white px-2 rounded py-1  text-rose-500"
                    : "px-2 py-1 rounded hover:bg-white hover:text-rose-500"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="font-semibold">
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-white px-2 rounded py-1  text-rose-500"
                    : "px-2 py-1 rounded hover:bg-white hover:text-rose-500"
                }
              >
                About Blood Donation
              </NavLink>
            </li>
            <li className="font-semibold">
              <NavLink
                to={"/find-donar"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-white px-2 rounded py-1  text-rose-500"
                    : "px-2 py-1 rounded hover:bg-white hover:text-rose-500"
                }
              >
                Find Donar
              </NavLink>
            </li>
            <li className="font-semibold">
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-white px-2 rounded py-1  text-rose-500"
                    : "px-2 py-1 rounded hover:bg-white hover:text-rose-500"
                }
              >
                Contact
              </NavLink>
            </li>
            {user ? (
              <>
                {isAdmin?.admin ? (
                  <NavLink
                    to="/dashboard/admin-profile"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-white px-2 rounded py-1  text-rose-500 font-semibold"
                        : "px-2 py-1 rounded hover:bg-white hover:text-rose-500 font-semibold"
                    }
                  >
                    Dashboard
                  </NavLink>
                ) : (
                  <NavLink
                    to="/dashboard/my-profile"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-white px-2 rounded py-1  text-rose-500 font-semibold"
                        : "px-2 py-1 rounded hover:bg-white hover:text-rose-500 font-semibold"
                    }
                  >
                    Dashboard
                  </NavLink>
                )}
                <li className="font-semibold">
                  <NavLink
                    to={"/login"}
                    onClick={handleLogout}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-white px-2 rounded py-1  text-rose-500"
                        : "px-2 py-1 rounded hover:bg-white hover:text-rose-500"
                    }
                  >
                    Logout
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="font-semibold">
                  <NavLink
                    to={"/login"}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-white px-2 rounded py-1  text-rose-500"
                        : "px-2 py-1 rounded hover:bg-white hover:text-rose-500"
                    }
                  >
                    Login
                  </NavLink>
                </li>
                <li className="font-semibold">
                  <NavLink
                    to={"/userType"}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-white px-2 rounded py-1  text-rose-500"
                        : "px-2 py-1 rounded hover:bg-white hover:text-rose-500"
                    }
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}
             {isDonar?.donar && (
              <li className="relative text-white  cursor-pointer">
                <IoIosNotifications className="w-6 h-6" />
                <span className="absolute top-[-15px]    rounded-full px-1 text-xl flex justify-center  items-center text-white right-[-8px]">
                 {data}
                </span>
              </li>
            )}
          </ul>
         
        </div>
      </nav>
    </>
  );
};

export default Navigation;
