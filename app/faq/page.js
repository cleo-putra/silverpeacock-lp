"use client";
import Contact from "@/components/Contact";
import { CTA5 } from "@/components/CTA";
import FAQ from "@/components/FAQ";
import PageBanner from "@/components/PageBanner";
import BexpartLayout from "@/layout/BexpartLayout";
const page = () => {
  return (
    <BexpartLayout header={2} footer={1} customCssFile="faq.css">
      <PageBanner
        pageName="FAQ’S"
        pageTitle="Common Questions and Expert Answers for Your Convenience"
        pageImage="/assets/images/breadcrumbs/bg-15.png"
      />
      <FAQ />
      <Contact />
      <CTA5 />
    </BexpartLayout>
  );
};
export default page;
