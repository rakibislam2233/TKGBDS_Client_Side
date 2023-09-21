import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import SliderComponent from "./SliderComponent/SliderComponent";
import blood from "../../../../assets/Lottifiles/animation_lmt2e0ae.json";
import blood2 from "../../../../assets/Lottifiles/animation_lmt2e8hg.json";
import blood3 from "../../../../assets/Lottifiles/animation_lmt2hpql.json";
import blood4 from "../../../../assets/Lottifiles/animation_lmt2i80u.json";
import image1 from "../../../../assets/Banner/banner.jpeg";
import image2 from "../../../../assets/Banner/banner2.jpg";
import image3 from "../../../../assets/Banner/Banner3.jpg";
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
            <SliderComponent
              images={image1}
              animation={blood}
            ></SliderComponent>
          </div>
          <div className="keen-slider__slide number-slide1">
            <SliderComponent
              images={image2}
              animation={blood2}
            ></SliderComponent>
          </div>
          <div className="keen-slider__slide number-slide1">
            <SliderComponent
              images={image1}
              animation={blood3}
            ></SliderComponent>
          </div>
          <div className="keen-slider__slide number-slide1">
            <SliderComponent
              images={image3}
              animation={blood4}
            ></SliderComponent>
          </div>
        </div>
        {/* banner section end */}
      </div>
    </>
  );
};

export default Banner;
