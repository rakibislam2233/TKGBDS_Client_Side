import useGetAllApplication from "../../../hook/useGetAllApplication";
import useGetAllDonar from "../../../hook/useGetAllDonar";
import useGetAllUser from "../../../hook/useGetAllUser";
import User from "../../../assets/AllData/teamwork.png";
import Donar from "../../../assets/AllData/donation.png";
import SuccesfullDonation from "../../../assets/AllData/success.png";
const AllDetails = () => {
  const [allUser] = useGetAllUser();
  const [allDonar] = useGetAllDonar();
  const [getAppplication] = useGetAllApplication();
  const succesfullDonation = getAppplication.filter(
    (application) => application.status === "approved"
  );
  return (
    <div className="w-full container mx-auto py-10 p-5">
      <h3 className="text-3xl font-semibold text-rose-500 text-center ">Statistics of service recipients</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-10 text-center">
        <div className="bg-white shadow-lg p-10 rounded-xl space-y-5">
          <img className="w-20 h-20 mx-auto" src={User} alt="" />
          <h1 className="font-semibold text-xl text-gray-700">Total User</h1>
          <h2 className="text-5xl font-semibold text-gray-700">
            {allUser?.length}
          </h2>
        </div>
        <div className="bg-white shadow-lg p-10 rounded-xl space-y-5">
          <img className="w-20 h-20 mx-auto" src={Donar} alt="" />
          <h1 className="font-semibold text-xl text-gray-700">Total Donar</h1>
          <h2 className="text-5xl font-semibold text-gray-700">
            {allDonar?.length}
          </h2>
        </div>
        <div className="bg-white shadow-lg p-10 rounded-xl space-y-5">
          <img className="w-20 h-20 mx-auto" src={SuccesfullDonation} alt="" />
          <h1 className="font-semibold text-xl text-gray-700">Succesfully  Blood Donation</h1>
          <h2 className="text-5xl font-semibold text-gray-700">
            {succesfullDonation?.length}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AllDetails;
