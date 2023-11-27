import { MdOutlineBloodtype } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineUser } from "react-icons/ai";
import { BiDonateBlood } from "react-icons/bi";
import { IoImageOutline } from "react-icons/io5";
import { VscFeedback } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import useDonar from "../../../hook/useDonar";
const UserNavlink = () => {
  const [isDonar] = useDonar();
  return (
    <ul className="flex flex-col gap-2  text-gray-700">
      {isDonar?.donar ? (
        <>
          <li>
            <NavLink
              to="/dashboard/my-profile"
              className={({ isActive }) =>
                isActive
                  ? "py-2  px-5 bg-gradient-to-r from-rose-600 to-pink-500 rounded text-white flex gap-1 items-center"
                  : " py-2  px-5 flex gap-1 items-center  cursor-pointer text-gray-700 "
              }
            >
              <AiOutlineUser className="w-5 h-5"></AiOutlineUser>My Profile
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
              <SlLocationPin className="w-5 h-5"></SlLocationPin> Address
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/application-blood"
              className={({ isActive }) =>
                isActive
                  ? "py-2  px-5 bg-gradient-to-r from-rose-600 to-pink-500 rounded text-white flex gap-1 items-center"
                  : "py-2  px-5 flex gap-1 items-center  cursor-pointer text-gray-700 "
              }
            >
              <MdOutlineBloodtype className="w-5 h-5"></MdOutlineBloodtype>
              Application Blood
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/requested-Blood"
              className={({ isActive }) =>
                isActive
                  ? "py-2  px-5 bg-gradient-to-r from-rose-600 to-pink-500 rounded text-white flex gap-1 items-center"
                  : "py-2  px-5 flex gap-1 items-center  cursor-pointer text-gray-700 "
              }
            >
              <BiDonateBlood className="w-5 h-5"></BiDonateBlood>Requested Blood
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/gallery"
              className={({ isActive }) =>
                isActive
                  ? "py-2  px-5 bg-gradient-to-r from-rose-600 to-pink-500 rounded text-white flex gap-1 items-center"
                  : "py-2  px-5 flex gap-2 items-center  cursor-pointer text-gray-700 "
              }
            >
              <IoImageOutline className="w-4 h-4 "></IoImageOutline> Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/feedback"
              className={({ isActive }) =>
                isActive
                  ? "py-2  px-5 bg-gradient-to-r from-rose-600 to-pink-500 rounded text-white flex gap-1 items-center"
                  : "py-2  px-5 flex gap-2 items-center  cursor-pointer text-gray-700 "
              }
            >
              <VscFeedback className="w-4 h-4 "></VscFeedback> FeedBack
            </NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink
              to="/dashboard/my-profile"
              className={({ isActive }) =>
                isActive
                  ? "py-2  px-5 bg-gradient-to-r from-rose-600 to-pink-500 rounded text-white flex gap-1 items-center"
                  : " py-2  px-5 flex gap-1 items-center  cursor-pointer text-gray-700 "
              }
            >
              <AiOutlineUser className="w-5 h-5"></AiOutlineUser>My Profile
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
              <SlLocationPin className="w-5 h-5"></SlLocationPin> Address
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/application-blood"
              className={({ isActive }) =>
                isActive
                  ? "py-2  px-5 bg-gradient-to-r from-rose-600 to-pink-500 rounded text-white flex gap-1 items-center"
                  : "py-2  px-5 flex gap-1 items-center  cursor-pointer text-gray-700 "
              }
            >
              <MdOutlineBloodtype className="w-5 h-5"></MdOutlineBloodtype>
              Application Blood
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/gallery"
              className={({ isActive }) =>
                isActive
                  ? "py-2  px-5 bg-gradient-to-r from-rose-600 to-pink-500 rounded text-white flex gap-1 items-center"
                  : "py-2  px-5 flex gap-2 items-center  cursor-pointer text-gray-700 "
              }
            >
              <IoImageOutline className="w-4 h-4 "></IoImageOutline> Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/feedback"
              className={({ isActive }) =>
                isActive
                  ? "py-2  px-5 bg-gradient-to-r from-rose-600 to-pink-500 rounded text-white flex gap-1 items-center"
                  : "py-2  px-5 flex gap-2 items-center  cursor-pointer text-gray-700 "
              }
            >
              <VscFeedback className="w-4 h-4 "></VscFeedback> FeedBack
            </NavLink>
          </li>
        </>
      )}
    </ul>
  );
};

export default UserNavlink;
