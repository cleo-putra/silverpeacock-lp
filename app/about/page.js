import { About2 } from "@/components/About";
import { Award2 } from "@/components/Award";
import { Blog3 } from "@/components/Blog";
import { CTA5 } from "@/components/CTA";
import HowItWorks from "@/components/HowItWorks";
import { Marquee1 } from "@/components/Marquee";
import PageBanner from "@/components/PageBanner";
import { Partner2 } from "@/components/Partner";
import { Portfolio } from "@/components/Portfolio";
import { Testimonial2 } from "@/components/Testimonial";
import BexpartLayout from "@/layout/BexpartLayout";
import Link from "next/link";
const page = () => {
  return (
    <BexpartLayout customCssFile="about.css" header={2} footer={1}>
      <PageBanner />
      <About2 />
      <div className="bx-partner section-gap pt-0">
      
      </div>
      <HowItWorks />
      <Portfolio />
      <section className="bx-cta-desc section-gap pb-0">
        <div className="container bx-container">
          <div className="bx-cta-desc__inner">
            <div className="bx-cta-desc__content">
              <h3 className="title has_word_anim">
                <span className="bx-literata">Achieve New Heights</span> with
                Our Customized Business Solutions Explore Boundless
                Opportunities to Transform Challenges into Success Stories
              </h3>
            </div>
            <div
              className="bx-cta-desc__content wow fadeInUp"
              data-wow-delay=".3s"
            >
              <p className="text">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
              <div className="bx-cta-desc__actions">
                <Link href="/contact" className="bx-btn">
                  Get Started Now
                  <i className="fi-rr-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Marquee1 />
      {/* <Award2 /> */}
      {/* <Testimonial2 containerClass="bx-testimonial section-gap pt-0 position-relative" />
      <Blog3 /> */}
      <CTA5 />
    </BexpartLayout>
  );
};
export default page;
