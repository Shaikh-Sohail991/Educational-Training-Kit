export default function Products() {
  const products = [
    {
      title: "Digital & Analog Multimeter",
      desc: "Digital & analog multimeters for measuring voltage, current, and resistance accurately",
      img: "/multimeter.webp",
      badge: "New",
      link: "https://lovosis.in/products/test-measuring-instrument/digital-analog-multimeter"
    },
    {
      title: "Digital Storage Oscilloscope",
      desc: "Digital storage oscilloscope for observing and analyzing electronic signals",
      img: "/Oscilloscope.webp",
      badge: "Popular",
      link: "https://lovosis.in/products/test-measuring-instrument/digital-storage-oscilloscope"
    },
    {
      title: "Power Supply",
      desc: "DC power supply for providing adjustable voltage and current to circuits",
      img: "/powersupply.webp",
      badge: "Featured",
      link: "https://lovosis.in/products/test-measuring-instrument/power-supply"
    },
    {
      title: "Function Generators",
      desc: "Function generators for producing various electrical waveforms in labs",
      img: "/function-generator.webp",
      badge: "Featured",
      link: "https://lovosis.in/products/test-measuring-instrument/function-generators/function-generator"
    }
  ];

  return (
    <section className="products">
      <h2 className="section-title">
        Our <span>Premium</span> Products
      </h2>

      <div className="product-grid">
        {products.map((item, index) => (
          <div key={index} className="product-card">
            <div className="product-image">
              <img src={item.img} alt={item.title} />
              <div className="product-badge">{item.badge}</div>
            </div>

            <div className="product-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>

              <a href={item.link} target="_blank" className="product-link">
                View Product
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
