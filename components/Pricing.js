import Link from "next/link";

const Pricing = ({
  containerClass = "bx-pricing section-gap",
  titleShow = true,
}) => {
  return (
    <section className={containerClass}>
      <div className="container">
        {titleShow && (
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              {/* Section Head  */}
              <div className="bx-section-head text-center">
                <small className="bx-section-head__label">Pricing Plan</small>
                <h3 className="bx-section-head__title has_word_anim">
                  Affordable Plans Designed for <br />
                  Every Stage of Growth
                </h3>
              </div>
            </div>
          </div>
        )}
        <div className="bx-pricing__wrapper">
          {/* Single Prcing  */}
          <div className="pricing-card wow fadeInUp">
            {/* Pricing Head  */}
            <div className="pricing-head">
              <h4 className="title">BASIC PLAN</h4>
              <img
                src="assets/images/icons/white-small-arrow.svg"
                alt="white-small-arrow"
              />
            </div>
            <div className="pricing-inner">
              {/* Pricing Middle  */}
              <div className="pricing-middle">
                <div className="price">
                  <span className="currency">$</span>
                  <span className="amount">676</span>
                  <span className="duration">Monthly</span>
                </div>
                <p className="text">
                  Break down departmental data silos to empower solutions across
                  your entire.
                </p>
                <Link href="contact" className="bx-btn">
                  Get Started Now
                  <i className="fi-rr-arrow-right" />
                </Link>
              </div>
              {/* Pricing Features  */}
              <div className="pricing-features">
                <h4 className="title">What’s Included</h4>
                <ul className="features-list">
                  <li>
                    <i className="fi-ss-check-circle" />
                    Flexible Subscription Options
                  </li>
                  <li>
                    <i className="fi-ss-check-circle" />
                    Customizable Service Packages
                  </li>
                  <li>
                    <i className="fi-ss-check-circle" />
                    Affordable Rates, Premium Services
                  </li>
                  <li>
                    <i className="fi-ss-check-circle" />
                    Tailored Solutions for Businesses
                  </li>
                  <li>
                    <i className="fi-ss-check-circle" />
                    24/7 Support Included
                  </li>
                  <li>
                    <i className="fi-ss-check-circle" />
                    No Hidden Fees
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Single Prcing  */}
          <div className="pricing-card popular wow fadeInUp">
            {/* Pricing Head  */}
            <div className="pricing-head">
              <h4 className="title text-white">BUSINESS PLAN</h4>
              <img
                src="assets/images/icons/color-small-star.svg"
                alt="color-small-star"
              />
            </div>
            <div className="pricing-inner">
              {/* Pricing Middle  */}
              <div className="pricing-middle">
                <div className="price">
                  <span className="currency text-white">$</span>
                  <span className="amount text-white">876</span>
                  <span className="duration">Monthly</span>
                </div>
                <p className="text text-white">
                  Break down departmental data silos to empower solutions across
                  your entire.
                </p>
                <Link href="contact" className="bx-btn">
                  Get Started Now
                  <i className="fi-rr-arrow-right" />
                </Link>
              </div>
              {/* Pricing Features  */}
              <div className="pricing-features">
                <h4 className="title text-white">What’s Included</h4>
                <ul className="features-list">
                  <li>
                    <i className="fi-ss-check-circle" />
                    Flexible Subscription Options
                  </li>
                  <li>
                    <i className="fi-ss-check-circle" />
                    Customizable Service Packages
                  </li>
                  <li>
                    <i className="fi-ss-check-circle" />
                    Affordable Rates, Premium Services
                  </li>
                  <li>
                    <i className="fi-ss-check-circle" />
                    Exclusive Member Discounts
                  </li>
                  <li>
                    <i className="fi-ss-check-circle" />
                    24/7 Support Included
                  </li>
                  <li>
                    <i className="fi-ss-check-circle" />
                    Cancel Anytime, No Penalties
                  </li>
                  <li>
                    <i className="fi-ss-check-circle" />
                    No Hidden Fees
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Single Prcing  */}
          <div className="pricing-card wow fadeInUp">
            {/* Pricing Head  */}
            <div className="pricing-head">
              <h4 className="title">PREMIUM PLAN</h4>
              <img
                src="assets/images/icons/white-small-arrow.svg"
                alt="white-small-arrow"
              />
            </div>
            <div className="pricing-inner">
              {/* Pricing Middle  */}
              <div className="pricing-middle">
                <div className="price">
                  <span className="currency">$</span>
                  <span className="amount">976</span>
                  <span className="duration">Monthly</span>
                </div>
                <p className="text">
                  Break down departmental data silos to empower solutions across
                  your entire.
                </p>
                <Link href="contact" className="bx-btn">
                  Get Started Now
                  <i className="fi-rr-arrow-right" />
                </Link>
              </div>
              {/* Pricing Features  */}
              <div className="pricing-features">
                <h4 className="title">What’s Included</h4>
                <ul className="features-list">
                  <li>
                    <i className="fi-ss-check-circle" />
                    Flexible Subscription Options
                  </li>
                  <li>
                    <i className="fi-ss-check-circle" />
                    Customizable Service Packages
                  </li>
                  <li>
                    <i className="fi-ss-check-circle" />
                    Affordable Rates, Premium Services
                  </li>
                  <li>
                    <i className="fi-ss-check-circle" />
                    Tailored Solutions for Businesses
                  </li>
                  <li>
                    <i className="fi-ss-check-circle" />
                    24/7 Support Included
                  </li>
                  <li>
                    <i className="fi-ss-check-circle" />
                    No Hidden Fees
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Pricing;
