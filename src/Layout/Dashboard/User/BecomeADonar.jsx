import axios from "axios";
import moment from "moment";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import signupImage from "../../../assets/SignUp/signup.webp";
import useUser from "../../../hook/UseUser";
const BecomeADonar = () => {
  const [isLoading, setIsloading] = useState(false);
  const [user] = useUser();
  const naviget = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setIsloading(true);
    const formattedDate = moment(data?.date).format("DD MMM YYYY");
    const { name, phoneNumber, district, area, bloodGroup } = data;
    const becomeDonar = {
      name,
      phoneNumber,
      district,
      area,
      bloodGroup,
      date: formattedDate,
      role: "donar",
    };
    axios
      .put(`https://tkgbds-server-side.vercel.app/donar/${user?.email}`, becomeDonar)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Donar has been update successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          setIsloading(false);
          naviget("/");
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${signupImage})`,
          backgroundPosition: "top center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "multiply",
        }}
        className="w-full  flex justify-center items-center text-gray-700 p-5"
      >
        <div className="w-full max-w-[500px] p-6 rounded-2xl sm:p-10 bg-gray-100 text-gray-900">
          <h2 className="text-2xl font-bold text-center py-2">
            ডোনার হয়ে উঠুন
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            <div className="space-y-4">
              <div className="w-full">
                <label htmlFor="email" className="block mb-2 text-sm">
                  Name*
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  {...register("name", { required: true })}
                  className="w-full input bg-gray-200 text-gray-900"
                />
                {errors.name && (
                  <span className="text-rose-500">Please enter your name</span>
                )}
              </div>
              <div className="w-full">
                <label htmlFor="phoneNumber" className="block mb-2 text-sm">
                  Phone Number*
                </label>
                <input
                  type="number"
                  placeholder="+880********"
                  className="w-full input bg-gray-200 text-gray-900"
                  {...register("phoneNumber", {
                    required: true,
                    minLength: 6,
                    maxLength: 15,
                  })}
                />
                {errors.phoneNumber?.type === "required" && (
                  <span className="text-rose-500">
                    Please enter your password
                  </span>
                )}
              </div>
              <div className="w-full">
                <label htmlFor="phoneNumber" className="block mb-2 text-sm">
                  Blood Group*
                </label>
                <select
                  name="bloodGroup"
                  className="w-full  select border-gray-300  bg-gray-200 text-gray-900"
                  {...register("bloodGroup", {
                    required: true,
                  })}
                >
                  <option value="">Your Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                </select>
                <br />
                {errors.bloodGroup?.type === "required" && (
                  <span className="text-rose-500">
                    Please enter your Blood Group
                  </span>
                )}
              </div>
              <div className="w-full">
                <label htmlFor="phoneNumber" className="block mb-2 text-sm">
                  District*
                </label>

                <select
                  name="district"
                  className="select w-full bg-gray-200 text-gray-900"
                  {...register("district", {
                    required: true,
                  })}
                >
                  <option value="">Selected District</option>
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
                <br />
                {errors.district?.type === "required" && (
                  <span className="text-rose-500">
                    Please enter your District
                  </span>
                )}
              </div>
              <div className="w-full">
                <label htmlFor="phoneNumber" className="block mb-2 text-sm">
                  Area*
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Area"
                  className="w-full input bg-gray-200 text-gray-900"
                  {...register("area", {
                    required: true,
                  })}
                />
                {errors.area?.type === "required" && (
                  <span className="text-rose-500">Please enter your Area</span>
                )}
              </div>
              <div className="w-full">
                <label htmlFor="phoneNumber" className="block mb-2 text-sm">
                  Last Donation Date
                </label>
                <input
                  type="date"
                  placeholder="Enter Your Area"
                  className="w-full input bg-gray-200 text-gray-900"
                  {...register("date", {
                    required: true,
                  })}
                />
                {errors.date?.type === "required" && (
                  <span className="text-rose-500">
                    Please enter Last Donation Date
                  </span>
                )}
              </div>
            </div>
            <div className="py-3">
            <button type="submit" className="w-full newBTN">
                {isLoading ? (
                  <div className="flex justify-center">
                  <ImSpinner9 className="w-6 h-6 animate-spin"></ImSpinner9>Loading...
                </div>
                ) : (
                  "Continue"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default BecomeADonar;
