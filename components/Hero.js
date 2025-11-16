"use client";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Counter from "./Counter";

export const Hero1 = () => {
  const heroData = [
    // {
    //   id: 1,
    //   title: "<span>Inspiration</span> and Growth in <br /> Every Detail",
    //   smallText: "SILVER PEACOCK & CO",
    //   description:
    //     "We offer full range of consultancy and training for data consultation strategic ways.",
    //   image: "/assets/images/main-home/hero/hero-img-1.png",
    //   bgImage: "/assets/images/main-home/hero/hero-bg-1.png",
    //   counter: {
    //     icon: "fi fi-rr-briefcase",
    //     value: 5939,
    //     text: "Project Completed",
    //     prefix: "+",
    //   },
    // },
    // {
    //   id: 2,
    //   title: "<span>Success</span> and Insight in <br /> Every Strategy",
    //   smallText: "SILVER PEACOCK & CO",
    //   description:
    //     "We offer full range of consultancy and training for data consultation strategic ways.",
    //   image: "/assets/images/main-home/hero/hero-img-2.png",
    //   bgImage: "/assets/images/main-home/hero/hero-bg-2.png",
    //   counter: {
    //     icon: "fi fi-rr-award",
    //     value: 456,
    //     text: "Global Award",
    //     prefix: "+",
    //   },
    // },
    {
      id: 3,
      title: "<span>Construction</span> and Trade Tax Specialists",
      smallText: "SILVER PEACOCK & CO",
      description:
        "We offer full range of consultancy and training for data consultation strategic ways.",
      image: "/assets/images/main-home/hero/hero-img-3.png",
      bgImage: "/assets/images/main-home/hero/hero-bg-3.png",
      counter: {
        icon: "fi fi-rr-smile",
        value: 12,
        text: "Awards",
        prefix: "k+",
      },
    },
  ];
  return (
    <section className="bx-hero position-relative">
      <Swiper
        {...sliderProps.hero__slider}
        className="owl-carousel bx-hero__slider"
      >
        {heroData.map((item) => (
          <SwiperSlide className="swiper-slide">
            {/* Slider Items  */}
            <div className="bx-hero__slider-items">
              {/* Hero BG  */}
              <div className="bx-hero__bg">
                <img src={item.bgImage} alt="hero-bg" />
              </div>
              <div className="container bx-container-expand z-index2">
                <div className="bx-hero__wrapper">
                  {/* Hero Content */}
                  <div className="bx-hero__content">
                    <small>{item.smallText}</small>
                    <h1 dangerouslySetInnerHTML={{ __html: item.title }} />
                    <div className="bx-hero__content-btm d-flex">
                      <Link href="about">
                        <svg
                          width={160}
                          height={161}
                          viewBox="0 0 160 161"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M131.409 59.6687C131.409 55.6532 126.549 53.6484 123.718 56.496L23.053 157.753C21.6844 159.13 19.4567 159.129 18.0883 157.752L3.15728 142.728C1.80052 141.363 1.80072 139.158 3.15772 137.793L103.913 36.4454C106.735 33.6067 104.725 28.7727 100.722 28.7727H4C2.067 28.7727 0.5 27.2057 0.5 25.2727V4C0.5 2.06701 2.067 0.5 4 0.5H156C157.933 0.5 159.5 2.067 159.5 4V157C159.5 158.933 157.933 160.5 156 160.5H134.909C132.976 160.5 131.409 158.933 131.409 157V59.6687Z"
                            stroke="white"
                            strokeOpacity="0.5"
                          />
                        </svg>
                      </Link>
                      <div className="bx-hero__content-desc">
                        <p>{item.description}</p>
                        <Link href="about">
                          Start Your Journey
                          <i className="fi fi-rs-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* Hero Image */}
                  <div className="bx-hero__img">
                    <img src={item.image} alt="hero-img-1" />
                  </div>
                  {/* Hero Counter */}
                  <div className="bx-hero__counter">
                    <div className="circle-overlay" />
                    <div className="bx-hero__counter-icon">
                      <i className={item.counter.icon} />
                    </div>
                    <div className="bx-hero__counter-desc">
                      <h4>
                        <Counter end={item.counter.value} />
                        {item.counter.prefix}
                      </h4>
                      <p>{item.counter.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="owl-dots"></div>
      </Swiper>
    </section>
  );
};

export const Hero2 = () => {
  const heroData = [
    {
      id: 1,
      title: `<span class="bx-literata"> Watch the creative</span>process behind the business and finance`,
      image: "/assets/images/finance-home/hero/slider-bg-1.png",
      video: "https://www.youtube.com/watch?v=gyGsPlt06bo",
    },
    {
      id: 2,
      title: `<span class="bx-literata"> Watch the creative</span>process behind the business and finance`,
      image: "/assets/images/finance-home/hero/slider-bg-2.png",
      video: "https://www.youtube.com/watch?v=gyGsPlt06bo",
    },
    {
      id: 3,
      title: `<span class="bx-literata"> Watch the creative</span>process behind the business and finance`,
      image: "/assets/images/finance-home/hero/slider-bg-3.png",
      video: "https://www.youtube.com/watch?v=gyGsPlt06bo",
    },
  ];
  return (
    <section className="bx-hero position-relative bg-color-1">
      <img
        className="bx-hero__shape rotate-ani"
        src="assets/images/icons/white-brand-2.svg"
        alt="white-brand-2"
      />
      {/* Content Top  */}
      <div className="bx-hero__top">
        {/* Title  */}
        <div className="bx-hero__cont">
          <h2 className=" has_word_anim">
            <span className="bx-literata">Silver Peacock & Co</span><br/>
          </h2>
        </div>
        {/* Client Box  */}
        <div className="bx-hero__client-box wow fadeInUp" data-wow-delay=".3s">
          <img
            className="box-shape spinner-ani"
            src="assets/images/icons/offwhite-brand.png"
            alt="offwhite-brand"
          />
          <div className="bx-hero__client-info">
            <ul className="client-img-list">
              <li>
                <img
                  src="assets/images/finance-home/hero/client-1.png"
                  alt="client-1"
                />
              </li>
              <li>
                <img
                  src="assets/images/finance-home/hero/client-2.png"
                  alt="client-1"
                />
              </li>
              <li>
                <img
                  src="assets/images/finance-home/hero/client-3.png"
                  alt="client-1"
                />
              </li>
            </ul>
            <div className="trustpilot-info">
              
              <img src="assets/images/icons/trustpilot.png" alt="trustpilot" />
            </div>
            <p className="text">We have positive reviews</p>
          </div>
          <h4 className="title">
            Expert Financial & Accounting Solutions for Your Assets Growth
          </h4>
          <div className="bx-hero__client-btn">
            <Link href="contact" className="bx-btn">
              Contact Us
              <i className="fi-rr-arrow-right" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container bx-container-expand">
        <Swiper
          {...sliderProps.hero__slider}
          className="owl-carousel bx-hero__slider"
        >
          {heroData.map((item) => (
            <SwiperSlide className="swiper-slide" key={item.id}>
              <div className="bx-hero__slider-items">
                <div className="bx-hero__bg">
                  <img src={item.image} alt="slider-bg" />
                </div>
                <div className="bx-slider__content">
                  <h2
                    className="title"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  <div className="bx-slider__video">
                    <a href={item.video} className="bx-video__btn popup-video">
                      <i className="fi fi-sr-play" />
                    </a>
                    <div className="video-content">
                      <p>Watch the Video</p>
                      <span>Know About Us</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="owl-dots"></div>
        </Swiper>
      </div>
    </section>
  );
};
