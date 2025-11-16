import { About1 } from "@/components/About";
import { Achievements1 } from "@/components/Achievements";
import { Award1 } from "@/components/Award";
import { Blog1 } from "@/components/Blog";
import { CTA1, CTA2, CTA3 } from "@/components/CTA";
import { Hero1 } from "@/components/Hero";
import { Marquee1 } from "@/components/Marquee";
import PortoflioIsotope from "@/components/PortoflioIsotope";
import { Service3 } from "@/components/Service";
import { Team1, Team2 } from "@/components/Team";
import { Testimonial1 } from "@/components/Testimonial";
import { WhyChooseUs1 } from "@/components/WhyChooseUs";
import BexpartLayout from "@/layout/BexpartLayout";
const page = () => {
  return (
    <BexpartLayout>
      <Hero1 />
      {/* <About1 /> */}
      <Service3 />
      <CTA1 />
      <Marquee1 />
      <WhyChooseUs1 />
      {/* <Achievements1 /> */}
      <Award1 />
      {/* <PortoflioIsotope /> */}
      {/* <CTA2 /> */}
      <Testimonial1 />
      <Team1 />
      <Blog1 />
      <CTA3 />
    </BexpartLayout>
  );
};
export default page;
