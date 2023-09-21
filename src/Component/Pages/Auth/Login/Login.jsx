import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { UserContext } from "../../../../Provider/AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
const signupImage = "/src/assets/SignUp/signup.webp";
const Login = () => {
  const [hide, setHide] = useState(false);
  const [btnLoading,setbtnLoading] = useState(false);
  const { login, googleLogin, loading } = useContext(UserContext);
  const location = useLocation();
  const naviget = useNavigate();
  const from = location?.state?.from.pathname || "/";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setbtnLoading(true)
    const { email, password } = data;
    login(email, password)
      .then((result) => {
        const user = result.user;
        setbtnLoading(false)
        reset();
        naviget(from, { replace: true });
      })
      .catch((err) => {
        setbtnLoading(false)
        toast.error(err.message,{
          position:'top-right'
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
  //           naviget(from, { replace: true });
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
        className="w-full h-screen flex justify-center items-center text-gray-700 p-5"
      >
        <div className="w-full max-w-[500px] p-6 rounded-2xl sm:p-10 bg-gray-100 text-gray-900">
          <h2 className="text-2xl font-bold text-center py-2">
            TKGBDS এ লগইন করুন
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  {...register("email", { required: true })}
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                />
                {errors.email && (
                  <span className="text-rose-500">Please enter your email</span>
                )}
              </div>
              <div className="relative">
                <label htmlFor="password" className="block mb-2 text-sm">
                  Password
                </label>
                <input
                  type={`${hide ? "text" : "password"}`}
                  placeholder="********"
                  {...register("password", { required: true })}
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                />
                <div
                  onClick={() => setHide(!hide)}
                  className="absolute top-10 right-3 cursor-pointer text-gray-500"
                >
                  {hide ? (
                    <AiFillEye></AiFillEye>
                  ) : (
                    <AiFillEyeInvisible></AiFillEyeInvisible>
                  )}
                </div>
                {errors.password && (
                  <span className="text-rose-500">
                    Please enter your password
                  </span>
                )}
              </div>
            </div>
            <div className="flex justify-between py-2">
              <div className="flex items-center gap-2">
                <input type="checkbox" name="" id="" />
                <label htmlFor="email" className="">
                  Remember me
                </label>
              </div>
              <div>
                <button className="text-blue-600 hover:underline">
                  Forgot password?
                </button>
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
                  "Login"
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
          <h3 className="px-6  text-center  text-gray-400">
            {`Don't have an account?`}  <Link
              to="/userType"
              className="hover:underline hover:text-rose-500 text-gray-600"
            >
              SignUp
            </Link>
            .
          </h3>
        </div>
      <Toaster/>
      </div>
    </>
  );
};

export default Login;
