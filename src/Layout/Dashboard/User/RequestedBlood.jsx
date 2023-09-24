import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../Provider/AuthProvider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import Loading from "../../../Component/Pages/Shared/Loading";
import NoDataFound from "../../../Component/Pages/Shared/NoDataFound";

const RequestedBlood = () => {
  const { user } = useContext(UserContext);
  const [requestedBlood, setRequestedBlood] = useState([]);
  const [requestedBloodLoading, setRequestedBloodLoading] = useState(true);
  useEffect(() => {
    axios(`http://localhost:5000/request-blood/${user?.email}`)
      .then((res) => {
        setRequestedBloodLoading(false);
        setRequestedBlood(res.data);
      })
      .catch((err) => toast.error(err.message));
  }, [user]);

  console.log(requestedBlood);
  return (
    <>
      {requestedBloodLoading ? (
        <Loading />
      ) : (
        <div className="w-full p-5">
          {requestedBlood.length <= 0 ? (
            <NoDataFound />
          ) : (
            <>
              <h3 className="text-3xl font-semibold">Requested Blood</h3>
              <div className="overflow-x-auto py-5">
                <table className="table">
                  {/* head */}
                  <thead className="text-gray-700 text-[16px]">
                    <tr>
                      <th>Patient Name</th>
                      <th>Blood Group</th>
                      <th>Amount Blood</th>
                      <th>Donation Date</th>
                      <th>Donation Time</th>
                      <th>Donation Place</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      {requestedBlood.map((applied) => (
                        <>
                          <th>{applied?.donarName}</th>
                          <th>{applied?.bloodGroup}</th>
                          <th>{applied?.amountBlood}</th>
                          <th>{applied?.donateDate}</th>
                          <th>{applied?.donateTime}</th>
                          <th>{applied?.donatePlace}</th>
                          <th>
                            <button className="btn btn-xs btn-secondary">
                              {applied?.status}
                            </button>
                          </th>
                        </>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default RequestedBlood;
