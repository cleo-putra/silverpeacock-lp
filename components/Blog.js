import Link from "next/link";

export const Blog1 = () => {
  const blogs = [
    {
      id: 1,
      image: "/assets/images/main-home/blog/blog-1.png",
      category: "STARTUP",
      date: "JANUARY 08, 2025",
      title: "How to Build a Strong Financial Foundation for Your Business",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla...",
      delay: ".3s",
    },
    {
      id: 2,
      image: "/assets/images/main-home/blog/blog-2.png",
      category: "MARKETING",
      date: "APRIL 26, 2025",
      title: "5 Essential Tax Planning Tips Every Entrepreneur Should Know",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla...",
      delay: ".5s",
    },
    {
      id: 3,
      image: "/assets/images/main-home/blog/blog-3.png",
      category: "MANAGEMENT",
      date: "MAY 21, 2025",
      title: "The Role of Risk Management in Sustainable Business Growth",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla...",
      delay: ".7s",
    },
    {
      id: 4,
      image: "/assets/images/main-home/blog/blog-4.png",
      category: "BUSINESS",
      date: "AUGUST 01, 2025",
      title: "Top Investment Strategies for Growing Your Wealth in 2025",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla...",
      delay: ".9s",
    },
  ];
  return (
    <section className="bx-blog section-gap position-relative bg-color-1">
      <img
        className="bx-blog__section-arrow"
        src="assets/images/main-home/blog/section-arrow.png"
        alt="section-arrow"
      />
      <div className="container bx-container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="bx-section-head d-flex-between">
              <div>
                <small className="bx-section-head__label bg-white">
                  Our News & Blog
                </small>
                <h3 className="bx-section-head__title has_word_anim">
                  <span className="bx-literata"> Expert Accounting Insights and <br/>Practical Tax Advice </span>
                  
                </h3>
              </div>
              <div className="bx-section-head__btn">
                <Link href="blog" className="bx-btn">
                  View All News
                  <i className="fi-rr-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bx-blog__wrapper">
          {blogs.map((blog) => (
            <div
              className="bx-blog__card wow fadeInUp"
              data-wow-delay={blog.delay}
              key={blog.id}
            >
              <div className="bx-blog__cover">
                <img src={blog.image} alt="blog" />
              </div>
              <div className="bx-blog__content">
                <div className="bx-blog__meta">
                  <Link href="blog" className="category">
                    {blog.category}
                  </Link>
                  <span className="date">{blog.date}</span>
                </div>
                <h4 className="title">
                  <Link href="blog-details">{blog.title}</Link>
                </h4>
                <p className="text">{blog.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Blog2 = () => {
  const blogs = [
    {
      id: 1,
      image: "/assets/images/finance-home/blog/blog-1.png",
      category: "STARTUP",
      date: "JANUARY 08, 2025",
      title: "How to Build a Strong Financial Foundation for Your Business",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla...",
    },
    {
      id: 2,
      image: "/assets/images/finance-home/blog/blog-2.png",
      category: "MARKETING",
      date: "APRIL 26, 2025",
      title: "5 Essential Tax Planning Tips Every Entrepreneur Should Know",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla...",
    },
    {
      id: 3,
      image: "/assets/images/finance-home/blog/blog-3.png",
      category: "MANAGEMENT",
      date: "MAY 21, 2025",
      title: "The Role of Risk Management in Sustainable Business Growth",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla...",
    },
  ];
  return (
    <section className="bx-blog section-gap position-relative bg-color-1">
      <img
        className="bx-blog__shape spinner-ani"
        src="assets/images/finance-home/blog/shape.svg"
        alt="shape"
      />
      <div className="container bx-container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-6 col-12">
            <div className="bx-section-head text-center">
              <small className="bx-section-head__label bg-white">
                Our News &amp; Blog
              </small>
              <h3 className="bx-section-head__title has_word_anim">
                <span className="bx-literata"> Expert Tips </span>
                Market Trends, and <br />
                In-Depth Business Analysis
              </h3>
            </div>
          </div>
        </div>
        <div className="bx-blog__wrapper">
          {blogs.map((blog) => (
            <div className="bx-blog__card wow fadeInUp" key={blog.id}>
              <div className="bx-blog__cover">
                <img src={blog.image} alt="blog" />
              </div>
              <div className="bx-blog__content">
                <div className="bx-blog__meta">
                  <Link href="/blog" className="category">
                    {blog.category}
                  </Link>
                  <span className="date">{blog.date}</span>
                </div>
                <h4 className="title">
                  <Link href="/blog-details">{blog.title}</Link>
                </h4>
                <p className="text">{blog.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Blog3 = ({
  containerClass = "bx-blog section-gap position-relative",
}) => {
  return (
    <section className={containerClass}>
      <div className="container bx-container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-6 col-12">
            <div className="bx-section-head text-center">
              <small className="bx-section-head__label">Our News & Blog</small>
              <h3 className="bx-section-head__title has_word_anim">
                <span className="bx-literata"> Expert Tips </span>
                Market Trends, and <br />
                In-Depth Business Analysis
              </h3>
            </div>
          </div>
        </div>
        <div className="bx-blog__wrapper">
          <div className="featured-blog">
            {/* Single Blog  */}
            <div className="bx-blog__card wow fadeInUp" data-wow-delay=".3s">
              <div className="bx-blog__cover">
                <img
                  src="assets/images/business-home/blog/blog-1.png"
                  alt="blog"
                />
              </div>
              <div className="bx-blog__content">
                <div className="bx-blog__meta">
                  <Link href="blog" className="category">
                    MARKETING
                  </Link>
                  <span className="date">APRIL 26, 2025</span>
                </div>
                <Link className="title m-0" href="blog-details">
                  5 Essential Tax Planning Tips Every Entrepreneur Should Know
                  for Your Business
                </Link>
              </div>
            </div>
          </div>
          <div className="blog-list">
            {/* Single Blog  */}
            <div
              className="bx-blog__card d-flex-center wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="bx-blog__cover">
                <img
                  src="assets/images/business-home/blog/blog-2.png"
                  alt="blog"
                />
              </div>
              <div className="bx-blog__content">
                <div className="bx-blog__meta">
                  <Link href="blog" className="category">
                    FINANCE
                  </Link>
                  <span className="date">JUNE 09, 2025</span>
                </div>
                <Link className="title" href="blog-details">
                  The Role of Risk Management in Sustainable Business Growth
                </Link>
                <p className="text">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla...
                </p>
              </div>
            </div>
            {/* Single Blog  */}
            <div
              className="bx-blog__card d-flex-center wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="bx-blog__cover">
                <img
                  src="assets/images/business-home/blog/blog-3.png"
                  alt="blog"
                />
              </div>
              <div className="bx-blog__content">
                <div className="bx-blog__meta">
                  <Link href="blog" className="category">
                    BUSINESS
                  </Link>
                  <span className="date">JANUARY 26, 2025</span>
                </div>
                <Link className="title" href="blog-details">
                  How to Build a Strong Financial Foundation for Your Business
                  in 2025
                </Link>
                <p className="text">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Blog4 = () => {
  const blogData = [
    {
      id: 1,
      image: "/assets/images/modern-business-home/blog/blog-1.png",
      category: "STARTUP",
      title: "How to Build a Strong Financial Foundation for Your Business",
      date: "JANUARY 08, 2025",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla...",
    },
    {
      id: 2,
      image: "/assets/images/modern-business-home/blog/blog-2.png",
      category: "MARKETING",
      title: "5 Essential Tax Planning Tips Every Entrepreneur Should Know",
      date: "APRIL 26, 2025",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla...",
    },
    {
      id: 3,
      image: "/assets/images/modern-business-home/blog/blog-3.png",
      category: "MANAGEMENT",
      title: "The Role of Risk Management in Sustainable Business Growth",
      date: "MAY 21, 2025",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla...",
    },
    {
      id: 4,
      image: "/assets/images/modern-business-home/blog/blog-4.png",
      category: "BUSINESS",
      title: "Top Investment Strategies for Growing Your Wealth in 2025",
      date: "AUGUST 01, 2025",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla...",
    },
    {
      id: 5,
      image: "/assets/images/modern-business-home/blog/blog-5.png",
      category: "STARTUP",
      title: "How to Build a Strong Financial Foundation for Your Business",
      date: "JANUARY 08, 2025",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla...",
    },
    {
      id: 6,
      image: "/assets/images/modern-business-home/blog/blog-6.png",
      category: "MARKETING",
      title: "5 Essential Tax Planning Tips Every Entrepreneur Should Know",
      date: "APRIL 26, 2025",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla...",
    },
    {
      id: 7,
      image: "/assets/images/modern-business-home/blog/blog-7.png",
      category: "MANAGEMENT",
      title: "The Role of Risk Management in Sustainable Business Growth",
      date: "MAY 21, 2025",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla...",
    },
    {
      id: 8,
      image: "/assets/images/modern-business-home/blog/blog-8.png",
      category: "BUSINESS",
      title: "Top Investment Strategies for Growing Your Wealth in 2025",
      date: "AUGUST 01, 2025",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla...",
    },
  ];
  return (
    <section className="bx-blog section-gap">
      <div className="container bx-container">
        <div className="bx-blog__wrapper">
          {blogData.map((item) => (
            <div className="bx-blog__card wow fadeInUp" key={item.id}>
              <div className="bx-blog__cover">
                <img src={item.image} alt="blog" />
              </div>
              <div className="bx-blog__content">
                <div className="bx-blog__meta">
                  <Link href="blog" className="category">
                    {item.category}
                  </Link>
                  <span className="date">{item.date}</span>
                </div>
                <h4 className="title">
                  <Link href="blog-details">{item.title}</Link>
                </h4>
                <p className="text">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="pagination wow fadeInUp" data-wow-delay=".3s">
          <ul className="pagination-list">
            <li>
              <a href="#">01</a>
            </li>
            <li>
              <a href="#">02</a>
            </li>
            <li className="active">
              <a href="#">
                <i className="fi-rr-arrow-right" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
