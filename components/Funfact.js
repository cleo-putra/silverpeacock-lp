import Counter from "./Counter";

const Funfact = () => {
  return (
    <section className="bx-funfact bg-color-1">
      <div className="container bx-container">
        <div
          className="bx-funfact__inner background-image z-index2"
          style={{
            backgroundImage:
              "url(assets/images/finance-home/funfact/funfact-bg.png)",
          }}
        >
          <h3 className="bx-funfact__title has_word_anim">
            <span className="bx-literata">Comprehensive for Your</span>
            Services
            <br />
            Designed to Maximize Success
          </h3>
          {/* Funfact Counter */}
          <div className="bx-funfact__counter">
            <div className="circle-overlay" />
            <div className="bx-funfact__counter-icon">
              <i className="fi fi-rr-briefcase" />
            </div>
            <div className="bx-funfact__counter-desc">
              <h4>
                <Counter end={5939} />+
              </h4>
              <p>Project Completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Funfact;
