import { useEffect, useState } from "react";
import "./Hero.css";

const images = ["hero1.jpg", "hero2.jpg"];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 1000); // Match this timeout with your CSS transition duration
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="heroContainer">
      <img src={images[currentImageIndex]} alt="Hero" className="heroImage" />
    </section>
  );
}
