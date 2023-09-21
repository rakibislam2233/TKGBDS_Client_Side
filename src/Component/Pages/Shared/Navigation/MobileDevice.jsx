import { HiMenuAlt3 } from "react-icons/hi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import NavData from "./NavData";

const MobileDevice = ({ navOpen, setNavOpen, user, logOut }) => {
  const  naviget = useNavigate()
  return (
    <div className="md:hidden">
      <button onClick={() => setNavOpen(!navOpen)}>
        <HiMenuAlt3 className="w-8 h-8"></HiMenuAlt3>
      </button>
      {navOpen && (
        <nav className="absolute left-0 z-50  text-center py-10 top-[80px] w-full bg-slate-50">
          {user ? (
            <>
              <div className="dropdown dropdown-end ml-20">
                <label
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar mr-20"
                >
                  <div className="w-16 mx-auto rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 space-y-3 ml-3 border  py-5 shadow menu menu-sm dropdown-content z-30 bg-slate-50 rounded-box w-52 p-3"
                >
                  <label tabIndex={0} className="avatar ">
                    <div className="w-16 mx-auto rounded-full">
                      <img className="" src={user?.photoURL} />
                    </div>
                  </label>
                  <h2 className="text-center font-semibold text-gray-700">
                    {user?.displayName}
                  </h2>
                  <Link>
                    <button className="w-full py-2 px-5 cursor-pointer bg-gradient-to-r from-rose-600 to-pink-500 rounded-full text-white">
                      View Profile
                    </button>
                  </Link>
                  <Link>
                    <button
                      onClick={() => [logOut(),naviget('/login')]}
                      className="w-full bg-gray-700 rounded-full  text-white p-2"
                    >
                      Log Out
                    </button>
                  </Link>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link to="/userType">
                <div
                  onClick={() => setNavOpen(false)}
                  className=" w-1/2 mx-auto py-2 my-5 px-10 border border-rose-700 text-gray-700 rounded-full cursor-pointer "
                >
                 Register
                </div>
              </Link>
              <Link to="/login">
                <div
                  onClick={() => setNavOpen(false)}
                  className="w-1/2 mx-auto py-2 my-5 px-10 cursor-pointer bg-gradient-to-r from-rose-600 to-pink-500 rounded-full text-white my-2 cursor-pointer "
                >
                  Login
                </div>
              </Link>
            </>
          )}
          <ul className="flex my-5 flex-col justify-between items-center gap-5 text-gray-800">
            {NavData.map((nav) => (
              <li>
                <NavLink
                  key={nav.path}
                  onClick={()=>setNavOpen(false)}
                  to={nav.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-rose-700"
                      : "hover:text-rose-700 transition-all duration-300"
                  }
                >
                  {nav.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MobileDevice;