"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const PortoflioIsotope = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const initIsotope = async () => {
      const Isotope = (await import("isotope-layout")).default;
      setTimeout(() => {
        isotope.current = new Isotope(".portfolio-row", {
          itemSelector: ".filter-item",
        });
      }, 1000);
    };

    initIsotope();

    return () => {
      if (isotope.current) {
        isotope.current.destroy();
      }
    };
  }, [isClient]);

  useEffect(() => {
    if (!isClient || !isotope.current) return;

    filterKey === "*"
      ? isotope.current.arrange({ filter: `*` })
      : isotope.current.arrange({ filter: `.${filterKey}` });
  }, [filterKey, isClient]);

  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };

  const activeBtn = (value) => (value === filterKey ? "active" : "");

  return (
    <section className="bx-portfolio section-gap overflow-hidden pt-0">
      <div className="container bx-container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-6 col-md-10 col-12">
            <div className="bx-section-head text-center">
              <small className="bx-section-head__label">Case Studies</small>
              <h3 className="bx-section-head__title has_word_anim">
                <span className="bx-literata">Client Success</span>
                Exploring Our <br />
                Most Impactful Projects
              </h3>
            </div>
          </div>
        </div>
        <div className="bx-portfolio__inner">
          <div
            className="filter-menu indicator-active filter-menu-active wow fadeInUp"
            data-wow-delay=".3s"
          >
            <button
              type="button"
              className={`tab-btn ${activeBtn("*")}`}
              onClick={handleFilterKeyChange("*")}
              data-filter="*"
            >
              All Case
            </button>
            <button
              data-filter=".cat1"
              className={`tab-btn ${activeBtn("cat1")}`}
              onClick={handleFilterKeyChange("cat1")}
              type="button"
            >
              Finance
            </button>
            <button
              data-filter=".cat2"
              className={`tab-btn ${activeBtn("cat2")}`}
              onClick={handleFilterKeyChange("cat2")}
              type="button"
            >
              Marketing Consulting
            </button>
            <button
              data-filter=".cat3"
              className={`tab-btn ${activeBtn("cat3")}`}
              onClick={handleFilterKeyChange("cat3")}
              type="button"
            >
              Business Consulting
            </button>
            <button
              data-filter=".cat4"
              className={`tab-btn ${activeBtn("cat4")}`}
              onClick={handleFilterKeyChange("cat4")}
              type="button"
            >
              Startup
            </button>
          </div>
          <div className="row portfolio-row filter-active">
            <div className="col-lg-6 col-xl-3 col-12 filter-item cat1 cat3 cat4">
              <div className="portfolio-card wow fadeInUp">
                <div className="portfolio-img">
                  <img
                    src="assets/images/main-home/casestudy/casestudy-1.png"
                    alt="portfolio-image"
                  />
                </div>
                <Link href="portfolio-details">
                  <svg
                    className="arrow-icon"
                    width={58}
                    height={58}
                    viewBox="0 0 58 58"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M47.9545 22.8294C47.9545 20.6023 45.2621 19.4868 43.6871 21.0613L8.51748 56.218C7.93167 56.8036 6.98207 56.8035 6.39636 56.2178L1.76804 51.5895C1.18217 51.0037 1.18225 50.0538 1.76823 49.468L36.9356 14.3135C38.5109 12.7388 37.3956 10.0455 35.1681 10.0455H2C1.17157 10.0455 0.5 9.37388 0.5 8.54545V2C0.5 1.17157 1.17157 0.5 2 0.5H56C56.8284 0.5 57.5 1.17157 57.5 2V56C57.5 56.8284 56.8284 57.5 56 57.5H49.4545C48.6261 57.5 47.9545 56.8284 47.9545 56V22.8294Z"
                      stroke="white"
                    />
                  </svg>
                </Link>
                <div className="portfolio-content">
                  <span className="sm-title">Marketing</span>
                  <Link href="portfolio-details" className="title">
                    Future Dynamics
                  </Link>
                  <p className="text">
                    Tailored consult service businesses, focusing on growth
                    strategies. Sed velit dignissim.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6 col-12 filter-item cat1 cat2 cat4">
              <div className="portfolio-card wow fadeInUp">
                <div className="portfolio-img">
                  <img
                    src="assets/images/main-home/casestudy/casestudy-2.png"
                    alt="portfolio-image"
                  />
                </div>
                <Link href="portfolio-details">
                  <svg
                    className="arrow-icon"
                    width={58}
                    height={58}
                    viewBox="0 0 58 58"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M47.9545 22.8294C47.9545 20.6023 45.2621 19.4868 43.6871 21.0613L8.51748 56.218C7.93167 56.8036 6.98207 56.8035 6.39636 56.2178L1.76804 51.5895C1.18217 51.0037 1.18225 50.0538 1.76823 49.468L36.9356 14.3135C38.5109 12.7388 37.3956 10.0455 35.1681 10.0455H2C1.17157 10.0455 0.5 9.37388 0.5 8.54545V2C0.5 1.17157 1.17157 0.5 2 0.5H56C56.8284 0.5 57.5 1.17157 57.5 2V56C57.5 56.8284 56.8284 57.5 56 57.5H49.4545C48.6261 57.5 47.9545 56.8284 47.9545 56V22.8294Z"
                      stroke="white"
                    />
                  </svg>
                </Link>
                <div className="portfolio-content">
                  <span className="sm-title"> Consulting</span>
                  <Link href="portfolio-details" className="title">
                    Success Path Consulting
                  </Link>
                  <p className="text">
                    Tailored consult service businesses, focusing on growth
                    strategies. Sed velit dignissim.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3 col-lg-12 filter-item cat1 cat3 cat4">
              <div className="portfolio-card wow fadeInUp">
                <div className="portfolio-img">
                  <img
                    src="assets/images/main-home/casestudy/casestudy-3.png"
                    alt="portfolio-image"
                  />
                </div>
                <Link href="portfolio-details">
                  <svg
                    className="arrow-icon"
                    width={58}
                    height={58}
                    viewBox="0 0 58 58"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M47.9545 22.8294C47.9545 20.6023 45.2621 19.4868 43.6871 21.0613L8.51748 56.218C7.93167 56.8036 6.98207 56.8035 6.39636 56.2178L1.76804 51.5895C1.18217 51.0037 1.18225 50.0538 1.76823 49.468L36.9356 14.3135C38.5109 12.7388 37.3956 10.0455 35.1681 10.0455H2C1.17157 10.0455 0.5 9.37388 0.5 8.54545V2C0.5 1.17157 1.17157 0.5 2 0.5H56C56.8284 0.5 57.5 1.17157 57.5 2V56C57.5 56.8284 56.8284 57.5 56 57.5H49.4545C48.6261 57.5 47.9545 56.8284 47.9545 56V22.8294Z"
                      stroke="white"
                    />
                  </svg>
                </Link>
                <div className="portfolio-content">
                  <span className="sm-title"> Boosting</span>
                  <Link href="portfolio-details" className="title">
                    Profit Boost Analytics
                  </Link>
                  <p className="text">
                    Tailored consult service businesses, focusing on growth
                    strategies. Sed velit dignissim.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6 col-12 filter-item cat3 cat4 cat2">
              <div className="portfolio-card wow fadeInUp">
                <div className="portfolio-img">
                  <img
                    src="assets/images/main-home/casestudy/casestudy-4.png"
                    alt="portfolio-image"
                  />
                </div>
                <Link href="portfolio-details">
                  <svg
                    className="arrow-icon"
                    width={58}
                    height={58}
                    viewBox="0 0 58 58"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M47.9545 22.8294C47.9545 20.6023 45.2621 19.4868 43.6871 21.0613L8.51748 56.218C7.93167 56.8036 6.98207 56.8035 6.39636 56.2178L1.76804 51.5895C1.18217 51.0037 1.18225 50.0538 1.76823 49.468L36.9356 14.3135C38.5109 12.7388 37.3956 10.0455 35.1681 10.0455H2C1.17157 10.0455 0.5 9.37388 0.5 8.54545V2C0.5 1.17157 1.17157 0.5 2 0.5H56C56.8284 0.5 57.5 1.17157 57.5 2V56C57.5 56.8284 56.8284 57.5 56 57.5H49.4545C48.6261 57.5 47.9545 56.8284 47.9545 56V22.8294Z"
                      stroke="white"
                    />
                  </svg>
                </Link>
                <div className="portfolio-content">
                  <span className="sm-title"> Wealth</span>
                  <Link href="portfolio-details" className="title">
                    Wealth Sphere Projects
                  </Link>
                  <p className="text">
                    Tailored consult service businesses, focusing on growth
                    strategies. Sed velit dignissim.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3 col-12 filter-item cat1 cat4">
              <div className="portfolio-card wow fadeInUp">
                <div className="portfolio-img">
                  <img
                    src="assets/images/main-home/casestudy/casestudy-5.png"
                    alt="portfolio-image"
                  />
                </div>
                <Link href="portfolio-details">
                  <svg
                    className="arrow-icon"
                    width={58}
                    height={58}
                    viewBox="0 0 58 58"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M47.9545 22.8294C47.9545 20.6023 45.2621 19.4868 43.6871 21.0613L8.51748 56.218C7.93167 56.8036 6.98207 56.8035 6.39636 56.2178L1.76804 51.5895C1.18217 51.0037 1.18225 50.0538 1.76823 49.468L36.9356 14.3135C38.5109 12.7388 37.3956 10.0455 35.1681 10.0455H2C1.17157 10.0455 0.5 9.37388 0.5 8.54545V2C0.5 1.17157 1.17157 0.5 2 0.5H56C56.8284 0.5 57.5 1.17157 57.5 2V56C57.5 56.8284 56.8284 57.5 56 57.5H49.4545C48.6261 57.5 47.9545 56.8284 47.9545 56V22.8294Z"
                      stroke="white"
                    />
                  </svg>
                </Link>
                <div className="portfolio-content">
                  <span className="sm-title"> Strategic</span>
                  <Link href="portfolio-details" className="title">
                    Strategic Finance Hub
                  </Link>
                  <p className="text">
                    Tailored consult service businesses, focusing on growth
                    strategies. Sed velit dignissim.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3 col-12 filter-item cat1">
              <div className="portfolio-card wow fadeInUp">
                <div className="portfolio-img">
                  <img
                    src="assets/images/main-home/casestudy/casestudy-6.png"
                    alt="portfolio-image"
                  />
                </div>
                <Link href="portfolio-details">
                  <svg
                    className="arrow-icon"
                    width={58}
                    height={58}
                    viewBox="0 0 58 58"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M47.9545 22.8294C47.9545 20.6023 45.2621 19.4868 43.6871 21.0613L8.51748 56.218C7.93167 56.8036 6.98207 56.8035 6.39636 56.2178L1.76804 51.5895C1.18217 51.0037 1.18225 50.0538 1.76823 49.468L36.9356 14.3135C38.5109 12.7388 37.3956 10.0455 35.1681 10.0455H2C1.17157 10.0455 0.5 9.37388 0.5 8.54545V2C0.5 1.17157 1.17157 0.5 2 0.5H56C56.8284 0.5 57.5 1.17157 57.5 2V56C57.5 56.8284 56.8284 57.5 56 57.5H49.4545C48.6261 57.5 47.9545 56.8284 47.9545 56V22.8294Z"
                      stroke="white"
                    />
                  </svg>
                </Link>
                <div className="portfolio-content">
                  <span className="sm-title"> Consulting</span>
                  <Link href="portfolio-details" className="title">
                    Capital Rise Consulting
                  </Link>
                  <p className="text">
                    Tailored consult service businesses, focusing on growth
                    strategies. Sed velit dignissim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortoflioIsotope;

export const PortoflioIsotope2 = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const initIsotope = async () => {
      const Isotope = (await import("isotope-layout")).default;
      setTimeout(() => {
        isotope.current = new Isotope(".portfolio-row", {
          itemSelector: ".filter-item",
        });
      }, 1000);
    };

    initIsotope();

    return () => {
      if (isotope.current) {
        isotope.current.destroy();
      }
    };
  }, [isClient]);

  useEffect(() => {
    if (!isClient || !isotope.current) return;

    filterKey === "*"
      ? isotope.current.arrange({ filter: `*` })
      : isotope.current.arrange({ filter: `.${filterKey}` });
  }, [filterKey, isClient]);

  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };

  const activeBtn = (value) => (value === filterKey ? "active" : "");

  return (
    <section className="bx-portfolio section-gap bg-color-1 overflow-hidden">
      <div className="container bx-container">
        <div className="row">
          <div className="col-12">
            <div className="bx-section-head text-center d-flex-between-top">
              <small className="bx-section-head__label bg-white wow fadeInUp">
                Selected Work
              </small>
              <h3 className="bx-section-head__title m-0 has_word_anim">
                <span className="bx-literata">Client Success</span> Exploring
                Our <br />
                Most Impactful Projects
              </h3>
              <small className="bx-section-head__label bg-white wow fadeInUp">
                2023-2024 Projects
              </small>
            </div>
          </div>
        </div>
        <div className="bx-portfolio__inner">
          <div
            className="filter-menu indicator-active filter-menu-active wow fadeInUp"
            data-wow-delay=".3s"
          >
            <button
              type="button"
              className={`tab-btn ${activeBtn("*")}`}
              onClick={handleFilterKeyChange("*")}
              data-filter="*"
            >
              All Case
            </button>
            <button
              data-filter=".cat1"
              className={`tab-btn ${activeBtn("cat1")}`}
              onClick={handleFilterKeyChange("cat1")}
              type="button"
            >
              Finance
            </button>
            <button
              data-filter=".cat2"
              className={`tab-btn ${activeBtn("cat2")}`}
              onClick={handleFilterKeyChange("cat2")}
              type="button"
            >
              Marketing Consulting
            </button>
            <button
              data-filter=".cat3"
              className={`tab-btn ${activeBtn("cat3")}`}
              onClick={handleFilterKeyChange("cat3")}
              type="button"
            >
              Business Consulting
            </button>
            <button
              data-filter=".cat4"
              className={`tab-btn ${activeBtn("cat4")}`}
              onClick={handleFilterKeyChange("cat4")}
              type="button"
            >
              Startup
            </button>
          </div>
          <div className="row portfolio-row filter-active">
            <div className="col-lg-6 col-xl-3 col-md-6 col-12 filter-item cat1 cat3 cat4">
              <div className="portfolio-card wow fadeInUp">
                <div className="portfolio-img">
                  <img
                    src="assets/images/finance-home/portfolio/portfolio-1.png"
                    alt="portfolio-image"
                  />
                </div>
                <div className="portfolio-content">
                  <span className="category"> Investment</span>
                  <Link href="portfolio-details" className="title">
                    Smart Invest Pro
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3 col-md-6 col-12 filter-item cat1 cat3 cat4">
              <div className="portfolio-card wow fadeInUp">
                <div className="portfolio-img">
                  <img
                    src="assets/images/finance-home/portfolio/portfolio-2.png"
                    alt="portfolio-image"
                  />
                </div>
                <div className="portfolio-content">
                  <span className="category">Security</span>
                  <Link href="portfolio-details" className="title">
                    Wealth Guard
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 filter-item cat1 cat2 cat4">
              <div className="portfolio-card wow fadeInUp">
                <div className="portfolio-img">
                  <img
                    src="assets/images/finance-home/portfolio/portfolio-3.png"
                    alt="portfolio-image"
                  />
                </div>
                <div className="portfolio-content">
                  <span className="category"> Compliance</span>
                  <Link href="portfolio-details" className="title">
                    Tax Ease Solutions
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 filter-item cat3 cat4 cat2">
              <div className="portfolio-card wow fadeInUp">
                <div className="portfolio-img">
                  <img
                    src="assets/images/finance-home/portfolio/portfolio-4.png"
                    alt="portfolio-image"
                  />
                </div>
                <div className="portfolio-content">
                  <span className="category"> Accelerator</span>
                  <Link href="portfolio-details" className="title">
                    Biz Growth Accelerator
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3 col-md-6 col-12 filter-item cat1 cat4">
              <div className="portfolio-card wow fadeInUp">
                <div className="portfolio-img">
                  <img
                    src="assets/images/finance-home/portfolio/portfolio-5.png"
                    alt="portfolio-image"
                  />
                </div>
                <div className="portfolio-content">
                  <span className="category"> Web Design</span>
                  <Link href="portfolio-details" className="title">
                    Capital Flow
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3 col-md-6 col-12 filter-item cat1">
              <div className="portfolio-card wow fadeInUp">
                <div className="portfolio-img">
                  <img
                    src="assets/images/finance-home/portfolio/portfolio-6.png"
                    alt="portfolio-image"
                  />
                </div>
                <div className="portfolio-content">
                  <span className="category"> Finance</span>
                  <Link href="portfolio-details" className="title">
                    Tax Planning
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
