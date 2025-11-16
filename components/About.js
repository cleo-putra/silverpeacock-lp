import Link from "next/link";
import Counter from "./Counter";

export const About1 = () => {
  return (
    <section className="bx-about bx-hobble position-relative pd-top-120">
      <div className="container bx-container">
        <div className="bx-about__wrapper">
          {/* About Widget  */}
          <div className="bx-about__widget img-wrapper">
            <div className="bx-about__img">
              <img
                src="assets/images/main-home/about/about-img.png"
                alt="about-img"
              />
            </div>
            <div className="bx-about__img-info has_word_anim">
              <h3>
                <span>Investment</span> Tools
              </h3>
              <p>
                Our platform offers a comprehensive suite of investment tools
                and market insights, designed to empower users.
              </p>
            </div>
          </div>

          {/* About Widget  */}
          <div className="bx-about__widget content-wrapper position-relative">
            <div
              className="bx-about__content wow fadeInUp"
              data-wow-delay=".3s"
            >
              <span className="bx-about__content-title">
                Number of Prestige
              </span>
              <div className="bx-about__trustpilot">
                <ul>
                  {[1, 2, 3].map((num) => (
                    <li key={num}>
                      <img
                        src={`assets/images/main-home/about/trust-${num}.png`}
                        alt={`trust-${num}`}
                      />
                    </li>
                  ))}
                </ul>
                <div className="bx-about__trustpilot-info">
                  <h4>
                    453+
                    <img
                      src="assets/images/main-home/about/trustpilot.png"
                      alt=""
                    />
                  </h4>
                  <p>We have positive reviews</p>
                </div>
              </div>
            </div>

            <div
              className="bx-about__content wow fadeInUp"
              data-wow-delay=".5s"
            >
              <span className="bx-about__content-title">
                Business & Finance
              </span>
              <div className="bx-about__content-list">
                <ul>
                  {[
                    "Real-Time Market Data Updates",
                    "Comprehensive Financial News Coverage",
                    "Investment Portfolio Management Tools",
                    "Customizable Stock Watchlists",
                    "Interactive Financial Calculators",
                  ].map((item, index) => (
                    <li key={index}>
                      <i className="fi fi-ss-check-circle" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link
              href="/about"
              className="bx-about__circle-btn bx-hover-layer-2 wow fadeInUp"
              data-wow-delay=".7s"
              data-mouse-move
            >
              <div className="bx-about__circle-btn-info">
                <i className="fi fi-bs-arrow-up-right" />
                More About Us
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export const About2 = () => {
  const counterData = [
    {
      id: 1,
      end: 456,
      prefix: "k+",
      text: "Customers are served behind the services",
      icon: `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.512 28.7497V25.465C12.1625 25.1595 10.9976 24.5739 10.0173 23.7081C9.037 22.8424 8.31769 21.6202 7.85938 20.0416L10.6857 18.8958C11.0676 20.118 11.6341 21.0473 12.3853 21.6839C13.1364 22.3204 14.1231 22.6387 15.3453 22.6387C16.3892 22.6387 17.274 22.4032 17.9997 21.9322C18.7254 21.4611 19.0882 20.7291 19.0882 19.736C19.0882 18.8449 18.8081 18.1383 18.2479 17.6163C17.6878 17.0943 16.3892 16.5023 14.3522 15.8403C12.1625 15.1528 10.6602 14.3317 9.84543 13.3769C9.03064 12.422 8.62324 11.2571 8.62324 9.88217C8.62324 8.22713 9.15795 6.94129 10.2274 6.02465C11.2968 5.10801 12.3916 4.58604 13.512 4.45872V1.25049H16.5674V4.45872C17.8406 4.66242 18.8909 5.12711 19.7184 5.85278C20.5459 6.57845 21.1506 7.46326 21.5326 8.50721L18.7063 9.7294C18.4007 8.91461 17.9679 8.30351 17.4077 7.89612C16.8475 7.48872 16.0837 7.28503 15.1161 7.28503C13.9958 7.28503 13.1428 7.53328 12.5571 8.0298C11.9715 8.52631 11.6787 9.14377 11.6787 9.88217C11.6787 10.7224 12.0606 11.3844 12.8245 11.8682C13.5884 12.352 14.9124 12.8612 16.7966 13.396C18.5535 13.9052 19.8839 14.7136 20.7878 15.8212C21.6917 16.9288 22.1437 18.2083 22.1437 19.6597C22.1437 21.4675 21.609 22.8424 20.5395 23.7845C19.4701 24.7266 18.1461 25.3123 16.5674 25.5414V28.7497H13.512Z" fill="#85A6A6"></path>
            </svg>`,
    },
    {
      id: 2,
      end: 644,
      prefix: "k+",
      text: "Customers are served behind the services",
      icon: `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.3854 11.4079C22.2479 11.4079 21.26 11.0686 20.4218 10.3901C19.5837 9.71157 19.0249 8.85342 18.7455 7.81567H11.2317C11.0122 8.65386 10.5981 9.37729 9.98939 9.98598C9.38071 10.5947 8.65727 11.0088 7.81909 11.2283V18.742C8.85684 19.0214 9.71499 19.5802 10.3935 20.4184C11.0721 21.2566 11.4113 22.2445 11.4113 23.382C11.4113 24.6992 10.9423 25.8267 10.0044 26.7647C9.06639 27.7027 7.93883 28.1717 6.62168 28.1717C5.30452 28.1717 4.17696 27.7027 3.23899 26.7647C2.30102 25.8267 1.83203 24.6992 1.83203 23.382C1.83203 22.2445 2.1713 21.2566 2.84983 20.4184C3.52836 19.5802 4.38651 19.0214 5.42426 18.742V11.2283C4.38651 10.9489 3.52836 10.3901 2.84983 9.55191C2.1713 8.71373 1.83203 7.73584 1.83203 6.61826C1.83203 5.30111 2.30102 4.17354 3.23899 3.23557C4.17696 2.2976 5.30452 1.82861 6.62168 1.82861C7.73926 1.82861 8.71714 2.16788 9.55533 2.84641C10.3935 3.52495 10.9523 4.38309 11.2317 5.42085H18.7455C19.0249 4.38309 19.5837 3.52495 20.4218 2.84641C21.26 2.16788 22.2479 1.82861 23.3854 1.82861C24.7026 1.82861 25.8301 2.2976 26.7681 3.23557C27.7061 4.17354 28.1751 5.30111 28.1751 6.61826C28.1751 7.93541 27.7061 9.06297 26.7681 10.0009C25.8301 10.9389 24.7026 11.4079 23.3854 11.4079ZM6.62168 25.7768C7.28025 25.7768 7.84403 25.5374 8.31302 25.0584C8.782 24.5794 9.0165 24.0206 9.0165 23.382C9.0165 22.7234 8.782 22.1597 8.31302 21.6907C7.84403 21.2217 7.28025 20.9872 6.62168 20.9872C5.98306 20.9872 5.42426 21.2217 4.9453 21.6907C4.46634 22.1597 4.22685 22.7234 4.22685 23.382C4.22685 24.0206 4.46634 24.5794 4.9453 25.0584C5.42426 25.5374 5.98306 25.7768 6.62168 25.7768ZM6.62168 9.01308C7.28025 9.01308 7.84403 8.77859 8.31302 8.3096C8.782 7.84061 9.0165 7.27683 9.0165 6.61826C9.0165 5.95968 8.782 5.3959 8.31302 4.92691C7.84403 4.45793 7.28025 4.22344 6.62168 4.22344C5.98306 4.22344 5.42426 4.45793 4.9453 4.92691C4.46634 5.3959 4.22685 5.95968 4.22685 6.61826C4.22685 7.27683 4.46634 7.84061 4.9453 8.3096C5.42426 8.77859 5.98306 9.01308 6.62168 9.01308ZM23.3854 28.1717C22.0683 28.1717 20.9407 27.7027 20.0027 26.7647C19.0648 25.8267 18.5958 24.6992 18.5958 23.382C18.5958 22.0649 19.0648 20.9373 20.0027 19.9993C20.9407 19.0614 22.0683 18.5924 23.3854 18.5924C24.7026 18.5924 25.8301 19.0614 26.7681 19.9993C27.7061 20.9373 28.1751 22.0649 28.1751 23.382C28.1751 24.6992 27.7061 25.8267 26.7681 26.7647C25.8301 27.7027 24.7026 28.1717 23.3854 28.1717ZM23.3854 25.7768C24.044 25.7768 24.6078 25.5374 25.0768 25.0584C25.5458 24.5794 25.7803 24.0206 25.7803 23.382C25.7803 22.7234 25.5458 22.1597 25.0768 21.6907C24.6078 21.2217 24.044 20.9872 23.3854 20.9872C22.7269 20.9872 22.1631 21.2217 21.6941 21.6907C21.2251 22.1597 20.9906 22.7234 20.9906 23.382C20.9906 24.0206 21.2251 24.5794 21.6941 25.0584C22.1631 25.5374 22.7269 25.7768 23.3854 25.7768ZM23.3854 9.01308C24.044 9.01308 24.6078 8.77859 25.0768 8.3096C25.5458 7.84061 25.7803 7.27683 25.7803 6.61826C25.7803 5.95968 25.5458 5.3959 25.0768 4.92691C24.6078 4.45793 24.044 4.22344 23.3854 4.22344C22.7269 4.22344 22.1631 4.45793 21.6941 4.92691C21.2251 5.3959 20.9906 5.95968 20.9906 6.61826C20.9906 7.27683 21.2251 7.84061 21.6941 8.3096C22.1631 8.77859 22.7269 9.01308 23.3854 9.01308Z" fill="#85A6A6"></path>
            </svg>`,
    },
  ];
  return (
    <section className="bx-about section-gap position-relative">
      <div className="container bx-container">
        {/* About Content */}
        <div className="bx-about__inner">
          {/* Section head  */}
          <div className="bx-section-head text-center wow fadeInLeft">
            <small className="bx-section-head__label">
              Meet Our CEO
            </small>
          </div>
          {/* Main Content  */}
          <div className="bx-about__content">
            <h3 className="title has_word_anim">
              With over 10 years’ experience in the financial services industry, Wagdi Andrawis founded Silver Peacock & Co with the goal of adopting innovative methodologies to provide support to business enterprises regardless of its scale of economy.
            </h3>
            <div className="bx-about__counter">
              {counterData.map((item) => (
                <div className="counter-card wow fadeInUp" key={item.id}>
                  <div
                    className="icon"
                    dangerouslySetInnerHTML={{ __html: item.icon }}
                  ></div>
                  <div className="info">
                    <h4 className="title">
                      <Counter end={item.end} />
                      {item.prefix}
                    </h4>
                    <p className="text">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bx-about__btn wow fadeInUp" data-wow-delay=".7s">
              <Link href="contact" className="bx-btn">
                Get Started Now
                <i className="fi-rr-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bx-about__image-container">
        {/* About Image  */}
        <div className="bx-about__image">
          <img
            className="about-img"
            src="assets/images/sp/wagdi-ceo.jpg"
            alt="about-img"
          />
         
        </div>
      </div>
    </section>
  );
};
