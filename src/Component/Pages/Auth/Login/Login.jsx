import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { ImSpinner9 } from "react-icons/im";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../../../Provider/AuthProvider/AuthProvider";
import signupImage from "../../../../assets/SignUp/signup.webp";
const Login = () => {
  const [hide, setHide] = useState(false);
  const [btnLoading, setbtnLoading] = useState(false);
  const { login} = useContext(UserContext);
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
    setbtnLoading(true);
    const { email, password } = data;
    login(email, password)
      .then(() => {
        setbtnLoading(false);
        reset();
        naviget(from, { replace: true });
      })
      .catch((err) => {
        setbtnLoading(false);
        toast.error(err.message)
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
        className="w-full h-screen flex justify-center items-center text-gray-700 p-5"
      >
        <div className="w-full max-w-[600px] p-6 rounded-2xl sm:p-10  bg-gray-100 text-gray-900">
          <h2 className="text-3xl font-bold text-center mb-5">
          Login to TKGBDS
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
                  className="input-field"
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
                  className="input-field"
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
                <button className="text-rose-600 hover:underline">
                  Forgot password?
                </button>
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
                  "Login"
                )}
              </button>
            </div>
          </form>
          <h3 className="px-6  text-center">
            {`Don't have an account?`}{" "}
            <Link
              to="/userType"
              className="hover:underline hover:text-rose-500"
            >
              SignUp
            </Link>
            .
          </h3>
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default Login;
