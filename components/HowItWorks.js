const HowItWorks = () => {
  const howItWorksData = [
    {
      id: 1,
      title: "Experienced",
      text: "With our 20 and more years of experience in the field working with small and big companies, we deliver more value for less.",
    },
    {
      id: 2,
      title: "No Down Time",
      text: "With our 364-day support , businesses have nothing to worry about. We are always just a phone call or email from you.",
    },
    {
      id: 3,
      title: "We Help Tradied with Marketing",
      text: "We have partnered with MY BUSINESS DNA to help you boost your online presence. We know how to crunch your numbers and grow your business online.",
    },
  ];
  return (
    <section className="bx-work-process section-gap z-index2 pt-0">
      <div className="container bx-container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-12">
            {/* Section Head  */}
            <div className="bx-section-head text-center">
              <small className="bx-section-head__label">Why Choose Us</small>
              <h3 className="bx-section-head__title has_word_anim">
                <span className="bx-literata">Your Trusted Partner in  <br />
                Accounting and Tax
                </span>
              </h3>
            </div>
          </div>
        </div>
        {/* Arrow */}
        <div
          className="bx-work-process__arrow wow fadeInUp"
          data-wow-delay=".3s"
        >
          <svg
            width={365}
            height={368}
            viewBox="0 0 365 368"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M299.136 114.221V113.007L298.281 113.869L46.9263 367.197L0.704302 320.595L252.065 67.2613L252.911 66.4091H251.71H0.5V0.5H364.5V367.5H299.136V114.221Z"
              stroke="#223035"
              strokeOpacity="0.45"
            />
          </svg>
        </div>
        {/* Content Wrapper  */}
        <div className="bx-work-process__wrapper">
          {howItWorksData.map((item) => (
            <div
              className={`w-process-card card-${item.id} ${
                item.id !== 3 ? "process-icon" : ""
              } wow fadeInUp`}
              key={item.id}
            >
              <div className="process-number">
                <span>0{item.id}</span>
              </div>
              <div className="process-content">
                <h4 className="title">{item.title}</h4>
                <p className="text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Shapes  */}
        <div className="bx-work-process__shape">
          <img
            className="shape shape-1"
            src="assets/images/icons/finance-chart.svg"
            alt="finance-chart"
          />
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;
