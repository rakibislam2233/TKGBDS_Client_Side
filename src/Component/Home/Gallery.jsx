import axios from "axios";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Style.css";
import { useQuery } from "react-query";
const Gallery = () => {
  const {
    data: images = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["isAdmin",],
    queryFn: async () => {
      const res = await axios(
        `https://tkgbds-server-side.up.railway.app/gallery-image`
      );
      return res.data;
    },
  });
  return (
    <div className="w-full py-5 p-5">
      <div className="w-full">
        <div className="text-center space-y-3  pb-8">
          <h3 className="text-3xl font-semibold text-rose-500">
            Blood Warrior
          </h3>
        </div>
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // When window width is >= 480px
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // When window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="rounded-2xl mySwiper"
        >
          {images.map((image, i) => (
            <SwiperSlide key={i + 1}>
              <div key={i} className="relative cursor-pointer  rounded-2xl">
                <div className="content">
                  <div className="content-overlay bg-gradient-to-r from-rose-600 to-pink-500 "></div>
                  <img
                    className="w-full h-96  rounded-2xl"
                    src={image?.imageUrl}
                  />
                  <div className="content-details  flex justify-center">
                    <h3 className="text-2xl font-semibold text-white">
                      Blood Warrior : {image?.name}
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
