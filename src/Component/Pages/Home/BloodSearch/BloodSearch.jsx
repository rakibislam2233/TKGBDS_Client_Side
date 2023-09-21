import { useForm } from "react-hook-form";

const BloodSearch = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
   <div className="p-5">
     <div className=" w-full md:w-[75%] mx-auto  mt-16 p-16 bg-rose-100 rounded-xl">
      <form
        onSubmit={handleSubmit(onSubmit)}
        
      >
        <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-gray-900 font-semibold" htmlFor="blood">
            Blood Group
          </label>
          <select
            id="blood"
            className="w-full select bg-white text-gray-900"
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
          <label className="text-gray-900 font-semibold" htmlFor="district">
            District
          </label>
          <select
            id="district"
            className="w-full select bg-white text-gray-900"
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
          <label className="text-gray-700 font-semibold" htmlFor="area">
            Area
          </label>
          <input
            id="area"
            placeholder="Area"
            className="w-full input  bg-white text-gray-700 "
            {...register("area")}
          />
        </div>
        </div>
        <div className="flex justify-center items-center mt-10">
          <input
            className="py-2 my-5 px-10 cursor-pointer bg-gradient-to-r from-rose-600 to-pink-500 rounded-full text-white"
            type="submit"
            value="Search"
          />
        </div>
      </form>
    </div>
   </div>
  );
};

export default BloodSearch;
