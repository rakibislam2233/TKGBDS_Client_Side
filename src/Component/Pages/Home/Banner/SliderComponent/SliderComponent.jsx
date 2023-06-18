const SliderComponent = ({ images }) => {
  const title = ['The gift of blood is the gift of life.',`Donating blood is not just an act of kindness, it's an act of heroism.`,`Share life, give blood`,``]
  return (
    // this is slidercomponent
    <div
      style={{
        backgroundImage: `url(${images})`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "multiply",
      }}
      className={`bg-gray-900 bg-opacity-30 w-full h-screen cursor-pointer`}
    >
      {/* <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="w-full max-w-6xl mx-auto h-full flex justify-center items-center p-5"
      >
        <div className="space-y-4">
          <h2 className="text-6xl tracking-wider font-bold text-white">
            Learn <span className="text-amber-500"> The Music </span> <br />
            From The Masters
          </h2>
          <button
            className="py-3 px-5   bg-rose-500 shadow-lg font-semibold  text-white"
          >
           Learn More
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default SliderComponent;
