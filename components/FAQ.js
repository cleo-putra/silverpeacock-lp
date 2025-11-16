import { useState } from "react";
import { Accordion } from "react-bootstrap";

const FAQ = () => {
  const leftColumnFaqs = [
    {
      id: 1,
      question: "How can your consulting services benefit my business?",
      answer:
        "We provide a range of services, including strategic growth planning, operational efficiency optimization, market analysis, and financial planning.",
    },
    {
      id: 2,
      question: "Do you offer tailored solutions for specific industries?",
      answer:
        "Yes, we provide industry-specific solutions tailored to meet the unique challenges and needs of different business sectors.",
    },
    {
      id: 3,
      question: "What is the process for working with your team?",
      answer:
        "Our process begins with an initial consultation to understand your needs, followed by a customized plan and implementation.",
    },
    {
      id: 4,
      question: "How long does a typical consulting project take?",
      answer:
        "Project duration varies based on complexity, but most engagements range from 3-6 months.",
    },
    {
      id: 5,
      question: "Can small businesses benefit from your consulting services?",
      answer:
        "Absolutely! We offer scalable solutions that work for businesses of all sizes.",
    },
    {
      id: 6,
      question: "What makes your consulting approach unique?",
      answer:
        "We combine data-driven insights with hands-on implementation support for measurable results.",
    },
    {
      id: 7,
      question: "What services do you offer in business consulting?",
      answer:
        "Our services include strategy development, process improvement, financial advisory, and market expansion planning.",
    },
  ];

  const rightColumnFaqs = [
    {
      id: 8,
      question: "How can your consulting services benefit my business?",
      answer:
        "We provide a range of services, including strategic growth planning, operational efficiency optimization, market analysis, and financial planning.",
    },
    {
      id: 9,
      question: "Do you offer tailored solutions for specific industries?",
      answer:
        "Yes, we provide industry-specific solutions tailored to meet the unique challenges and needs of different business sectors.",
    },
    {
      id: 10,
      question: "What is the process for working with your team?",
      answer:
        "Our process begins with an initial consultation to understand your needs, followed by a customized plan and implementation.",
    },
    {
      id: 11,
      question: "How long does a typical consulting project take?",
      answer:
        "Project duration varies based on complexity, but most engagements range from 3-6 months.",
    },
    {
      id: 12,
      question: "Can small businesses benefit from your consulting services?",
      answer:
        "Absolutely! We offer scalable solutions that work for businesses of all sizes.",
    },
    {
      id: 13,
      question: "What makes your consulting approach unique?",
      answer:
        "We combine data-driven insights with hands-on implementation support for measurable results.",
    },
    {
      id: 14,
      question: "What services do you offer in business consulting?",
      answer:
        "Our services include strategy development, process improvement, financial advisory, and market expansion planning.",
    },
  ];

  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  const renderFaqItems = (faqs, delay) => (
    <div className={`bx-faq__content wow fadeInUp`}>
      {faqs.map((faq) => (
        <div className="accordion-item" key={faq.id}>
          <h2 className="accordion-header" id={`heading${faq.id}`}>
            <Accordion.Toggle
              as={"button"}
              className={`accordion-button ${
                activeAccordion === faq.id ? "" : "collapsed"
              }`}
              eventKey={`collapse${faq.id}`}
              onClick={() => toggleAccordion(faq.id)}
            >
              {faq.question}
            </Accordion.Toggle>
          </h2>
          <Accordion.Collapse eventKey={`collapse${faq.id}`}>
            <div className="accordion-body">
              <p className="accordion-text">{faq.answer}</p>
            </div>
          </Accordion.Collapse>
        </div>
      ))}
    </div>
  );
  return (
    <section className="bx-faq position-relative section-gap">
      <div className="container bx-container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-6 col-12">
            <div className="bx-section-head text-center">
              <small className="bx-section-head__label">Our FAQ</small>
              <h3 className="bx-section-head__title has_word_anim">
                Answers to frequently asked <br />
                questions about BExpert
              </h3>
            </div>
          </div>
        </div>
        <div className="faq-inner accordion" id="customAccordion">
          <Accordion>
            <div className="row">
              <div className="col-lg-6 col-12">
                {renderFaqItems(leftColumnFaqs, ".3s")}
              </div>
              <div className="col-lg-6 col-12">
                {renderFaqItems(rightColumnFaqs, ".5s")}
              </div>
            </div>
          </Accordion>
        </div>
      </div>
    </section>
  );
};
export default FAQ;
