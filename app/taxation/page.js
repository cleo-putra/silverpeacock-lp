import { CTA5 } from "@/components/CTA";
import ServiceBanner from "@/components/ServiceBanner";
import BexpartLayout from "@/layout/BexpartLayout";
import Link from "next/link";
const page = () => {
  return (
    <BexpartLayout header={2} footer={1} customCssFile="service-details.css">
      <ServiceBanner
        pageName="Service Details"
        pageTitle="Taxation"
        pageImage="/assets/images/sp/taxation.jpg"
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
                
                <h4>Taxation for Property & Construction Businesses</h4>
                <p>
                 Whether you’re a <b>builder</b>, a <b>property developer</b>, a <b>sparky</b> or a <b>plumber</b>, you face a wide range of tax issues and as business owners, you want to know about the tax implications associated with developing a property given the significant value of the transactions involved and the impact this may have on your profitability.
                </p>
                <br/>
                <p>If you are operating a business in the construction industry and planning on any development, contact us and speak to us before you make any major decisions so we can discuss how to best structure the project to achieve the best outcome for you.
                  <br/><br/>
                  It can become a costly process to transfer property so we encourage you to <b>get in touch with Silver Peacock</b> and have a chat with one of our <b>Sydney CBD-based Tax Accountants</b> that specializes in the construction industry to plan your next steps right.
                </p>
<br/><br/>
                <h4>Tax Strategies</h4>
                <p>
                  The tax treatment will vary based on your intentions and whether you plan to dispose of the capital asset (property) and sell at a profit or if you intend on retaining it and renting the property for ongoing income (rental income).
                  <br/><br/>
                  We will ask you “What is your intention?” so we can determine your business activity and the appropriate tax treatment, for example:
                </p>
                <ul>
                  <li>
                    <i className="fi fi-ss-check-circle" />
                    <p>
                    If you decide to sell the property at a profit, you would be considered to be a Property Developer; and
                    </p>
                  </li>
                  <li>
                    <i className="fi fi-ss-check-circle" />
                    <p>
                    If you decide to retain the property and earn an income from rental, you would be considered to be <b>a Property Investor</b>.
                    </p>
                  </li>
                </ul>

                <h4>Property Developers Tax Treatment</h4>
                <p>
                  There are both GST and Income tax implications for property developers because the development is defined as a “Business Activity”.
                </p>
                <ul>
                  <li>
                    <i className="fi fi-ss-check-circle" />
                    <p>
              <b>GST Implications</b>: All developer’s sale transactions are substantially in excess of the GST threshold $75,000, as such, you’ll be required to register for GST. As a business you can claim back any GST you paid development expenses and likewise, there will be GST implication upon the disposal of the asset on the sale proceeds;
                    </p>
                  </li>
                  <li>
                    <i className="fi fi-ss-check-circle" />
                    <p>
                    <b>Income Tax Implications</b>: Depending on how you distribute the cash, the general rule is you will get taxed at the marginal tax rate for your share of profit distribution. If you incurred a loss, then you can carry forward losses or offset losses against taxable income to reduce your tax bills.
                    </p>
                  </li>
                </ul>

                <h4>Property Developers Tax Implications</h4>
                <p>
                  The tax treatment for property investors is different because there are several areas of considerations.
                </p>
                <ul>
                  <li>
                    <i className="fi fi-ss-check-circle" />
                    <p>
              <b>GST Implications</b>: If the rental revenue you earn from the property exceeds the GST threshold $75,000, then there will be GST implications and you will be required to register for GST.
                    </p>
                  </li>
                  <li>
                    <i className="fi fi-ss-check-circle" />
                    <p>
                    <b>Income Tax Implications</b>: Property investors fall under a Capital Gains Tax (CGT) Regime; you will be assessed on any profit you make on the disposal of the property as part of your income tax and not as a separate tax. There are several methods of applying and calculating capital gains tax and our expert tax accountants will work with you in achieving the best outcome.
                    </p>
                  </li>
                </ul>

                <p>
                  There are other considerations to be factored in when assessing the tax implications, for example, did you inherit the land, or did you purchase the land pre 19 Sep 1985 (before CGT started), margin scheme application, and was the property your primary place of residence.
                  <br/><br/>
                  Our expert tax accountants will discuss all the factors that relate to you to achieve the best outcome.
                  <br/><br/>
                  For a Free consultation, submit your details using the contact form or feel free to call us. 
                </p>

               
               
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
