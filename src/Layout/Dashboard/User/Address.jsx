import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../../Provider/AuthProvider/AuthProvider";
import axios from "axios";
import { HiPencilSquare } from "react-icons/hi2";
import Loading from "../../../Component/Pages/Shared/Loading";
const Address = () => {
  const { user } = useContext(UserContext);
  const [isOpen, setisOpen] = useState(false);
  const [myDataLoading,setMyDataLoading] = useState(true)
  const [myData, setMyData] = useState({});
  const countryRef = useRef();
  const districtRef = useRef();
  const areaRef = useRef();
  const [disable, setDisable] = useState(false);
  useEffect(() => {
    axios(`http://localhost:5000/get-one-user/${user?.email}`)
      .then((res) => {
        setMyDataLoading(false)
        setMyData(res.data);
      })
      .catch((err) => console.error(err));
  }, [user]);

  const handelSubmit = (e) => {
    e.preventDefault();
    const country = countryRef.current?.value;
    const district = districtRef.current?.value;
    const area = areaRef.current?.value;
    const updateInfo = { country, district, area };
    console.log(updateInfo);
  };
  const handleChange = (e) => {
    e.preventDefault();
    const country = countryRef.current?.value;
    const district = districtRef.current?.value;
    const area = areaRef.current?.value;
    if (e.target.value) {
      setDisable(true);
      if (
        country === myData?.country &&
        district === myData?.district &&
        area === myData.area
      ) {
        setDisable(false);
      }
    }
  };
  return (
    <>
    {
      myDataLoading ? <Loading/> :   <div className="w-full p-5">
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-semibold">Address</h3>
        <button
          onClick={() => setisOpen(!isOpen)}
          className="flex justify-center items-center text-rose-500 "
        >
          <HiPencilSquare className="w-6 h-6" />
          Edit{" "}
        </button>
      </div>
      {isOpen ? (
        <div className="w-full p-10 space-y-4">
          <div>
            <h3 className="text-transparent  bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text text-xl font-semibold ">
              Present Address
            </h3>
            <form onSubmit={handelSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 py-5 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="country">Select your Country</label>
                  <select
                    name="country"
                    ref={countryRef}
                    onChange={handleChange}
                    required
                    id="country"
                    className="w-full select bg-gray-200 text-gray-900 "
                  >
                    {myData?.country ? (
                      <option selected value={myData?.country}>
                        {myData?.country}
                      </option>
                    ) : (
                      <option value="">Select Country</option>
                    )}
                    <option value="India">India</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Pakistan">Pakistan</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="country">Select your District</label>
                  <select
                    ref={districtRef}
                    defaultValue={myData?.district}
                    onChange={handleChange}
                    name="district"
                    id="district"
                    required
                    className="w-full select bg-gray-200 text-gray-900 "
                  >
                    <option selected value={myData?.district}>
                      {myData?.district}
                    </option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Mymensingh">Mymensingh</option>
                    <option value="Rajshahi">Rajshahi</option>
                    <option value="Rangpur">Rangpur</option>
                    <option value="Dinajpur">Dinajpur</option>
                    <option value="Gaibandha">Gaibandha</option>
                    <option value="Kurigram">Kurigram</option>
                    <option value="Lalmonirhat">Lalmonirhat</option>
                    <option value="Nilphamari">Nilphamari</option>
                    <option value="Panchagarh">Panchagarh</option>
                    <option value="Moulvibazar">Moulvibazar</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="country">Area</label>
                  <input
                    type="text"
                    ref={areaRef}
                    onChange={handleChange}
                    name="area"
                    required
                    id="area"
                    defaultValue={myData?.area}
                    className="input bg-gray-200 text-gray-900"
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-end py-3 gap-4">
                  <button
                    onClick={() => setisOpen(false)}
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
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="w-full p-10 space-y-4">
          <div>
            <h3 className="text-transparent  bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text text-xl font-semibold ">
              Present Address
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 py-5 gap-5">
              <div className="space-y-1">
                <h3 className="font-semibold">Your Country</h3>
                <h2>{myData?.country ? myData?.country : "Not Available"}</h2>
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold">District</h3>
                <h2>
                  {myData?.district ? myData?.district : "Not Available"}
                </h2>
              </div>
              <div className="space-y-1">
                <h2 className="font-semibold">Area</h2>
                <h2>{myData?.area ? myData?.area : "Not Available"}</h2>
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
                <h2>{myData?.country ? myData?.country : "Not Available"}</h2>
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold">District</h3>
                <h2>
                  {myData?.district ? myData?.district : "Not Available"}
                </h2>
              </div>
              <div className="space-y-1">
                <h2 className="font-semibold">Area</h2>
                <h2>{myData?.area ? myData?.area : "Not Available"}</h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    }
    </>
  );
};

export default Address;
