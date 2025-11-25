import Link from "next/link";

export const Service1 = () => {
  const serviceData = [
    {
      id: 1,
      title: "Accounting",
      description:
        "With decades of accounting experience in your industry, you can count on us.",
      image: "/assets/images/main-home/service/service-1.png",
      icon: "/assets/images/main-home/service/icon-1.svg",
      number: "01",
    },
    {
      id: 2,
      title: "Bookkepping",
      description:
        "We adopt a streamlined and innovative approach.",
      image: "/assets/images/main-home/service/service-2.png",
      icon: "/assets/images/main-home/service/icon-2.svg",
      number: "02",
    },
    {
      id: 3,
      title: "Taxation",
      description:
        "Pay what you owe not what you don’t.",
      image: "/assets/images/main-home/service/service-3.png",
      icon: "/assets/images/main-home/service/icon-3.svg",
      number: "03",
    },
    {
      id: 4,
      title: "Tax Returns",
      description:
        "Maximum refund, why leave the taxman a tip?",
      image: "/assets/images/main-home/service/service-4.png",
      icon: "/assets/images/main-home/service/icon-4.svg",
      number: "04",
    },
    {
      id: 5,
      title: "Payroll",
      description:
        "Pay to PAYG, we do it all.",
      image: "/assets/images/main-home/service/service-4.png",
      icon: "/assets/images/main-home/service/icon-4.svg",
      number: "05",
    },
    {
      id: 6,
      title: "Compliance &Litigations",
      description:
        "From complaints to compliance.",
      image: "/assets/images/main-home/service/service-4.png",
      icon: "/assets/images/main-home/service/icon-4.svg",
      number: "06",
    },
  ];
  return (
    <section className="bx-service section-gap">
      <div className="container bx-container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-6 col-md-10 col-12">
            <div className="bx-section-head text-center">
              <small className="bx-section-head__label">Our Services</small>
              <h3 className="bx-section-head__title has_word_anim">
                <span className="bx-literata">Provide</span> the Bast Services,
                for Your Business & Finance
              </h3>
            </div>
          </div>
        </div>
        <div className=" bx-service__slider">
          <div className="row">
            {serviceData.map((item) => (
              <div className="col-md-4">
                <div className="bx-service__card">
                  {/* Bg Image  */}
                  <div className="bx-service__image">
                    <img src={item.image} alt="service-img-1" />
                  </div>
                  <div className="bx-service__cover">
                    {/* Image */}
                    <div className="bx-service__img">
                      <img src={item.image} alt="service-1" />
                    </div>
                    {/* Icon  */}
                    <div className="bx-service__icon">
                      <img src={item.icon} alt="icon" />
                    </div>
                    {/* <span className="bx-service__number">{item.number}</span> */}
                  </div>
                  {/* Content  */}
                  <div className="bx-service__content">
                    <Link className="title" href="service-details">
                      {item.title}
                    </Link>
                    <p className="text">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Service2 = () => {
  const serviceData = [
    {
      id: 1,
      title: "Wealth Management",
      description: "We offers full range of consultancy & training methods.",
      image: "/assets/images/finance-home/service/service-img-1.png",
      icon: `<svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_91_3467)"><mask id="mask0_91_3467" maskUnits="userSpaceOnUse" x="0" y="0" width="62" height="62" style="mask-type: alpha;"><path d="M62 0H0V62H62V0Z" fill="#F0F0F0"></path></mask><g mask="url(#mask0_91_3467)"><path d="M30.6831 25.2159C47.2645 25.2159 60.7063 20.0777 60.7063 13.7395C60.7063 7.40132 47.2645 2.26318 30.6831 2.26318C14.1019 2.26318 0.660156 7.40132 0.660156 13.7395C0.660156 20.0777 14.1019 25.2159 30.6831 25.2159Z" stroke="#85A6A6" stroke-width="0.978195" stroke-miterlimit="10"></path><path d="M0.660156 13.7393C0.660156 20.0461 14.0575 25.2156 30.6831 25.2156C47.3088 25.2156 60.7063 20.0461 60.7063 13.7393V48.8921C60.7063 55.1988 47.3088 60.3685 30.6831 60.3685C14.0575 60.3685 0.660156 55.1988 0.660156 48.8921V13.7393Z" stroke="#85A6A6" stroke-width="0.978195" stroke-miterlimit="10"></path></g></g><defs><clipPath id="clip0_91_3467"><rect width="62" height="62" fill="white"></rect></clipPath></defs></svg>`,
    },
    {
      id: 2,
      title: "Retirement Planning",
      description: "We offers full range of consultancy & training methods.",
      image: "/assets/images/finance-home/service/service-img-2.png",
      icon: `<svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_91_3493)"><mask id="mask0_91_3493" maskUnits="userSpaceOnUse" x="0" y="0" width="62" height="62" style="mask-type: alpha;"><path d="M62 0H0V62H62V0Z" fill="#D9D9D9"></path></mask><g mask="url(#mask0_91_3493)"><path d="M30.9979 61.3689C47.7703 61.3689 61.367 47.7722 61.367 30.9999C61.367 14.2275 47.7703 0.630859 30.9979 0.630859C14.2256 0.630859 0.628906 14.2275 0.628906 30.9999C0.628906 47.7722 14.2256 61.3689 30.9979 61.3689Z" stroke="#85A6A6" stroke-width="0.977041"></path><path d="M30.9995 50.0851C41.5401 50.0851 50.0849 41.5403 50.0849 30.9997C50.0849 20.4591 41.5401 11.9143 30.9995 11.9143C20.4589 11.9143 11.9141 20.4591 11.9141 30.9997C11.9141 41.5403 20.4589 50.0851 30.9995 50.0851Z" stroke="#85A6A6" stroke-width="0.977041"></path></g></g><defs><clipPath id="clip0_91_3493"><rect width="62" height="62" fill="white"></rect></clipPath></defs></svg>`,
    },
    {
      id: 3,
      title: "Finance Solutions",
      description: "We offers full range of consultancy & training methods.",
      image: "/assets/images/finance-home/service/service-img-3.png",
      icon: `<svg width="72" height="62" viewBox="0 0 72 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_91_3482)">
                    <mask id="mask0_91_3482" style="mask-type: alpha;" maskUnits="userSpaceOnUse" x="0" y="0" width="72" height="62">
                        <path d="M72 0H0V62H72V0Z" fill="#D9D9D9"></path>
                    </mask>
                    <g mask="url(#mask0_91_3482)">
                        <path d="M2.23828 60.8375L36.001 1.52856L69.7637 60.8375H2.23828Z" stroke="#85A6A6"></path>
                    </g>
                </g>
                <defs>
                    <clipPath id="clip0_91_3482">
                        <rect width="72" height="62" fill="white"></rect>
                    </clipPath>
                </defs>
            </svg>`,
    },
    {
      id: 4,
      title: "Tax Planning",
      description: "We offers full range of consultancy & training methods.",
      image: "/assets/images/finance-home/service/service-img-4.png",
      icon: `<svg width="60" height="62" viewBox="0 0 60 62" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_91_3505)"><path d="M0.632812 30.4542C0.955235 14.1349 13.7229 0.978368 29.5177 0.639404V30.4542H0.632812Z" stroke="#85A6A6"></path><path d="M59.3692 31.4641C59.0469 47.7834 46.2791 60.9399 30.4844 61.2789V31.4641H59.3692Z" stroke="#85A6A6"></path></g><defs><clipPath id="clip0_91_3505"><rect width="60" height="62" fill="white"></rect></clipPath></defs></svg>`,
    },
  ];
  return (
    <section className="bx-service section-gap bg-color-1">
      <div className="container bx-container">
        <div className="bx-service__inner">
          {/* Section Head  */}
          <div className="bx-section-head">
            <small className="bx-section-head__label bg-white">
              Our Services
            </small>
            <h3 className="bx-section-head__title has_word_anim">
              <span className="bx-literata">Provide</span> the Bast Services, in
              Business &amp; Finance
            </h3>
            <div className="bx-section-head__btn mg-top-80 wow fadeInUp">
              <Link href="service" className="bx-btn">
                All Our Services <i className="fi-rr-arrow-right" />
              </Link>
            </div>
          </div>
          {/* Service Wrapper  */}
          <div className="bx-service__wrapper">
            {serviceData.map((item) => (
              <div className="service-card wow fadeInUp" key={item.id}>
                <div className="service-image-card">
                  <img src={item.image} alt="service-img" />
                </div>
                <div className="service-info-card">
                  <div
                    className="service-icon"
                    dangerouslySetInnerHTML={{ __html: item.icon }}
                  />
                  <div className="service-content">
                    <h4 className="title">{item.title}</h4>
                    <p className="text">{item.description}</p>
                    <Link href="service-details" className="service-btn">
                      View Details <i className="fi-rr-arrow-right" />{" "}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Service3 = () => {
  const serviceData = [
    {
      id: 1,
      title: "Accounting",
      description: "We offers full range of consultancy & training methods.",
      image: "/assets/images/sp/accounting.jpg",
      bgImage: "/assets/images/sp/accounting.jpg",
      icon: "/assets/images/sp/accounting.jpg",
      number: "01",
    },
    {
      id: 2,
      title: "Bookkeeping",
      description: "We offers full range of consultancy & training methods.",
      image: "/assets/images/sp/bookkeeping.jpg",
      bgImage: "/assets/images/sp/bookkeeping.jpg",
      icon: "/assets/images/sp/",
      number: "02",
    },
    {
      id: 3,
      title: "Taxation",
      description: "We offers full range of consultancy & training methods.",
      image: "/assets/images/sp/taxation.jpg",
      bgImage: "/assets/images/sp/taxation.jpg",
      icon: "/assets/images/sp/",
      number: "03",
    },
    {
      id: 4,
      title: "Tax Returns",
      description: "We offers full range of consultancy & training methods.",
      image: "/assets/images/sp/tax-return.jpg",
      bgImage: "/assets/images/sp/tax-return.jpg",
      icon: "/assets/images/sp/",
      number: "04",
    },
    {
      id: 5,
      title: "Payroll",
      description:
        "Comprehensive retirement planning solutions, providing investment.",
      image: "/assets/images/sp/payroll.jpg",
      bgImage: "/assets/images/sp/payroll.jpg",
      icon: "/assets/images/sp/",
      number: "05",
    },
    {
      id: 6,
      title: "Compliance",
      description:
        "Assistance in identifying and mitigating financial risks, including",
      image: "/assets/images/sp/compliance.jpg",
      bgImage: "/assets/images/sp/compliance.jpg",
      icon: "/assets/images/sp/",
      number: "06",
    },
   
  ];
  return (
    <section className="bx-service section-gap">
      <div className="container bx-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }} className="bx-service__wrapper mt-0">
          {serviceData.map((item) => (
            <div className="bx-service__card wow fadeInUp" key={item.id}>
              {/* Bg Image  */}
              <div className="bx-service__image">
                <img src={item.bgImage} alt="service-img-1" />
              </div>
              <div className="bx-service__cover">
                {/* Image */}
                <div className="bx-service__img">
                  <img src={item.image} alt="service-1" />
                </div>
                {/* Icon  */}
                
                <span className="bx-service__number">{item.number}</span>
              </div>
              {/* Content  */}
              <div className="bx-service__content">
                <Link className="title" href="service-details">
                  {item.title}
                </Link>
                <p className="text">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
