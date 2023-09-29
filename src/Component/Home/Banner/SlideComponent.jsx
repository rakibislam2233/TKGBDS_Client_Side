import Lottie from "lottie-react";
const SlideComponent = ({image, animation }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "multiply",
      }}
      className={` w-full h-full bg-gray-800 bg-opacity-70 md:h-screen cursor-pointer bg-center  bg-cover`}
    >
      <div className="w-full mx-auto h-full grid grid-cols-1 lg:grid-cols-2 gap-5 p-10">
        <div className="  flex justify-center items-center">
            <div className="space-y-4 ">
            <h3 className="text-xl -tracking-tight font-semibold  py-3 text-rose-700">
                Share the Gift of Life, Donate Blood
              </h3>
              <h2 className="text-5xl md:text-6xl tracking-widest leading-tight font-bold text-white">
                The gift of <span className="text-rose-700"> blood </span>
                <br />
                is the gift of life
              </h2>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Lottie className="h-72" animationData={animation} loop={true} />
          </div>
      </div>
    </div>
  );
};

export default SlideComponent;
