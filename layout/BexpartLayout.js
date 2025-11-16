"use client";
import ImageView from "@/components/ImageView";
import VideoPopup from "@/components/VideoPopup";
import { bexpartUtility } from "@/utility";
import { Fragment, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
const BexpartLayout = ({
  children,
  customCssFile = "master/main-home.css",
  header,
  footer,
  noHeader = false,
  noFooter = false,
}) => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.document) {
      const cssLink = window.document.createElement("link");
      cssLink.rel = "stylesheet";
      cssLink.href = `/assets/css/${customCssFile}`;
      cssLink.onerror = () =>
        console.error(`CSS load failed: ${customCssFile}`);
      window.document.head.appendChild(cssLink);
      return () => cssLink.parentNode?.removeChild(cssLink);
    }
  }, [customCssFile]);
  useEffect(() => {
    bexpartUtility.animation();
  }, []);
  return (
    <Fragment>
      <ImageView />
      <VideoPopup />
      {!noHeader && <Header header={header} />}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>{children}</main>
          {!noFooter && <Footer footer={footer} />}
        </div>
      </div>
    </Fragment>
  );
};
export default BexpartLayout;
