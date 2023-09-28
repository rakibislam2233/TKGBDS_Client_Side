import React from "react";
import Loading from "../../../Component/Pages/Shared/Loading";
import useGetAllUser from "../../../hook/useGetAllUser";
import NoDataFound from "../../../Component/Pages/Shared/NoDataFound";
const ManageUsers = () => {
  const [allUser, isLoading] = useGetAllUser();
  console.log(allUser)
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="w-full p-5">
          {allUser.length <= 0 ? (
            <NoDataFound />
          ) : (
            <>
              <h3 className="text-3xl font-semibold">Manage Users</h3>
              <div className="overflow-x-auto py-5">
                <table className="table">
                  {/* head */}
                  <thead className="text-gray-700 text-[16px]">
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Blood Group</th>
                      <th>District</th>
                      <th>Area</th>
                      <th>PhoneNumber</th>
                      <th>Role</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {allUser?.map((applied) => (
                      <tr key={applied._id}>
                        <th>
                          <img
                            className="w-12 h-12 rounded-full"
                            src={applied?.imageUrl}
                            alt=""
                          />
                        </th>
                        <th>{applied?.name}</th>
                        <th>{applied?.bloodGroup}</th>
                        <th>{applied?.district}</th>
                        <th>{applied?.area}</th>
                        <th>{applied?.phoneNumber}</th>
                        <th>
                          <button className="btn btn-secondary btn-xs">
                            {applied?.role}
                          </button>
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

export default ManageUsers;
