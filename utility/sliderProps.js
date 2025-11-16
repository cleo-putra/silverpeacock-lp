import SwiperCore from "swiper";
import {
  Autoplay,
  EffectFade,
  FreeMode,
  Grid,
  Navigation,
  Pagination,
  Parallax,
  Thumbs,
} from "swiper/modules";
SwiperCore.use([
  Pagination,
  Navigation,
  EffectFade,
  Autoplay,
  Grid,
  Parallax,
  FreeMode,
  Thumbs,
]);
export const sliderProps = {
  testimonial__slider: {
    spaceBetween: 30,
    slidesPerView: 4,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
    loop: true,
    breakpoints: {
      300: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 4,
      },
    },
  },
  testimonial__slider_2: {
    slidesPerView: 1,
    spaceBetween: 30, // margin
    loop: true,
    autoplay: {
      delay: 5000, // autoplayTimeout
      disableOnInteraction: false, // autoplayHoverPause: false
    },
    pagination: {
      el: ".owl-dots",
      clickable: true, // dots: true
    },
    navigation: false,
  },
  testimonial__slider_3: {
    slidesPerView: 2,
    spaceBetween: 100, // margin
    loop: true,
    speed: 500, // smartSpeed
    autoplay: {
      delay: 5000, // autoplayTimeout
      disableOnInteraction: false, // autoplayHoverPause: false
    },
    navigation: {
      nextEl: ".owl-next",
      prevEl: ".owl-prev",
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
    },
  },
  testimonial__slider_4: {
    slidesPerView: 2,
    spaceBetween: 30, // margin
    loop: true,
    speed: 500, // smartSpeed
    autoplay: {
      delay: 5000, // autoplayTimeout
      disableOnInteraction: false, // autoplayHoverPause: false
    },
    navigation: false, // nav: false
    breakpoints: {
      300: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 2,
      },
    },
  },
  testimonial__slider_5: {
    slidesPerView: 3,
    spaceBetween: 40, // default margin
    loop: true,
    speed: 500, // smartSpeed
    autoplay: {
      delay: 5000, // autoplayTimeout
      disableOnInteraction: false, // autoplayHoverPause: false
    },
    navigation: false, // nav: false
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  },
  partner__slider: {
    slidesPerView: 6,
    spaceBetween: 24,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false, // equivalent to autoplayHoverPause: false
    },
    navigation: false,
    breakpoints: {
      300: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 6,
      },
    },
  },
  hero__slider: {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 800, // Equivalent to smartSpeed
    autoplay: {
      delay: 30000,
      disableOnInteraction: false, // autoplayHoverPause: false
    },
    allowTouchMove: false, // touchDrag: false
    simulateTouch: true, // mouseDrag: true
    effect: "fade", // animateIn / animateOut
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: ".owl-dots",
      clickable: true,
    },
    navigation: false,
  },
  hero__slider_2: {
    slidesPerView: 1,
    spaceBetween: 0, // margin
    loop: true,
    speed: 800, // smartSpeed
    autoplay: {
      delay: 5000, // autoplayTimeout
      disableOnInteraction: false, // autoplayHoverPause: false
    },
    allowTouchMove: false, // touchDrag: false
    simulateTouch: true, // mouseDrag: true
    effect: "fade", // animateIn / animateOut
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      enabled: false, // dots: false
    },
    navigation: {
      nextEl: ".hero-4-next",
      prevEl: ".hero-4-prev",
    },
  },
  move_slider: {
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 58,
    speed: 5000,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },

    breakpoints: {
      768: {
        // Tablets and larger screens
        spaceBetween: 40,
      },
      0: {
        // Mobile screens
        spaceBetween: 32, // Adjust spacing for smaller screens
      },
    },
  },
  move_slider_reverse: {
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 58,
    speed: 5000,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      reverseDirection: true,
    },

    breakpoints: {
      768: {
        // Tablets and larger screens
        spaceBetween: 40,
      },
      0: {
        // Mobile screens
        spaceBetween: 32, // Adjust spacing for smaller screens
      },
    },
  },
  move_slider_2: {
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 58,
    speed: 5000,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        // Tablets and larger screens
        spaceBetween: 40,
      },
      0: {
        // Mobile screens
        spaceBetween: 32, // Adjust spacing for smaller screens
      },
    },
  },
  features__slider: {
    loop: true,
    speed: 1000, // smartSpeed
    autoplay: {
      delay: 4000, // autoplayTimeout
      disableOnInteraction: false, // autoplayHoverPause: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      enabled: false, // dots: false
    },
    navigation: false, // nav: false
    breakpoints: {
      300: {
        slidesPerView: 1,
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  },
};
