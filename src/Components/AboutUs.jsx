import aboutImage from "../assets/Image/Aboutus.jfif";
import { useMemo } from "react";
import CustomArrow from "../Icons/Line 177.svg";

export default function About() {
  const aboutText = useMemo(
    () => ({
      heading: "Trust in Shilp, Build Your Future",
      description: `Shilp group, a real estate company that is driven by quality, integrity and authenticity has earned recognition as one of the top builders of Ahmedabad. The company is known for undertaking large, diverse projects, fostering innovation, embracing emerging technologies, and making a difference for their clients, employees and community. We are a brand that people trust because our projects helps to house people’s ambitions.`,
    }),
    []
  );

  return (
    <section className="px-6 md:px-20 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="flex justify-center">
          <img
            src={aboutImage}
            alt="About Us"
            className="w-[517px] h-[432px] rounded-[20px] shadow-lg object-cover"
            loading="lazy"
          />
        </div>

        <div className="text-left space-y-6">
          <div>
            <p className="text-[16px] font-semibold uppercase text-gray-500 font-montserrat">
              Who We Are
            </p>
            <div className="w-[260px] h-[1px] mt-1 bg-gray-400"></div>
          </div>

          <div className="space-y-6">
            <h1 className="text-xl font-semibold text-black font-montserrat">
              {aboutText.heading}
            </h1>

            <p className="text-[#727272] text-[16px]">{aboutText.description}</p>

            <button className="mt-6 flex items-center gap-4 border border-black rounded-full px-6 py-2 text-black font-[16px] transition hover:bg-black hover:text-white">
              About Us
              <span className="bg-black text-white rounded-full p-2 flex items-center justify-center">
                <img src={CustomArrow} alt="Arrow" className="w-2 h-2" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
