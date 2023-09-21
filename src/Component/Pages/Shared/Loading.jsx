import Lottie from "lottie-react";
import loading from "../../../assets/Lottifiles/rakib";
const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Lottie className="w-full h-72" animationData={loading} loop={true} />
    </div>
  );
};

export default Loading;
