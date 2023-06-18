import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import SliderComponent from "./SliderComponent/SliderComponent";
// import { Helmet } from "react-helmet";
const Banner = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  /**


 */
  const images2 = "https://i.postimg.cc/WpqXbg53/banner1.jpg";
  const images1 ="https://i.postimg.cc/d3MyHkPQ/2223-0194-low-stock-Twitter2.jpg";
  const images3 = "https://i.postimg.cc/ZnNc7zW3/banner3.jpg";
  const images4 = "https://i.postimg.cc/506pzC1s/banner4.jpg";
  const images5 = "https://i.postimg.cc/9fWws5nT/Blood-Donation-1.jpg";
  const images6 = "https://i.postimg.cc/fWXX3KmV/world-blood-donor-background-free-vector.jpg";
  return (
    <>
      <div className="w-full">
        {/* this is a react helmet */}
        {/* <Helmet>
        <title>Home</title>
      </Helmet> */}
        {/* banner section added */}
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <SliderComponent images={images1}></SliderComponent>
          </div>
          <div className="keen-slider__slide number-slide2">
            <SliderComponent images={images2}></SliderComponent>
          </div>
          <div className="keen-slider__slide number-slide3">
            <SliderComponent images={images3}></SliderComponent>
          </div>
          <div className="keen-slider__slide number-slide4">
            <SliderComponent images={images4}></SliderComponent>
          </div>

          <div className="keen-slider__slide number-slide5">
            <SliderComponent images={images5}></SliderComponent>
          </div>
          <div className="keen-slider__slide number-slide5">
            <SliderComponent images={images6}></SliderComponent>
          </div>
        </div>
        {/* banner section end */}
      </div>
    </>
  );
};

export default Banner;
