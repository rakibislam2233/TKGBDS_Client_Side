import { useContext } from "react";
import { UserContext } from "../../../Provider/AuthProvider/AuthProvider";
import AdminNavlink from "./AdminNavlink";
import { Link } from "react-router-dom";
import useAdmin from "../../../hook/useAdmin";
import UserNavlink from "./UserNavlink";
const Sidebar = () => {
  const { user } = useContext(UserContext);
  const [isAdmin] = useAdmin();
  return (
    <div className="w-full  text-white flex flex-col  items-center gap-10 px-5 py-8 ">
      <div className="pt-10">
        <img className="w-20 h-20 rounded-full" src={user?.photoURL} alt="" />
      </div>
      {isAdmin?.admin ? <AdminNavlink /> : <UserNavlink />}

      <div className="flex justify-center">
        <Link to="/">
          <button className="py-2  px-5 bg-gradient-to-r from-rose-600 to-pink-500 rounded text-white flex items-center gap-1">
            Back to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
