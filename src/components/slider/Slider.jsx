import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Slider = () => {
  return (
    <div>
      {/* Slider start */}
      <div className="">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><img src="./image/pic.jpg" alt="#" className="h-[60vh] w-full" /></SwiperSlide>
          <SwiperSlide><img src="./image/pic.jpg" alt="#" className="h-[60vh] w-full" /></SwiperSlide>
          <SwiperSlide><img src="./image/pic.jpg" alt="#" className="h-[60vh] w-full" /></SwiperSlide>
          <SwiperSlide><img src="./image/pic.jpg" alt="#" className="h-[60vh] w-full" /></SwiperSlide>
          <SwiperSlide><img src="./image/pic.jpg" alt="#" className="h-[60vh] w-full" /></SwiperSlide>
        </Swiper>
      </div>
      {/* slider end  */}
    </div>
  )
}

export default Slider
