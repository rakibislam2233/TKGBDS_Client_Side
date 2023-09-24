import { MdOutlineBloodtype } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineUser } from "react-icons/ai";
import { BiDonateBlood } from "react-icons/bi";
import { NavLink } from "react-router-dom";
const AdminNavlink = () => {
  return (
    <ul className="flex flex-col gap-2  text-gray-700">
      <li>
        <NavLink
          to="/dashboard/my-profile"
          className={({ isActive }) =>
            isActive
              ? "py-2  px-5 bg-gradient-to-r from-rose-600 to-pink-500 rounded text-white flex gap-1 items-center"
              : " py-2  px-5 flex gap-1 items-center  cursor-pointer text-gray-700 "
          }
        >
          <AiOutlineUser className="w-5 h-5"></AiOutlineUser>Admin Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/address"
          className={({ isActive }) =>
            isActive
              ? "py-2  px-5 bg-gradient-to-r from-rose-600 to-pink-500 rounded text-white flex gap-1 items-center"
              : "py-2  px-5 flex gap-1 items-center  cursor-pointer text-gray-700 "
          }
        >
          <SlLocationPin className="w-5 h-5"></SlLocationPin> Manage Users
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/Application-Blood"
          className={({ isActive }) =>
            isActive
              ? "py-2  px-5 bg-gradient-to-r from-rose-600 to-pink-500 rounded text-white flex gap-1 items-center"
              : "py-2  px-5 flex gap-1 items-center  cursor-pointer text-gray-700 "
          }
        >
          <MdOutlineBloodtype className="w-5 h-5"></MdOutlineBloodtype>
          ApplicationBlood
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/Requested-Blood"
          className={({ isActive }) =>
            isActive
              ? "py-2  px-5 bg-gradient-to-r from-rose-600 to-pink-500 rounded text-white flex gap-1 items-center"
              : "py-2  px-5 flex gap-1 items-center  cursor-pointer text-gray-700 "
          }
        >
          <BiDonateBlood className="w-5 h-5"></BiDonateBlood>RequestedBlood
        </NavLink>
      </li>
    </ul>
  );
};

export default AdminNavlink;
