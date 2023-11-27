import axios from "axios";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Style.css'
import { useQuery } from "react-query";
const Gallery = () => {
  const {
    data: images = [],
  } = useQuery({
    queryKey: ["isAdmin",],
    queryFn: async () => {
      const res = await axios(
        `https://tkgbds-server-side.up.railway.app/gallery-image`
      );
      return res.data;
    },
  });
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  console.log(images)
  return (
    <div className="w-full py-5 p-5">
      <div className="w-full">
        <div className="text-center space-y-3  pb-8">
          <h3 className="text-3xl font-semibold text-rose-500">
            Blood Warrior
          </h3>
        </div>
        <Slider className='py-5' {...settings}>
        {
          images?.map((image,i) =><div key={i} className="relative cursor-pointer  rounded">
          <div className="content">
            <div className="content-overlay bg-gradient-to-r from-rose-600 to-pink-500 "></div>
            <img
              className="w-full h-72  rounded-2xl"
              src={image?.imageUrl}
            />
            <div className="content-details  flex justify-center">
              <h3 className="text-2xl font-semibold text-white">
                {image?.name} <br /> <br /> <span className="text-3xl font-semibold">{image?.bloodGroup}</span>
              </h3>
            </div>
          </div>
        </div>)
        }
      </Slider>
      </div>
    </div>
  );
};

export default Gallery;
