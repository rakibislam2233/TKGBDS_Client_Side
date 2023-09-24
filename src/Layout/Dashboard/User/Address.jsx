import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../Provider/AuthProvider/AuthProvider";
import axios from "axios";
import { HiPencilSquare } from "react-icons/hi2";
const Address = () => {
  const { user } = useContext(UserContext);
  const [myData, setMyData] = useState({});
  useEffect(() => {
    axios(`http://localhost:5000/get-one-user/${user?.email}`)
      .then((res) => {
        console.log(res.data);
        setMyData(res.data);
      })
      .catch((err) => console.error(err));
  }, [user]);
  return (
    <>
    {
     myData.country || myData?.district || myData?.area ? <div className="w-full p-5">
     <div className="flex justify-between items-center">
       <h3 className="text-3xl font-semibold">Address</h3>
       <button className="flex justify-center items-center text-rose-500 "><HiPencilSquare className="w-6 h-6"/>Edit </button>
     </div>
     <div className="w-full p-10 space-y-4">
       <div>
       <h3 className="text-transparent  bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text text-xl font-semibold ">
       Present Address
       </h3>
       <div className="grid grid-cols-1 md:grid-cols-2 py-5 gap-5">
         <div className="space-y-1">
           <h3 className="font-semibold">Your Country</h3>
           <h2>{myData?.country? myData?.country : 'Not Available' }</h2>
         </div>
         <div className="space-y-1">
           <h3 className="font-semibold">District</h3>
           <h2>{myData?.district? myData?.district : 'Not Available' }</h2>
         </div>
         <div className="space-y-1">
           <h2 className="font-semibold">Area</h2>
           <h2>{myData?.area? myData?.area : 'Not Available' }</h2>
         </div>
       </div>
       </div>
       <div>
       <h3 className="text-transparent  bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text text-xl font-semibold ">
       Permanent Address
       </h3>
       <div className="grid grid-cols-1 md:grid-cols-2 py-5 gap-5">
         <div className="space-y-1">
           <h3 className="font-semibold">Your Country</h3>
           <h2>{myData?.country? myData?.country : 'Not Available' }</h2>
         </div>
         <div className="space-y-1">
           <h3 className="font-semibold">District</h3>
           <h2>{myData?.district? myData?.district : 'Not Available' }</h2>
         </div>
         <div className="space-y-1">
           <h2 className="font-semibold">Area</h2>
           <h2>{myData?.area? myData?.area : 'Not Available' }</h2>
         </div>
       </div>
       </div>
     </div>
   </div>   : ''
    }
    </>
    
  );
};

export default Address;
