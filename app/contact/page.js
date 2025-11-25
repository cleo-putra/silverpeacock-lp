import Contact from "@/components/Contact";
import { CTA5 } from "@/components/CTA";
import ServiceBanner from "@/components/ServiceBanner";
import BexpartLayout from "@/layout/BexpartLayout";
const page = () => {
  return (
    <BexpartLayout header={2} footer={1} customCssFile="contact.css">
      <ServiceBanner
        pageName="Contact Us"
        pageTitle="Reach Out to Us for Personalized Assistance and Support"
        pageImage="/assets/images/sp/contact-bg.webp"
      />
      <Contact containerClass="bx-contact section-gap" />
      <section className="bx-contact-map">
        <div className="bx-contact-map__inner">
          <div className="gmap_canvas">
            <iframe
              id="gmap_canvas"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.8976941364367!2d151.00556117669385!3d-33.81495311627351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12af50e1373a4d%3A0xa161600ef2c2895f!2sSilver%20Peacock%20%26%20Co%20-%20Tradies%20Accountant!5e0!3m2!1sen!2sau!4v1762881766176!5m2!1sen!2sau"
            />
          </div>
        </div>
      </section>
    </BexpartLayout>
  );
};
export default page;
