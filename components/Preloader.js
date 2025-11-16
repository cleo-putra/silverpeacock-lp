"use client";
import { useEffect, useState } from "react";
const Preloader = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <div id="preloader" className={loading ? "" : "preloaded "}>
      <div className="preloader-wrap">
        <div className="loader">
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>
      </div>
    </div>
  );
};
export default Preloader;
