import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/products";
import Services from "./components/services";
import Contact from "./components/contact";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
