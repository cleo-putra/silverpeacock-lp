import { About2 } from "@/components/About";
import { Blog2 } from "@/components/Blog";
import Contact from "@/components/Contact";
import { CTA4 } from "@/components/CTA";
import Funfact from "@/components/Funfact";
import { Hero2 } from "@/components/Hero";
import { Marquee1, Marquee2 } from "@/components/Marquee";
import Misson from "@/components/Misson";
import { Partner2 } from "@/components/Partner";
import { PortoflioIsotope2 } from "@/components/PortoflioIsotope";
import { Service2 } from "@/components/Service";
import { Team2 } from "@/components/Team";
import { WhyChooseUs2 } from "@/components/WhyChooseUs";
import BexpartLayout from "@/layout/BexpartLayout";
const page = () => {
  return (
    <BexpartLayout
      customCssFile="master/finance-home.css"
      header={2}
      footer={2}
    >
      <Hero2 />
      <Marquee1 containerClass="bx-text-move section-gap bg-color-1" />
      <About2 />
      <Service2 />
      <Misson />
      <Funfact />
      <PortoflioIsotope2 />
      <div className="bx-partner section-gap bg-color-1 pt-0">
        <div className="container bx-container">
          <div className="bx-partner__section-head">
            <h3 className="title has_word_anim">
              9493+ Global brands growth with BExpert business & finance
              solutions
            </h3>
          </div>
          <Partner2 />
        </div>
      </div>
      <Team2 />
      <WhyChooseUs2 />
      <Marquee2 />
      <Contact />
      <Blog2 />
      <CTA4 />
    </BexpartLayout>
  );
};
export default page;
