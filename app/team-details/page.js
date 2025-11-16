"use client";
import { CTA5 } from "@/components/CTA";
import PageBanner from "@/components/PageBanner";
import BexpartLayout from "@/layout/BexpartLayout";
import { bexpartUtility } from "@/utility";
import { useEffect } from "react";
const page = () => {
  useEffect(() => {
    bexpartUtility.animateLinearProgress();
  }, []);

  return (
    <BexpartLayout header={2} footer={1} customCssFile="team-details.css">
      <PageBanner
        pageName="Team Details"
        pageTitle="Learn About the Talented Professional Driving Our Team Forward"
        pageImage="/assets/images/breadcrumbs/bg-10.png"
      />
      <section className="bx-team-details section-gap">
        <div className="container bx-container">
          <div className="team-details-inner">
            {/* Image  */}
            <div className="team-details-thumb">
              <img
                src="assets/images/team-details/team-details.png"
                alt="thumb-img"
              />
            </div>
            {/* Info  */}
            <div className="team-details-content">
              <h3 className="name">Caroline Watson</h3>
              <p className="desc">
                Eligendi optio cumque nihil impedit quo minus id quod maxime
                placeat facere possimus, omnis voluptas assumenda est, omnis
                dolor repellendus. Temporibus autem quibusdam et aut officiis
                debitis aut rerum necessitatibus saepe eveniet ut et voluptates
                repudiandae sint et molestiae non recusandae.
              </p>
              {/* Progress  */}
              <div className="team-details-progress linear-progress">
                {/* Single Progress  */}
                <div className="progress-item">
                  <div className="progress-item__label">
                    <p className="progress-item__title">Business Development</p>
                    <span className="progress-item__percentage">80%</span>
                  </div>
                  <div className="progress-container" data-percentage={80}>
                    <div className="progress" />
                    <div className="percentage" />
                  </div>
                </div>
                {/* Single Progress  */}
                <div className="progress-item">
                  <div className="progress-item__label">
                    <p className="progress-item__title">Business Strategy</p>
                    <span className="progress-item__percentage">90%</span>
                  </div>
                  <div className="progress-container" data-percentage={90}>
                    <div className="progress" />
                    <div className="percentage" />
                  </div>
                </div>
                {/* Single Progress  */}
                <div className="progress-item">
                  <div className="progress-item__label">
                    <p className="progress-item__title">Financial Solution</p>
                    <span className="progress-item__percentage">75%</span>
                  </div>
                  <div className="progress-container" data-percentage={75}>
                    <div className="progress" />
                    <div className="percentage" />
                  </div>
                </div>
              </div>
              <ul className="team-details-info">
                <li>
                  Experience: <span>10+ Years</span>
                </li>
                <li>
                  Email:
                  <a href="mailto:info@company.com">info@company.com</a>
                </li>
                <li>
                  Phone: <a href="tel:+498 939 336 93">+498 939 336 93</a>
                </li>
                <li>
                  Visit: <a href="#">yourdomain.com</a>
                </li>
              </ul>
              {/* Social Icons */}
              <ul className="team-details-social-list">
                <li>
                  <a href="https://facebook.com/">
                    <i className="fi fi-brands-facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/">
                    <i className="fi fi-brands-twitter-alt" />
                  </a>
                </li>
                <li>
                  <a href="https://dribbble.com/">
                    <i className="fi fi-brands-dribbble" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/">
                    <i className="fi fi-brands-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="team-details-bottom">
            {/* Team Details Biography  */}
            <div className="team-details-biography">
              <h4>Biography</h4>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation. At
                vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga.
              </p>
              <ul>
                <li>
                  <i className="fi fi-ss-check-circle" />
                  Real-Time Market Data Updates
                </li>
                <li>
                  <i className="fi fi-ss-check-circle" />
                  Comprehensive Financial News Coverage
                </li>
                <li>
                  <i className="fi fi-ss-check-circle" />
                  Investment Portfolio Management Tools
                </li>
                <li>
                  <i className="fi fi-ss-check-circle" />
                  Customizable Stock Watchlists
                </li>
              </ul>
              <a href="#" className="bx-btn">
                Download My Biography <i className="fi-rr-arrow-right" />
              </a>
            </div>
            {/* Team Details Form  */}
            <div className="team-details-form">
              <h3>Get in Touch with Me</h3>
              <form className="team-details-form-main" action="#" method="post">
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Type your message...."
                        required=""
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="team-details-form-btn">
                      <button type="submit" className="bx-btn">
                        Send Your Message
                        <i className="fi-rr-arrow-right" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <CTA5 />
    </BexpartLayout>
  );
};
export default page;
