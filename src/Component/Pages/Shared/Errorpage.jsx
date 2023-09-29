import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../assets/Errorpage/ErrorPages.json";
import { Link } from "react-router-dom";
const Errorpage = () => {
  return (
    <div className="bg-white h-screen">
      <div className="flex justify-center py-5 ">
        <Lottie
          className="w-1/2 h-[500px] mx-auto"
          animationData={groovyWalkAnimation}
          loop={true}
        />
      </div>
      <div className="flex justify-center">
        <Link to={"/"}>
          <button className="newBTN">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Errorpage;
