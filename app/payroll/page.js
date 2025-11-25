import { CTA5 } from "@/components/CTA";
import ServiceBanner from "@/components/ServiceBanner";
import BexpartLayout from "@/layout/BexpartLayout";
import Link from "next/link";
const page = () => {
  return (
    <BexpartLayout header={2} footer={1} customCssFile="service-details.css">
      <ServiceBanner
        pageName="Service Details"
        pageTitle="Payroll"
        pageImage="/assets/images/sp/payroll.jpg"
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
              
            </div>
            {/* Main Content  */}
            <div className="service-details__main">
              <div className="service-details__content">
               
                <h4>Payroll Management Company in Sydney, Australia</h4>
                <p>
Employers have many obligations towards their employees, from issuing payslips to reporting their superannuation and Pay as You Go (PAYG) Withholding. This can be burdensome for most employers having to manage payroll compliance.
                </p>
                <br/>
                <p>The ATO has introduced the <b>Single Touch Payroll (STP)</b>, an Australian Government initiative to reduce employers reporting burdens to government agencies. With STP, you report employees’ payroll information to us each time you pay them through STP-enabled software.</p>               

<br/>
<p>Payroll information includes:</p>
<ul>
                  <li>
                    <i className="fi fi-ss-check-circle" />
                    <p>
                    <b>Salaries and wages</b>
                    </p>
                  </li>
                  <li>
                    <i className="fi fi-ss-check-circle" />
                    <p>
                    <b>Pay as you go (PAYG) withholding</b>
                    </p>
                  </li>
                  <li>
                    <i className="fi fi-ss-check-circle" />
                    <p>
                    <b>Superannuation</b>
                    </p>
                  </li>
                </ul>

               <br/>
                <p>
STP started on 1 July 2018 for employers with 20 or more employees and 1 July 2019 for employers with 19 or fewer employees.
                </p>
                <br/>
                <p>We have provided several concessions depending on business, industry, or employer types. Most of these end on 1 July 2021. If you have a current concession you will need to be reporting each payday through STP by this date.</p>
                <br/>
                <p>If you haven’t started reporting through STP, you need to start reporting as soon as possible.</p>               
              
              <br/>
               <h4>How Silver Peacock helps in Payroll Management for your business?</h4>
                <p>
        <b>Payroll outsourcing</b> is the best way to manage and accurately pay all your employees. It is often recommended as a viable strategy in order to meet a company’s business requirements.
                </p>
                <br/>
                <p>Unfortunately, leaving yourself to do all the boring paperwork is detrimental to your overall productivity, which is where outsourcing payrolls become the only other viable solution. </p>               
<br/>       
<p>
    Focusing on your core business management is something we understand to be a top priority in business. Things such as employee leaves, employee self-service, and payroll tax can make accounting for a dynamically shifting payroll difficult. <b>Silver Peacock & Co. provides the most effective and efficient outsourced payroll solutions in Australia & Sydney CBD & Parramatta</b>, regardless of the issue. On top of that, we <b>also provide single-touch payroll services and salary packaging</b>.
</p>
<br/>
<p>What we do is have our customers speak and consult with trained representatives from our HR services to discuss the <b>best payroll solutions</b>. We can provide our plans with as much or as little detail as you want. </p>
              <br/>
              <p>Whether you’re looking for a lot of freedom with your payroll strategies, or just need to get the job done reliably and effectively, Silver Peacock & Co. can provide it all.</p>
              
              <br/>
                <h4>We are Experts in Payroll Services for Small Businesses & Tradies</h4>
                <p>
The first step to our innovative process is collecting the data in-house, as we have all the necessary tools and equipment to get any job done.
                </p>
                <br/>
                <p>The process is simple and can be done one click away – just by emailing all the important information for our up-to-date payroll software to crunch down on and provide a comprehensive payroll plan. Once all the required information is sent, you can leave the rest up to us.</p>
                <br/>
                <p><b>Everything from tax, monthly superannuation, to payslips can all be calculated and distributed for you easily and in a comprehensive manner. We can also help calculate pay for your new employees and have quality leave management services. </b></p>
                <br/>
                <p>Our Sydney CBD-based team is always on standby to re-order and prepare new payroll requirements, regardless of what happens to your business.</p>
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
