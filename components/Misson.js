const Misson = () => {
  const mottoData = [
    {
      id: 1,
      title: "Our Misson",
      text: "Our mission is to empower businesses and individuals by providing innovative financial solutions and expert consulting services. We aim to help our clients.",
    },
    {
      id: 2,
      title: "Our Vision",
      text: "We envision a future where every business, regardless of size, has access to the tools and knowledge needed to thrive in a dynamic financial landscape. By delivering cutting-edge.",
    },
    {
      id: 3,
      title: "Trusted Brands",
      text: "We specialize in offering comprehensive financial services designed to meet the unique needs of businesses and individuals alike. With a team of experienced professionals,",
    },
  ];
  return (
    <section className="bx-motto bg-color-1 section-gap pt-0">
      <div className="container bx-container">
        <div className="bx-motto__wrapper">
          {mottoData.map((item) => (
            <div className="motto-item wow fadeInUp">
              <h3 className="title">{item.title}</h3>
              <p className="text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Misson;
