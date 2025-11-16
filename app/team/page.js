import { CTA5 } from "@/components/CTA";
import PageBanner from "@/components/PageBanner";
import { Team3 } from "@/components/Team";
import BexpartLayout from "@/layout/BexpartLayout";

const page = () => {
  return (
    <BexpartLayout header={2} footer={1} customCssFile="team.css">
      <PageBanner
        pageName="Team"
        pageTitle="Introducing the Experts Dedicated to Achieving Your Goals"
        pageImage="/assets/images/breadcrumbs/bg-9.png"
      />
      <Team3 />
      <CTA5 />
    </BexpartLayout>
  );
};
export default page;
