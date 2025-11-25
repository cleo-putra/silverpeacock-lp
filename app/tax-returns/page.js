import { CTA5 } from "@/components/CTA";
import ServiceBanner from "@/components/ServiceBanner";
import BexpartLayout from "@/layout/BexpartLayout";
import Link from "next/link";
const page = () => {
  return (
    <BexpartLayout header={2} footer={1} customCssFile="service-details.css">
      <ServiceBanner
        pageName="Service Details"
        pageTitle="Tax Returns"
        pageImage="/assets/images/sp/tax-return.jpg"
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
               
                <h4>Affordable Tax Return Agent for Small Businesses & Sole Traders</h4>
                <p>
Tax Season can be a very overwhelming time, most taxpayers are worried about getting a tax bill and not a tax refund. Because we have a team of expert & professional accountants that specialize in the <b>property & construction industry, healthcare, law firms & small to medium Industries in Australia</b>, we are aware of industry-specific deductions that you will be entitled to as a deduction.
                </p>
                <br/>
                <p>We are able to claim deductions for certain expenses without the need for receipts using the reasonable rates that the Australian Taxation Office (ATO) allows for. It is important to maintain logbook and diary records to maintain compliance with the ATO requirements to claim deductions.</p>
                <br/>
                <p>Some deadlines are extended when you engage a licensed tax agent like Silver Peacock who can apply for extensions of deadlines to avoid penalties and interest surcharges.</p>
               
<br/>
                <h4>Do you Have Tax Debts to File?</h4>
                <p>
If you have a tax debt or an amount of tax payable, do not assume that the ATO will forget about it overtime or assume that it will go away the longer you ignore it. We work hard representing our clients to workout arrangements between them and the ATO to clear any outstanding debts and avoiding any penalties or interest surcharge. In many cases, we were able to reach settlement with the ATO and a waiver or penalty and interest surcharges.
                </p>
                <br/>
                <p>Where clients are going through financial hardship, we were able to work out a payment arrangement that made it more affordable for our clients to meet their tax obligations and reduce their tax debts.</p>
               
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
