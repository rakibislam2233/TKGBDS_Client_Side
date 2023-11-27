import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";
import { useEffect } from "react";
const FeedBack = () => {
  const [feedbacks, setFeedBacks] = useState([]);
  useEffect(() => {
    axios
      .get(`https://tkgbds-server-side.up.railway.app/feedback`)
      .then((res) => {
        setFeedBacks(res.data);
      });
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full px-5  py-8">
      <h3 className="text-4xl font-semibold text-center text-rose-500 py-5">
      Feedback
      </h3>
      <Slider className="py-5" {...settings}>
        {feedbacks?.map((feedback, i) => (
          <div key={i} className="w-full rounded border p-5 pb-10 space-y-3">
            <div className="flex gap-2">
              <img
                className="w-16 h-16 rounded-full"
                src={feedback?.imageUrl}
              />
              <div className="space-y-2">
                <Rating
                  style={{ maxWidth: 120 }}
                  value={feedback.rating}
                  isRequired
                />
                <h1 className="text-xl font-semibold">{feedback?.name}</h1>
              </div>
            </div>
            <hr />
            <p className="text-gray-600 text-xl">{feedback?.message}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeedBack;
