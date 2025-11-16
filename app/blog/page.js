import { Blog4 } from "@/components/Blog";
import { CTA5 } from "@/components/CTA";
import PageBanner from "@/components/PageBanner";
import BexpartLayout from "@/layout/BexpartLayout";
const page = () => {
  return (
    <BexpartLayout header={2} footer={1} customCssFile="blog.css">
      <PageBanner
        pageName="Portfolio Details"
        pageTitle="Expert Tips and Strategies for Growing Businesses"
        pageImage="/assets/images/breadcrumbs/bg-11.png"
      />
      <Blog4 />
      <CTA5 />
    </BexpartLayout>
  );
};
export default page;
