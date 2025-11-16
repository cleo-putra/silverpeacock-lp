"use client";
import { bexpartUtility } from "@/utility";
import Link from "next/link";
import { useEffect } from "react";
import { Accordion } from "react-bootstrap";
import { Partner1 } from "./Partner";

export const WhyChooseUs1 = () => {
  useEffect(() => {
    bexpartUtility.animatedSvg();
  }, []);

  const whyChooseUsData = [
    {
      id: 1,
      icon: `<svg class="animated-svg" width="107" height="107" viewBox="0 0 107 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M69.5041 54.6589C82.1356 54.6589 92.3753 44.4192 92.3753 31.7878C92.3753 19.1563 82.1356 8.9165 69.5041 8.9165C56.8727 8.9165 46.6328 19.1563 46.6328 31.7878C46.6328 44.4192 56.8727 54.6589 69.5041 54.6589Z" stroke="#85A6A6" stroke-miterlimit="10" style="stroke-dasharray: 143.724; stroke-dashoffset: 0;"></path>
                <path d="M28.3566 86.6699C35.9404 86.6699 42.0884 80.5221 42.0884 72.9383C42.0884 65.3545 35.9404 59.2065 28.3566 59.2065C20.7728 59.2065 14.625 65.3545 14.625 72.9383C14.625 80.5221 20.7728 86.6699 28.3566 86.6699Z" stroke="#85A6A6" stroke-miterlimit="10" style="stroke-dasharray: 86.291; stroke-dashoffset: 0;"></path>
                <path d="M74.0968 98.0834C80.4003 98.0834 85.5102 92.9737 85.5102 86.6702C85.5102 80.3668 80.4003 75.2568 74.0968 75.2568C67.7935 75.2568 62.6836 80.3668 62.6836 86.6702C62.6836 92.9737 67.7935 98.0834 74.0968 98.0834Z" stroke="#85A6A6" stroke-miterlimit="10" style="stroke-dasharray: 71.7221; stroke-dashoffset: 0;"></path>
            </svg>`,
      title: "EXPERIENCED",
      description:
        "With our 20 and more years of experience in the field working with small and big companies in Sydney & across Australia, we deliver more value for less.",
    },
    {
      id: 2,
      icon: `<svg class="animated-svg" width="107" height="107" viewBox="0 0 107 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M45.0728 49.7104H33.2583C30.4495 49.7104 28.1758 51.984 28.1758 54.7928V77.6194H45.0728V49.7104Z" stroke="#85A6A6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" style="stroke-dasharray: 87.4325; stroke-dashoffset: 0;"></path>
                <path d="M56.8944 29.4248H50.1177C47.3089 29.4248 45.0352 31.6986 45.0352 34.5073V77.575H61.9323V34.5073C61.9323 31.6986 59.7032 29.4248 56.8944 29.4248Z" stroke="#85A6A6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" style="stroke-dasharray: 125.751; stroke-dashoffset: 0;"></path>
                <path d="M73.7756 57.2896H61.9609V77.5752H78.8581V62.372C78.8136 59.5633 76.5397 57.2896 73.7756 57.2896Z" stroke="#85A6A6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" style="stroke-dasharray: 72.1632; stroke-dashoffset: 0;"></path>
                <path d="M40.1263 98.0832H66.8763C89.1679 98.0832 98.0846 89.1666 98.0846 66.8748V40.1248C98.0846 17.8332 89.1679 8.9165 66.8763 8.9165H40.1263C17.8346 8.9165 8.91797 17.8332 8.91797 40.1248V66.8748C8.91797 89.1666 17.8346 98.0832 40.1263 98.0832Z" stroke="#85A6A6" stroke-linecap="round" stroke-linejoin="round" style="stroke-dasharray: 312.526; stroke-dashoffset: 0;"></path>
            </svg>`,
      title: "NO DOWN TIME",
      description:
        "With our 364-day support , businesses have nothing to worry about. We are always just a phone call or email from you.",
    },
    {
      id: 3,
      icon: `<svg class="animated-svg" width="107" height="107" viewBox="0 0 107 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.91797 40.1248V31.2082C8.91797 17.8332 17.8346 8.9165 31.2096 8.9165H75.793C89.168 8.9165 98.0846 17.8332 98.0846 31.2082V40.1248" stroke="#85A6A6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" style="stroke-dasharray: 133.402; stroke-dashoffset: 0;"></path>
                <path d="M8.91797 66.875V75.7916C8.91797 89.1666 17.8346 98.0834 31.2096 98.0834H75.793C89.168 98.0834 98.0846 89.1666 98.0846 75.7916V66.875" stroke="#85A6A6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" style="stroke-dasharray: 133.402; stroke-dashoffset: 0;"></path>
                <path d="M29.8711 41.2842L53.5002 54.9712L76.9511 41.3733" stroke="#85A6A6" stroke-linecap="round" stroke-linejoin="round" style="stroke-dasharray: 54.415; stroke-dashoffset: 0;"></path>
                <path d="M53.5 79.2244V54.9265" stroke="#85A6A6" stroke-linecap="round" stroke-linejoin="round" style="stroke-dasharray: 24.2979; stroke-dashoffset: 0;"></path>
                <path d="M47.9719 28.0431L33.7053 35.9791C30.4953 37.7624 27.8203 42.2652 27.8203 45.9657V61.0795C27.8203 64.7799 30.4507 69.2827 33.7053 71.0661L47.9719 79.0018C51.0037 80.6959 55.9969 80.6959 59.0732 79.0018L73.34 71.0661C76.55 69.2827 79.225 64.7799 79.225 61.0795V45.9657C79.225 42.2652 76.5944 37.7624 73.34 35.9791L59.0732 28.0431C55.9969 26.3043 51.0037 26.3043 47.9719 28.0431Z" stroke="#85A6A6" stroke-linecap="round" stroke-linejoin="round" style="stroke-dasharray: 166.821; stroke-dashoffset: 0;"></path>
            </svg>`,
      title: "NO SURPRISE FEES",
      description:
        "Our fixed price packages allow you to plan ahead and budget, knowing that you will never have hidden fees with us.",
    },
   
  ];
  return (
    <div className="bg-secondary-color bg-overlay">
      {/* Start Why Choose Area */}
      <section className="bx-why-choose section-gap">
        <div className="container bx-container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-6 col-md-10 col-12">
              <div className="bx-section-head text-center">
                <small className="bx-section-head__label text-white">
                  Grow | Plan | Protect
                </small>
                <h3 className="bx-section-head__title text-white has_word_anim">
                  <span className="bx-literata">Why Choose</span> Silver Peacook & Co?
                </h3>
              </div>
            </div>
          </div>
          <div className=" bx-why-choose__slider">
            <div className="row">
              {whyChooseUsData.map((item) => (
                <div className="col-md-4">
                  <div className="bx-why-choose__card">
                    <div
                      className="card-icon"
                      dangerouslySetInnerHTML={{ __html: item.icon }}
                    />
                    <div className="card-content">
                      <h4 className="title">{item.title}</h4>
                      <p className="text">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* End Why Choose Area */}
      {/* Start Video Area */}
      <div className="bx-video bx-hobble">
        <div className="container bx-container">
          <div
            className="bx-video__body position-relative wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="bx-video__img">
              <img
                src="assets/images/main-home/video/video-img.png"
                alt="video-img"
              />
            </div>
            <a
              href="https://www.youtube.com/watch?v=gyGsPlt06bo"
              className="bx-video__btn popup-video bx-hover-layer-2"
            >
              <i className="fi fi-sr-play" />
            </a>
          </div>
        </div>
      </div>
      {/* End Video Area */}
      {/* Start Partner Area */}
      <div className="bx-partner section-gap">
        {/* <div className="container bx-container">
          <div className="bx-partner__section-head">
            <h3 className="title has_word_anim">
              9493+ Global brands growth with BExpert business & finance
              solutions
            </h3>
          </div>
          <Partner1 />
        </div> */}
      </div>
      {/* End Partner Area */}
    </div>
  );
};

export const WhyChooseUs2 = ({
  containerClass = "bx-why-choose bg-color-1 position-relative",
  subtitleColor = "bg-white",
}) => {
  const faqData = [
    {
      id: 1,
      question: "Proven Expertise in Finance and Strategy",
      answer:
        "We understand that no two businesses are alike, which is why we provide customized financial solutions to meet your specific goals",
    },
    {
      id: 2,
      question: "Client-Focused Approach with Measurable Results",
      answer:
        "We understand that no two businesses are alike, which is why we provide customized financial solutions to meet your specific goals",
    },
    {
      id: 3,
      question: "Tailored Solutions for Every Business Need",
      answer:
        "We understand that no two businesses are alike, which is why we provide customized financial solutions to meet your specific goals",
    },
  ];
  return (
    <section className={containerClass}>
      {/* Why Choose Image  */}
      <div className="w-choose-img-wrapper">
        <img
          className="w-chooose-img"
          src="assets/images/finance-home/why-choose/why-choose-img.png"
          alt="why-choose-img"
        />
      </div>
      <div className="container bx-container">
        <div className="row justify-content-end g-0">
          <div className="col-lg-12 col-xl-6">
            {/* Why Choose Content  */}
            <div className="w-choose-content section-gap">
              {/* Section Head  */}
              <div className="bx-section-head m-0">
                <small className={`bx-section-head__label ${subtitleColor}`}>
                  Why Choose Us
                </small>
                <h3 className="bx-section-head__title has_word_anim">
                  <span className="bx-literata">Expert Solutions </span>
                  Proven Results Why We're the Best Choice
                </h3>
              </div>
              <div className="faq-inner accordion wow fadeInUp">
                <Accordion defaultActiveKey={`collapse${faqData[0].id}`}>
                  {faqData.map((item) => (
                    <div className="accordion-item" key={item.id}>
                      <h2 className="accordion-header" id="headingOne">
                        <Accordion.Toggle
                          as={"button"}
                          className="accordion-button"
                          eventKey={`collapse${item.id}`}
                        >
                          <span>0{item.id}.</span>
                          {item.question}
                          <svg
                            width={12}
                            height={12}
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.81817 3.72459L1.54278 11.997L0 10.4542L8.27541 2.18182H0V0H12V12H9.81817V3.72459Z"
                              fill="#223035"
                            />
                          </svg>
                        </Accordion.Toggle>
                      </h2>
                      <Accordion.Collapse eventKey={`collapse${item.id}`}>
                        <div className="accordion-body">
                          <p className="accordion-text">{item.answer}</p>
                        </div>
                      </Accordion.Collapse>
                    </div>
                  ))}
                </Accordion>
              </div>
              <div className="w-choose-action wow fadeInUp">
                <Link href="about" className="bx-btn">
                  More Abut Us <i className="fi-rr-arrow-right" />
                </Link>
                <div className="w-choose-contact">
                  <p>
                    <svg
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.75 12.315V14.9671C15.75 15.3608 15.4456 15.6875 15.0529 15.7153C14.7248 15.7384 14.4572 15.75 14.25 15.75C7.62255 15.75 2.25 10.3774 2.25 3.75C2.25 3.54278 2.26159 3.27515 2.28476 2.94713C2.31253 2.55441 2.6392 2.25 3.03289 2.25H5.68508C5.87758 2.25 6.03882 2.39582 6.05815 2.58735C6.0755 2.7593 6.09163 2.89735 6.10655 3.00151C6.25826 4.06104 6.56815 5.06952 7.01152 6.00227C7.08269 6.15199 7.03628 6.33119 6.90139 6.42754L5.28266 7.58385C6.26814 9.88583 8.11417 11.7319 10.4162 12.7174L11.5703 11.1014C11.6679 10.9649 11.8492 10.918 12.0007 10.9899C12.9334 11.4329 13.9418 11.7425 15.0012 11.8938C15.1047 11.9087 15.2419 11.9246 15.4126 11.9419C15.6042 11.9612 15.75 12.1225 15.75 12.315Z"
                        fill="white"
                      />
                    </svg>
                    24/7 Support
                  </p>
                  <a href="tel:1800 698 968">1800 698 968</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
