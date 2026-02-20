// "use client";
// import { useEffect, useState } from "react";

// const images = [
//   "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200",
//   "https://images.unsplash.com/photo-1581092335878-4e1a8fca45c4?q=80&w=1200",
//   "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200"
// ];

// export default function Hero() {
//   const [index, setIndex] = useState(0);
//   const [loaded, setLoaded] = useState(false);

//   // Auto slider
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 6000);

//     return () => clearInterval(interval);
//   }, []);

//   // Image loader effect
//   useEffect(() => {
//     const img = new Image();
//     img.src = images[index];
//     img.onload = () => setLoaded(true);
//   }, [index]);

//   const nextImage = () => {
//     setLoaded(false);
//     setIndex((prev) => (prev + 1) % images.length);
//   };

//   const prevImage = () => {
//     setLoaded(false);
//     setIndex((prev) => (prev - 1 + images.length) % images.length);
//   };

//   return (
//     <section className="hero">
//       <div className="hero-left">
//         <h4 className="small-title">
//           OUR <span className="sam">PRODUCTS</span>
//         </h4>

//         <h1 className="samba">
//           Discover Our <br />
//           <span>Latest Collection</span>
//         </h1>

//         <p>
//           Explore cutting-edge educational equipment and innovative technology
//           solutions that transform learning experiences into extraordinary journeys.
//         </p>

//         <p className="sub-brand">
//           EducationalTrainerKits is proudly associated with <span>Lovosis.in</span>
//         </p>

//         <div className="slider-btns">
//           <button onClick={prevImage}>❮</button>
//           <button onClick={nextImage}>❯</button>
//         </div>
//       </div>

//       <div className="hero-right">
//         <div className="image-box">
//           {!loaded && <div className="loader"></div>}

//           <img
//             src={images[index]}
//             alt="Product"
//             className={loaded ? "show" : ""}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
// "use client";
// import { useEffect, useState } from "react";

// const images = [
//   "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200",
//   "https://images.unsplash.com/photo-1581092335878-4e1a8fca45c4?q=80&w=1200",
//   "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200",
// ];

// export default function Hero() {
//   const [index, setIndex] = useState(0);
//   const [loaded, setLoaded] = useState(false);

//   // autoplay
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setLoaded(false);
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 6000);

//     return () => clearInterval(interval);
//   }, []);

//   const nextImage = () => {
//     setLoaded(false);
//     setIndex((prev) => (prev + 1) % images.length);
//   };

//   const prevImage = () => {
//     setLoaded(false);
//     setIndex((prev) => (prev - 1 + images.length) % images.length);
//   };

//   return (
//     <section className="hero">
//       <div className="hero-left">
//         <h4 className="small-title">
//           OUR <span className="sam">PRODUCTS</span>
//         </h4>

//         <h1 className="samba">
//           Discover Our <br />
//           <span>Latest Collection</span>
//         </h1>

//         <p>
//           Explore cutting-edge educational equipment and innovative technology
//           solutions that transform learning experiences into extraordinary journeys.
//         </p>

//         <p className="sub-brand">
//           EducationalTrainerKits is proudly associated with <span>Lovosis.in</span>
//         </p>

//         <div className="slider-btns">
//           <button onClick={prevImage}>❮</button>
//           <button onClick={nextImage}>❯</button>
//         </div>
//       </div>

//       <div className="hero-right">
//         <div className="image-box">
//           <div className={`loader ${loaded ? "hide" : ""}`}></div>

//           <img
//             key={index}
//             src={images[index]}
//             alt="Product"
//             onLoad={() => setLoaded(true)}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h4 className="small-title">
          OUR <span className="sam">PRODUCTS</span>
        </h4>

        <h1 className="samba">
          Discover Our <br />
          <span>Latest Collection</span>
        </h1>

        <p>
          Explore cutting-edge educational equipment and innovative technology
          solutions that transform learning experiences into extraordinary journeys.
        </p>

        <p className="sub-brand">
          EducationalTrainerKits is proudly associated with <span>Lovosis.in</span>
        </p>
      </div>

      <div className="hero-right">
        <div className="image-box">
          <Image
            src="/kit.webp"
            alt="Education Training Kit"
            fill
            priority
            className="hero-img"
          />
        </div>
      </div>
    </section>
  );
}
