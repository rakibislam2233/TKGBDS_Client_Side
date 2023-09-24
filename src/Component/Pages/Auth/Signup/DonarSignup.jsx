import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ImSpinner9 } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
const signupImage = "/src/assets/SignUp/signup.webp";
import { UserContext } from "../../../../Provider/AuthProvider/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const DonarSignup = () => {
  const [btnLoading, setbtnLoading] = useState(false);
  const { createNewUser, googleLogin, loading } = useContext(UserContext);
  const naviget = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setbtnLoading(true);
    //imagebb website photo Upload
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_KEY
    }`;
    console.log(url);
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
          date,
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
              password,
              phoneNumber,
              bloodGroup,
              district,
              area,
              date,
              imageUrl,
              status: "donar",
            };
            console.log(userInfo);
            axios
              .put(`http://localhost:5000/donar/${email}`, userInfo)
              .then((data) => {
                  setbtnLoading(false);
                  reset();
                  naviget("/login");
              })
              .catch((err) => {
                setbtnLoading(false)
                toast.error(err.message);
              });
          })
          .catch((err) => {
            err.message;
            toast.error(err.message);
          });
      });
  };
  // const LoginWithGoogle = () => {
  //   googleLogin()
  //     .then((result) => {
  //       const user = result.user;
  //       const userInfo = {
  //         name: user.displayName,
  //         email: user?.email,
  //         imageUrl: user.photoURL,
  //       };
  //       fetch(`https://musicy-server-side.vercel.app/users/${user?.email}`, {
  //         method: "PUT",
  //         headers: {
  //           "content-type": "application/json",
  //         },
  //         body: JSON.stringify(userInfo),
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           Swal.fire({
  //             position: "center",
  //             icon: "success",
  //             title: "Login Successfully",
  //             showConfirmButton: false,
  //             timer: 1500,
  //           });
  //           reset();
  //           naviget("/");
  //         })
  //         .catch((err) => {
  //           toast.error(err.message);
  //         });
  //     })
  //     .catch((err) => {
  //       err.message;
  //       toast.error(err.message);
  //     });
  // };
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
            আপনার TKGBDS অ্যাকাউন্ট তৈরি করুন
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
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email*
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Enter Your Email"
                  className="w-full input bg-gray-200 text-gray-900"
                />
                {errors.email && (
                  <span className="text-rose-500">Please enter your email</span>
                )}
              </div>
              <div className="w-full">
                <label htmlFor="email" className="block mb-2 text-sm">
                  Password*
                </label>
                <input
                  type="password"
                  placeholder="********"
                  className="w-full input bg-gray-200 text-gray-900"
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
                  <option  value="">Your Blood Group</option>
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
                  {...register("date",{
                    required: true,
                  })}
                />
                 {errors.date?.type === "required" && (
                  <span className="text-rose-500">Please enter Last Donation Date</span>
                )}
              </div>
              <div className="w-full">
                <label htmlFor="image" className="block mb-2 text-sm">
                  Your Photo:
                </label>
                <input
                  type="file"
                  className="w-full input bg-gray-200 text-gray-900"
                  {...register("image")}
                />
              </div>
            </div>
            <div className="py-3">
              <button
                type="submit"
                className="w-full py-2  px-10 cursor-pointer bg-gradient-to-r from-rose-600 to-pink-500 rounded-full text-white"
              >
                {btnLoading ? (
                  <div className="flex justify-center">
                    <ImSpinner9 className="w-6 h-6 animate-spin"></ImSpinner9>
                  </div>
                ) : (
                  "Create Account"
                )}
              </button>
            </div>
          </form>
          {/* <div className="flex items-center py-2">
            <div className="w-full h-[1px]  bg-gray-500"></div>
            <div className="mx-3">Or</div>
            <div className="w-full h-[1px] bg-gray-500"></div>
          </div>
          <div
            onClick={LoginWithGoogle}
            className="flex justify-center items-center space-x-2 border m-3 p-2  border-gray-500 cursor-pointer"
          >
            <FcGoogle size={32} />

            <p>Continue with Google</p>
          </div> */}
          <p className="px-6 text-center text-gray-400">
            Already have an account? <Link
              to="/login"
              className="hover:underline hover:text-rose-500 text-gray-600"
            >
              Login
            </Link>
            .
          </p>
        </div>
      </div>
      <Toaster/>
    </>
  );
};

export default DonarSignup;
