import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import Loading from "../Pages/Shared/Loading";
import NoDataFound from "../Pages/Shared/NoDataFound";
import DonarDetails from "./DonarDetails";
import { useLocation } from "react-router-dom";
const Donar = () => {
  const [donars, setDonars] = useState([]);
  const [donarLoading, setdonarLoading] = useState(true);
  const location = useLocation();
  const query = location?.state?.query;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    setdonarLoading(true);
    handleClickPrev();
    if (query === undefined) {
      axios
        .get(`https://tkgbds-server-side-ttxc.vercel.app/get-all-donar`)
        .then((res) => {
          setDonars(res.data);
          setdonarLoading(false);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      axios
        .post(`https://tkgbds-server-side-ttxc.vercel.app/get-filter`, query)
        .then((res) => {
          setdonarLoading(false);
          setDonars(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [query]);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    setdonarLoading(true);
    handleClickPrev();
    axios
      .post(`https://tkgbds-server-side-ttxc.vercel.app/get-filter`, data)
      .then((res) => {
        setdonarLoading(false);
        setDonars(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const itemsPerPage = 6;
  const totalPages = Math.ceil(donars?.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handleClickNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handleClickPrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const slicedData = donars?.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      {donarLoading ? (
        <Loading />
      ) : (
        <>
          <div className="w-full min-h-screen container mx-auto  p-5 grid grid-cols-1 md:grid-cols-12 gap-5">
            <div className="md:col-span-3">
              <form
                className="border px-5 py-10  rounded-xl"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-gray-900 font-semibold"
                      htmlFor="blood"
                    >
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
                    <label
                      className="text-gray-900 font-semibold"
                      htmlFor="district"
                    >
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
                    <label
                      className="text-gray-700 font-semibold"
                      htmlFor="area"
                    >
                      Area
                    </label>
                    <input
                      id="area"
                      placeholder="Area"
                      className="w-full input input-bordered  bg-white text-gray-700 "
                      {...register("area")}
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <input
                    className="py-2 my-5 px-10 cursor-pointer bg-gradient-to-r from-rose-600 to-pink-500 rounded-full text-white"
                    type="submit"
                    value="Search"
                  />
                </div>
              </form>
            </div>
            <div className="md:col-span-9">
              <div className="grid grid-rows-1 md:grid-cols-3  gap-4">
                {slicedData.length === 0 ? (
                  <NoDataFound />
                ) : (
                  slicedData.map((donar) => (
                    <DonarDetails key={donar.id} donar={donar} />
                  ))
                )}
              </div>
              {donars.length > 6 && (
                <div className="flex justify-center items-center  gap-5 py-10">
                  <button
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-rose-600 to-pink-500 flex justify-center items-center text-white"
                    onClick={handleClickPrev}
                    disabled={currentPage === 1}
                  >
                    <HiArrowNarrowLeft></HiArrowNarrowLeft>
                  </button>
                  <button
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-rose-600 to-pink-500 flex justify-center items-center text-white"
                    onClick={handleClickNext}
                    disabled={currentPage === totalPages}
                  >
                    <HiArrowNarrowRight></HiArrowNarrowRight>
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Donar;
