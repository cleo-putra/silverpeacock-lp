"use client";
import BexpartLayout from "@/layout/BexpartLayout";
import Link from "next/link";

const page = () => {
  return (
    <BexpartLayout noHeader noFooter customCssFile="404.css">
      <div
        className="error-area"
        style={{ backgroundImage: 'url("assets/images/404/404-bg.png")' }}
      >
        <div className="error-img" />
        <div className="error-inner">
          <div className="error-shape">
            <img src="assets/images/404/shape.png" alt="shape" />
          </div>
          <div className="error-inner-wrapper">
            <div className="error-main-img">
              <img src="assets/images/404/404-img.png" alt="404-img" />
            </div>
            <div className="error-content">
              <h3>Oopsie! Something's Missing...</h3>
              <p>
                The page you are looking for doesn't exist. It may have been
                moved or removed altogether. Please try searching for some other
                page, or return to the website.
              </p>
              <Link href="/" className="bx-btn">
                Back To Homepage
                <i className="fi-rr-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </BexpartLayout>
  );
};
export default page;
