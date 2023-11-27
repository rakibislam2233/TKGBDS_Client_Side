import {useNavigate } from "react-router-dom";
import donarImage from "../../assets/Donar/Blood Donar.jpg";
import useUser from "../../hook/UseUser";
import Swal from "sweetalert2";

const BecomeDonar = () => {
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
        confirmButtonText: "Ok"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    } else {
      navigate("/dashboard/my-profile");
    }
  };
  return (
    <div className="w-full md:w-1/2 mx-auto px-5 py-10">
      <img className="w-full rounded" src={donarImage} alt="" />
      <h2 className="text-4xl text-center font-semibold py-3 text-red-500">
        Do you want to become a blood donor
      </h2>
      <div className="flex justify-center py-5">
        <button
          onClick={() => handleClick()}
          className="py-2 my-5 px-10 cursor-pointer bg-gradient-to-r from-rose-600 to-pink-500 rounded-full text-white border"
        >
          Yes
        </button>
      </div>
    </div>
  );
};

export default BecomeDonar;
