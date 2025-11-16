"use client";
import { bexpartUtility } from "@/utility";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

const Header = ({ header = 1 }) => {
  useEffect(() => {
    bexpartUtility.stickyHeader();
  }, []);

  const headers = {
    1: Header1,
    2: Header2,
  };

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const HeaderComponent = headers[header] || Header1;

  useEffect(() => {
    bexpartUtility.searchBar();
  }, []);

  return (
    <Fragment>
      <HeaderComponent show={showMobileMenu} setShow={setShowMobileMenu} />
      <Search />
      <MobileMenu show={showMobileMenu} setShow={setShowMobileMenu} />
    </Fragment>
  );
};

export default Header;

const Nav = () => {
  return (
    <nav className="bx-header__nav">
      <ul className="bx-header__nav-menu">
        <li>
          <Link href="about">About</Link>
        </li>
        <li>
          <a href="#">
            Services
            <i className="fi fi-ss-angle-small-down" />
          </a>
          <ul className="sub-menu">
            <li>
              <Link href="service">Service</Link>
            </li>
            <li>
              <Link href="service-details">Accounting for Tradies</Link>
            </li>
            <li>
              <Link href="service-details">Bookkeeping for Tradies</Link>
            </li>
            <li>
              <Link href="service-details">Taxation for Tradies</Link>
            </li>
            <li>
              <Link href="service-details">Tax Return</Link>
            </li>
            <li>
              <Link href="service-details">Payroll</Link>
            </li>
            <li>
              <Link href="service-details">Compliance for Tradies</Link>
            </li>
            
          </ul>
        </li>
        {/* <li>
          <a href="#">
            Portfolio
            <i className="fi fi-ss-angle-small-down" />
          </a>
          <ul className="sub-menu">
            <li>
              <Link href="portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="portfolio-details">Portfolio Details</Link>
            </li>
          </ul>
        </li> */}
        {/* <li>
          <a href="#">
            Blog
            <i className="fi fi-ss-angle-small-down" />
          </a>
          <ul className="sub-menu">
            <li>
              <Link href="blog">Blog </Link>
            </li>
            <li>
              <Link href="blog-details">Blog Details</Link>
            </li>
          </ul>
        </li> */}
        {/* <li>
          <a href="#">
            Pages
            <i className="fi fi-ss-angle-small-down" />
          </a>
          <ul className="sub-menu">
            <li>
              <Link href="team">Team</Link>
            </li>
            <li>
              <Link href="team-details">Team Details</Link>
            </li>
            <li>
              <Link href="pricing">Pricing</Link>
            </li>
            <li>
              <Link href="faq">Faq</Link>
            </li>
            <li>
              <Link href="404">404 Error</Link>
            </li>
          </ul>
        </li> */}
        <li>
          <Link href="contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

const Search = () => {
  return (
    <Fragment>
      <div className="bx-searchbar offcanvas offcanvas-top">
        <div className="offcanvas-body">
          <div className="bx-searchbar-box">
            <form className="bx-searchbar-from">
              <input type="search" placeholder="Search..." />
              <button className="bx-btn" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="offcanvas-backdrop fade"></div>
    </Fragment>
  );
};

const MobileMenu = ({ show, setShow }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const [multiMenu, setMultiMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <Modal
      className="mobile-menu-modal offcanvas-modal"
      show={show}
      onHide={() => setShow(false)}
      dialogClassName="offcanvas-dialog"
    >
      <div className="modal-header offcanvas-header">
        {/* Mobile Menu Logo */}
        <div className="offcanvas-logo">
          <Link href="/">
            <img src="assets/images/SP-logo.png" alt="logo" />
          </Link>
        </div>
        <button
          type="button"
          className="btn-close"
          onClick={() => setShow(false)}
        >
          <i className="fi fi-ss-cross" />
        </button>
      </div>
      <Modal.Body className="mobile-menu-modal-main-body">
        {/* Mobile Menu Navigation */}
        <nav className="offcanvas__menu">
          <ul className="offcanvas__menu_ul">
            
            <li className="offcanvas__menu_li">
              <Link className="offcanvas__menu_item active" href="/about">
                About
              </Link>
            </li>
            <li className="offcanvas__menu_li">
              <a
                className="offcanvas__menu_item"
                href="#"
                onClick={() => activeMenuSet("services")}
              >
                Services
              </a>
              <ul className="offcanvas__sub_menu" style={activeLi("services")}>
                <li className="offcanvas__sub_menu_li">
                  <Link href="/service" className="offcanvas__sub_menu_item">
                    Service
                  </Link>
                </li>
                <li className="offcanvas__sub_menu_li">
                  <Link
                    href="/service-details"
                    className="offcanvas__sub_menu_item"
                  >
                    Service Details
                  </Link>
                </li>
              </ul>
              <button
                className="offcanvas__sub_menu_toggle"
                onClick={() => activeMenuSet("services")}
              />
            </li>
            
          
            
            <li className="offcanvas__menu_li">
              <Link className="offcanvas__menu_item active" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </Modal.Body>
    </Modal>
  );
};

const Header1 = ({ show, setShow }) => {
  return (
    <header className="bx-header position-relative z-index3">
      <div className="bx-header__inner">
        {/* Topbar */}
        
        {/* Header */}
        <div className="bx-header__block header-main">
          <div className="container bx-container-expand">
            <div className="bx-header__main d-flex">
              {/* Logo  */}
              <div className="">
                <Link href="/">
                  <img style={{width: 200, height: 55}} src="assets/images/SP-Logo white.png" alt="white-logo" />
                </Link>
              </div>
              <div className="bx-header__right d-flex">
                {/* Nav Menu */}
                <Nav />
                {/* Header Info  */}
                <div className="bx-header__info d-flex">
                  <a
                    href="#"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#bxSearch"
                    aria-controls="offcanvasTopSearch"
                    className="bx-header__search"
                  >
                    <i className="fi fi-rs-search" />
                  </a>
                  <div className="bx-header__contact-info">
                    <p className="support-text">
                      <svg
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.75 12.315V14.9671C15.75 15.3608 15.4456 15.6875 15.0529 15.7153C14.7248 15.7384 14.4572 15.75 14.25 15.75C7.62255 15.75 2.25 10.3774 2.25 3.75C2.25 3.54278 2.26159 3.27515 2.28476 2.94713C2.31253 2.55441 2.6392 2.25 3.03289 2.25H5.68508C5.87758 2.25 6.03882 2.39582 6.05815 2.58735C6.0755 2.7593 6.09163 2.89735 6.10655 3.00151C6.25826 4.06104 6.56815 5.06952 7.01152 6.00227C7.08269 6.15199 7.03628 6.33119 6.90139 6.42754L5.28266 7.58385C6.26814 9.88583 8.11417 11.7319 10.4162 12.7174L11.5703 11.1014C11.6679 10.9649 11.8492 10.918 12.0007 10.9899C12.9334 11.4329 13.9418 11.7425 15.0012 11.8938C15.1047 11.9087 15.2419 11.9246 15.4126 11.9419C15.6042 11.9612 15.75 12.1225 15.75 12.315Z"
                          fill="white"
                        />
                      </svg>
                      24/7 Support
                    </p>
                    <a href="tel:+64339666054" className="phone-number">
                      1800 698 968
                    </a>
                  </div>
                  {/* Start Mobile Menu Button */}
                  <button
                    type="button"
                    className="mobile-menu-offcanvas-toggler"
                    onClick={() => setShow(true)}
                    data-bs-toggle="modal"
                    data-bs-target="#offcanvas-modal"
                  >
                    <span className="line" />
                    <span className="line" />
                    <span className="line" />
                  </button>
                  {/* End Mobile Menu Button */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const Header2 = ({ show, setShow }) => {
  return (
    <header className="bx-header position-relative z-index3">
      <div className="bx-header__inner">
        {/* Topbar */}
        <div className="bx-topbar">
          <div className="container bx-container-expand">
            <div className="row align-items-center">
              <div className="col-lg-12 col-xl-6 col-12">
                {/* Notice  */}
                <div className="bx-topbar__notice">
                  <p className="text">
                    We are thorough, dependable, and ready to support your finances.
                    <a href="#">Hire Us</a>
                  </p>
                </div>
              </div>
              <div className="col-lg-12 col-xl-6 col-12">
                <div className="bx-topbar__data">
                  {/* Contact Info  */}
                  <ul className="bx-topbar__info">
                    <li>
                      <a href="mailto:info@silverpeacock.com.au">
                        <i className="fi fi-rs-envelope" />
                        info@silverpeacock.com.au
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="fi fi-rs-marker" />
                        Level 5, 91 George St Parramatta NSW 2150
                      </a>
                    </li>
                  </ul>
                  {/* <div className="border-line" /> */}
                  {/* Social Icons */}
                  {/* <ul className="bx-topbar__social">
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
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Header */}
        <div className="bx-header__block header-main bg-color-1">
          <div className="container bx-container-expand">
            <div className="bx-header__main d-flex">
              {/* Logo  */}
              <div className="">
                <Link href="/">
                  <img style={{width: 220, height: 70}} src="assets/images/SP-logo.png" alt="black-logo" />
                </Link>
              </div>
              <div className="bx-header__right d-flex">
                {/* Nav Menu */}
                <Nav />
                {/* Header Info  */}
                <div className="bx-header__info d-flex">
                  <a
                    href="#"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#bxSearch"
                    aria-controls="offcanvasTopSearch"
                    className="bx-header__search"
                  >
                    <i className="fi fi-rs-search" />
                  </a>
                  <div className="bx-header__contact-info">
                    <p className="support-text">
                      <svg
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.75 12.315V14.9671C15.75 15.3608 15.4456 15.6875 15.0529 15.7153C14.7248 15.7384 14.4572 15.75 14.25 15.75C7.62255 15.75 2.25 10.3774 2.25 3.75C2.25 3.54278 2.26159 3.27515 2.28476 2.94713C2.31253 2.55441 2.6392 2.25 3.03289 2.25H5.68508C5.87758 2.25 6.03882 2.39582 6.05815 2.58735C6.0755 2.7593 6.09163 2.89735 6.10655 3.00151C6.25826 4.06104 6.56815 5.06952 7.01152 6.00227C7.08269 6.15199 7.03628 6.33119 6.90139 6.42754L5.28266 7.58385C6.26814 9.88583 8.11417 11.7319 10.4162 12.7174L11.5703 11.1014C11.6679 10.9649 11.8492 10.918 12.0007 10.9899C12.9334 11.4329 13.9418 11.7425 15.0012 11.8938C15.1047 11.9087 15.2419 11.9246 15.4126 11.9419C15.6042 11.9612 15.75 12.1225 15.75 12.315Z"
                          fill="#223035"
                        />
                      </svg>
                      24/7 Support
                    </p>
                    <a href="tel:+64339666054" className="phone-number">
                      1800 698 968
                    </a>
                  </div>
                  {/* Start Mobile Menu Button */}
                  <button
                    type="button"
                    className="mobile-menu-offcanvas-toggler"
                    onClick={() => setShow(true)}
                    data-bs-toggle="modal"
                    data-bs-target="#offcanvas-modal"
                  >
                    <span className="line" />
                    <span className="line" />
                    <span className="line" />
                  </button>
                  {/* End Mobile Menu Button */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
