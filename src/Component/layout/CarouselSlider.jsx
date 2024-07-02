import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "../layout/carousel.css"

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function CarouselSlider(props) {
    return (
       <>
       <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="tata.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="domo2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="b4.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="suta.jpg" alt="" /></SwiperSlide>
        
      </Swiper>
       </>
    );
}

export default CarouselSlider;