import Loading from "../../../Component/Pages/Shared/Loading";
import NoDataFound from "../../../Component/Pages/Shared/NoDataFound";
import useApplicationBlood from "../../../hook/useApplicationBlood";
const ApplicationBlood = () => {
  const [applicationBlood,isLoading] = useApplicationBlood()
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="w-full p-5">
          {applicationBlood.length <= 0 ? (
            <NoDataFound />
          ) : (
            <>
              <h3 className="text-3xl font-semibold">Application Blood</h3>
              <div className="overflow-x-auto py-5">
                <table className="table">
                  {/* head */}
                  <thead className="text-gray-700 text-[16px]">
                    <tr>
                      <th>Donar Name</th>
                      <th>Blood Group</th>
                      <th>Amount Blood</th>
                      <th>Donation Date</th>
                      <th>Donation Time</th>
                      <th>Donate Place</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      {applicationBlood.map((applied) => (
                        <>
                          <th>{applied?.donarName}</th>
                          <th>{applied?.bloodGroup}</th>
                          <th>{applied?.amountBlood} Bag</th>
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

export default ApplicationBlood;
