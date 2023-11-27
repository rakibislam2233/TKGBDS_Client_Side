import Lottie from "lottie-react";
import animation from "../../../assets/Lottifiles/Animation - 1701059008789.json";
import animation2 from "../../../assets/Lottifiles/animation_lmt2e8hg.json";
import animation3 from "../../../assets/Lottifiles/animation_lmt2hpql.json";
import animation4 from "../../../assets/Lottifiles/animation_lmt2i80u.json";
import animation5 from "../../../assets/Lottifiles/animation_lmt2jd6x.json";
import animation6 from "../../../assets/Lottifiles/Animation - 1701058908156.json";
const LottiFiles = () => {
  return (
    <div className="w-full px-5  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5">
      <Lottie className="w-full mx-auto h-72" animationData={animation} loop={true} />
      <Lottie className="w-full mx-auto h-72" animationData={animation2} loop={true} />
      <Lottie className="w-full mx-auto h-72" animationData={animation3} loop={true} />
      <Lottie className="w-full mx-auto h-72" animationData={animation4} loop={true} />
      <Lottie className="h-72" animationData={animation5} loop={true} />
      <Lottie className="h-72" animationData={animation6} loop={true} />
    </div>
  );
};

export default LottiFiles;
