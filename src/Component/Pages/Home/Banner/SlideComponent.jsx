import Lottie from "lottie-react";
const SlideComponent = ({ image, animation }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "multiply",
      }}
      className={`bg-gray-600 bg-opacity-50 w-full h-full md:h-screen cursor-pointer bg-center  h-[calc(100vh+5rem)] bg-cover`}
    >
      <div className="w-full max-w-6xl mx-auto h-full grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
       <div className="flex justify-center items-center">
       <div className="space-y-4 ">
          <h3 className="text-xl -tracking-tight font-semibold  py-3 text-white">
            ' Share the Gift of Life, Donate Blood. '
          </h3>
          <h2 className="text-3xl md:text-6xl tracking-widest leading-tight font-bold text-white">
            The gift of <span className="text-rose-700"> blood </span>
            <br />
            is the gift of life
          </h2>
          <button className="py-2 my-5 px-5 bg-gradient-to-r from-rose-600 to-pink-500 rounded-full text-white">
            Donate Blood
          </button>
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
