import axios from "axios";
import Loading from "../../../Component/Pages/Shared/Loading";
import NoDataFound from "../../../Component/Pages/Shared/NoDataFound";
import useRequestedBlood from "../../../hook/useRequestedBlood";
import toast from "react-hot-toast";
import useUser from "../../../hook/UseUser";

const RequestedBlood = () => {
  const [requestedBlood, isLoading,refetch] = useRequestedBlood();
  const [user] = useUser()
  const updateStatus = ()=>{
    axios.put(`http://localhost:5000/request-blood-update/${user?.email}`,{status:"approved"})
    .then(res=>{
      if(res.data.modifiedCount>0){
        toast.success("Status updated successfully")
        refetch()
      }
    })
    .catch(err => toast.error(err.message));
    ;
  }
  return (
    <>
      {isLoading ? (
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
                      {requestedBlood?.map((applied) => (
                        <tr key={applied._id}>
                          <th>{applied?.patientName}</th>
                          <th>{applied?.bloodGroup}</th>
                          <th>{applied?.amountBlood} Bag</th>
                          <th>{applied?.donateDate}</th>
                          <th>{applied?.donateTime}</th>
                          <th>{applied?.donatePlace}</th>
                          <th>
                            {
                              applied?.status === 'pending' ? <button onClick={updateStatus} className="btn btn-xs btn-secondary">
                              {applied?.status}
                            </button> : <button disabled className="py-0.5 px-2 bg-pink-500 rounded text-white">
                              {applied?.status}
                            </button>
                            }
                            
                          </th>
                        </tr>
                      ))}
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
