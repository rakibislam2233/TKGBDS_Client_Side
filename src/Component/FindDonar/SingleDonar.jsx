import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import Loading from "../Pages/Shared/Loading";
const SingleDonar = () => {
  const { id } = useParams();
  const [singelDonar, setsingleDonar] = useState({});
  const [singleDonarLoading, setsingleDonarLoading] = useState(true);
  useEffect(() => {
    axios(`http://localhost:5000/get-single-donar/${id}`)
      .then((res) => {
        setsingleDonar(res.data);
        setsingleDonarLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, [id]);
  return (
    <>
    {
        singleDonarLoading ? <Loading/> : <div className="w-full  py-20 p-5 bg-gradient-to-r from-rose-100 to-pink-200">
        <div className="w-full md:w-1/2  rounded mx-auto shadow-xl flex flex-col md:flex-row  justify-between">
          <div className="w-full md:w-1/2 flex justify-center items-center rounded-l">
            <img
              className="w-full h-96 mx-auto rounded-l"
              src={singelDonar.imageUrl}
              alt="donar-image"
            />
          </div>
          <div className="w-full md:w-1/2 p-5 text-center text-gray-70 space-y-4 text-gray-700">
            <h3 className="text-xl font-semibold ">Name: {singelDonar.name}</h3>
            <h3>Email : {singelDonar.email}</h3>
            <h3>Blood Group : {singelDonar.bloodGroup}</h3>
            <h3>District : {singelDonar.district}</h3>
            <h3>Area : {singelDonar.area}</h3>
            {singelDonar.date && <h3>Last Donation Date : {singelDonar.date}</h3>}
            <h3>Phone Number : {singelDonar.phoneNumber}</h3>
          </div>
        </div>
      </div>
    }
    </>
    
  );
};

export default SingleDonar;
