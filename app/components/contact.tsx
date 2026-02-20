export default function contact() {
  return (
    <section className="contact">
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <h2>Get in touch with us</h2>

          <div className="contact-info-item">
            <h4>📍 ADDRESS</h4>
            <p>
              4-72/2, Swathi Building, 3rd Floor, Opp. Singapura Garden,
              1st Main Lakshmipura Road Abbigere, Bengaluru, Karnataka 560013
            </p>
          </div>

          <div className="contact-info-item">
            <h4>🕐 HOURS</h4>
            <p>Monday – Saturday, 9:30am – 6:30pm</p>
          </div>

          <div className="contact-info-item">
            <h4>📞 PHONE</h4>
            <p className="highlight">
              <a href="tel:+919747745544">+91 9747745544</a>
            </p>
            <p className="highlight">
              <a href="tel:+917012970281">+91 7012970281</a>
            </p>
          </div>

          <div className="contact-info-item">
            <h4>✉️ EMAIL</h4>
            <p className="highlight">
              <a href="mailto:info@lovosis.in">info@lovosis.in</a>
            </p>
            <p className="highlight">
              <a href="mailto:lovosist@gmail.com">lovosist@gmail.com</a>
            </p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="contact-info-item">
            <h4>🌐 FOLLOW US</h4>

            <div className="social-icons">
              <a
                href="https://www.facebook.com/p/LovosisTechnology-61572576592724/"
                target="_blank"
                className="social-icon"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                href="https://www.instagram.com/lovosis_technology"
                target="_blank"
                className="social-icon"
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                href="https://www.linkedin.com/company/105877550/"
                target="_blank"
                className="social-icon"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

              <a
                href="https://www.youtube.com/@LovosisTechnology"
                target="_blank"
                className="social-icon"
              >
                <i className="fab fa-youtube"></i>
              </a>

              <a
                href="https://api.whatsapp.com/send/?phone=%2B919747745544"
                target="_blank"
                className="social-icon"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE GOOGLE MAP */}
        <div className="contact-right">
          <h2>
            OUR <span>LOCATION</span>
          </h2>

          <div className="map-box">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.390193486094!2d77.53042887409804!3d13.074439387250468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae23e28f4d4575%3A0x82fc68d725417776!2sLovosis%20Technology%20Private%20limited!5e0!3m2!1sen!2sin!4v1771307397459!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}
