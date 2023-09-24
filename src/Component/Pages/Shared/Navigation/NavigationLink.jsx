import React from "react";
import { NavLink } from "react-router-dom";
import NavData from "./NavData";
import { IoIosNotifications } from "react-icons/io";
const NavigationLink = () => {
  const data = 1;
  return (
    <div className="hidden lg:block">
      <ul className="flex justify-between  font-semibold items-center gap-5 text-gray-800">
        {NavData.map((nav) => (
          <li>
            <NavLink
              key={nav.path}
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
        <li>
          <div className="relative">
            <IoIosNotifications className="w-6 h-6" />
            {
              data && <span className="absolute top-[-8px] bg-gradient-to-r from-rose-600 to-pink-500 rounded-full px-1 text-[10px] flex justify-center text-white items-center right-[-2px]">
              {data}
             </span>
            }
            
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NavigationLink;
