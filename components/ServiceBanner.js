import Link from "next/link";

const ServiceBanner = ({
  pageName = "About Us",
  pageTitle = "We Built trust in our customer’s mind through creativity",
  pageImage = "/assets/images/sp/about-banner.jpg",
}) => {
  return (
    <section
      className="bx-bredcrumb background-image"
      style={{ backgroundImage: `url(${pageImage})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-xl-6 col-12">
            <div className="bx-bredcrumb__content">
              <ul className="bx-bredcrumb__menu">
                <li>
                  <Link href="services">Services </Link>
                </li>
                <li className="mx-1"> / </li>
                <li>
                  <Link href="#"> {pageName}</Link>
                </li>
              </ul>
              <h1 className="bredcrumb-title has_word_anim">{pageTitle}</h1>
              <div
                className="bredcrumb-actions wow fadeInUp"
                data-wow-delay=".3s"
              >
                <Link href="/contact" className="bx-btn">
                  Free Consultation <i className="fi-rr-arrow-right" />
                </Link>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServiceBanner;
