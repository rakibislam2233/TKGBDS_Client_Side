import Lottie from "lottie-react";
import nodata from "../../../assets/Lottifiles/no data.json";
const NoDataFound = () => {
  return (
    <div className="w-full flex justify-center items-center col-span-9">
    <Lottie className="w-96 h-96 flex justify-center" animationData={nodata} loop={true} />
  </div>
  )
}

export default NoDataFound
