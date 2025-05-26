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
    <div
      className="w-full xl:h-[400px] 2xl:h-[600px] bg-cover bg-center transition-opacity duration-500 "
      style={{
        backgroundImage: `url(${images[index]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex w-full h-full bg-gray-800/80  backdrop-blur-sm top-0 justify-center">
        <div className="flex w-1/2 duration-500  justify-center ">
          <img
            src={images[index]}
            alt="slide"
            className=" xl:h-[250px] 2xl:h-[450px] 2xl:w-[1200px] transition-opacity duration-500 rounded-xl shadow-md mt-[130px]"
          />

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute  top-1/2 left-3 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/80"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            className="absolute  top-1/2 right-3 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/80"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
