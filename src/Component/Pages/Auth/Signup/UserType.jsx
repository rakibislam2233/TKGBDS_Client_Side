import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const signupImage = "/src/assets/SignUp/signup.webp";
const normalUser = "/src//assets/SignUp/add-group.png";
const donar = "/src//assets/SignUp/donor.png";

const UserType = () => {
    const [type,setType] = useState('');
    const naviget = useNavigate()
    useEffect(()=>{
        if(type === "donar"){
            naviget('/bloodDonar-register')
        }else if(type === "normalUser"){
            naviget('/normalUser-register')
        }
    },[type])
  return (
    <div
      style={{
        backgroundImage: `url(${signupImage})`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "multiply",
      }}
      className="w-full h-screen flex justify-center items-center text-gray-700 p-5"
    >
      <div className="w-full md:w-1/2 mx-auto bg-slate-200 py-10 px-5 rounded">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
           <div className="space-y-5">
            <h3 className="font-semibold">
            একজন সাধারণ ব্যবহারকারী হিসেবে <br /> অ্যাকাউন্ট তৈরি করুন
            </h3>
            <div className="bg-rose-700 p-5 flex items-center gap-5 rounded-xl transition-all duration-300">
              <img className="w-24 h-24" src={normalUser} alt="" />
              <button onClick={()=>setType("normalUser")} className=" w-full h-8 flex justify-center items-center bg-slate-300 shadow-xl hover:bg-rose-800 hover:text-white transition-all duration-300 font-semibold">Click Here</button>
            </div>
          </div>
          <div className="space-y-5">
            <h3 className="font-semibold">
              একজন রক্তদাতা হিসেবে <br /> অ্যাকাউন্ট তৈরি করুন
            </h3>
            <div className="bg-rose-700 p-5 flex items-center gap-5 rounded-xl transition-all duration-300">
              <img className="w-24 h-24" src={donar} alt="" />
              <button onClick={()=>setType("donar")} className=" w-full h-8 flex justify-center items-center bg-slate-300 shadow-xl hover:bg-rose-800 hover:text-white transition-all duration-300 font-semibold">Click Here</button>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default UserType;
