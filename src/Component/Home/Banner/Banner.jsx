import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const Banner = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
      navigate("/find-donar", { state: { query: data } });
  };

  return (
    <div
      className={` w-full h-screen bg-[url('https://i.postimg.cc/8PGktvXW/Red-Blood.jpg')] bg-no-repeat  bg-center  bg-cover flex justify-center items-center `}
    >
      <div className="p-5">
        <h1 className="text-5xl font-semibold text-white py-5 text-center">
          Search Blood Donar
        </h1>
        <form
          className="border px-5 py-8 rounded-xl bg-rose-600"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid grid-cols-1 md:grid-cols-4  gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-white font-semibold" htmlFor="blood">
                Blood Group
              </label>
              <select
                id="blood"
                className="w-full select bg-white text-gray-900 select-bordered "
                {...register("bloodGroup")}
              >
                <option value="">Selected Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
              </select>
            </div>
            <div className=" flex flex-col gap-2">
              <label className="text-white font-semibold" htmlFor="district">
                District
              </label>
              <select
                id="district"
                className="w-full select select-bordered bg-white text-gray-900 "
                {...register("district")}
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
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white font-semibold" htmlFor="area">
                Area
              </label>
              <input
                id="area"
                placeholder="Area"
                className="w-full input input-bordered  bg-white text-black "
                {...register("area")}
              />
            </div>
            <div className="flex justify-center items-center mt-3">
              <input
                className="py-2 my-5 px-10 cursor-pointer bg-gradient-to-r from-rose-600 to-pink-500 rounded-full text-white border"
                type="submit"
                value="Search"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Banner;
