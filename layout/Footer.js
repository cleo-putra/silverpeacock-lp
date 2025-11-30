import Link from "next/link";

const Footer = ({ footer }) => {
  switch (footer) {
    case 1:
      return <Footer1 />;
    case 2:
      return <Footer2 />;

    default:
      return <Footer1 />;
  }
};
export default Footer;

const Footer1 = () => {
  return (
    <footer
      className="bx-footer background-image position-relative"
      
    >
      <div className="container bx-container">
        <div className="bx-footer__main">
          {/* Footer About  */}
          <div className="bx-footer__widget bx-footer__about">
            <Link href="/">
              <img style={{width: 200, height: 55}} src="assets/images/SP-Logo white.png" alt="logo" />
            </Link>
            <h3 className="title">
              We develop all solutions for the finance future
            </h3>
            <ul className="bx-footer__social">
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
          {/* Widget Group  */}
          <div className="bx-footer__widget-group">
            <div className="bx-footer__widget-inner">
              {/* Single Widget  */}
              <div className="bx-footer__widget">
                <h4 className="widget-title">Quick Links</h4>
                <ul className="list-links">
                  <li>
                    <Link href="about">About Us</Link>
                  </li>
                  <li>
                    <Link href="contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="team">Our Members</Link>
                  </li>
                  <li>
                    <Link href="service">Services</Link>
                  </li>
                  <li>
                    <Link href="faq">FAQ’s</Link>
                  </li>
                </ul>
              </div>
              {/* Single Widget  */}
              <div className="bx-footer__widget">
                <h4 className="widget-title">Pages</h4>
                <ul className="list-links">
                  <li>
                    <Link href="process">How It Works</Link>
                  </li>
                  <li>
                    <Link href="testimonial">Our Testimonial</Link>
                  </li>
                  <li>
                    <Link href="#">All Insight</Link>
                  </li>
                  <li>
                    <Link href="team">Our Team</Link>
                  </li>
                  <li>
                    <Link href="pricing">Pricing</Link>
                  </li>
                </ul>
              </div>
              {/* Single Widget  */}
              <div className="bx-footer__widget">
                <h4 className="widget-title">Services</h4>
                <ul className="list-links">
                  <li>
                    <a href="#">Membership</a>
                  </li>
                  <li>
                    <a href="#">Accomodation</a>
                  </li>
                  <li>
                    <a href="#">Financial Planning</a>
                  </li>
                  <li>
                    <a href="#">Digital Planning</a>
                  </li>
                  <li>
                    <a href="#">Marketing</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Newsletter  */}
         
          </div>
          <div className="bx-footer__widget bx-footer__contact">
            {/* Single Item */}
            <div className="contact-item">
              <div className="contact-icon">
                <img
                  src="assets/images/icons/color-phone.png"
                  alt="color-phone"
                />
              </div>
              <div className="contact-info">
                <span className="label">24/7 Our Support</span>
                <a className="links" href="tel:1800 698 968">
                  1800 698 968
                </a>
              </div>
            </div>
            {/* Single Item */}
            <div className="contact-item">
              <div className="contact-icon">
                <img
                  src="assets/images/icons/color-envelope.png"
                  alt="color-envelope"
                />
              </div>
              <div className="contact-info">
                <span className="label">Send Your Message</span>
                <a className="links" href="mailto:info@silverpeacock.com.au">
                  info@silverpeacock.com.au
                </a>
              </div>
            </div>
            {/* Single Item */}
            <div className="contact-item">
              <div className="contact-icon">
                <img src="assets/images/icons/color-map.png" alt="color-map" />
              </div>
              <div className="contact-info">
                <span className="label">Our Office Location</span>
                <a
                  className="links"
                  href="https://www.google.com/maps/place/2220+Plymouth+Rd+%2330,+Minnetonka,+MN+55305,+USA/data=!4m2!3m1!1s0x52b34ac14e709abf:0xff1d6d6e41d779b6?sa=X&ved=1t:242&ictx=111"
                  target="_blank"
                >
                  Level 5, 91 George St Parramatta NSW 2150
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright Text */}
      <div className="bx-footer__copyright">
        <div className="container bx-container">
          <div className="bx-footer__copyright-inner">
            <ul className="bx-footer__links">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms And Condition</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
            <p className="copyright-text">
              All copyright reserved 2025 BExpert by BizanTheme
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Footer2 = () => {
  return (
    <footer className="bx-footer position-relative">
      <div className="container bx-container">
        <div className="bx-footer__main">
          <div className="bx-footer__widget-group group-1">
            {/* Single Widget  */}
            <div className="bx-footer__widget">
              <div className="footer-mask-img">
                <img
                  src="assets/images/finance-home/footer/mask-image.png"
                  alt="mask-image"
                />
              </div>
            </div>
            {/* Single Widget  */}
            <div className="bx-footer__widget f-newsletter">
              {/* Footer Newsletter  */}
              <div className="bx-footer__newsletter">
                <h4 className="title">Subscribe as a Newsletter</h4>
                <form action="#" method="post">
                  <input
                    type="email"
                    name="name"
                    placeholder="Enter your email"
                    required
                  />
                  <button type="submit" className="bx-btn">
                    <i className="fi-rr-arrow-right" />
                  </button>
                </form>
              </div>
              {/* Footer Contact  */}
              <div className="bx-footer__contact">
                {/* Single Item */}
                <div className="contact-item">
                  <div className="contact-icon">
                    <img
                      src="assets/images/icons/color-phone.png"
                      alt="color-phone"
                    />
                  </div>
                  <div className="contact-info">
                    <span className="label">Call Us</span>
                    <a className="links" href="tel:+88 (09) 53 33 09">
                      +88 (09) 53 33 09
                    </a>
                  </div>
                </div>
                <div className="item-divider">//</div>
                {/* Single Item */}
                <div className="contact-item">
                  <div className="contact-icon">
                    <img
                      src="assets/images/icons/color-envelope.png"
                      alt="color-envelope"
                    />
                  </div>
                  <div className="contact-info">
                    <span className="label">Mail Us</span>
                    <a className="links" href="mailto:bexpert@gmail.com">
                      bexpert@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              {/* Footer Social  */}
              <div className="bx-footer__social-wrapper">
                <h5 className="widget-title">Follow us on social media</h5>
                <ul className="bx-footer__social">
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
          </div>
          <div className="bx-footer__widget-group group-2">
            {/* Single Widget  */}
            <div className="bx-footer__widget">
              <h4 className="widget-title">Company</h4>
              <ul className="list-links">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Service Policy</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Blog &amp; News</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </div>
            {/* Single Widget  */}
            <div className="bx-footer__widget">
              <h4 className="widget-title">Services</h4>
              <ul className="list-links">
                <li>
                  <a href="#">Financial Analysis</a>
                </li>
                <li>
                  <a href="#">Business Analysis</a>
                </li>
                <li>
                  <a href="#">HR Management</a>
                </li>
                <li>
                  <a href="#">Team Building</a>
                </li>
                <li>
                  <a href="#">Competitive Analysis</a>
                </li>
                <li>
                  <a href="#">Business Strategy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright Text */}
      <div className="bx-footer__copyright">
        <div className="container bx-container">
          <div className="bx-footer__copyright-inner">
            <Link href="/">
              <img style={{width: 200, height: 55}} src="assets/images/SP-logo white.png" alt="logo" />
            </Link>
            <p className="copyright-text">
              © {new Date().getFullYear()} BExpert. All rights reserved
            </p>
            <ul className="bx-footer__links">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms And Condition</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
