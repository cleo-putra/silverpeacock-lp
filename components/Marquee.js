"use client";
import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

export const Marquee1 = ({
  containerClass = "bx-text-move section-gap",
  marquee1 = ["Strategy", "Consulting", "Investment", "Growth", "Consulting"],
  marquee2 = [
    "Optimization",
    "Management",
    "Planning",
    "Compliance",
    "Management",
    "Planning",
  ],
  marqueeImage = "/assets/images/icons/outline-black-arrow.svg",
  literataClass = "bx-literata",
}) => {
  return (
    <section className={containerClass}>
      <div className="bx-text-move__wrapper">
        <Swiper
          {...sliderProps.move_slider}
          className="swiper text-move_slider"
        >
          <div className="swiper-wrapper ease-linear">
            {marquee1.map((text, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <div className="bx-text-slide__item">
                  <span className={`text text-outline ${literataClass}`}>
                    {text}
                  </span>
                  <img className="arrow-img" src={marqueeImage} alt="arrow" />
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        <Swiper
          {...sliderProps.move_slider_reverse}
          className="swiper text-move_slider-reverse"
        >
          <div className="swiper-wrapper ease-linear">
            {marquee2.map((text, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <div className="bx-text-slide__item">
                  <span className={`text text-filled ${literataClass}`}>
                    {text}
                  </span>
                  <img className="arrow-img" src={marqueeImage} alt="arrow" />
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export const Marquee2 = () => {
  return (
    <section className="bx-text-move bx-text-move__style2">
      <div className="bx-text-move__wrapper">
        <Swiper
          {...sliderProps.move_slider_2}
          className="swiper text-move_slider-2"
        >
          <div className="swiper-wrapper ease-linear">
            {/* Single Slider */}
            <SwiperSlide className="swiper-slide">
              <div className="bx-text-slide__item">
                <span className="text text-outline bx-literata">
                  {" "}
                  Get In Touch
                </span>
                <img
                  className="arrow-img"
                  src="assets/images/icons/outline-white-arrow.svg"
                  alt="arrow"
                />
              </div>
            </SwiperSlide>
            {/* Single Slider */}
            <SwiperSlide className="swiper-slide">
              <div className="bx-text-slide__item">
                <span className="text text-outline bx-literata">
                  {" "}
                  Our Contact
                </span>
                <img
                  className="arrow-img"
                  src="assets/images/icons/outline-white-arrow.svg"
                  alt="arrow"
                />
              </div>
            </SwiperSlide>
            {/* Single Slider */}
            <SwiperSlide className="swiper-slide">
              <div className="bx-text-slide__item">
                <span className="text text-outline bx-literata">
                  {" "}
                  Get In Touch
                </span>
                <img
                  className="arrow-img"
                  src="assets/images/icons/outline-white-arrow.svg"
                  alt="arrow"
                />
              </div>
            </SwiperSlide>
            {/* Single Slider */}
            <SwiperSlide className="swiper-slide">
              <div className="bx-text-slide__item">
                <span className="text text-outline bx-literata">
                  {" "}
                  Get In Touch
                </span>
                <img
                  className="arrow-img"
                  src="assets/images/icons/outline-white-arrow.svg"
                  alt="arrow"
                />
              </div>
            </SwiperSlide>
            {/* Single Slider */}
            <SwiperSlide className="swiper-slide">
              <div className="bx-text-slide__item">
                <span className="text text-outline bx-literata">
                  {" "}
                  Our Contact
                </span>
                <img
                  className="arrow-img"
                  src="assets/images/icons/outline-white-arrow.svg"
                  alt="arrow"
                />
              </div>
            </SwiperSlide>
            {/* Single Slider */}
            <SwiperSlide className="swiper-slide">
              <div className="bx-text-slide__item">
                <span className="text text-outline bx-literata">
                  {" "}
                  Get In Touch
                </span>
                <img
                  className="arrow-img"
                  src="assets/images/icons/outline-white-arrow.svg"
                  alt="arrow"
                />
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export const Marquee3 = ({
  items = [
    "Get In Touch",
    "Our Contact",
    "Get In Touch",
    "Get In Touch",
    "Our Contact",
    "Get In Touch",
  ],
}) => {
  return (
    <Swiper
      {...sliderProps.move_slider_2}
      className="bx-text-move bx-text-move__style2"
    >
      <div className="swiper-wrapper ease-linear">
        {items.map((text, index) => (
          <SwiperSlide className="swiper-slide" key={index}>
            <div className="bx-text-slide__item">
              <span className="text text-outline bx-literata"> {text}</span>
              <img
                className="arrow-img"
                src="assets/images/icons/outline-white-arrow.svg"
                alt="arrow"
              />
            </div>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

export const Marquee4 = () => {
  return (
    <section className="bx-text-move bx-text-move__style2">
      <div className="bx-text-move__wrapper">
        <Swiper
          {...sliderProps.move_slider_2}
          className="swiper text-move_slider-2"
        >
          <div className="swiper-wrapper">
            {/* Single Slider */}
            <SwiperSlide className="swiper-slide">
              <div className="bx-text-slide__item">
                <span className="text">UNIQUE AND CREATIVE SOLUTION</span>
                <img
                  className="arrow-img"
                  src="assets/images/personal-home/icons/star-black.svg"
                  alt="arrow"
                />
              </div>
            </SwiperSlide>
            {/* Single Slider */}
            <SwiperSlide className="swiper-slide">
              <div className="bx-text-slide__item">
                <span className="text">EXCEPTIONAL STRATEGY</span>
                <img
                  className="arrow-img"
                  src="assets/images/personal-home/icons/star-black.svg"
                  alt="arrow"
                />
              </div>
            </SwiperSlide>
            {/* Single Slider */}
            <SwiperSlide className="swiper-slide">
              <div className="bx-text-slide__item">
                <span className="text">24/7 ONLINE SUPPORT</span>
                <img
                  className="arrow-img"
                  src="assets/images/personal-home/icons/star-black.svg"
                  alt="arrow"
                />
              </div>
            </SwiperSlide>
            {/* Single Slider */}
            <SwiperSlide className="swiper-slide">
              <div className="bx-text-slide__item">
                <span className="text">UNIQUE AND CREATIVE SOLUTION</span>
                <img
                  className="arrow-img"
                  src="assets/images/personal-home/icons/star-black.svg"
                  alt="arrow"
                />
              </div>
            </SwiperSlide>
            {/* Single Slider */}
            <SwiperSlide className="swiper-slide">
              <div className="bx-text-slide__item">
                <span className="text">EXCEPTIONAL STRATEGY</span>
                <img
                  className="arrow-img"
                  src="assets/images/personal-home/icons/star-black.svg"
                  alt="arrow"
                />
              </div>
            </SwiperSlide>
            {/* Single Slider */}
            <SwiperSlide className="swiper-slide">
              <div className="bx-text-slide__item">
                <span className="text">24/7 ONLINE SUPPORT</span>
                <img
                  className="arrow-img"
                  src="assets/images/personal-home/icons/star-black.svg"
                  alt="arrow"
                />
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </section>
  );
};
