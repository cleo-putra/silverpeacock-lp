"use client";
import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

export const Partner1 = () => {
  const partnerData = [
    {
      id: 1,
      image: "/assets/images/main-home/partners/partner-1.png",
    },
    {
      id: 2,
      image: "/assets/images/main-home/partners/partner-2.png",
    },
    {
      id: 3,
      image: "/assets/images/main-home/partners/partner-3.png",
    },
    {
      id: 4,
      image: "/assets/images/main-home/partners/partner-4.png",
    },
    {
      id: 5,
      image: "/assets/images/main-home/partners/partner-5.png",
    },
    {
      id: 6,
      image: "/assets/images/main-home/partners/partner-6.png",
    },
  ];
  return (
    <Swiper
      {...sliderProps.partner__slider}
      className="owl-carousel bx-partner__slider"
    >
      {partnerData.map((item) => (
        <SwiperSlide className="swiper-slide">
          <a href="#" target="_blank" className="bx-partner__item">
            <img src={item.image} alt="partner-img" />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export const Partner2 = () => {
  return (
    <Swiper
      {...sliderProps.partner__slider}
      className="owl-carousel bx-partner__slider"
    >
      <SwiperSlide className="swiper-slide">
        {/* Single Slider */}
        <a href="#" target="_blank" className="bx-partner__item">
          <img
            src="assets/images/main-home/partners/partner-1.png"
            alt="partner-img"
          />
        </a>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        {/* Single Slider */}
        <a href="#" target="_blank" className="bx-partner__item">
          <img
            src="assets/images/business-home/partners/partner-2.png"
            alt="partner-img"
          />
        </a>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        {/* Single Slider */}
        <a href="#" target="_blank" className="bx-partner__item">
          <img
            src="assets/images/business-home/partners/partner-3.png"
            alt="partner-img"
          />
        </a>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        {/* Single Slider */}
        <a href="#" target="_blank" className="bx-partner__item">
          <img
            src="assets/images/business-home/partners/partner-4.png"
            alt="partner-img"
          />
        </a>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        {/* Single Slider */}
        <a href="#" target="_blank" className="bx-partner__item">
          <img
            src="assets/images/business-home/partners/partner-5.png"
            alt="partner-img"
          />
        </a>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        {/* Single Slider */}
        <a href="#" target="_blank" className="bx-partner__item">
          <img
            src="assets/images/business-home/partners/partner-6.png"
            alt="partner-img"
          />
        </a>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        {/* Single Slider */}
        <a href="#" target="_blank" className="bx-partner__item">
          <img
            src="assets/images/business-home/partners/partner-1.png"
            alt="partner-img"
          />
        </a>
      </SwiperSlide>
    </Swiper>
  );
};
