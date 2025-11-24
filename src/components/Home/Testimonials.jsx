import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Testimonials = () => {
  return (
    <div className="py-20 max-w-4xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}>
        <SwiperSlide>
          <h1 className="min-h-[40vh]">1</h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="min-h-[40vh]">1</h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="min-h-[40vh]">1</h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="min-h-[40vh]">1</h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonials;
