/* eslint-disable react/prop-types */
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
import useAdmin from "../../../../hook/useAdmin";
import { IoIosNotifications } from "react-icons/io";
import useDonar from "../../../../hook/useDonar";
import useRequestedBlood from "../../../../hook/useRequestedBlood";

const MobileDevice = ({ navOpen, setNavOpen, user, logOut }) => {
  const naviget = useNavigate();
  const [isAdmin] = useAdmin();
  const [isDonar] = useDonar();
  const [requestedBlood] = useRequestedBlood();
  const notifications = requestedBlood.filter(
    (notification) => notification.bloodReq === "true"
  );
  const data = notifications?.length;
  return (
    <div className="lg:hidden z-50">
      <button className="text-white" onClick={() => setNavOpen(!navOpen)}>
        {navOpen ? (
          <HiOutlineX className="w-10 h-10 " />
        ) : (
          <HiMenuAlt3 className="w-10 h-10 " />
        )}
      </button>
      {navOpen && (
        <nav className="absolute left-0 z-50  text-center py-10 top-[80px] w-full h-screen bg-rose-50">
          <ul className="flex my-5 flex-col justify-between items-center gap-5 text-gray-800">
            <li className="font-semibold">
              <NavLink
                to={"/"}
                onClick={() => setNavOpen(false)}
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
                onClick={() => setNavOpen(false)}
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
                onClick={() => setNavOpen(false)}
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
                onClick={() => setNavOpen(false)}
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
                    onClick={() => setNavOpen(false)}
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
                    onClick={() => setNavOpen(false)}
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
                    onClick={() => [
                      logOut(),
                      naviget(["/login"], setNavOpen(false)),
                    ]}
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
                    onClick={() => setNavOpen(false)}
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
                    onClick={() => setNavOpen(false)}
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
              <div className="relative text-rose-500  cursor-pointer mt-2">
                <IoIosNotifications className="w-8 h-8" />
                <span className="absolute top-[-20px]    rounded-full px-1 text-xl flex justify-center  items-center text-gray-500 right-[-10px] font-semibold">
                 {data}
                </span>
              </div>
            )}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MobileDevice;
