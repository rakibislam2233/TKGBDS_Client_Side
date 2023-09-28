import axios from "axios";
import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../../Provider/AuthProvider/AuthProvider";
const signupImage = "/src/assets/SignUp/signup.webp";

const NormalUserRegister = () => {
  const [btnLoading, setbtnLoading] = useState(false);
  const { createNewUser,} = useContext(UserContext);
  const naviget = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setbtnLoading(true);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_KEY
    }`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const imageUrl = imageData.data.display_url;
        const { name, email, password } = data;
        createNewUser(email, password)
          .then((result) => {
            const user = result.user;
            updateProfile(user, {
              displayName: name,
              photoURL: imageUrl,
            });
            const userInfo = { name, email, imageUrl, password, role: "user" };
            axios
              .put(`https://tkgbds-server-side.vercel.app/donar/${email}`, userInfo)
              .then((data) => {
                if (data) {
                  setbtnLoading(false);
                  reset();
                  naviget("/login");
                }
              })
              .catch((err) => {
                setbtnLoading(false);
               toast.error(err.message)
              });
          })
          .catch((err) => {
            setbtnLoading(false);
            toast.error(err.message)
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
  //           console.log(err.message)
  //         });
  //     })
  //     .catch((err) => {
  //       err.message;
  //       console.log(err.message)
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
        className="w-full h-screen md:h-full  flex justify-center items-center text-gray-700 p-5"
      >
        <div className="flex justify-center items-center my-5 p-5">
          <div className="w-full max-w-[500px] p-6 rounded-2xl sm:p-10 bg-gray-100 text-gray-900">
            <h2 className="text-2xl font-bold text-center py-2">
              আপনার TKGBDS অ্যাকাউন্ট তৈরি করুন
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
              <div className="space-y-4">
                <div className="w-full">
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    {...register("name", { required: true })}
                    className="input-field"
                  />
                  {errors.name && (
                    <span className="text-rose-500">
                      Please enter your name
                    </span>
                  )}
                </div>
                <div className="w-full">
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Enter Your Email"
                    className="input-field"
                  />
                  {errors.email && (
                    <span className="text-rose-500">
                      Please enter your email
                    </span>
                  )}
                </div>
                <div className="w-full">
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="********"
                    className="input-field"
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
                  <label htmlFor="image" className="block mb-2 text-sm">
                    Your Photo:
                  </label>
                  <input
                    type="file"
                    className="input-field"
                    {...register("image", {
                      required: true,
                    })}
                  />
                  <br />
                  {errors.image?.type === "required" && (
                    <span className="text-rose-500">
                      Please enter your photo
                    </span>
                  )}
                </div>
              </div>
              <div className="py-3">
                <button type="submit" className="w-full newBTN">
                  {btnLoading ? (
                    <div className="flex justify-center">
                    <ImSpinner9 className="w-6 h-6 animate-spin"></ImSpinner9>Loading...
                  </div>
                  ) : (
                    "Create Account"
                  )}
                </button>
              </div>
            </form>
            <p className="px-6 text-center text-gray-400">
              Already have an account?{" "}
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
      </div>

      <Toaster />
    </>
  );
};

export default NormalUserRegister;
