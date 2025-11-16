import Link from "next/link";

export const Team1 = () => {
  const teams = [
    {
      id: 1,
      image: "/assets/images/main-home/team/wagdi.jpg",
      name: "Wagdi Andrawis",
      designation: "Financial Advisor / Practicing Accountant",
      delay: ".3s",
    },
    {
      id: 2,
      image: "/assets/images/main-home/team/ann.jpg",
      name: "Ann Z.",
      designation: "Executive Associate & Chartered Tax Advisor",
      delay: ".5s",
    },
    {
      id: 3,
      image: "/assets/images/main-home/team/sarmila.jpg",
      name: "Sarmila L.",
      designation: "Executive Associate & Registered Tax Agent | Corporate Tax Planning",
      delay: ".7s",
    },
    
    {
      id: 5,
      image: "/assets/images/main-home/team/team-5.png",
      name: "Noelle ",
      designation: "Senior Associate & Management Accountant | Foreign Tax Planning",
      delay: ".3s",
    },
    {
      id: 6,
      image: "/assets/images/main-home/team/team-6.png",
      name: "Mani R.",
      designation: "Senior Associate & Tax Accountant",
      delay: ".5s",
    },
    {
      id: 7,
      image: "/assets/images/main-home/team/team-7.png",
      name: "Brenalyn W.",
      designation: "Senior Associate & Tax Accountant",
      delay: ".7s",
    },
    {
      id: 8,
      image: "/assets/images/main-home/team/team-8.png",
      name: "Norika R.",
      designation: "Associate & Tax Accountant",
      delay: ".9s",
    },
     {
      id: 8,
      image: "/assets/images/main-home/team/team-8.png",
      name: "Rina F.",
      designation: "Management Accountant & Practice Admin Manager",
      delay: ".9s",
    },
  ];
  return (
    <section className="bx-team section-gap">
      <div className="container bx-container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="bx-section-head style-2">
              <small className="bx-section-head__label">Our Team Member</small>
              <h3 className="bx-section-head__title has_word_anim">
                <span className="bx-literata">Partners at </span> Silver Peacock & Co
              </h3>
              <div className="bx-section-head__btn">
                <Link href="/team" className="bx-btn">
                  View All Member
                  <i className="fi-rr-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bx-team__wrapper">
          {teams.map((team) => (
            
            <div
              className="bx-team__card wow fadeInUp "
              data-wow-delay={team.delay}
              key={team.id}
            >
              <div className="bx-team__head">
                <div className="bx-team__img">
                  <img src={team.image} alt="team-img" />
                </div>
                <ul className="bx-team__social">
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
              <div className="bx-team__content">
                <h4 className="name">
                  <Link href="team-details">{team.name}</Link>
                </h4>
                <p className="designation">{team.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Team2 = () => {
  const teams = [
    {
      id: 1,
      image: "/assets/images/finance-home/team/team-1.png",
      name: "Sarah Collins",
      designation: "Chief Financial Officer (CFO)",
    },
    {
      id: 2,
      image: "/assets/images/finance-home/team/team-2.png",
      name: "James Parker",
      designation: "Senior Investment Strategist",
    },
    {
      id: 3,
      image: "/assets/images/finance-home/team/team-3.png",
      name: "Emma Rodriguez",
      designation: "Head of Business Consulting",
    },
    {
      id: 4,
      image: "/assets/images/finance-home/team/team-4.png",
      name: "Michael Hughes",
      designation: "Risk Management Specialist",
    },
  ];
  return (
    <section className="bx-team section-gap position-relative">
      <div className="bx-team__shape">
        <img src="assets/images/icons/offwhite-brand-2.svg" alt="brand-logo" />
      </div>
      <div className="container bx-container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-6 col-12">
            <div className="bx-section-head text-center">
              <small className="bx-section-head__label">Our Team</small>
              <h3 className="bx-section-head__title has_word_anim">
                <span className="bx-literata"> Our Dedicated </span> Team of
                <br />
                Financial Professionals
              </h3>
            </div>
          </div>
        </div>
        <div className="bx-team__wrapper">
          {teams.map((team) => (
            <div className="bx-team__card wow fadeInUp" key={team.id}>
              <div className="bx-team__head">
                <div className="bx-team__img">
                  <img src={team.image} alt="team-img" />
                </div>
                <ul className="bx-team__social">
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
              <div className="bx-team__content">
                <h4 className="name">
                  <Link href="/team-details">{team.name}</Link>
                </h4>
                <p className="designation">{team.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export const Team3 = () => {
  const teams = [
    {
      id: 1,
      image: "/assets/images/finance-home/team/team-1.png",
      name: "Sarah Collins",
      designation: "Chief Financial Officer (CFO)",
    },
    {
      id: 2,
      image: "/assets/images/finance-home/team/team-2.png",
      name: "James Parker",
      designation: "Senior Investment Strategist",
    },
    {
      id: 3,
      image: "/assets/images/finance-home/team/team-3.png",
      name: "Emma Rodriguez",
      designation: "Head of Business Consulting",
    },
    {
      id: 4,
      image: "/assets/images/finance-home/team/team-4.png",
      name: "Michael Hughes",
      designation: "Risk Management Specialist",
    },
    {
      id: 5,
      image: "/assets/images/finance-home/team/team-5.png",
      name: "Sophia Mitchell",
      designation: "Chief Financial Officer (CFO)",
    },
    {
      id: 6,
      image: "/assets/images/finance-home/team/team-6.png",
      name: "David Patel",
      designation: "Senior Investment Strategist",
    },
    {
      id: 7,
      image: "/assets/images/finance-home/team/team-7.png",
      name: "Caroline Watson",
      designation: "Head of Business Consulting",
    },
    {
      id: 8,
      image: "/assets/images/finance-home/team/team-8.png",
      name: "Benjamin Harris",
      designation: "Risk Management Specialist",
    },
  ];
  return (
    <section className="bx-team section-gap position-relative">
      <div className="container bx-container">
        <div className="bx-team__wrapper">
          {teams.map((team) => (
            <div className="bx-team__card wow fadeInUp" key={team.id}>
              <div className="bx-team__head">
                <div className="bx-team__img">
                  <img src={team.image} alt="team-img" />
                </div>
                <ul className="bx-team__social">
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
              <div className="bx-team__content">
                <h4 className="name">
                  <Link href="/team-details">{team.name}</Link>
                </h4>
                <p className="designation">{team.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
