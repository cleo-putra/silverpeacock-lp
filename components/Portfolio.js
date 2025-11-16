"use client";
import { bexpartUtility } from "@/utility";
import Link from "next/link";
import { useEffect } from "react";
import { Nav, Tab } from "react-bootstrap";

export const Portfolio = () => {
  useEffect(() => {
    bexpartUtility.portfolioImageHover();
  }, []);
  return (
    <section className="bx-portfolio section-gap pb-0">
      <Tab.Container id="list-tab" defaultActiveKey="all">
        {/* <div className="container bx-container">
          <div className="bx-section-head d-flex-end-between">
            <div className="bx-section-head__info">
              <small className="bx-section-head__label">Case Studies</small>
              <h3 className="bx-section-head__title has_word_anim">
                <span className="bx-literata"> Client Success </span>
                Exploring Our <br />
                Most Impactful Projects
              </h3>
            </div>
            <div
              className="bx-section-head__action wow fadeInUp"
              data-wow-delay=".3s"
            >
              <p className="bx-section-head__text">
                Tailored consult service businesses, focusing on growth
                strategies we care about your business
              </p>
              <Link href="project" className="bx-btn">
                View All Prjoects <i className="fi-rr-arrow-right" />
              </Link>
            </div>
          </div>*/}
          {/* Tab Menu */}
          {/*<div
            className="bx-portfolio__tab-menu tab-menu wow fadeInUp"
            data-wow-delay=".3s"
          >
            <Nav as={"div"} className="list-group" id="list-tab" role="tablist">
              <Nav.Link
                as={"a"}
                className="list-group-item"
                href="#all"
                eventKey="all"
              >
                All Case
              </Nav.Link>
              <Nav.Link
                as={"a"}
                className="list-group-item"
                href="#finance"
                eventKey="finance"
              >
                Finance
              </Nav.Link>
              <Nav.Link
                as={"a"}
                className="list-group-item"
                href="#marketing"
                eventKey="marketing"
              >
                Marketing Consulting
              </Nav.Link>
              <Nav.Link
                as={"a"}
                className="list-group-item"
                href="#consulting"
                eventKey="consulting"
              >
                Business Consulting
              </Nav.Link>
              <Nav.Link
                as={"a"}
                className="list-group-item"
                href="#startup"
                eventKey="startup"
              >
                Startup
              </Nav.Link>
            </Nav>
          </div>
        </div> */}
        {/* Tab Details */}
        <div className="bx-portfolio__tab-details tab-details">
          <Tab.Content className="tab-content" id="nav-tabContent">
            {/* Tab One */}
            <Tab.Pane eventKey="all" role="tabpanel">
              <div className="bx-portfolio__tab-details bx-portfolio__item-show">
                {/* Start Background Part */}
                <img
                  decoding="async"
                  className="portfolio-bg-img 1 active"
                  src="assets/images/sp/mission.jpg"
                  alt="portfolio-bg"
                />
                <img
                  decoding="async"
                  className="portfolio-bg-img 2"
                  src="assets/images/sp/story.jpg"
                  alt="portfolio-bg"
                />
                {/* <img
                  decoding="async"
                  className="portfolio-bg-img 3"
                  src="assets/images/business-home/portfolio/portfolio-bg-3.png"
                  alt="portfolio-bg"
                />
                <img
                  decoding="async"
                  className="portfolio-bg-img 4"
                  src="assets/images/business-home/portfolio/portfolio-bg-4.png"
                  alt="portfolio-bg" */}
                
                {/* End Background Part */}
                {/* Start Content Part  */}
                <div className="portfolio-wrapper row">
                  {/* Single Item  */}
                  <div className="grid-item item-1 col-lg-6 col-md-6 col-sm-6 active">
                    <div className="portfolio-item">
                      <div className="portfolio-inner">
                        {/* <span className="category">Investment</span> */}
                        <Link href="portfolio-details" className="title">
                          Our Misison
                        </Link>
                        <div className="desc">
                        We understand that most business owners are cost-conscious. Our mission is to maintain the same quality and type of service regardless of your business size.
<br/><br/>
Adopting an innovative approach, Silver Peacock & Co enables smaller business enterprises to utilise our innovative online platform to prepare & finalise their Business Activity Statements (BAS’s) as well as tax returns after being checked by a qualified and a licensed accountant.
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Single Item  */}
                  <div className="grid-item item-2 col-lg-6 col-md-6 col-sm-6">
                    <div className="portfolio-item">
                      <div className="portfolio-inner">
                        {/* <span className="category">Finance</span> */}
                        <Link href="portfolio-details" className="title">
                          Our Story
                        </Link>
                        <div className="desc">
                          With over 10 years’ experience in the financial services industry, Wagdi Andrawis founded Silver Peacock & Co with the goal of adopting innovative methodologies to provide support to business enterprises regardless of its scale of economy.
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Single Item  */}
                 
                </div>
                {/* End Content Part */}
              </div>
            </Tab.Pane>
            {/* Tab Two */}
            <Tab.Pane eventKey="finance" role="tabpanel">
              <div className="bx-portfolio__tab-details bx-portfolio__item-show">
                {/* Start Background Part */}
                <img
                  decoding="async"
                  className="portfolio-bg-img 1 active"
                  src="assets/images/business-home/portfolio/portfolio-bg-1.png"
                  alt="portfolio-bg"
                />
                <img
                  decoding="async"
                  className="portfolio-bg-img 2"
                  src="assets/images/business-home/portfolio/portfolio-bg-2.png"
                  alt="portfolio-bg"
                />
                <img
                  decoding="async"
                  className="portfolio-bg-img 3"
                  src="assets/images/business-home/portfolio/portfolio-bg-3.png"
                  alt="portfolio-bg"
                />
                <img
                  decoding="async"
                  className="portfolio-bg-img 4"
                  src="assets/images/business-home/portfolio/portfolio-bg-4.png"
                  alt="portfolio-bg"
                />
                {/* End Background Part */}
                {/* Start Content Part  */}
                <div className="portfolio-wrapper row">
                  {/* Single Item  */}
                  <div className="grid-item item-1 col-lg-3 col-md-6 col-sm-6 active">
                    <div className="portfolio-item">
                      <div className="portfolio-inner">
                        <span className="category">Investment</span>
                        <Link href="portfolio-details" className="title">
                          Prime Wealth Solutions
                        </Link>
                        <div className="desc">
                          Tailored consult service businesses, focusing on
                          growth strategies. Sed velit dignissim sodales ut eu
                          sminte.
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Single Item  */}
                  <div className="grid-item item-2 col-lg-3 col-md-6 col-sm-6">
                    <div className="portfolio-item">
                      <div className="portfolio-inner">
                        <span className="category">Finance</span>
                        <Link href="portfolio-details" className="title">
                          Elevate Business Strategies
                        </Link>
                        <div className="desc">
                          Tailored consult service businesses, focusing on
                          growth strategies. Sed velit dignissim sodales ut eu
                          sminte.
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Single Item  */}
                  <div className="grid-item item-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="portfolio-item">
                      <div className="portfolio-inner">
                        <span className="category">Revenue</span>
                        <Link href="portfolio-details" className="title">
                          Smart Capital Investments
                        </Link>
                        <div className="desc">
                          Tailored consult service businesses, focusing on
                          growth strategies. Sed velit dignissim sodales ut eu
                          sminte.
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Single Item  */}
                  <div className="grid-item item-4 col-lg-3 col-md-6 col-sm-6">
                    <div className="portfolio-item">
                      <div className="portfolio-inner">
                        <span className="category">Expansion</span>
                        <Link href="portfolio-details" className="title">
                          Strategic Growth Partners
                        </Link>
                        <div className="desc">
                          Tailored consult service businesses, focusing on
                          growth strategies. Sed velit dignissim sodales ut eu
                          sminte.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Content Part */}
              </div>
            </Tab.Pane>
            {/* Tab Three */}
            <Tab.Pane eventKey="marketing" role="tabpanel">
              <div className="bx-portfolio__tab-details bx-portfolio__item-show">
                {/* Start Background Part */}
                <img
                  decoding="async"
                  className="portfolio-bg-img 1 active"
                  src="assets/images/business-home/portfolio/portfolio-bg-1.png"
                  alt="portfolio-bg"
                />
                <img
                  decoding="async"
                  className="portfolio-bg-img 2"
                  src="assets/images/business-home/portfolio/portfolio-bg-2.png"
                  alt="portfolio-bg"
                />
                <img
                  decoding="async"
                  className="portfolio-bg-img 3"
                  src="assets/images/business-home/portfolio/portfolio-bg-3.png"
                  alt="portfolio-bg"
                />
                <img
                  decoding="async"
                  className="portfolio-bg-img 4"
                  src="assets/images/business-home/portfolio/portfolio-bg-4.png"
                  alt="portfolio-bg"
                />
                {/* End Background Part */}
                {/* Start Content Part  */}
                <div className="portfolio-wrapper row">
                  {/* Single Item  */}
                  <div className="grid-item item-1 col-lg-3 col-md-6 col-sm-6 active">
                    <div className="portfolio-item">
                      <div className="portfolio-inner">
                        <span className="category">Investment</span>
                        <Link href="portfolio-details" className="title">
                          Prime Wealth Solutions
                        </Link>
                        <div className="desc">
                          Tailored consult service businesses, focusing on
                          growth strategies. Sed velit dignissim sodales ut eu
                          sminte.
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Single Item  */}
                  <div className="grid-item item-2 col-lg-3 col-md-6 col-sm-6">
                    <div className="portfolio-item">
                      <div className="portfolio-inner">
                        <span className="category">Finance</span>
                        <Link href="portfolio-details" className="title">
                          Elevate Business Strategies
                        </Link>
                        <div className="desc">
                          Tailored consult service businesses, focusing on
                          growth strategies. Sed velit dignissim sodales ut eu
                          sminte.
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Single Item  */}
                  <div className="grid-item item-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="portfolio-item">
                      <div className="portfolio-inner">
                        <span className="category">Revenue</span>
                        <Link href="portfolio-details" className="title">
                          Smart Capital Investments
                        </Link>
                        <div className="desc">
                          Tailored consult service businesses, focusing on
                          growth strategies. Sed velit dignissim sodales ut eu
                          sminte.
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Single Item  */}
                  <div className="grid-item item-4 col-lg-3 col-md-6 col-sm-6">
                    <div className="portfolio-item">
                      <div className="portfolio-inner">
                        <span className="category">Expansion</span>
                        <Link href="portfolio-details" className="title">
                          Strategic Growth Partners
                        </Link>
                        <div className="desc">
                          Tailored consult service businesses, focusing on
                          growth strategies. Sed velit dignissim sodales ut eu
                          sminte.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Content Part */}
              </div>
            </Tab.Pane>
            {/* Tab Four */}
            <Tab.Pane eventKey="consulting" role="tabpanel">
              <div className="bx-portfolio__tab-details bx-portfolio__item-show">
                {/* Start Background Part */}
                <img
                  decoding="async"
                  className="portfolio-bg-img 1 active"
                  src="assets/images/business-home/portfolio/portfolio-bg-1.png"
                  alt="portfolio-bg"
                />
                <img
                  decoding="async"
                  className="portfolio-bg-img 2"
                  src="assets/images/business-home/portfolio/portfolio-bg-2.png"
                  alt="portfolio-bg"
                />
                <img
                  decoding="async"
                  className="portfolio-bg-img 3"
                  src="assets/images/business-home/portfolio/portfolio-bg-3.png"
                  alt="portfolio-bg"
                />
                <img
                  decoding="async"
                  className="portfolio-bg-img 4"
                  src="assets/images/business-home/portfolio/portfolio-bg-4.png"
                  alt="portfolio-bg"
                />
                {/* End Background Part */}
                {/* Start Content Part  */}
                <div className="portfolio-wrapper row">
                  {/* Single Item  */}
                  <div className="grid-item item-1 col-lg-3 col-md-6 col-sm-6 active">
                    <div className="portfolio-item">
                      <div className="portfolio-inner">
                        <span className="category">Investment</span>
                        <Link href="portfolio-details" className="title">
                          Prime Wealth Solutions
                        </Link>
                        <div className="desc">
                          Tailored consult service businesses, focusing on
                          growth strategies. Sed velit dignissim sodales ut eu
                          sminte.
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Single Item  */}
                  <div className="grid-item item-2 col-lg-3 col-md-6 col-sm-6">
                    <div className="portfolio-item">
                      <div className="portfolio-inner">
                        <span className="category">Finance</span>
                        <Link href="portfolio-details" className="title">
                          Elevate Business Strategies
                        </Link>
                        <div className="desc">
                          Tailored consult service businesses, focusing on
                          growth strategies. Sed velit dignissim sodales ut eu
                          sminte.
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Single Item  */}
                  <div className="grid-item item-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="portfolio-item">
                      <div className="portfolio-inner">
                        <span className="category">Revenue</span>
                        <Link href="portfolio-details" className="title">
                          Smart Capital Investments
                        </Link>
                        <div className="desc">
                          Tailored consult service businesses, focusing on
                          growth strategies. Sed velit dignissim sodales ut eu
                          sminte.
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Single Item  */}
                  <div className="grid-item item-4 col-lg-3 col-md-6 col-sm-6">
                    <div className="portfolio-item">
                      <div className="portfolio-inner">
                        <span className="category">Expansion</span>
                        <Link href="portfolio-details" className="title">
                          Strategic Growth Partners
                        </Link>
                        <div className="desc">
                          Tailored consult service businesses, focusing on
                          growth strategies. Sed velit dignissim sodales ut eu
                          sminte.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Content Part */}
              </div>
            </Tab.Pane>
            {/* Tab Five */}
            <Tab.Pane eventKey="startup" role="tabpanel">
              <div className="bx-portfolio__tab-details bx-portfolio__item-show">
                {/* Start Background Part */}
                <img
                  decoding="async"
                  className="portfolio-bg-img 1 active"
                  src="assets/images/business-home/portfolio/portfolio-bg-1.png"
                  alt="portfolio-bg"
                />
                <img
                  decoding="async"
                  className="portfolio-bg-img 2"
                  src="assets/images/business-home/portfolio/portfolio-bg-2.png"
                  alt="portfolio-bg"
                />
                <img
                  decoding="async"
                  className="portfolio-bg-img 3"
                  src="assets/images/business-home/portfolio/portfolio-bg-3.png"
                  alt="portfolio-bg"
                />
                <img
                  decoding="async"
                  className="portfolio-bg-img 4"
                  src="assets/images/business-home/portfolio/portfolio-bg-4.png"
                  alt="portfolio-bg"
                />
                {/* End Background Part */}
                {/* Start Content Part  */}
                <div className="portfolio-wrapper row">
                  {/* Single Item  */}
                  <div className="grid-item item-1 col-lg-3 col-md-6 col-sm-6 active">
                    <div className="portfolio-item">
                      <div className="portfolio-inner">
                        <span className="category">Investment</span>
                        <Link href="portfolio-details" className="title">
                          Prime Wealth Solutions
                        </Link>
                        <div className="desc">
                          Tailored consult service businesses, focusing on
                          growth strategies. Sed velit dignissim sodales ut eu
                          sminte.
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Single Item  */}
                  <div className="grid-item item-2 col-lg-3 col-md-6 col-sm-6">
                    <div className="portfolio-item">
                      <div className="portfolio-inner">
                        <span className="category">Finance</span>
                        <Link href="portfolio-details" className="title">
                          Elevate Business Strategies
                        </Link>
                        <div className="desc">
                          Tailored consult service businesses, focusing on
                          growth strategies. Sed velit dignissim sodales ut eu
                          sminte.
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Single Item  */}
                  <div className="grid-item item-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="portfolio-item">
                      <div className="portfolio-inner">
                        <span className="category">Revenue</span>
                        <Link href="portfolio-details" className="title">
                          Smart Capital Investments
                        </Link>
                        <div className="desc">
                          Tailored consult service businesses, focusing on
                          growth strategies. Sed velit dignissim sodales ut eu
                          sminte.
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Single Item  */}
                  <div className="grid-item item-4 col-lg-3 col-md-6 col-sm-6">
                    <div className="portfolio-item">
                      <div className="portfolio-inner">
                        <span className="category">Expansion</span>
                        <Link href="portfolio-details" className="title">
                          Strategic Growth Partners
                        </Link>
                        <div className="desc">
                          Tailored consult service businesses, focusing on
                          growth strategies. Sed velit dignissim sodales ut eu
                          sminte.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Content Part */}
              </div>
            </Tab.Pane>
          </Tab.Content>
        </div>
      </Tab.Container>
      {/* End Tab Details */}
    </section>
  );
};

