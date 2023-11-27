import axios from "axios";
import moment from "moment";
import { useRef, useState } from "react";
import { HiPencilSquare } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../../../Component/Pages/Shared/Loading";
import useUser from "../../../hook/UseUser";
import useSingleDonar from "../../../hook/useSingleDonar";
import { Helmet } from "react-helmet-async";
const MyProfile = () => {
  const [user] = useUser();
  const [singelDonar, isLoading, refetch] = useSingleDonar();
  const fullNameRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();
  const bloodGroupRef = useRef();
  const dateRef = useRef();
  const [disable, setDisable] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  console.log(singelDonar?.date);
  const handleSubmit = (e) => {
    e.preventDefault();
    const fullName = fullNameRef.current?.value;
    const email = emailRef.current?.value;
    const phoneNumber = phoneNumberRef.current?.value;
    const bloodGroup = bloodGroupRef.current?.value;
    const date = dateRef.current?.value;
    const formattedDate = moment(date).format("DD MMM YYYY");
    const updateInfo = {
      name: fullName,
      email,
      phoneNumber,
      bloodGroup,
      date: formattedDate,
    };
    axios
      .put(
        `https://tkgbds-server-side.up.railway.app/donar/${user?.email}`,
        updateInfo
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          console.log(res.data);
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Information updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
          setIsOpen(false);
        }
      })
      .catch((err) => console.log(err.message));
  };
  const handleChange = (e) => {
    e.preventDefault();
    const fullName = fullNameRef.current?.value;
    const email = emailRef.current?.value;
    const phoneNumber = phoneNumberRef.current?.value;
    const bloodGroup = bloodGroupRef.current?.value;
    const date = dateRef.current?.value;

    if (e.target.value) {
      setDisable(true);
      if (
        fullName === singelDonar?.name &&
        email === singelDonar?.email &&
        phoneNumber === singelDonar.phoneNumber &&
        bloodGroup === singelDonar.bloodGroup &&
        date === moment(singelDonar?.date).format("YYYY-MM-DD")
      ) {
        console.log("object");
        setDisable(false);
      }
    }
  };
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Helmet>
            <title>My Profile | TKGBDS </title>
          </Helmet>
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
            </div>
            {isOpen ? (
              <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-5 p-10">
                <div className="col-span-12 md:col-span-3 space-y-5">
                  <img
                    className="w-32 h-32 mx-auto rounded-full"
                    src={singelDonar?.imageUrl}
                    alt=""
                  />
                  {singelDonar.role !== "donar" && (
                    <div className="flex justify-center items-center">
                      <Link to={"/become-a-donar"}>
                        <button className="py-2  px-5 bg-gradient-to-r from-rose-600 to-pink-500 rounded-full text-white  gap-1">
                          Become a Donar
                        </button>
                      </Link>
                    </div>
                  )}
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
                        defaultValue={singelDonar.name}
                        required
                        className="w-full input bg-gray-200 text-gray-900"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        ref={emailRef}
                        defaultValue={singelDonar?.email}
                        readOnly
                        name="email"
                        id="email"
                        className="w-full input bg-gray-200 text-gray-900"
                      />
                    </div>
                    {singelDonar?.role === "donar" && (
                      <>
                        {" "}
                        <div className="flex flex-col gap-2">
                          <label htmlFor="phoneNumber">Phone Number</label>
                          <input
                            type="number"
                            ref={phoneNumberRef}
                            defaultValue={singelDonar?.phoneNumber}
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
                            defaultValue={singelDonar?.bloodGroup}
                            onChange={handleChange}
                            name="bloodGroup"
                            id="bloodGroup"
                            required
                            className="w-full input bg-gray-200 text-gray-900"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label htmlFor="date">Last Donation Date</label>
                          <input
                            type="date"
                            ref={dateRef}
                            defaultValue={moment(singelDonar?.date).format(
                              "YYYY-MM-DD"
                            )}
                            onChange={handleChange}
                            name="date"
                            required
                            id="date"
                            className="w-full input bg-gray-200 text-gray-900"
                          />
                        </div>
                      </>
                    )}

                    <div className="flex justify-end py-3 gap-4">
                      <button
                        onClick={() => setIsOpen(false)}
                        className={`newBTN`}
                      >
                        Cancle
                      </button>
                      {disable ? (
                        <button className="newBTN">Update</button>
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
                    src={singelDonar?.imageUrl}
                    alt=""
                  />
                  {singelDonar.role !== "donar" && (
                    <div className="flex justify-center items-center">
                      <Link to={"/become-a-donar"}>
                        <button className="py-2  px-5 bg-gradient-to-r from-rose-600 to-pink-500 rounded-full text-white  gap-1">
                          Become a Donar
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
                <div className="col-span-12 md:col-span-9 space-y-3">
                  <div>
                    <h3 className="text-xl font-semibold">Full Name</h3>
                    <h2>{singelDonar?.name}</h2>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Email</h3>
                    <h2>{singelDonar?.email}</h2>
                  </div>
                  {singelDonar.phoneNumber && (
                    <div>
                      <h3 className="text-xl font-semibold">Phone Number</h3>
                      <h2>{singelDonar?.phoneNumber}</h2>
                    </div>
                  )}
                  {singelDonar.bloodGroup && (
                    <div>
                      <h3 className="text-xl font-semibold">Blood Group</h3>
                      <h2>{singelDonar.bloodGroup}</h2>
                    </div>
                  )}
                  {singelDonar.date && (
                    <div>
                      <h3 className="text-xl font-semibold">
                        Last Donation Date
                      </h3>
                      <h2>{singelDonar?.date}</h2>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default MyProfile;
