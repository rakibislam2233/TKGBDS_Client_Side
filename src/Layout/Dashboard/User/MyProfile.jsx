import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../../Provider/AuthProvider/AuthProvider";
import { HiPencilSquare } from "react-icons/hi2";
import Loading from "../../../Component/Pages/Shared/Loading";
const MyProfile = () => {
  const { user } = useContext(UserContext);
  const [myData, setMyData] = useState({});
  const [myDataLoading,setMyDataLoading] = useState(true)
  const fullNameRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();
  const bloodGroupRef = useRef();
  const [disable, setDisable] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  useEffect(() => {
    axios(`http://localhost:5000/get-one-user/${user?.email}`)
      .then((res) => {
        setMyDataLoading(false)
        setMyData(res.data);
      })
      .catch((err) => console.error(err));
  }, [user]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const fullName = fullNameRef.current?.value;
    const email = emailRef.current?.value;
    const phoneNumber = phoneNumberRef.current?.value;
    const bloodGroup = bloodGroupRef.current?.value;
    const updateInfo = { fullName, email, phoneNumber, bloodGroup };
    console.log(updateInfo)
  };
  const handleChange = (e) => {
    e.preventDefault();
    const fullName = fullNameRef.current?.value;
    const email = emailRef.current?.value;
    const phoneNumber = phoneNumberRef.current?.value;
    const bloodGroup = bloodGroupRef.current?.value;
    if (e.target.value) {
      setDisable(true);
      if(fullName === myData.name && email === myData.email && phoneNumber === myData.phoneNumber && bloodGroup === myData.bloodGroup){
        setDisable(false);
      }
    }

  };
  return (
    <>
    {
      myDataLoading? <Loading/> : <div className="w-full p-5">
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-semibold">My Profile</h3>
        <button
          onClick={() => setisOpen(!isOpen)}
          className="flex justify-center items-center text-rose-500 "
        >
          <HiPencilSquare className="w-6 h-6" />
          Edit{" "}
        </button>
      </div>
      {isOpen ? (
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-5 p-10">
          <div className="col-span-12 md:col-span-3 space-y-5">
            <img
              className="w-32 h-32 mx-auto rounded-full"
              src={myData?.imageUrl}
              alt=""
            />
            <input type="file" name="" id="" />
          </div>
          <div className="col-span-12 md:col-span-9">
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="fullName">Full Name</label>
                <input
                  ref={fullNameRef}
                  type="text"
                  name="fullName"
                  onChange={handleChange}
                  id="fullName"
                  defaultValue={myData.name}
                  required
                  className="w-full input bg-gray-200 text-gray-900"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  ref={emailRef}
                  defaultValue={myData?.email}
                  readOnly
                  name="email"
                  id="email"
                  className="w-full input bg-gray-200 text-gray-900"
                />
              </div>
              {myData?.status === "donar" && <> <div className="flex flex-col gap-2">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="number"
                  ref={phoneNumberRef}
                  defaultValue={myData?.phoneNumber}
                  onChange={handleChange}
                  name="phoneNumber"
                  id="phoneNumber"
                  required
                  className="w-full input bg-gray-200 text-gray-900"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="bloodGroup">Blood Group</label>
                <input
                  type="text"
                  ref={bloodGroupRef}
                  defaultValue={myData?.bloodGroup}
                  onChange={handleChange}
                  name="bloodGroup"
                  id="bloodGroup"
                  required
                  className="w-full input bg-gray-200 text-gray-900"
                />
              </div>
              </>
              }
             
              <div className="flex justify-end py-3 gap-4">
              <button
              onClick={()=>setisOpen(false)}
                    className={`py-2 px-5 bg-gradient-to-r from-rose-600 to-pink-500 rounded-full text-white`}
                  >
                    Cancle
                  </button>
                {disable ? (
                  <button
                    className={`py-2 px-5 bg-gradient-to-r from-rose-600 to-pink-500 rounded-full text-white`}
                  >
                    Update
                  </button>
                ) : (
                  <button
                    disabled
                    className={`py-2 px-5 bg-gray-500 rounded-full text-white`}
                  >
                    Update
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-5 p-10">
          <div className="col-span-12 md:col-span-3 space-y-5">
            <img
              className="w-32 h-32 mx-auto rounded-full"
              src={myData?.imageUrl}
              alt=""
            />
            {myData.status !== "donar" && (
              <div className="flex justify-center items-center">
                <button className="py-2  px-5 bg-gradient-to-r from-rose-600 to-pink-500 rounded-full text-white  gap-1">
                Become a Donar
              </button>
              </div>
            )}
          </div>
          <div className="col-span-12 md:col-span-9 space-y-3">
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
      )}
    </div>
    }
    
    </>
  );
};

export default MyProfile;
