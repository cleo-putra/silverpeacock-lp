import { CTA5 } from "@/components/CTA";
import PageBanner from "@/components/PageBanner";
import { Partner2 } from "@/components/Partner";
import Pricing from "@/components/Pricing";
import { WhyChooseUs2 } from "@/components/WhyChooseUs";
import BexpartLayout from "@/layout/BexpartLayout";
const page = () => {
  return (
    <BexpartLayout header={2} footer={1} customCssFile="pricing.css">
      <PageBanner
        pageName="Pricing Plan"
        pageTitle="Transparent Pricing Plans for Every Budget and Requirement"
        pageImage="/assets/images/breadcrumbs/bg-14.png"
      />
      <Pricing titleShow={false} />
      <WhyChooseUs2 />
      <div className="bx-partner section-gap">
        <div className="container bx-container">
          <div className="bx-partner__section-head">
            <h3 className="title">
              9493+ Global brands growth with BExpert business & finance
              solutions
            </h3>
          </div>
          <Partner2 />
        </div>
      </div>
      <CTA5 />
    </BexpartLayout>
  );
};
export default page;
