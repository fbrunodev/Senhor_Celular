import React, { useState, useEffect } from "react";
import s1 from "../assets/s1.webp";
import s2 from "../assets/s2.webp";
import s3 from "../assets/s3.webp";

export default function Carousel() {
  const slides = [
  { image: s1, alt: "Lançamentos Xiaomi" },
  { image: s2, alt: "Smart Home" },
  { image: s3, alt: "Áudio" },
];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(interval); // cleanup
  }, [slides.length]);

  return (
    <section className="w-full bg-gray-50">
      <div>
        <div className="relative aspect-[16/7] sm:aspect-[16/5] md:aspect-[16/5] rounded-3xl">
          
          {slides.map((slide, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-500"
              style={{ opacity: i === current ? 1 : 0 }}
            >
              <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover" />
            </div>
          ))}

           {/* Dots */}
          <div className="absolute bottom-3 right-4 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                className="w-2.5 h-2.5 rounded-full border"
                style={{ background: i === current ? "var(--brand-primary)" : "transparent" }}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
