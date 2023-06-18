import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BiArrowFromLeft } from "react-icons/bi";
import { UserContext } from "../../../../Provider/AuthProvider/AuthProvider";
const MenuDropdown = () => {
    const [open,setOpen] = useState(false)
    const {user,logOut} = useContext(UserContext)
  return (
    <>
      <div className={`flex gap-3 items-center ${user && 'hidden'}`}>
        <Link to='/signup'>
          <button className="py-2 px-5 font-semibold text-white bg-rose-500">
            Register
          </button>
        </Link>
        <Link to='/login'>
          <button className="py-2 px-5 font-semibold text-white bg-rose-500">
            Login
          </button>
        </Link>
      </div>
    {
        user &&   <div className="relative">
        <div onClick={()=>setOpen(!open)} className="">
          {
            user?.displayName?  <img
            className="w-12 h-12 rounded-full cursor-pointer"
            src={user?.photoURL}
            alt=""
          /> :  <img
            className="w-10 h-10 rounded-full cursor-pointer"
            src="https://i.postimg.cc/fRx8FkZb/user-profile-icon-free-vector-fotor-2023061719853.png"
            alt=""
          />
          }
       
        </div>
      {
        open &&   <div className="absolute top-16 right-0 rounded-xl bg-slate-300 w-52 py-2 p-2">
        <ul className="flex flex-col gap-2">
            {/* TODO:user name show */}
          <h2 className="px-2">{user?.displayName}</h2>
          <hr className="border" />
          <li className="hover:bg-gray-400 hover:text-rose-600 duration-500 p-2">
            <Link>View Profile</Link>
          </li>
          <li onClick={()=>logOut()} className="hover:bg-gray-400 hover:text-rose-600 p-2 duration-500 cursor-pointer" >
             Logout
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
