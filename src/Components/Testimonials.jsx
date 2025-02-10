import { useState, useEffect, useRef } from "react";
import ArrowLeftIcon from "../assets/Arrows/ArrowLeft.svg";
import ArrowRightIcon from "../assets/Arrows/ArrowRight.svg";

const testimonials = [
  {
    text: "Choosing Shilp Group for my first home was the best decision I ever made. The thoughtful layout of the apartment and the use of space truly exceeded my expectations. Every corner feels like it’s designed with care and practicality in mind. The neighborhood is peaceful yet conveniently located near all essential facilities. I couldn’t be happier with my home.",
    name: "Aspen Rhiel Madsen",
    designation: "Marketing Executive",
  },
  {
    text: "The customer service at Shilp Group is outstanding. From the first visit to moving in, the experience was seamless. The team was always available to answer my queries and provided the best support possible.",
    name: "Ananya",
    designation: "Marketing Manager",
  },
  {
    text: "Shilp Group's homes are built with excellent craftsmanship and attention to detail. The materials used are of high quality, and the design is both aesthetic and functional. Highly recommended!",
    name: "Rajesh",
    designation: "Architect",
  },
  {
    text: "Living in a Shilp Group apartment has been a great experience. The community is welcoming, the environment is safe, and the amenities provided make everyday life comfortable.",
    name: "Priya",
    designation: "Doctor",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    resetAutoSlide();
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    resetAutoSlide();
  };

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 3000); // Auto-slide every 3 seconds (optimized)
  };

  const resetAutoSlide = () => {
    clearInterval(intervalRef.current);
    startAutoSlide(); // Restart auto-slide after user interaction
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current); // Cleanup on unmount
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 w-full h-[328px]">
      <div className="flex items-center w-full justify-center mb-6">
        <div className="border-t w-[363px] border-black"></div>
        <h2 className="mx-4 text-[16px] font-[400] text-black font-montserrat text-center">
          Testimonials
        </h2>
        <div className="border-t w-[363px] border-black"></div>
      </div>

      <div className="relative  flex items-center justify-center gap-4 w-[80%] mt-10">
        <button onClick={handlePrev}  className="absolute left-0 z-10 p-0 bg-white border-none">
          <img src={ArrowLeftIcon} alt="Previous" className="w-20 h-20" />
        </button>

        <div
          className="text-center transition-opacity duration-700 ease-in-out w-[80%]"
          key={current} 
        >
          <p className="text-[16px] font-montserrat italic font-light text-black">
            {testimonials[current].text}
          </p>
          <p className="mt-4 text-[16px] font-montserrat font-medium text-black">
            {testimonials[current].name}
          </p>
          <p className="text-[14px] font-montserrat font-light text-black">
            {testimonials[current].designation}
          </p>
        </div>

        <button onClick={handleNext} className="absolute right-0 z-10 p-0 bg-white border-none">
          <img src={ArrowRightIcon} alt="Next" className="w-20 h-20" />
        </button>
      </div>
    </div>
  );
}
