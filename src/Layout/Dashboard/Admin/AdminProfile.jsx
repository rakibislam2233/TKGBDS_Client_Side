import Loading from "../../../Component/Pages/Shared/Loading";
import useGetAllApplication from "../../../hook/useGetAllApplication";
import useGetAllDonar from "../../../hook/useGetAllDonar";
import useGetAllUser from "../../../hook/useGetAllUser";
import Rechart from "./Rechart";

const AdminProfile = () => {
  const [allUser] = useGetAllUser();
  const [allDonar, isLoading] = useGetAllDonar();
  const [getAppplication, applicationLoading] = useGetAllApplication();
  const succesfullDonation = getAppplication.filter(
    (application) => application.status === "approved"
  );
  return (
    <>
      {isLoading || applicationLoading ? (
        <Loading />
      ) : (
        <div className="w-full p-5">
          <h3 className="text-3xl font-semibold">Admin Profile</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-10 text-center">
            <div className="bg-rose-100 p-10 rounded-xl space-y-3">
              <h2 className="text-3xl font-semibold text-gray-700">
                {allUser?.length}
              </h2>
              <h1 className="text-xl font-semibold text-gray-700">
                Total User
              </h1>
            </div>
            <div className="bg-rose-100 p-10 rounded-xl space-y-3">
              <h2 className="text-3xl font-semibold">{allDonar?.length}</h2>
              <h1 className="text-xl font-semibold">Total Donars</h1>
            </div>
            <div className="bg-rose-100 p-10 rounded-xl space-y-3">
              <h2 className="text-3xl font-semibold">
                {succesfullDonation?.length}
              </h2>
              <h1 className="text-xl font-semibold">Succes Donation</h1>
            </div>
          </div>

          <Rechart />
        </div>
      )}
    </>
  );
};

export default AdminProfile;
