export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        {/* COMPANY */}
        <div className="footer-col">
          <h2 className="footer-logo">
            <span>LOVOSIS</span> Technology
          </h2>

          <p>
            Advanced electronics solutions for modern businesses.
            Innovation, quality, and excellence in every product we deliver.
          </p>

          <div className="footer-social">
            <a
              href="https://www.linkedin.com/company/lovosis-technology-private-limited/posts/?feedView=all"
              target="_blank"
              className="social-icon-footer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a
              href="https://www.instagram.com/lovosis_technology"
              target="_blank"
              className="social-icon-footer"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              href="https://www.facebook.com/p/LovosisTechnology-61572576592724/"
              target="_blank"
              className="social-icon-footer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h3>QUICK LINKS</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="https://lovosis.in">About Us</a></li>
            <li><a href="https://lovosis.in/products">Products</a></li>
            <li><a href="https://lovosis.in/Services">Services</a></li>
            <li><a href="https://lovosis.in/Certificates">Certificates</a></li>
            <li><a href="https://lovosis.in/Contact">Contact Us</a></li>
          </ul>
        </div>

        {/* OUR SERVICES */}
        <div className="footer-col">
          <h3>OUR SERVICES</h3>
          <ul>
            <li><a href="https://lovosis.in/Services">PCB Design</a></li>
            <li><a href="https://lovosis.in/Services">Manufacturing</a></li>
            <li><a href="https://lovosis.in/Services">Assembly</a></li>
            <li><a href="https://lovosis.in/Services">Quality Testing</a></li>
            <li><a href="https://lovosis.in/Services">Consulting</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h3>CONTACT US</h3>
          <ul className="footer-contact">
            <li>
              <a href="https://www.google.com/maps/place/Bengaluru,+Karnataka">
                Bangalore, Karnataka India
              </a>
            </li>
            <li><a href="mailto:info@lovosis.in">info@lovosis.in</a></li>
            <li><a href="mailto:lovosist@gmail.com">lovosist@gmail.com</a></li>
            <li><a href="tel:+919747745544">+91 9747745544</a></li>
            <li><a href="tel:+917012970281">+91 7012970281</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
