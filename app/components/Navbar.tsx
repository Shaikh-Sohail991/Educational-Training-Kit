export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">LOVOSIS <span>Technology</span></div>

      <nav>
        <ul className="nav-links">
          <li className="active"><a href="#">Home</a></li>
          <li><a href="https://lovosis.in/products" target="_blank">Products</a></li>
          <li><a href="https://lovosis.in/about">About</a></li>
          <li><a href="https://lovosis.in/Services">Services</a></li>
          <li><a href="https://lovosis.in/Certificates">Certificates</a></li>
        </ul>
      </nav>

      <a href="https://lovosis.in/Contact">
        <button className="contact-btn">Contact Us</button>
      </a>
    </header>
  );
}
