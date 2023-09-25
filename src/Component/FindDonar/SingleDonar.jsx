import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import Loading from "../Pages/Shared/Loading";
import DisplayModal from "../Pages/Shared/DisplayModal";
import useUser from "../../hook/UseUser";
const SingleDonar = () => {
  const [user] = useUser()
  const { id } = useParams();
  const [singelDonar, setsingleDonar] = useState({});
  const [singleDonarLoading, setsingleDonarLoading] = useState(true);
  const [isOpen,setIsOpen] = useState(false)
  useEffect(() => {
    axios(`http://localhost:5000/get-single-donar-byId/${id}`)
      .then((res) => {
        setsingleDonar(res.data);
        setsingleDonarLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, [id]);
  const lastDate = new Date(singelDonar.date);
  const today = new Date();
  const monthsDifference =
    (today.getFullYear() - lastDate.getFullYear()) * 12 +
    (today.getMonth() - lastDate.getMonth());
  return (
    <>
      {singleDonarLoading ? (
        <Loading />
      ) : (
        <div className="w-full h-full  py-20 p-5 bg-gradient-to-r from-rose-100 to-pink-200">
          <div className="w-full md:w-1/2  rounded mx-auto shadow-xl flex flex-col md:flex-row  justify-between">
            <div className="w-full md:w-1/2 flex justify-center items-center rounded-l">
              <img
                className="w-full h-96 mx-auto rounded-l"
                src={singelDonar?.imageUrl}
                alt="donar-image"
              />
            </div>
            <div className="w-full md:w-1/2 p-5 text-center text-gray-70 space-y-4 text-gray-700">
              <h3 className="text-xl font-semibold ">
                Name: {singelDonar?.name}
              </h3>
              <h3>Email : {singelDonar?.email}</h3>
              <h3>Blood Group : {singelDonar?.bloodGroup}</h3>
              <h3>District : {singelDonar?.district}</h3>
              <h3>Area : {singelDonar?.area}</h3>
              <>
                {monthsDifference < 3 ? (
                  <h1>Last Donation Date : {singelDonar?.date}</h1>
                ) : (
                  <>
                  {
                    user?.email === singelDonar?.email ? <button disabled className="py-0.5 px-2 bg-pink-500 rounded text-white">
                     Application For Blood
                  </button> : <button onClick={()=>setIsOpen(!isOpen)}  className="btn justify-center mt-1 btn-xs btn-secondary">
                    Application For Blood
                  </button>
                  }
                    
                    <DisplayModal singleDonar={singelDonar} isOpen={isOpen} setIsOpen={setIsOpen}/>
                  </>
                )}
              </>
              <h3>Phone Number : {singelDonar.phoneNumber}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleDonar;
