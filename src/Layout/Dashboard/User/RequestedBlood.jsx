import axios from "axios";
import moment from "moment";
import Swal from "sweetalert2";
import Loading from "../../../Component/Pages/Shared/Loading";
import NoDataFound from "../../../Component/Pages/Shared/NoDataFound";
import useUser from "../../../hook/UseUser";
import useRequestedBlood from "../../../hook/useRequestedBlood";

const RequestedBlood = () => {
  const [requestedBlood, isLoading, refetch] = useRequestedBlood();
  const [user] = useUser();
  const updateStatus = (id) => {
    Swal.fire({
      title: "আপনি কি এ ব্যাপারে নিশ্চিত?",
      text: "আপনি যদি রক্ত দান করে থাকেন তাহলে আপনার শেষ রক্ত দানের তারিখ আজকের তারিখ দিয়ে আপডেট হবে এবং   পেন্ডিং রিকোয়েস্ট আপডেট হবে",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        updateLastBdDDate()
        axios
          .put(`https://tkgbds-server-side.vercel.app/request-blood-update/${id}`, {
            status: "approved",
            bloodReq: "false",
          })
          .then((res) => {
            console.log(res.data)
            if (res.data.modifiedCount > 0) {
              Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Update Succefully',
                showConfirmButton: false,
                timer: 1500
              })
              refetch();
            }
          })
          .catch((err) => console.log(err.message));
      }
    });
  };
  const updateLastBdDDate = () => {
    const userDate = new Date();
    const formattedDate = moment(userDate).format("DD MMM YYYY");
    axios
      .put(`https://tkgbds-server-side.vercel.app/donar/${user?.email}`, {
        date: formattedDate,
      })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
        }
      })
      .catch((err) => console.log(err.message));
  };
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
                      <th>Applied Person</th>
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
                          {applied?.status === "pending" ? (
                            <button
                              onClick={()=>updateStatus(applied?._id)}
                              className="btn btn-xs btn-secondary"
                            >
                              {applied?.status}
                            </button>
                          ) : (
                            <button
                              disabled
                              className="py-0.5 px-2 bg-pink-500 rounded text-white"
                            >
                              {applied?.status}
                            </button>
                          )}
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
