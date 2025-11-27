import React, { useRef } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
  {
    id: "12",
    testimonials:
      "Jones & Brown Legal handled my estate planning with such care and professionalism. They listened to my concerns and made the process clear and straightforward. I now have complete peace of mind knowing my family's future is secure.",
    name: "David L., Business Owner",
  },
  {
    id: "13",
    testimonials:
      "Their expertise and courtroom presence were truly impressive. They turned a stressful situation into a successful outcome.",
    name: "David L., Business Owner",
  },
  {
    id: "14",
    testimonials:
      "I was very impressed with the responsiveness and knowledge of everyone at Jones & Brown Legal. I felt like they really cared about my case, and they fought hard to get me a great result.",
    name: "David L., Business Owner",
  },
  {
    id: "15",
    testimonials:
      "Their attention to detail and proactive communication made the entire process smooth and stress-free. I felt completely supported every step of the way.",
    name: "David L., Business Owner",
  },
];
const Slider = () => {
  return (
    <div className="py-20 max-w-4xl mx-auto relative">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        className="h-[400px]"
        navigation={{
          prevEl: ".prevBtn",
          nextEl: ".nextBtn",
        }}
        pagination={{ clickable: true, el: ".pagination" }}>
        {data.map((item) => (
          <SwiperSlide
            key={item.id}
            className=" bg-bg1 flex! p-8 items-center justify-center text-center h-full flex-col">
            <p className="text-3xl font-medium leading-[115%] mb-10">
              {item.testimonials}
            </p>
            <h4 className="text-2xl font-medium flex items-center gap-2 mb-12">
              <span className="w-6 block h-1 bg-black"></span>
              {item.name}
            </h4>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-25 left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center max-w-xl">
        <div className="prevBtn z-10 ">
          <svg
            width="800px"
            height="800px"
            className="transform rotate-180 w-20 h-20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 7L15 12L10 17"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="pagination "></div>

        <div className="nextBtn z-10 peer">
          <svg
            width="800px"
            height="800px"
            className="w-20 h-20 peer-disabled:fill-Highlight"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 7L15 12L10 17"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Slider;
