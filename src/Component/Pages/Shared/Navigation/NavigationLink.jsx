import React from "react";
import { NavLink } from "react-router-dom";
import NavData from "./NavData";
const NavigationLink = () => {
  return (
    <div className="hidden md:block">
      <ul className="flex justify-between items-center gap-5 text-gray-800">
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
      </ul>
    </div>
  );
};

export default NavigationLink;
