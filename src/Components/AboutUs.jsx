import { ArrowUpRight } from "lucide-react";
import aboutImage from "../assets/Image/Aboutus.jfif"; 
import { useMemo } from "react";

export default function About() {
  const aboutText = useMemo(() => ({
    heading: "Trust in Shilp, Build Your Future",
    description: `Shilp group, a real estate company that is driven by quality, integrity, 
    and authenticity, has earned recognition as one of the top builders of Ahmedabad.`
  }), []);

  return (
    <section className="px-6 md:px-20 py-16 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="flex justify-center">
          <img
            src={aboutImage}
            alt="About Us"
            className="w-[517px] h-[432px] rounded-[20px] shadow-lg object-cover"
            loading="lazy"
          />
        </div>

        <div className="text-left space-y-4">
          <div>
            <p className="text-sm font-semibold uppercase text-gray-500">Who We Are</p>
            <div className="w-[260px] h-[1px] mt-1 bg-gray-400"></div>
          </div>

          <h1 className="text-xl font-semibold text-black">{aboutText.heading}</h1>

          <p className="text-gray-700 text-md">{aboutText.description}</p>

          <button
            className="mt-6 flex items-center gap-4 border border-black rounded-full px-6 py-2 text-black font-medium transition hover:bg-black hover:text-white"
          >
            About Us
            <span className="bg-black text-white rounded-full p-2">
              <ArrowUpRight size={18} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