export const Portfolio2 = () => {
  const portfolioData = [
    {
      id: 1,
      image: "/assets/images/branding-agency-home/portfolio/portfolio-1.png",
      category: "Marketing",
      title: "Boost Brand Campaigns",
      percentage: "78%",
      containerClass: "col-lg-7 col-12",
    },
    {
      id: 2,
      image: "/assets/images/branding-agency-home/portfolio/portfolio-2.png",
      category: "Social",
      title: "Social Reach Solution",
      percentage: "09%",
      containerClass: "col-lg-5 col-12",
    },
    {
      id: 3,
      image: "/assets/images/branding-agency-home/portfolio/portfolio-3.png",
      category: "Email Marketing",
      title: "Email Blast Pro",
      percentage: "85%",
      containerClass: "col-lg-5 col-12",
    },
    {
      id: 4,
      image: "/assets/images/branding-agency-home/portfolio/portfolio-4.png",
      category: "Retention",
      title: "Customer Loyalty Builder",
      percentage: "95%",
      containerClass: "col-lg-7 col-12",
    },
    {
      id: 5,
      image: "/assets/images/branding-agency-home/portfolio/portfolio-5.png",
      category: "Social",
      title: "Social Reach Solution",
      percentage: "09%",
      containerClass: "col-lg-7 col-12",
    },
    {
      id: 6,
      image: "/assets/images/branding-agency-home/portfolio/portfolio-6.png",
      category: "Marketing",
      title: "Boost Brand Campaigns",
      percentage: "75%",
      containerClass: "col-lg-5 col-12",
    },
    {
      id: 7,
      image: "/assets/images/branding-agency-home/portfolio/portfolio-7.png",
      category: "Marketing",
      title: "Boost Brand Campaigns",
      percentage: "75%",
      containerClass: "col-lg-5 col-12",
    },
    {
      id: 8,
      image: "/assets/images/branding-agency-home/portfolio/portfolio-8.png",
      category: "Marketing",
      title: "Boost Brand Campaigns",
      percentage: "75%",
      containerClass: "col-lg-7 col-12",
    },
  ];
  return (
    <section className="bx-portfolio section-gap z-index2">
      <div className="container bx-container">
        <div className="bx-portfolio__inner">
          <div className="row">
            {portfolioData.map((item) => (
              <div className={item.containerClass} key={item.id}>
                {/* Single Portfolio  */}
                <div
                  className={`bx-portfolio__card wow fadeInUp ${
                    item.id <= 2 ? "m-0" : ""
                  }`}
                >
                  <Link
                    href="portfolio-details"
                    className="portfolio-img position-relative"
                  >
                    <img src={item.image} alt="portfolio-1" />
                    <div className="portfolio-engagement">
                      <h4 className="percent">{item.percentage}</h4>
                      <p className="text">Ecommerce growth</p>
                    </div>
                  </Link>
                  <div className="portfolio-content">
                    <ul className="category">
                      <li>
                        <Link href="portfolio">{item.category}</Link>
                      </li>
                      <li>
                        <Link href="portfolio">{item.category}</Link>
                      </li>
                      <li>
                        <Link href="portfolio">{item.category}</Link>
                      </li>
                    </ul>
                    <Link href="portfolio-details" className="title">
                      {item.title}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
