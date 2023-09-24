import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../Provider/AuthProvider/AuthProvider";
import { HiPencilSquare } from "react-icons/hi2";
const MyProfile = () => {
  const { user } = useContext(UserContext);
  const [myData, setMyData] = useState({});
  const [disable,setDisable] = useState(true)
  useEffect(() => {
    axios(`http://localhost:5000/get-one-user/${user?.email}`)
      .then((res) => {
        console.log(res.data);
        setMyData(res.data);
      })
      .catch((err) => console.error(err));
  }, [user]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const phoneNumber = form.phoneNumber.value;
    const bloodGroup = form.bloodGroup.value;
    const updateInfo = {fullName, email, phoneNumber,bloodGroup};
    
  };


  return (
    <div className="w-full p-5">
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-semibold">My Profile</h3>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-center items-center text-rose-500 "
        >
          <HiPencilSquare className="w-6 h-6" />
          Edit{" "}
        </button>
        {/* <Modal isOpen={isOpen} setIsOpen={setIsOpen}/> */}
      </div>
      <div className="hidden">
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-5 p-10">
          <div className="col-span-3 space-y-5">
            <img
              className="w-32 h-32 rounded-full"
              src={myData?.imageUrl}
              alt=""
            />
            {myData.status !== "donar" && (
              <button className="py-2  px-5 bg-gradient-to-r from-rose-600 to-pink-500 rounded text-white flex items-center gap-1">
                Become a Donar
              </button>
            )}
          </div>
          <div className="col-span-9 space-y-3">
            <div>
              <h3 className="text-xl font-semibold">Full Name</h3>
              <h2>{myData?.name}</h2>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Email</h3>
              <h2>{myData?.email}</h2>
            </div>
            {myData.phoneNumber && (
              <div>
                <h3 className="text-xl font-semibold">Phone Number</h3>
                <h2>{myData?.phoneNumber}</h2>
              </div>
            )}
            {myData.bloodGroup && (
              <div>
                <h3 className="text-xl font-semibold">Blood Group</h3>
                <h2>{myData.bloodGroup}</h2>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-5 p-10">
        <div className="col-span-3 space-y-5">
          <img
            className="w-32 h-32 rounded-full"
            src={myData?.imageUrl}
            alt=""
          />
          <input type="file" name="" id="" />
        </div>
        <div className="col-span-9">
          <form onSubmit={handleSubmit} className="space-y-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                defaultValue={myData.name}
                className="w-full input bg-gray-200 text-gray-900"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                defaultValue={myData?.email}
                readOnly
                name="email"
                id="email"
                className="w-full input bg-gray-200 text-gray-900"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="number"
                defaultValue={myData?.phoneNumber}
                name="phoneNumber"
                id="phoneNumber"
                className="w-full input bg-gray-200 text-gray-900"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="bloodGroup">Blood Group</label>
              <input
                type="text"
                defaultValue={myData?.bloodGroup}
                name="bloodGroup"
                id="bloodGroup"
                className="w-full input bg-gray-200 text-gray-900"
              />
            </div>
            <div  className="flex justify-end py-3">
            <button disabled className={` disabled  py-2 px-5 bg-gradient-to-r from-rose-600 to-pink-500 rounded-full text-white`}>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
