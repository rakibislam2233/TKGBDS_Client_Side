/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import donarBgimage from "../../assets/Donar/love.jpg";
import Swal from "sweetalert2";
import useUser from "../../hook/UseUser";
const DonarDetails = ({ donar }) => {
  const [user] = useUser();
  const navigate = useNavigate();
  const handleClick = () => {
    if (!user) {
      Swal.fire({
        title: "Please login first",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ok",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    } else {
      navigate(`/singleDonar/${donar._id}`);
    }
  };
  const lastDate = new Date(donar?.date);
  const today = new Date();
  // Calculate the difference in months
  const monthsDifference =
    (today.getFullYear() - lastDate.getFullYear()) * 12 +
    (today.getMonth() - lastDate.getMonth());
  return (
    <div className="w-full rounded border hover:shadow-lg">
      <Link to={`/singleDonar/${donar?._id}`}>
        <div
          style={{
            backgroundImage: `url(${donarBgimage})`,
            backgroundPosition: "top center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className={` py-10 text-center rounded-t  cursor-pointer  space-y-2`}
        >
          <img
            className="w-24 h-24 mx-auto rounded-full"
            src={donar?.imageUrl}
            alt="donar-image"
          />
        </div>
      </Link>
      <div className="p-5 text-center text-gray-700">
        <h3 className="text-xl font-semibold ">Name: {donar.name}</h3>
        <h3>Blood Group : {donar.bloodGroup}</h3>
        <h3>District : {donar.district}</h3>
        <>
          {monthsDifference < 3 ? (
            <h1>Last Donation Date : {donar.date}</h1>
          ) : (
            <div>
              <button className="btn justify-center mt-1 btn-xs btn-secondary">
                Ready
              </button>
            </div>
          )}
        </>
        <button
          onClick={() => handleClick()}
          className="py-2 my-5 px-5 bg-gradient-to-r from-rose-600 to-pink-500 rounded-full text-white"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default DonarDetails;
