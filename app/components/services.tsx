export default function services() {
  return (
    <section className="services">

      {/* HEADER */}
      <div className="services-header">
        <div>
          <h2>
            Our <span>Services</span>
          </h2>

          <p>
            Empowering digital businesses with advanced technology tools
            for better performance and exceptional results.
          </p>
        </div>

        <a href="https://lovosis.in/Contact" target="_blank">
          <button className="get-started">Get Started →</button>
        </a>
      </div>

      {/* SERVICES GRID */}
      <div className="services-grid">

        <div className="service-card">
          <h3>Strategic Ads</h3>
          <p>
            Enhance your business with AI-powered advertising solutions and
            targeted marketing strategies.
          </p>
        </div>

        <div className="service-card">
          <h3>Brand Identity</h3>
          <p>
            Creative branding and visual solutions that make your business
            stand out from the competition.
          </p>
        </div>

        <div className="service-card">
          <h3>Human Resources</h3>
          <p>
            Smart HR management tools to grow your organization and enhance
            team productivity.
          </p>
        </div>

        <div className="service-card">
          <h3>Project Management</h3>
          <p>
            AI-powered tracking and workflow automation tools for seamless
            project execution.
          </p>
        </div>

        <div className="service-card">
          <h3>Design</h3>
          <p>
            Modern UI/UX and creative design services that elevate user
            experience.
          </p>
        </div>

        <div className="service-card">
          <h3>Search Optimization</h3>
          <p>
            Boost visibility with smart SEO solutions and data-driven
            optimization strategies.
          </p>
        </div>

      </div>
    </section>
  );
}
