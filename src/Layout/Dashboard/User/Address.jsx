import axios from "axios";
import { useRef, useState } from "react";
import { HiPencilSquare } from "react-icons/hi2";
import Swal from "sweetalert2";
import Loading from "../../../Component/Pages/Shared/Loading";
import useUser from "../../../hook/UseUser";
import useSingleDonar from "../../../hook/useSingleDonar";
const Address = () => {
  const [user] = useUser()
  const [isOpen, setIsOpen] = useState(false);
  const [singelDonar,isLoading,refetch] = useSingleDonar()
  const countryRef = useRef();
  const districtRef = useRef();
  const areaRef = useRef();
  const [disable, setDisable] = useState(false);
  const handelSubmit = (e) => {
    e.preventDefault();
    const country = countryRef.current?.value;
    const district = districtRef.current?.value;
    const area = areaRef.current?.value;
    const updateInfo = { country, district, area };
    axios
      .put(`https://tkgbds-server-side.up.railway.app/donar/${user?.email}`, updateInfo)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Information updated successfully',
            showConfirmButton: false,
            timer: 1500
          })
          refetch()
          setIsOpen(false);
        }
      })
      .catch((err) => console.log(err.message));
  };
  const handleChange = (e) => {
    e.preventDefault();
    const country = countryRef.current?.value;
    const district = districtRef.current?.value;
    const area = areaRef.current?.value;
    if (e.target.value) {
      setDisable(true);
      if (
        country === singelDonar?.country &&
        district === singelDonar?.district &&
        area === singelDonar.area
      ) {
        setDisable(false);
      }
    }
  };
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="w-full p-5">
          <div className="flex justify-between items-center">
            <h3 className="text-3xl font-semibold">Address</h3>
            <button
              onClick={() => setIsOpen(!isOpen)}
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
                        <option value="">Select Country</option>
                        {singelDonar?.country ? (
                          <option selected value={singelDonar?.country}>
                            {singelDonar?.country}
                          </option>
                        ) : (
                          ""
                        )}
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="India">India</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Pakistan">Pakistan</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="country">Select your District</label>
                      <select
                        ref={districtRef}
                        defaultValue={singelDonar?.district}
                        onChange={handleChange}
                        name="district"
                        id="district"
                        required
                        className="w-full select bg-gray-200 text-gray-900 "
                      >
                        <option value="">Select District</option>
                        <option  value={singelDonar?.district}>
                          {singelDonar?.district}
                        </option>
                        <option value="Thakurgaon">Thakurgaon</option>
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
                        defaultValue={singelDonar?.area}
                        className="input bg-gray-200 text-gray-900"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-end py-3 gap-4">
                      <button
                        onClick={() => setIsOpen(false)}
                        className="newBTN"
                      >
                        Cancle
                      </button>
                      {disable ? (
                        <button
                        className="newBTN"
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
                    <h2>
                      {singelDonar?.country ? singelDonar?.country : "Not Available"}
                    </h2>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold">District</h3>
                    <h2>
                      {singelDonar?.district ? singelDonar?.district : "Not Available"}
                    </h2>
                  </div>
                  <div className="space-y-1">
                    <h2 className="font-semibold">Area</h2>
                    <h2>{singelDonar?.area ? singelDonar?.area : "Not Available"}</h2>
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
                    <h2>
                      {singelDonar?.country ? singelDonar?.country : "Not Available"}
                    </h2>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold">District</h3>
                    <h2>
                      {singelDonar?.district ? singelDonar?.district : "Not Available"}
                    </h2>
                  </div>
                  <div className="space-y-1">
                    <h2 className="font-semibold">Area</h2>
                    <h2>{singelDonar?.area ? singelDonar?.area : "Not Available"}</h2>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Address;
