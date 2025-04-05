import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import images from "../data/images";

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  // Auto Slide every 3s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div className="relative w-full max-w-3xl h-64 mx-auto overflow-hidden rounded-xl shadow-md">
      <img
        src={images[index]}
        alt="slide"
        className="w-full h-full object-cover transition-opacity duration-500"
      />

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/80"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/80"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default ImageSlider;
