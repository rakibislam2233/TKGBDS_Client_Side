import axios from "axios";
import { updateProfile } from "firebase/auth";
import moment from "moment/moment";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../../Provider/AuthProvider/AuthProvider";
import signupImage from "../../../../assets/SignUp/signup.webp";

const DonarSignup = () => {
  const [btnLoading, setbtnLoading] = useState(false);
  const { createNewUser } = useContext(UserContext);
  const naviget = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setbtnLoading(true);
    const userDate = data.date;
    console.log(userDate)
    const  formattedDate = moment(userDate).format("DD MMM YYYY");
    //imagebb website photo Upload
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=9d44eaf618447b8f95c8ff98785d99c3`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const imageUrl = imageData.data.display_url;
        const {
          name,
          email,
          password,
          phoneNumber,
          bloodGroup,
          district,
          area,
        } = data;
        createNewUser(email, password)
          .then((result) => {
            const user = result.user;
            updateProfile(user, {
              displayName: name,
              photoURL: imageUrl,
            });
            const userInfo = {
              name,
              email,
              phoneNumber,
              bloodGroup,
              district,
              area,
              date: formattedDate,
              imageUrl,
              role: "donar",
            };
            axios
              .put(
                `https://tkgbds-server-side-ttxc.vercel.app/donar/${email}`,
                userInfo
              )
              .then((res) => {
                if (res.data) {
                  setbtnLoading(false);
                  reset();
                  naviget("/login");
                }
              })
              .catch((err) => {
                setbtnLoading(false);
                toast.error(err.message);
              });
          })
          .catch((err) => {
            err.message;
            toast.error(err.message);
          });
      });
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
        className="w-full  flex justify-center items-center text-gray-700 p-8"
      >
        <div className="w-full max-w-[600px] p-6 rounded-2xl sm:p-10 bg-gray-100 text-gray-900">
          <h2 className="text-2xl font-bold text-center py-2">
            Create Your TKBDS Account
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            <div className="space-y-4">
              <div className="w-full">
                <label htmlFor="email" className="block mb-2">
                  Name*
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  {...register("name", { required: true })}
                  className={`w-full outline-none border ${
                    errors.name
                      ? "focus:border-rose-500"
                      : "focus:border-green-500"
                  }  py-2 px-3 bg-gray-200 text-gray-900 rounded `}
                />
                {errors.name && (
                  <span className="text-rose-500">Please enter your name</span>
                )}
              </div>
              <div className="w-full">
                <label htmlFor="email" className="block mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Enter Your Email"
                  className={`w-full outline-none border ${
                    errors.name
                      ? "focus:border-rose-500"
                      : "focus:border-green-500"
                  }  py-2 px-3 bg-gray-200 text-gray-900 rounded `}
                />
                {errors.email && (
                  <span className="text-rose-500">Please enter your email</span>
                )}
              </div>
              <div className="w-full">
                <label htmlFor="email" className="block mb-2">
                  Password*
                </label>
                <input
                  type="password"
                  placeholder="********"
                  className={`w-full outline-none border ${
                    errors.password?.type === "required" ||
                    errors.password?.type === "minLength" ||
                    errors.password?.type === "maxLength"
                      ? "focus:border-rose-500"
                      : "focus:border-green-500"
                  }  py-2 px-3 bg-gray-200 text-gray-900 rounded `}
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 15,
                  })}
                />
                {errors.password?.type === "required" && (
                  <span className="text-rose-500">
                    Please enter your password
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-rose-500">
                    Password must be 6 characters
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-rose-500">
                    Password must be less then 15 characters
                  </span>
                )}
              </div>
              <div className="w-full">
                <label htmlFor="phoneNumber" className="block mb-2">
                  Phone Number*
                </label>
                <input
                  type="number"
                  placeholder="+880********"
                  className={`w-full outline-none border ${errors.phoneNumber ?'focus:border-rose-500': 'focus:border-green-500'}  py-2 px-3 bg-gray-200 text-gray-900 rounded `}
                  {...register("phoneNumber", {
                    required: true,
                    minLength: 6,
                    maxLength: 15,
                  })}
                />
                {errors.phoneNumber&& (
                  <span className="text-rose-500">
                    Please enter your password
                  </span>
                )}
              </div>
              <div className="w-full">
                <label htmlFor="phoneNumber" className="block mb-2">
                  Blood Group*
                </label>
                <select
                  name="bloodGroup"
                  className={`w-full outline-none border ${errors.bloodGroup? 'focus:border-rose-500': 'focus:border-green-500'}  py-2 px-3 bg-gray-200 text-gray-900 rounded `}
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
                {errors.bloodGroup&& (
                  <span className="text-rose-500">
                    Please enter your Blood Group
                  </span>
                )}
              </div>
              <div className="w-full">
                <label htmlFor="phoneNumber" className="block mb-2">
                  District*
                </label>

                <select
                  name="district"
                  className={`w-full outline-none border ${errors.district? 'focus:border-rose-500': 'focus:border-green-500'}  py-2 px-3 bg-gray-200 text-gray-900 rounded `}
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
                {errors.district&& (
                  <span className="text-rose-500">
                    Please enter your District
                  </span>
                )}
              </div>
              <div className="w-full">
                <label htmlFor="phoneNumber" className="block mb-2">
                  Area*
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Area"
                  className={`w-full outline-none border ${errors.area? 'focus:border-rose-500': 'focus:border-green-500'}  py-2 px-3 bg-gray-200 text-gray-900 rounded `}
                  {...register("area", {
                    required: true,
                  })}
                />
                {errors.area&& (
                  <span className="text-rose-500">Please enter your Area</span>
                )}
              </div>
              <div  className="w-full">
                <label htmlFor="phoneNumber" className="block mb-2">
                  Last Donation Date
                </label>
                <input
                  type="date"
                  placeholder="Enter Your Area"
                  className={`w-full outline-none border ${errors.date? 'focus:border-rose-500': 'focus:border-green-500'}  py-2 px-3 bg-gray-200 text-gray-900 rounded `}
                  {...register("date")}
                />
              </div>
              <div className="w-full">
                <label htmlFor="image" className="block mb-2">
                  Your Photo:
                </label>
                <input
                  type="file"
                  className={`w-full outline-none border ${errors.image? 'focus:border-rose-500': 'focus:border-green-500'}  py-2 px-3 bg-gray-200 text-gray-900 rounded `}
                  {...register("image",{
                    required:true
                  })}
                />
                {errors.image&& (
                  <span className="text-rose-500">Please enter your photo</span>
                )}
              </div>
            </div>
            <div className="py-3">
              <button type="submit" className="w-full newBTN">
                {btnLoading ? (
                  <div className="flex justify-center">
                    <ImSpinner9 className="w-6 h-6 animate-spin"></ImSpinner9>
                    Loading...
                  </div>
                ) : (
                  "Create Account"
                )}
              </button>
            </div>
          </form>
          <p className="px-6 text-center text-gray-400">
            Already have an account?
            <Link
              to="/login"
              className="hover:underline hover:text-rose-500 text-gray-600"
            >
              Login
            </Link>
            .
          </p>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default DonarSignup;
