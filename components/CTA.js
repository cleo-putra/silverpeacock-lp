import Link from "next/link";

export const CTA1 = () => {
  return (
    <section className="bx-cta-desc">
      <div className="container bx-container">
        <div className="bx-cta-desc__inner">
          <div className="bx-cta-desc__content">
            <h3 className="title has_word_anim">
              <span className="bx-literata"></span> Achieve Financial Confidence with <br/>Our Trusted Expertise
            </h3>
          </div>
          <div
            className="bx-cta-desc__content wow fadeInUp"
            data-wow-delay=".3s"
          >
            <p className="text">
              At Silver Peacock, we deliver strategic accounting and taxation solutions tailored to your business objectives. Our advisors combine deep industry knowledge with precision and integrity—ensuring your financial operations remain compliant, efficient, and growth-ready.
            </p>
            <div className="bx-cta-desc__actions">
              <Link href="/contact" className="bx-btn">
                Get Started Now
                <i className="fi-rr-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const CTA2 = () => {
  return (
    <section className="bx-cta-desc section-gap pt-0">
      <div className="container bx-container">
        <div className="bx-cta-desc__inner">
          <div className="bx-cta-desc__content">
            <h3 className="title has_word_anim">
              <span className="bx-literata"> Comprehensive Strategies</span>
              Designed to Accelerate Your Business Growth Maximize Your
              Potential with Expert Guidance and Innovative Solutions.
            </h3>
          </div>
          <div
            className="bx-cta-desc__content wow fadeInUp"
            data-wow-delay=".3s"
          >
            <p className="text">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
            <div className="bx-cta-desc__actions">
              <Link href="/contact" className="bx-btn">
                View All Projects
                <i className="fi-rr-arrow-right" />
              </Link>
              <div className="bx-cta-desc__contact">
                <span>
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
                </span>
                <a href="tel:1800 698 968">1800 698 968</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const CTA3 = () => {
  return (
    <section className="bx-call-action bg-primary-color position-relative">
      <div className="container bx-container">
        <img
          className="paper-plane updown-ani"
          src="assets/images/icons/white-plane.png"
          alt="white-plane"
        />
        <div className="bx-call-action__inner">
          <div className="bx-call-action__img" >
            <img
              src="/assets/images/sp/contact-bg.webp"
          style={{marginBottom: "120px"}}
              alt="call-action-img"
            />
          </div>
          <div className="bx-call-action__content">
            <span className="sm-title">Start With Us</span>
            <h3 className="title has_word_anim">
              <span className="bx-literata"> Ready to Simplify Your Accounting and Tax Matters?</span>
            </h3>
            <p className="text wow fadeInUp" data-wow-delay=".3s">
              At Silver Peacock, we provide clear, reliable accounting and tax advice for individuals and small businesses. From bookkeeping to compliance and tax returns, our experts ensure your finances stay accurate and stress-free.
            </p>
            <div
              className="bx-call-action_btn wow fadeInUp"
              data-wow-delay=".5s"
            >
              <Link href="/contact" className="bx-btn">
                Book Your Free Consultation
                <i className="fi-rr-arrow-right" />
              </Link>
              {/* <Link href="/pricing" className="bx-btn outline-btn">
                See Our Pricing
                <i className="fi-rr-arrow-right" />
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const CTA4 = () => {
  return (
    <section
      className="bx-call-action background-image bx-hobble position-relative section-gap"
      style={{
        backgroundImage:
          'url("assets/images/finance-home/call-action/call-action-bg.png")',
      }}
    >
      <div className="container bx-container">
        {/* Shape  */}
        <div className="plane-shape">
          <img
            src="assets/images/icons/white-plane-2.svg"
            alt="white-plane-2"
          />
        </div>
        <div className="bx-call-action__inner">
          {/* Call Action Content */}
          <div className="bx-call-action__info">
            <div className="bx-section-head m-0">
              <small className="bx-section-head__label bg-white">
                Start With Us
              </small>
              <h3 className="bx-section-head__title has_word_anim">
                <span className="bx-literata"> Ready to </span>
                Transform Your Ideas <br />
                into Reality? Let’s Begin Your <br />
                Project Together
              </h3>
            </div>
            <div className="bx-call-action__review">
              {/* Trustpilot Review */}
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
                <div className="trustpilot-wrapper">
                  <div className="trustpilot-info">
                    <span>453+</span>
                    <img
                      src="assets/images/icons/trustpilot.png"
                      alt="trustpilot"
                    />
                  </div>
                  <p className="text">We have positive reviews</p>
                </div>
              </div>
              {/* Clutch Review  */}
              <div className="review-badge">
                <div className="review-logo">
                  <img src="assets/images/icons/clutch.svg" alt="Clutch Logo" />
                </div>
                <div className="review-badge-info">
                  <div className="review-rating">
                    <span className="rating-score">4.9</span>
                    <span className="stars">★★★★★</span>
                  </div>
                  <p className="review-text">
                    Based on <strong>67 reviews</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Call Action Button  */}
          <div className="bx-call-action__btn">
            <a href="#" className="bx-hover-layer-2" data-mouse-move>
              <svg
                width={19}
                height={19}
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5454 5.89727L2.44273 18.9952L0 16.5525L13.1027 3.45455H0V0H19V19H15.5454V5.89727Z"
                  fill="#223035"
                />
              </svg>
              <span> Drop Us a Line</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export const CTA5 = () => {
  return (
    <section className="bx-call-action section-gap z-index2">
      <div className="container bx-container">
        {/* <div className="bx-call-action__shapes">
          <img
            className="shape-1 spinner-ani"
            src="assets/images/icons/color-small-star-2.svg"
            alt="color-small-star-2"
          />
          <img
            className="shape-2 updown-ani"
            src="assets/images/icons/color-small-plane.svg"
            alt="color-small-plane"
          />
        </div> */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-6 col-12">
            <div className="bx-call-action__content text-center">
              <span className="sm-title">
Are you looking for someone to help?
</span>
              <h3 className="title has_word_anim">
                
Let us help you! Call Now : <br/>1800 983 448
              </h3>
              <div className="bx-call-action__btn wow fadeInUp">
                <Link href="/contact" className="bx-btn">
                  Free Consultation
                  <i className="fi-rr-arrow-right" />
                </Link>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
