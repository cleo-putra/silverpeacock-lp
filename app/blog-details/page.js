import { CTA5 } from "@/components/CTA";
import BexpartLayout from "@/layout/BexpartLayout";
import Link from "next/link";
const page = () => {
  return (
    <BexpartLayout header={2} footer={1} customCssFile="blog-details.css">
      <section
        className="bx-bredcrumb background-image"
        style={{
          backgroundImage: 'url("assets/images/breadcrumbs/bg-13.png")',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-xl-6 col-12">
              <div className="bx-bredcrumb__content">
                {/* Menu  */}
                <ul className="bx-bredcrumb__menu">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li className="mx-1">/</li>
                  <li>
                    <Link href="blog-details"> Blog Details</Link>
                  </li>
                </ul>
                <div className="bx-blog__meta">
                  <Link href="blog" className="category">
                    BUSINESS
                  </Link>
                  <span className="date">AUGUST 01, 2025</span>
                  <span> |</span>
                  <span className="time">03 MINUTES READ</span>
                </div>
                {/* Title  */}
                <h1 className="bredcrumb-title has_word_anim">
                  5 Essential Tax Planning Tips Every Entrepreneur Should Know
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-details section-gap">
        <div className="container bx-container">
          <div className="blog-details__inner d-flex">
            {/* Sidebar  */}
            <div className="blog__sidebar">
              {/* Single Widget  */}
              <div className="sidebar-widget">
                <h4 className="sidebar-widget__title">Search</h4>
                <form
                  className="sidebar-widget__search"
                  action="#"
                  method="post"
                >
                  <input
                    type="search"
                    name="search"
                    placeholder="Search blog"
                    required=""
                  />
                  <button type="button">
                    <i className="fi-rr-search" />
                  </button>
                </form>
              </div>
              {/* Single Widget  */}
              <div className="sidebar-widget">
                <h4 className="sidebar-widget__title">Latest News</h4>
                <div className="sidebar-latest-wrapper">
                  {/* Single Latest */}
                  <div className="sidebar-latest__item">
                    <div className="latest-img">
                      <img
                        src="assets/images/blog-sidebar/latest-1.png"
                        alt="latest"
                      />
                    </div>
                    <div className="latest-info">
                      <span>JANUARY 06, 2025</span>
                      <Link href="blog-details">
                        How to Build a Strong Financial Foundation for Your
                        Business
                      </Link>
                    </div>
                  </div>
                  {/* Single Latest */}
                  <div className="sidebar-latest__item">
                    <div className="latest-img">
                      <img
                        src="assets/images/blog-sidebar/latest-2.png"
                        alt="latest"
                      />
                    </div>
                    <div className="latest-info">
                      <span>JANUARY 24, 2025</span>
                      <Link href="blog-details">
                        Top Investment Strategies for Growing Your Wealth in
                        2025
                      </Link>
                    </div>
                  </div>
                  {/* Single Latest */}
                  <div className="sidebar-latest__item">
                    <div className="latest-img">
                      <img
                        src="assets/images/blog-sidebar/latest-3.png"
                        alt="latest"
                      />
                    </div>
                    <div className="latest-info">
                      <span>APRIL 26, 2025</span>
                      <Link href="blog-details">
                        5 Essential Tax Planning Tips Every Entrepreneur Should
                        Know
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Widget  */}
              <div className="sidebar-widget">
                <h4 className="sidebar-widget__title">Categories</h4>
                <ul className="sidebar-ctegories">
                  <li>
                    <Link href="blog">
                      Marketing <span>(28)</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="blog">
                      Branding Design <span>(34)</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="blog">
                      Financial Investment <span>(02)</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="blog">
                      Business <span>(09)</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="blog">
                      Design <span>(23)</span>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Single Widget  */}
              <div className="sidebar-widget">
                <h4 className="sidebar-widget__title">Tags</h4>
                <ul className="sidebar-tags">
                  <li>
                    <a href="#">Finance</a>
                  </li>
                  <li>
                    <a href="#">Business</a>
                  </li>
                  <li>
                    <a href="#">Marketing</a>
                  </li>
                  <li>
                    <a href="#">Design</a>
                  </li>
                  <li>
                    <a href="#">Development</a>
                  </li>
                  <li>
                    <a href="#">Strategy</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Main Content  */}
            <div className="blog-details__main">
              <div className="blog-details__content">
                <h3>News Description</h3>
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
                <h4>Top Investment Strategies</h4>
                <p>
                  Eligendi optio cumque nihil impedit quo minus id quod maxime
                  placeat facere possimus, omnis voluptas assumenda est, omnis
                  dolor repellendus. Temporibus autem quibusdam et aut officiis
                  debitis aut rerum necessitatibus saepe eveniet ut et
                  voluptates repudiandae sint et molestiae non recusandae.
                </p>
                <br />
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation. At
                  vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi.
                </p>
                <img
                  src="assets/images/blog-details/details-img-1.png"
                  alt="details-img"
                />
                <p>
                  Eligendi optio cumque nihil impedit quo minus id quod maxime
                  placeat facere possimus, omnis voluptas assumenda est, omnis
                  dolor repellendus. Temporibus autem quibusdam et aut officiis
                  debitis aut rerum necessitatibus saepe eveniet ut et
                  voluptates repudiandae sint et molestiae non recusandae.
                </p>
                <br />
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation. At
                  vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi.
                </p>
              </div>
              {/* Blog Quote  */}
              <blockquote className="blog-quote">
                {/* Quote Content */}
                <div className="blog-quote__content">
                  <div className="quote-icon">
                    <img src="assets/images/icons/color-quotation.svg" alt="" />
                  </div>
                  <h5 className="title">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris.”
                  </h5>
                </div>
                <div className="blog-quote__info">
                  {/* Quote Profile */}
                  <div className="blog-quote__profile">
                    <div className="quote-profile-img">
                      <img
                        src="assets/images/blog-details/quote-img.png"
                        alt="quote-img"
                      />
                    </div>
                    <div className="quote-profile-info">
                      <p>David Smith</p>
                      <span>Investor of BExpert Solutions</span>
                    </div>
                  </div>
                  {/* Quote Social */}
                  <ul className="quote-social">
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
              </blockquote>
              <div className="blog-details__content">
                <h4>Risk Management</h4>
                <p>
                  Eligendi optio cumque nihil impedit quo minus id quod maxime
                  placeat facere possimus, omnis voluptas assumenda est, omnis
                  dolor repellendus. Temporibus autem quibusdam et aut officiis
                  debitis aut rerum necessitatibus saepe eveniet ut et
                  voluptates repudiandae sint et molestiae non recusandae.
                </p>
                <br />
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation. At
                  vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi.
                </p>
                {/* Blog Grid Image  */}
                <div className="blog-details__image-grid">
                  <div className="image-grid-row-1">
                    <img
                      src="assets/images/blog-details/details-img-2.png"
                      alt="blog-img"
                    />
                    <img
                      src="assets/images/blog-details/details-img-3.png"
                      alt="blog-img"
                    />
                  </div>
                  <div className="image-grid-row-2">
                    <img
                      src="assets/images/blog-details/details-img-4.png"
                      alt="blog-img"
                    />
                  </div>
                </div>
                <h4>Financial Solution</h4>
                <p>
                  Eligendi optio cumque nihil impedit quo minus id quod maxime
                  placeat facere possimus, omnis voluptas assumenda est, omnis
                  dolor repellendus. Temporibus autem quibusdam et aut officiis
                  debitis aut rerum necessitatibus saepe eveniet ut et
                  voluptates repudiandae sint et molestiae non recusandae.
                </p>
                <br />
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation. At
                  vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi.
                </p>
              </div>
              {/* Blog Navigation  */}
              <div className="blog-details__navigation">
                <div className="blog-details__tags single-nav">
                  <span>Tags:</span>
                  <ul>
                    <li>
                      <a href="#">Finance</a>
                    </li>
                    <li>
                      <a href="#">Business</a>
                    </li>
                  </ul>
                </div>
                <div className="blog-details__social single-nav">
                  <span>Share:</span>
                  <ul>
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
              {/* Blog Details Comments  */}
              <div className="blog-details__comment">
                <h3 className="blog-comment__title">Comments (03)</h3>
                {/* Single Comment */}
                <div className="blog-comment__item">
                  <div className="blog-comment__img">
                    <img
                      src="assets/images/blog-details/comment-1.png"
                      alt="comment-img"
                    />
                  </div>
                  <div className="blog-comment__info">
                    <div className="blog-comment__info-head">
                      <h6 className="blog-comment__name">William John</h6>
                      <p className="blog-comment__date">AUGUST 01, 2025</p>
                    </div>
                    <p className="blog-comment__text">
                      Eligendi optio cumque nihil impedit quo minus id quod
                      maxime placeat facere possimus, omnis voluptas assumenda
                      est, omnis dolor repellendus.
                    </p>
                    <a href="#" className="blog-comment__reply">
                      Reply
                    </a>
                  </div>
                </div>
                {/* Single Comment */}
                <div className="blog-comment__item reply-comment">
                  <div className="blog-comment__img">
                    <img
                      src="assets/images/blog-details/comment-2.png"
                      alt="comment-img"
                    />
                  </div>
                  <div className="blog-comment__info">
                    <div className="blog-comment__info-head">
                      <h6 className="blog-comment__name">James Chen</h6>
                      <p className="blog-comment__date">AUGUST 01, 2025</p>
                    </div>
                    <p className="blog-comment__text">
                      Eligendi optio cumque nihil impedit quo minus id quod
                      maxime placeat facere possimus, omnis voluptas assumenda
                      est, omnis dolor repellendus.
                    </p>
                    <a href="#" className="blog-comment__reply">
                      Reply
                    </a>
                  </div>
                </div>
                {/* Single Comment */}
                <div className="blog-comment__item">
                  <div className="blog-comment__img">
                    <img
                      src="assets/images/blog-details/comment-3.png"
                      alt="comment-img"
                    />
                  </div>
                  <div className="blog-comment__info">
                    <div className="blog-comment__info-head">
                      <h6 className="blog-comment__name">
                        Prof. Olivia Shopia
                      </h6>
                      <p className="blog-comment__date">AUGUST 01, 2025</p>
                    </div>
                    <p className="blog-comment__text">
                      Eligendi optio cumque nihil impedit quo minus id quod
                      maxime placeat facere possimus, omnis voluptas assumenda
                      est, omnis dolor repellendus.
                    </p>
                    <a href="#" className="blog-comment__reply">
                      Reply
                    </a>
                  </div>
                </div>
              </div>
              {/* Blog Details Form  */}
              <div className="blog-details-form">
                <h3 className="blog-details-form__title">Leave a comment</h3>
                <form action="#" method="post">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <input
                          type="text"
                          name="Enter your name"
                          placeholder="Your Name*"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <input
                          type="email"
                          name="Enter your email"
                          placeholder="Your E-mail*"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          placeholder="Type your message....*"
                          required=""
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="bx-btn">
                        Post a Comment <i className="fi-rr-arrow-right" />
                      </button>
                    </div>
                  </div>
                </form>
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
