import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useUser from "../../hook/UseUser";
import DisplayModal from "../Pages/Shared/DisplayModal";
import Loading from "../Pages/Shared/Loading";
const SingleDonar = () => {
  const [user] = useUser();
  const { id } = useParams();
  const [singelDonar, setsingleDonar] = useState({});
  const [singleDonarLoading, setsingleDonarLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    axios(
      `https://tkgbds-server-side.up.railway.app/get-single-donar-byId/${id}`
    )
      .then((res) => {
        setsingleDonar(res.data);
        setsingleDonarLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
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
        <div className="w-full min-h-screen justify-center items-center flex my-8 p-5">
          <div className="w-full max-w-3xl mx-auto border rounded p-5 ">
            <img
              className="w-72 h-72 mx-auto rounded-full "
              src={singelDonar?.imageUrl}
              alt="donar-image"
            />
            <div className="text-center space-y-4 text-gray-700 text-xl  font-semibold mt-8">
              <h3 className="text-3xl ">
                Name: {singelDonar?.name}
              </h3>
              <h3>
                Email : <span className="text-blue-600 cursor-pointer">{singelDonar?.email}</span>
              </h3>
              <h3>Blood Group : {singelDonar?.bloodGroup}</h3>
              <h3>District : {singelDonar?.district}</h3>
              <h3>Area : {singelDonar?.area}</h3>
              <>
                {monthsDifference < 3 ? (
                  <h1>Last Donation Date : {singelDonar?.date}</h1>
                ) : (
                  <>
                    {user?.email === singelDonar?.email ? (
                      <button
                        disabled
                        className="py-0.5 px-2 bg-pink-500 rounded text-white"
                      >
                        Application For Blood
                      </button>
                    ) : (
                      <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="btn justify-center mt-1 btn-xs btn-secondary"
                      >
                        Application For Blood
                      </button>
                    )}

                    <DisplayModal
                      singleDonar={singelDonar}
                      isOpen={isOpen}
                      setIsOpen={setIsOpen}
                    />
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
