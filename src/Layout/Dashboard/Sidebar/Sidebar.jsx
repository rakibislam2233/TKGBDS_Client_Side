import { useContext } from "react";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";
import { UserContext } from "../../../Provider/AuthProvider/AuthProvider";
import UserNavlink from "./UserNavlink";
import AdminNavlink from "./AdminNavlink";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const { user} = useContext(UserContext);
  return (
    <div className="w-full  text-white flex flex-col  items-center gap-10 px-5 py-8 ">
      <div className="pt-10">
        <img className="w-20 h-20 rounded-full" src={user?.photoURL} alt="" />
      </div>
      {/* <AdminNavlink/> */}
      <UserNavlink/>
      <div className="flex justify-center">
        <Link to='/'>
        <button  className="py-2  px-5 bg-gradient-to-r from-rose-600 to-pink-500 rounded-full text-white flex items-center gap-1">
          Back to home
          <HiArrowLeftOnRectangle className="w-5 h-5" />
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
