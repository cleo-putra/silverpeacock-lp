import { CTA5 } from "@/components/CTA";
import PageBanner from "@/components/PageBanner";
import BexpartLayout from "@/layout/BexpartLayout";
import Link from "next/link";
const page = () => {
  return (
    <BexpartLayout header={2} footer={1} customCssFile="service-details.css">
      <PageBanner
        pageName="Service Details"
        pageTitle="Accountant for Tradies"
        pageImage="/assets/images/sp/accounting.jpg"
      />
      <section className="service-details section-gap">
        <div className="container bx-container">
          <div className="service-details__inner d-flex">
            {/* Sidebar  */}
            <div className="service-details__sidebar">
            
              {/* Single Widget  */}
              <div className="sidebar-widget">
                <h4 className="sidebar-widget__title">Our Services</h4>
                <ul>
                  <li>
                    <Link href="service-details">
                      Accounting <i className="fi-rr-arrow-right" />
                    </Link>
                  </li>
                  <li>
                    <Link href="service-details">
                      Bookkeeping <i className="fi-rr-arrow-right" />
                    </Link>
                  </li>
                  <li>
                    <Link href="service-details">
                      Taxation <i className="fi-rr-arrow-right" />
                    </Link>
                  </li>
                  <li>
                    <Link href="service-details">
                      Tax Return <i className="fi-rr-arrow-right" />
                    </Link>
                  </li>
                  <li>
                    <Link href="service-details">
                      Payroll <i className="fi-rr-arrow-right" />
                    </Link>
                  </li>
                  <li>
                    <Link href="service-details">
                      Compliance <i className="fi-rr-arrow-right" />
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Single Widget  */}
              <div className="sidebar-widget sidebar-banner">
                <img
                  src="assets/images/service-details/sidebar-banner.png"
                  alt="sidebar-banner"
                />
                <div className="sidebar-banner__content">
                  <h4>Let’s Start Your Project Together</h4>
                  <Link href="contact" className="bx-btn">
                    Start Your Project <i className="fi-rr-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            {/* Main Content  */}
            <div className="service-details__main">
              <div className="service-details__content">
                <h3>Specialist Accountant for Tradies</h3>
                <p>
                 Silver Peacock Pty Ltd works closely with Small Businesses, Construction Developers, Property Builders, and Tradespersons to ensure you are operating your business efficiently.
<br/><br/>
What does it mean to be a specialist tradies accountant? Just like a builder develops their specialist skills in construction over years of experience, so to does Silver Peacock Pty Ltd in ensuring your business performs optimally for your trade. With over 20 years experience managing accounts and bookkeeping for tradies, no other business accountant comes close to achieving the results we do for our clients.
<br/><br/>
We adopt cloud-based accounting tools & systems such as Xero, MYOB, Freshbooks allowing us to work on your business anytime and anywhere so your business can get the attention, dedication, and commitment it deserves. Adopting this innovation has strengthened client relationships with Silver Peacock Pty Ltd and allowing for more streamlined communication and data accessibility.
<br/><br/>
This simply means you will have instant access to your financial information and Silver Peacock Pty Ltd can have real-time tracking of performance indicators as we manage your business compliance and bookkeeping requirements.
                </p>
     
                <img
                  src="assets/images/service-details/details-img.png"
                  alt="details-img"
                />
                <h4>Bookkeeping Services for Small Business & Tradies</h4>
                <p>
                 Silver Peacock Pty Ltd specialise in bookkeeping for tradies and small businesses to ensure your finances are managed from start to finish.
                </p>
                <br/>
                <p>If any of the following is true then we can help boost and streamline your business.</p>
                <ul>
                  <li>
                    <i className="fi fi-ss-check-circle" />
                    Sick of hiring Bookkeepers again and again? The Bookkeeper leaves the job frequently?
                  </li>
                  <li>
                    <i className="fi fi-ss-check-circle" />
                    Are you tired of paying employee expenses – Workers Comp, Super, Insurance, Holiday Pay, Sick Leave etc.
                  </li>
                  <li>
                    <i className="fi fi-ss-check-circle" />
                    Do you end up with unprofessional Bookkeepers?
                  </li>
                  <li>
                    <i className="fi fi-ss-check-circle" />
                    Your Bookkeeper cannot reply to all the queries made by the management?
                  </li>
                   <li>
                    <i className="fi fi-ss-check-circle" />
                   Do your Bookkeepers make excessive mistakes and causing delays?
                  </li>
                </ul>

                  <p>Our carefully tailored bookkeeping services for tradies and small businesses are designed to save you time, money and streamline your business to really allow your business to fly. Here’s how:</p>
                <ul>
                  <li>
                    <i className="fi fi-ss-check-circle" />
                    World-Class team of specialist small business and tradie Bookkeepers.
                  </li>
                  <li>
                    <i className="fi fi-ss-check-circle" />
                    All-inclusive Standard Hourly Fees and packages.
                  </li>
                  <li>
                    <i className="fi fi-ss-check-circle" />
                    Australia’s most competent Bookkeepers armed with the latest software and cloud technology setup precisely for small business and construction/building business owners.
                  </li>
                  <li>
                    <i className="fi fi-ss-check-circle" />
                    Service when you need it – 7 Days a week.
                  </li>
                   <li>
                    <i className="fi fi-ss-check-circle" />
                  Focusing our bookkeeping services as a cost reduction measure blending Accounting, GST and Tax Package
                  </li>
                </ul>

 <h3>Builders & Tradies - How To Increase Business Cash Flow</h3>
                 <p>As a business operating in a competitive environment, it’s important to understand the cost drivers that impact your cash flow, some cost drivers are quantitative in nature others are qualitative.
<br/>
Some <b>common areas of struggle for construction businesses are:</b></p>
                <ul>
                  <li>
                    <i className="fi fi-ss-check-circle" />
                    <b>Timelines:</b> It’s important to work within project timelines and deadlines, if the project takes longer to complete, naturally this will reflect in your profits;
                  </li>
                  <li>
                    <i className="fi fi-ss-check-circle" />
                    <b>Interest rates:</b> It doesn’t take a genius to figure out that fluctuation of interest rates will affect your holding costs, particularly mortgage repayment;
                  </li>
                  <li>
                    <i className="fi fi-ss-check-circle" />
                    <b>GST Implication:</b> Understand your obligations so you can make the best decisions, for example, GST implication on property acquisition or GST on construction costs;
                  </li>
                  <li>
                    <i className="fi fi-ss-check-circle" />
                    <b>Insurances:</b> Most builders struggle with obtaining the appropriate coverage of insurance for the project. Likewise, it’s important that your accounts are compliant with the home warranty insurance requirements;
                  </li>
                   <li>
                    <i className="fi fi-ss-check-circle" />
                  <b>Technology:</b> Having a streamlined system that allows you to invoice before you leave the job site means you can get paid quicker. We can assist you with the appropriate business automation;
                  </li>
                </ul>
               
              </div>
            
            </div>
          </div>
        </div>
      </section>
      <CTA5 />
    </BexpartLayout>
  );
};
export default page;
