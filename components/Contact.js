const Contact = () => {
  const contactData = [
    {
      id: 1,
      title: "Phone Number",
      info: ["1800 698 968"],
    },
    {
      id: 2,
      title: "Our Location",
      info: ["Level 5, 91 George St Parramatta NSW 2150"],
    },
    {
      id: 3,
      title: "Our Email",
      info: ["info@silverpeacock.com.au"],
    },
    {
      id: 4,
      title: "Business Hour",
      info: ["Monday – Friday: 9am – 6pm", "Saturday – Sunday: Closed"],
    },
  ];
  return (
    <section className="bx-contact section-gap">
      <div className="container bx-container">
        <div className="bx-contact__inner">
          <div className="bx-contact__content">
            {/* Section Head  */}
            <div className="bx-section-head m-0">
              {/* <small className="bx-section-head__label">
                Contact For Services
              </small> */}
              <h3 style={{fontSize: "24px"}} className="bx-section-head__title has_word_anim">
                <span className="bx-literata">Let’s Start </span>
                a Conversation –
                Reach Out Now for Your Services
              </h3>
              <p className="bx-section-head__text">
                Please contact us for a free consultation with one of our experts. We will go over your business model with you and discuss how our services can help with your business specifically.
<br/><br/>
Give us a call or send us an email to learn more about what we can do to keep your business running as it should be.
<br/><br/>
As a small business owner, we know that it may be difficult to keep everything running properly at all times, which is why our services will be tailored just for you.
              </p>
            </div>
            <div className="bx-contact__main">
              {contactData.map((item) => (
                <div className="bx-contact__info" key={item.id}>
                  <span>{item.title}</span>
                  <ul className="info-list">
                    {item.info.map((info) => (
                      <li key={info}>
                        <a href={`#`}>{info}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="bx-contact__widget">
            <h3>Get in Touch with Anytime</h3>
            <form
              className="bx-contact__form"
              action="./assets/mail/mail.php"
              method="post"
            >
              <div className="row">
                <div className="col-lg-6 col-12">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Phone"
                      name="phone"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="form-group">
                    <select id="subject" name="subject">
                      <option value>Enter your subject</option>
                      <option value="general">Accounting</option>
                      <option value="support">Bookkepping</option>
                      <option value="feedback">Taxation</option>
                      <option value="other">Tax Return</option>
                      <option value="other">Payroll</option>
                      <option value="other">Compliance</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Type your message...."
                      required
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="bx-contact__form-btn">
                    <button type="submit" className="bx-btn">
                      Send Your Message
                      <i className="fi-rr-arrow-right" />
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
