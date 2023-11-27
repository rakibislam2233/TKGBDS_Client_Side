import { useState } from "react";
import Loading from "../../../Component/Pages/Shared/Loading";
import useGetAllUser from "../../../hook/useGetAllUser";
import NoDataFound from "../../../Component/Pages/Shared/NoDataFound";
import { Helmet } from "react-helmet-async";
const ManageUsers = () => {
  const [allUser, isLoading] = useGetAllUser();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // You can adjust the number of items per page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allUser.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(allUser.length / itemsPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="w-full pt-2 px-5">
          {allUser.length <= 0 ? (
            <NoDataFound />
          ) : (
            <>
              <Helmet>
                <title>Manage User | TKGBDS </title>
              </Helmet>
              <h3 className="text-3xl font-semibold">Manage Users</h3>
              <div className="overflow-x-auto py-5">
                <table className="table">
                  {/* Head */}
                  <thead className="text-gray-700 text-[16px]">
                    <tr>
                      {" "}
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
                    {currentItems.map((applied) => (
                      <tr key={applied._id}>
                        <th>
                          <img
                            className="w-12 h-12 rounded-full"
                            src={applied?.imageUrl}
                            alt=""
                          />
                        </th>
                        <th>{applied?.name}</th>
                        <th>
                          {applied?.bloodGroup
                            ? applied?.bloodGroup
                            : "Not Avaiable"}
                        </th>
                        <th>
                          {applied?.district
                            ? applied?.district
                            : "Not Avaiable"}
                        </th>
                        <th>
                          {applied?.area ? applied?.area : "Not Avaiable"}
                        </th>
                        <th>
                          {applied?.phoneNumber
                            ? applied?.phoneNumber
                            : "Not Avaiable"}
                        </th>
                        <th>
                          <button className="btn btn-secondary btn-xs">
                            {applied?.role ? applied?.role : "User"}
                          </button>
                        </th>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* Pagination */}
                <nav className="mt-4">
                  <ul className="pagination flex justify-center gap-5">
                    {Array.from({ length: totalPages }, (_, i) => (
                      <li
                        key={i + 1}
                        className={`page-item ${
                          currentPage === i + 1 ? "active" : ""
                        }`}
                      >
                        <button
                          onClick={() => paginate(i + 1)}
                          className="page-link px-3 py-1 rounded bg-rose-500 text-white "
                        >
                          {i + 1}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ManageUsers;
