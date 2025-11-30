import Counter from "./Counter";

export const Award1 = () => {
  const awards = [
    "/assets/images/main-home/award/award-icon-1.png",
    "/assets/images/main-home/award/award-icon-2.png",
    "/assets/images/main-home/award/award-icon-3.png",
    "/assets/images/main-home/award/award-icon-4.png",
  ];
  return (
    <section className="bx-award section-gap position-relative">
      <img
        className="bx-award__section-arrow"
        src="assets/images/main-home/award/section-arrow.png"
        alt="section-arrow"
      />
      <div className="container bx-container">
  <div
    className="bx-award__grid"
    style={{
      display: "grid",
      gridTemplateColumns: "40% 60%",
      gap: "40px",
      alignItems: "center",

      /* Mobile view override */
      ...(typeof window !== "undefined" &&
        window.innerWidth < 768 && {
          gridTemplateColumns: "1fr",
        }),
    }}
  >
    {/* LEFT COLUMN (40%) */}
    

     <div
        className="bx-video__body position-relative wow fadeInUp"
        data-wow-delay=".3s"
      >
        <div className="bx-video__img">
          <img
            src="/assets/images/sp/contact-bg.webp"
            alt="video-img"
          />
        </div>
        <a
          href="https://vimeo.com/417886334"
          className="bx-video__btn popup-video bx-hover-layer-2"
        >
          <i className="fi fi-sr-play" />
        </a>
      </div>

    {/* RIGHT COLUMN (60%) */}
    <div className="bx-award__grid-second" style={{ width: "100%" }}>
      {/* Award Description */}
      <div className="bx-award__desc">
        <h3 className="title has_word_anim">
          <span className="bx-literata"></span> Recognised Excellence in Accounting and Tax Advisory
        </h3>
        <p className="text wow fadeInUp" data-wow-delay=".3s">
          At Silver Peacock, our commitment to precision, integrity, and client success
          has earned us recognition across Australia. We’re proud recipients of the
          Local Business Awards – City Suburbs Winner and the Australian Small Business
          Champion Awards 2022.
        </p>
      </div>

      <div className="bx-award__medal" style={{ marginTop: "20px" }}>
        {/* Medal Images */}
        <div className="bx-award__medal-img wow fadeInUp" data-wow-delay=".3s">
          <img
            src="assets/images/sp/sp-award.jpg"
            alt="award-img-2"
            style={{
              width: "194px",
              height: "250px",
            }}
          />
        </div>
         <div className="bx-award__medal-img wow fadeInUp" data-wow-delay=".3s">
          <img
            src="assets/images/sp/sp-champ.jpg"
            alt="award-img-2"
            style={{
              width: "127px",
              height: "250px",
            }}
          />
        </div>

        {/* Medal Content */}
        <div className="bx-award__medal-content" style={{ marginTop: "15px" }}>
          <p className="text wow fadeInRight" data-wow-delay=".5s">
            These achievements reflect our dedication to providing trusted accounting
            and taxation services that deliver real results for individuals and small
            businesses alike.
          </p>

          <div
            className="bx-award__medal-list wow fadeInRight"
            data-wow-delay=".3s"
            style={{ marginTop: "10px" }}
          >
            <h5 className="title">Award Winning!</h5>

            <div
              className="bx-award__medal-icons"
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
                marginTop: "8px",
              }}
            >
              {awards.map((award, index) => (
                <img
                  key={index}
                  src={award}
                  alt="medal-icon"
                  style={{ width: "50px", height: "auto" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </section>
  );
};
export const Award2 = () => {
  return (
    <section className="bx-motivation section-gap pt-0">
      <div className="container bx-container">
        <div className="bx-motivation__inner">
          {/* Motivation Image */}
          <div className="bx-motivation__image">
            <img
              src="assets/images/business-consulting-home/motivation/motivation-img.png"
              alt="motivation-img"
            />
          </div>
          {/* Motivation Content */}
          <div className="bx-motivation__content d-flex">
            <div className="bx-award__medal">
              <h5 className="title">Award Wining!</h5>
              <div className="bx-award__medal-icons">
                <img
                  src="assets/images/business-consulting-home/motivation/award-1.png"
                  alt="award-icon"
                />
                <img
                  src="assets/images/business-consulting-home/motivation/award-2.png"
                  alt="award-icon"
                />
                <img
                  src="assets/images/business-consulting-home/motivation/award-3.png"
                  alt="award-icon"
                />
                <img
                  src="assets/images/business-consulting-home/motivation/award-4.png"
                  alt="award-icon"
                />
              </div>
            </div>
            <div className="bx-motivation__widget">
              <h4 className="title">MOTIVATION</h4>
              <p className="text">
                “More than a job, web design is an outlet for your vision. You
                have the power to take an idea from concept to reality. Your
                sites can tell a story, "show off a brand", or change lives. As
                the web expands, so do the possibilities.”
              </p>
              <img
                src="assets/images/icons/white-signature.png"
                alt="signature"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
