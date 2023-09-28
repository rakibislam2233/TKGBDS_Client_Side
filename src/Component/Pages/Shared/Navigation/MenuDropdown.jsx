import { Link, useNavigate } from "react-router-dom";
import useAdmin from "../../../../hook/useAdmin";
const MenuDropdown = ({ user, logOut }) => {
  const naviget = useNavigate();
  const [isAdmin] = useAdmin();
  return (
    <div className="hidden lg:block">
      {user ? (
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-16 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </label>
            <ul
              // tabIndex={0}
              className="mt-3 space-y-3 ml-3 border  py-5 shadow menu menu-sm dropdown-content z-30 bg-slate-50 rounded-box w-52 p-3"
            >
              <label className="avatar ">
                <div className="w-14 h-14 mx-auto rounded-full">
                  <img className="" src={user?.photoURL} />
                </div>
              </label>
              <h2 className="text-center font-semibold text-gray-700">
                {user?.displayName}
              </h2>
              {

              isAdmin?.admin ? <Link to="/dashboard/admin-profile">
              <button className="w-full py-2  px-10 cursor-pointer bg-gradient-to-r from-rose-600 to-pink-500 rounded-full text-white">
                View Profile
              </button>
            </Link> : <Link to="/dashboard/my-profile">
              <button className="w-full py-2  px-10 cursor-pointer bg-gradient-to-r from-rose-600 to-pink-500 rounded-full text-white">
                View Profile
              </button>
            </Link>

              }
              
              <button
                onClick={() => [logOut(), naviget("/login")]}
                className="w-full bg-gray-700 rounded-full  text-white p-2"
              >
                Log Out
              </button>
            </ul>
          </div>
        </div>
      ) : (
        <div className={`flex gap-3 items-center `}>
          <Link to="/userType">
            <button className="py-2  px-10 cursor-pointer bg-gradient-to-r from-rose-600 to-pink-500 rounded-full text-white">
              Register
            </button>
          </Link>
          <Link to="/login">
            <button className="py-2 px-10 cursor-pointer border  border-rose-700 rounded-full text-gray-700">
              Login
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MenuDropdown;
