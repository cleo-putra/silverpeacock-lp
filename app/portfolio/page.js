import { CTA5 } from "@/components/CTA";
import PageBanner from "@/components/PageBanner";
import { Portfolio2 } from "@/components/Portfolio";
import BexpartLayout from "@/layout/BexpartLayout";
const page = () => {
  return (
    <BexpartLayout header={2} footer={1} customCssFile="portfolio.css">
      <PageBanner
        pageName="Our Portfolio"
        pageTitle="Explore Our Portfolio of Successful Projects"
        pageImage="/assets/images/breadcrumbs/bg-2.png"
      />
      <Portfolio2 />
      <CTA5 />
    </BexpartLayout>
  );
};
export default page;
