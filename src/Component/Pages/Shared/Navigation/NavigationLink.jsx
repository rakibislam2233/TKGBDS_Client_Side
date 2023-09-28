import { NavLink } from "react-router-dom";
import NavData from "./NavData";
import { IoIosNotifications } from "react-icons/io";
import useRequestedBlood from "../../../../hook/useRequestedBlood";
import useDonar from "../../../../hook/useDonar";
const NavigationLink = () => {
  const [isDonar] = useDonar();
  const [requestedBlood] = useRequestedBlood();
  const notifications = requestedBlood.filter(
    (notification) => notification.bloodReq === "true"
  );
  const data = notifications?.length;
  return (
    <div className="hidden lg:block">
      <ul className="flex justify-between  font-semibold items-center gap-3 text-gray-800">
        {NavData.map((nav) => (
          <li key={nav.path}>
            <NavLink
              key={nav.path}
              to={nav.path}
              className={({ isActive }) =>
                isActive
                  ? " bg-gradient-to-r from-rose-600 to-pink-500 px-5 rounded py-2  text-white"
                  : "hover:bg-gradient-to-r from-rose-600 to-pink-500 px-5 rounded py-2 transition-all duration-300  "
              }
            >
              {nav.title}
            </NavLink>
          </li>
        ))}
        <li>
          {isDonar?.donar && (
            <div className="relative cursor-pointer">
              <IoIosNotifications className="w-6 h-6" />
              {data === 0 ? (
                ""
              ) : (
                <span className="absolute top-[-8px] bg-gradient-to-r from-rose-600 to-pink-500 rounded-full px-1 text-[10px] flex justify-center text-white items-center right-[-2px]">
                  {data}
                </span>
              )}
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default NavigationLink;
