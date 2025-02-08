import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    text: "Choosing Shilp Group for my first home was the best decision I ever made. The thoughtful layout of the apartment and the use of space truly exceeded my expectations. Every corner feels like it’s designed with care and practicality in mind. The neighbourhood is peaceful yet conveniently located near all essential facilities. I couldn’t be happier with my home.",
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

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 w-full h-[328px] ">
      <div className="flex items-center w-full justify-center mb-6">
        <div className="border-t w-[363px] border-black"></div>
        <h2 className="mx-4 text-[16px] font-[400] text-black font-montserrat text-center">
          Testimonials
        </h2>
        <div className="border-t w-[363px] border-black"></div>
      </div>

      <div className="flex items-center justify-center gap-4 w-[80%]">
        <button
          onClick={handlePrev}
          className="p-0 bg-white border-none hover:border-none"
        >
          <ArrowLeft size={40} className="text-black" />
        </button>
        <div className="text-center">
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
        <button
          onClick={handleNext}
          className="p-0 bg-white border-none hover:border-none"
        >
          <ArrowRight size={40} className="text-black" />
        </button>
      </div>
    </div>
  );
}
