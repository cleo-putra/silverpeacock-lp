const safeDocument = () => {
  return typeof document !== "undefined" ? document : null;
};
export const bexpartUtility = {
  searchBar() {
    console.log("searchBar");
  },
  animation: () => {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  },
  animatedSvg() {
    const doc = safeDocument();
    if (!doc) return;

    function setupSVGAnimation(svg) {
      const paths = svg.querySelectorAll("path");
      paths.forEach((path) => {
        const length = path.getTotalLength();
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
      });
    }

    doc.querySelectorAll(".animated-svg").forEach(setupSVGAnimation);

    const observers = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const svg = entry.target;
            svg.querySelectorAll("path").forEach((path) => {
              path.style.strokeDashoffset = "0";
            });
            observers.unobserve(svg);
          }
        });
      },
      { threshold: 0.5 }
    );

    doc.querySelectorAll(".animated-svg").forEach((svg) => {
      observers.observe(svg);
    });
  },
  stickyHeader() {
    if (typeof window === "undefined") return;
    const doc = safeDocument();
    if (!doc) return;

    window.addEventListener("scroll", function () {
      const scroll = window.scrollY;
      const header = doc.querySelector(".header-main");
      if (header) {
        if (scroll < 100) {
          header.classList.remove("sticky");
        } else {
          header.classList.add("sticky");
        }
      }
    });
  },
  animateLinearProgress() {
    if (typeof window === "undefined") return;
    const doc = safeDocument();
    if (!doc) return;

    const config = {
      animationDuration: 1000,
      threshold: 0.3,
      rootMargin: "0px 0px -10% 0px",
    };

    const linearObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateProgressBar(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: config.threshold,
        rootMargin: config.rootMargin,
      }
    );

    doc.querySelectorAll(".progress-container").forEach((container) => {
      const progressEl = container.querySelector(".progress");
      if (progressEl) {
        progressEl.style.width = "0%";
        progressEl.style.transition = "none";
        linearObserver.observe(container);
      }
    });

    function animateProgressBar(container) {
      const percentage = parseInt(
        container.getAttribute("data-percentage"),
        10
      );
      const progressEl = container.querySelector(".progress");
      const percentageEl = container
        .closest(".progress-item")
        ?.querySelector(".progress-item__percentage");

      if (!progressEl) return;

      const startTime = performance.now();
      const duration = config.animationDuration;
      const startValue = 0;
      const endValue = percentage;

      function updateProgress(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const currentValue = Math.floor(
          startValue + (endValue - startValue) * progress
        );
        progressEl.style.width = `${currentValue}%`;
        if (percentageEl) {
          percentageEl.textContent = `${currentValue}%`;
        }

        if (progress < 1) {
          requestAnimationFrame(updateProgress);
        }
      }

      requestAnimationFrame(updateProgress);
    }
  },
  portfolioImageHover() {
    // Store the last active index for each tab
    const lastActiveIndices = {};
    // Remove any existing event handlers
    const gridItems = document.querySelectorAll(".grid-item");

    if (gridItems.length > 0) {
      gridItems.forEach((el) => el.removeEventListener("mouseenter", () => {}));
      gridItems.forEach((el) => el.removeEventListener("mouseleave", () => {}));
      // Handle mouseenter for grid items
      gridItems.forEach((el) => {
        el.addEventListener("mouseenter", function () {
          const tabPane = el.closest(".tab-pane");
          const tabId = tabPane.getAttribute("id");
          const backgrounds = tabPane.querySelectorAll(".portfolio-bg-img");
          const items = tabPane.querySelectorAll(".grid-item");

          // Remove all active classes
          backgrounds.forEach((el) => el.classList.remove("active"));
          items.forEach((el) => el.classList.remove("active"));

          // Get the item number and activate corresponding elements
          const itemClass = el.className.match(/item-(\d+)/);
          if (itemClass && itemClass[1]) {
            const index = parseInt(itemClass[1]) - 1;
            backgrounds[index].classList.add("active");
            el.classList.add("active");
            // Store the last active index for this tab
            lastActiveIndices[tabId] = index;
          }
        });
      });

      // Handle mouseleave for portfolio wrapper
      document.querySelectorAll(".portfolio-wrapper").forEach((el) => {
        el.addEventListener("mouseleave", function () {
          const tabPane = el.closest(".tab-pane");
          const tabId = tabPane.getAttribute("id");
          const backgrounds = tabPane.querySelectorAll(".portfolio-bg-img");
          const items = tabPane.querySelectorAll(".grid-item");

          // Remove all active classes
          backgrounds.forEach((el) => el.classList.remove("active"));
          items.forEach((el) => el.classList.remove("active"));

          // Use last active index if available, otherwise use first item
          const lastIndex = lastActiveIndices?.[tabId] || 0;
          backgrounds[lastIndex].classList.add("active");
          items[lastIndex].classList.add("active");
        });
      });
    }
  },
};
