"use client";

import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

export const Testimonial1 = ({
  containerClass = "bx-testimonial section-gap background-image",
  bgImage = "assets/images/main-home/testimonial/bg.png",
}) => {
  const testimonials = [
    {
      id: 1,
      image: "/assets/images/main-home/testimonial/img-1.png",
      name: "Raymond I",
      designation: "H2Flow Plumbing Solutions Pty Ltd",
      text: "Silver Peacock & Co helped me grow my business, from Bookkeeping to payroll to taxation, I focused on doing what I love the most.”",
      reviews: "365%",
      reviewsText: "Increase in customer growth rate",
    },
    {
      id: 2,
      image: "/assets/images/main-home/testimonial/img-2.png",
      name: "Rodi N",
      designation: "Revive Clinics Pty Ltd",
      text: "Starting a business is never easy, the team at Silver Peacock & Co were there from day one, explaining all my options, discussed short and long term planning. The team helped me from business name registration to providing advice on my trade mark application.",
      reviews: "$643",
      reviewsText: "Daily savings for your any bank accounts",
    },
    {
      id: 3,
      image: "/assets/images/main-home/testimonial/img-3.png",
      name: "Jason I",
      designation: "Mobile Mart Pty Ltd",
      text: "When I wanted to change my accountants, I was referred to Silver Peacock & Co. They are very hands on, responsive and don’t charge by the hour. Most of all I enjoyed their transparent and efficient bookkeeping and taxation services.",
      reviews: "274%",
      reviewsText: "Increase in customer growth rate",
    },
    {
      id: 4,
      image: "/assets/images/main-home/testimonial/img-4.png",
      name: "Eddie P",
      designation: "Xpert Aircon Solutions Pty Ltd",
      text: "The accountants at Silver Peacock & Co took care of all my accounts, bookkeeping, payroll and taxation. I never had to speak to the ATO or received any penalties since they became my accountants.",
      reviews: "365%",
      reviewsText: "Increase in customer growth rate",
    },
    {
      id: 5,
      image: "/assets/images/main-home/testimonial/img-1.png",
      name: "Roy",
      designation: "JAC HSC Pty Ltd",
      text: "Our business is a family-owned business for many decades. Thanks to the help and experience of Silver Peacock, we were able to improve our staff retention rate, develop tax effective strategies, achieve asset protection through business restructuring.",
      reviews: "365%",
      reviewsText: "Increase in customer growth rate",
    },
    {
      id: 6,
      image: "/assets/images/main-home/testimonial/img-1.png",
      name: "Simone R",
      designation: "INSIGHT ELECTRICAL AND COMMUNICATION Pty Ltd",
      text: "Silver Peacock helped me structured my company and protected my assets. Now I’m operating multiple companies in the construction industry. Thanks to the team at Silver Peacock who take the time to explain things clearly and discuss options for keeping my tax to a minimum.",
      reviews: "365%",
      reviewsText: "Increase in customer growth rate",
    },
    {
      id: 7,
      image: "/assets/images/main-home/testimonial/img-1.png",
      name: "Gerrard F",
      designation: "Mobile Mart Pty Ltd",
      text: "Many accountants promise the world and don’t deliver, you get what you pay for. The team at Silver Peacock have always been there to answer every question I had, weekday or weekend, always there. They provided me with more than just accounting and taxation services.",
      reviews: "365%",
      reviewsText: "Increase in customer growth rate",
    },
    
    {
      id: 8,
      image: "/assets/images/main-home/testimonial/img-1.png",
      name: "Tamer E",
      designation: "SYDNEY SHUTTLE Pty Ltd",
      text: "I initially operated a small business in this industry, but after investing a lot of time with Silver Peacock discussing business automation options so I can streamline my operations, my business has grown and I have recently bought out one of my competitors in the industry. Silver Peacock helped me with all the strategies to take over the business.",
      reviews: "365%",
      reviewsText: "Increase in customer growth rate",
    },
  ];
  return (
    <section
      className={containerClass}
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="container bx-container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-6 col-md-10 col-12">
            <div className="bx-section-head text-center">
              <small className="bx-section-head__label bg-white">
                Our Testimonial
              </small>
              <h3 className="bx-section-head__title has_word_anim">
                <span className="bx-literata">Real Stories</span> from Our
                <br />
                Satisfied Clients
              </h3>
            </div>
          </div>
        </div>
        <Swiper
          {...sliderProps.testimonial__slider}
          className=" bx-testimonial__slider"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide className="swiper-slide" key={testimonial.id}>
              {/* Single Slider */}
              <div className="bx-testimonial__item">
                
                <div className="bx-testimonial__content">
                  <p className="text">{testimonial.text}</p>
                  <div className="bx-testimonial__info">
                    <h4 className="name">{testimonial.name}</h4>
                    <p className="designation">{testimonial.designation}</p>
                  </div>
                </div>
               
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export const Testimonial2 = ({
  containerClass = "bx-testimonial section-gap bg-color-1 position-relative",
}) => {
  return (
    <section className={containerClass}>
      <div className="container bx-container overflow-hidden">
        <div className="owl-carousel bx-testimonial__slider-2 ">
          <Swiper {...sliderProps.testimonial__slider_2}>
            <SwiperSlide className="swiper-slide">
              {/* Single Slider  */}
              <div className="testimonial-item">
                <div className="testimonial-inner">
                  <div className="quotation-icon">
                    <img
                      src="assets/images/icons/color-quotation.svg"
                      alt="color-quotation"
                    />
                  </div>
                  <div className="testimonial-info">
                    <img
                      src="assets/images/icons/trustpilot.png"
                      alt="trustpilot"
                    />
                    <h3 className="title">
                      <span className="bx-literata">"Exceptional service!</span>
                      Their tailored financial strategies transformed our
                      business, leading to increased profitability and long-term
                      growth. Highly recommend!"
                    </h3>
                  </div>
                </div>
                <div className="testimonial-author">
                  <div className="author-img">
                    <img
                      src="assets/images/business-home/testimonial/testimonial-1.png"
                      alt="testimonial-img"
                    />
                  </div>
                  <div className="author-info">
                    <div className="name">David Smith</div>
                    <div className="role">Investor of BExpert Solutions</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              {/* Single Slider  */}
              <div className="testimonial-item">
                <div className="testimonial-inner">
                  <div className="quotation-icon">
                    <img
                      src="assets/images/icons/color-quotation.svg"
                      alt="color-quotation"
                    />
                  </div>
                  <div className="testimonial-info">
                    <img
                      src="assets/images/icons/trustpilot.png"
                      alt="trustpilot"
                    />
                    <h3 className="title">
                      <span className="bx-literata">"Exceptional service!</span>
                      Their tailored financial strategies transformed our
                      business, leading to increased profitability and long-term
                      growth. Highly recommend!"
                    </h3>
                  </div>
                </div>
                <div className="testimonial-author">
                  <div className="author-img">
                    <img
                      src="assets/images/business-home/testimonial/testimonial-1.png"
                      alt="testimonial-img"
                    />
                  </div>
                  <div className="author-info">
                    <div className="name">David Smith</div>
                    <div className="role">Investor of BExpert Solutions</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <div className="owl-dots"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
