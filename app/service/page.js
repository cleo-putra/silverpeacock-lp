import { CTA5 } from "@/components/CTA";
import HowItWorks from "@/components/HowItWorks";
import PageBanner from "@/components/PageBanner";
import { Service3 } from "@/components/Service";
import BexpartLayout from "@/layout/BexpartLayout";
const page = () => {
  return (
    <BexpartLayout header={2} footer={1} customCssFile="service.css">
      <PageBanner
        pageName="Our Services"
        pageTitle="Unlocking Success with Our Professional Services"
        pageImage="/assets/images/sp/page-title-bg.jpg"
      />
      <Service3 />
      <HowItWorks />
      <CTA5 />
    </BexpartLayout>
  );
};
export default page;
