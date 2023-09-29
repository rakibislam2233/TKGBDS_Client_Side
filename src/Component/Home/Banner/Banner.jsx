import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import slider2 from "../../../assets/Banner/slider2.jpg";
import slider1 from "../../../assets/Banner/slider7.jpg";
import image2 from "../../../assets/Banner/banner2.jpg";
import image3 from "../../../assets/Banner/Banner3.jpg";
import blood from "../../../assets/Lottifiles/animation_lmt2e0ae.json";
import blood2 from "../../../assets/Lottifiles/animation_lmt2e8hg.json";
import blood3 from "../../../assets/Lottifiles/animation_lmt2hpql.json";
import blood4 from "../../../assets/Lottifiles/animation_lmt2i80u.json";
import SlideComponent from "./SlideComponent";
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
    <div className="w-full h-full md:h-screen">
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <SlideComponent image={slider1} animation={blood}/>
        </div>
        <div className="keen-slider__slide number-slide1">
        <SlideComponent  image={slider2} animation={blood2}/>
        </div>
        <div className="keen-slider__slide number-slide1">
        <SlideComponent  image={image2} animation={blood3}/>
        </div>
        <div className="keen-slider__slide number-slide1">
        <SlideComponent image={image3} animation={blood4}/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
