import { CTA5 } from "@/components/CTA";
import PageBanner from "@/components/PageBanner";
import BexpartLayout from "@/layout/BexpartLayout";
import Link from "next/link";
const page = () => {
  return (
    <BexpartLayout header={2} footer={1} customCssFile="portfolio-details.css">
      <PageBanner
        pageName="Portfolio Details"
        pageTitle="Explore the Strategy and Results Behind This Successful Project"
        pageImage="/assets/images/breadcrumbs/bg-8.png"
      />
      <section className="portfolio-details section-gap">
        <div className="container bx-container">
          <div className="portfolio-details__inner d-flex">
            {/* Sidebar  */}
            <div className="portfolio-details__sidebar">
              {/* Single Widget  */}
              <div className="sidebar-widget">
                <h4 className="sidebar-widget__title">Project Information</h4>
                <ul>
                  <li>
                    Clients:<span>Samira &amp; Rufus</span>
                  </li>
                  <li>
                    Date:<span>January 24, 2025</span>
                  </li>
                  <li>
                    Category:<span>Business &amp; Finance</span>
                  </li>
                  <li>
                    Estimation:<span>09 Months</span>
                  </li>
                  <li>
                    Place:<span>132, Tic St, Kingston, New York 12401</span>
                  </li>
                </ul>
              </div>
              {/* Single Widget  */}
              <div className="sidebar-widget sidebar-banner">
                <img
                  src="assets/images/portfolio-details/sidebar-banner.png"
                  alt="sidebar-banner"
                />
                <div className="sidebar-banner__content">
                  <h4>Let’s Start Your Project Together</h4>
                  <Link href="contact" className="bx-btn">
                    Start Your Project <i className="fi-rr-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            {/* Main Content  */}
            <div className="portfolio-details__main">
              <div className="portfolio-details__content">
                <div className="portfolio-details__image-grid">
                  <div className="image-grid-row-1">
                    <img
                      src="assets/images/portfolio-details/details-img-1.png"
                      alt="porfolio-img"
                    />
                    <img
                      src="assets/images/portfolio-details/details-img-2.png"
                      alt="porfolio-img"
                    />
                    <img
                      src="assets/images/portfolio-details/details-img-3.png"
                      alt="porfolio-img"
                    />
                  </div>
                  <div className="image-grid-row-2">
                    <img
                      src="assets/images/portfolio-details/details-img-4.png"
                      alt="porfolio-img"
                    />
                    <img
                      src="assets/images/portfolio-details/details-img-5.png"
                      alt="porfolio-img"
                    />
                  </div>
                </div>
                <h3>Project Story</h3>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation. At
                  vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum
                  quidem rerum facilis est et expedita distinctio. Nam libero
                  tempore, cum soluta nobis es.
                </p>
                <br />
                <br />
                <h4>What Did BExpert Do</h4>
                <p>
                  Eligendi optio cumque nihil impedit quo minus id quod maxime
                  placeat facere possimus, omnis voluptas assumenda est, omnis
                  dolor repellendus. Temporibus autem quibusdam et aut officiis
                  debitis aut rerum necessitatibus saepe eveniet ut et
                  voluptates repudiandae sint et molestiae non recusandae.
                </p>
                <ul>
                  <li>
                    <i className="fi fi-ss-check-circle" />
                    Mapping out a highly complex integration
                  </li>
                  <li>
                    <i className="fi fi-ss-check-circle" />
                    Over 30,000 hrs delivered back to the business
                  </li>
                  <li>
                    <i className="fi fi-ss-check-circle" />
                    Comprehensive Financial News Coverage
                  </li>
                  <li>
                    <i className="fi fi-ss-check-circle" />
                    Comprehensive Financial News Coverage
                  </li>
                  <li>
                    <i className="fi fi-ss-check-circle" />
                    Mapping out a highly complex integration
                  </li>
                  <li>
                    <i className="fi fi-ss-check-circle" />
                    100% SOX compliance in Settlement process automation
                  </li>
                  <li>
                    <i className="fi fi-ss-check-circle" />
                    Customizable Stock Watchlists
                  </li>
                  <li>
                    <i className="fi fi-ss-check-circle" />
                    Customizable Stock Watchlists
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTA5 />
    </BexpartLayout>
  );
};
export default page;
