import { Link } from "react-router-dom";

const DonarDetails = ({ donar }) => {
  const donarBgimage = "/src/assets/Donar/love.jpg";
  return (
    <div className="w-full rounded border">
      <div
        style={{
          backgroundImage: `url(${donarBgimage})`,
          backgroundPosition: "top center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className={` py-10 text-center rounded-t   space-y-2`}
      >
        <img
          className="w-24 h-24 mx-auto rounded-full"
          src={donar.imageUrl}
          alt="donar-image"
        />
      </div>
      <div className="p-5 text-center text-gray-700">
        <h3 className="text-xl font-semibold ">Name: {donar.name}</h3>
        <h3>Blood Group : {donar.bloodGroup}</h3>
        <h3>District : {donar.district}</h3>
        <Link to={`/singleDonar/${donar._id}`}>
          <button className="py-2 my-5 px-5 bg-gradient-to-r from-rose-600 to-pink-500 rounded-full text-white">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DonarDetails;
