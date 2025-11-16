// Dynamically import GSAP plugins only on client side
let ScrollSmoother, ScrollToPlugin, ScrollTrigger, SplitText, TweenMax;

if (typeof window !== "undefined") {
  ScrollSmoother =
    require("../../public/gsap-plugins/ScrollSmoother.min.js").default;
  ScrollToPlugin = require("../../public/gsap-plugins/Scrollto.min.js").default;
  ScrollTrigger =
    require("../../public/gsap-plugins/ScrollTrigger.min").default;
  SplitText = require("../../public/gsap-plugins/SplitText.min.js").default;
  TweenMax = require("../../public/gsap-plugins/TweenMax.min.js").default;
}

export { ScrollSmoother, ScrollToPlugin, ScrollTrigger, SplitText, TweenMax };
