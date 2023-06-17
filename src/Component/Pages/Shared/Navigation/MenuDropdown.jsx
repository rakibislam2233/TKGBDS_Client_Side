import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiArrowFromLeft } from "react-icons/bi";
const MenuDropdown = () => {
    const [open,setOpen] = useState(false)
    const [user] = useState(false)
  return (
    <>
      <div className={`flex gap-3 items-center ${user && 'hidden'}`}>
        <Link>
          <button className="py-2 px-5 font-semibold text-white bg-rose-500">
            Register
          </button>
        </Link>
        <Link>
          <button className="py-2 px-5 font-semibold text-white bg-rose-500">
            Login
          </button>
        </Link>
      </div>
    {
        user &&   <div className="relative">
        <div onClick={()=>setOpen(!open)} className="">
        <img
          className="w-10 h-10 rounded-full cursor-pointer"
          src="https://i.postimg.cc/fRx8FkZb/user-profile-icon-free-vector-fotor-2023061719853.png"
          alt=""
        />
        </div>
      {
        open &&   <div className="absolute top-16 right-0 rounded-xl bg-slate-300 w-40 py-2 p-2">
        <ul className="flex flex-col gap-2">
            {/* TODO:user name show */}
          <h2>Md Rakib Islam </h2>
          <hr className="border" />
          <li>
            <Link>Dashboard</Link>
          </li>
          <li>
            <Link>Logout</Link>
          </li>
        </ul>
      </div>
      }
      </div>
    }
    </>
  );
};

export default MenuDropdown;
