import { CTA5 } from "@/components/CTA";
import ServiceBanner from "@/components/ServiceBanner";
import BexpartLayout from "@/layout/BexpartLayout";
import Link from "next/link";
const page = () => {
  return (
    <BexpartLayout header={2} footer={1} customCssFile="service-details.css">
      <ServiceBanner
        pageName="Service Details"
        pageTitle="Compliance"
        pageImage="/assets/images/sp/compliance.jpg"
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
               
                <h4>Tax & Accounting Compliance Services Sydney</h4>
                <p>
Companies in Australia need to be mindful of their obligations and compliance requirement, these may vary and can include:                </p>
               
<ul>
                  <li>
                    <i className="fi fi-ss-check-circle" />
                    <p>
                    Reporting requirements
                    </p>
                  </li>
                  <li>
                    <i className="fi fi-ss-check-circle" />
                    <p>
                    ASIC Compliance requirements
                    </p>
                  </li>
                  <li>
                    <i className="fi fi-ss-check-circle" />
                    <p>
                    ATO Compliance requirements
                    </p>
                  </li>
                  <li>
                    <i className="fi fi-ss-check-circle" />
                    <p>
                    State compliance requirements. For example in the state of New South Wales (NSW), it’s the NSW Fair Trading
                    </p>
                  </li>
                </ul>

               <br/>
                <p>
<b>Accuracy is paramount when filing official documents</b>, especially financial documents. Keep immaculate, detailed records to make sure that all the financial documents you’re required to prepare are likewise accurate.
                </p>
                <br/>
                <p>Keep records of all relevant expenses, company invoices, profits, losses, and payments.</p>
                <br/>
                <p>If you’re unsure if the records you have are relevant, keep them on-hand in case they’re necessary later and get a professional’s opinion. While you may count expenses such as posting for new jobs, job listings and alerts to grow your company, personal expenses put on a corporate card do not qualify in all situations.</p>               
              
              <br/>
                <p>
        It is important to be aware of the documents that you are legally required to submit, and the dates they must be filed by. Plan ahead of deadlines to ensure that no part of your submission is rushed and therefore, more likely to arrive late or contain errors.
                </p>
                <br/>
                <p>You’re surely familiar with the mandatory income tax return, but another required form you’ll need to prepare is the BAS. The <b>BAS is the business activity statement</b>, which documents taxes on goods and services (also known as GST), withheld taxes on worker payments, and taxes you have paid in advance in anticipation of your own tax costs.</p>               
<br/>       
<p>

Late submissions can be subject to fines that get much heftier as time goes by.</p>
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
