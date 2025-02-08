import { useState, useMemo, useCallback } from "react";
import { ArrowUpRight } from "lucide-react"; // Import arrow icon

import commercialImage from "../assets/SiteImage/site1.png";
import residentialImage from "../assets/SiteImage/site2.jfif";
import plotsImage from "../assets/SiteImage/site3.jfif";

export default function OurService(){
  const images = useMemo(
    () => [
      { id: 1, src: commercialImage, label: "Commercial Projects" },
      { id: 2, src: residentialImage, label: "Residential Projects" },
      { id: 3, src: plotsImage, label: "Plots" },
    ],
    []
  );

  const [activeId, setActiveId] = useState(1);

  const handleImageClick = useCallback((id) => {
    setActiveId(id);
  }, []);

  return (
    <div className="p-10 pe-0 max-w-[1400px] mx-auto flex flex-col justify-center">

      <div className="max-w-[982px] flex flex-col items-start">
        <p className="text-[16px] font-montserrat font-normal leading-[19.5px] tracking-[1%] text-gray-600">
          Our Services
        </p>
        <div
          className="w-[260px] h-[1px] mt-1 border border-transparent"
          style={{
            borderImageSource: "linear-gradient(90deg, #727272 0%, rgba(0, 0, 0, 0) 100%)",
            borderImageSlice: 1,
          }}
        ></div>
        <h1 className="text-[28px] font-montserrat font-normal leading-[34.13px] tracking-[1%] text-black mt-2">
          Tailored solutions in Residential, Commercial, and Plotting segments
        </h1>
      </div>


      <div className="mt-6 flex justify-center gap-4 flex-wrap w-fit">
        {images.map((image) => (
          <div
            key={image.id}
            className={`relative overflow-hidden rounded-lg transition-all duration-500 ease-in-out cursor-pointer 
              ${
                activeId === image.id
                  ? "w-[900px] h-[670px]" 
                  : "w-[200px] h-[670px] opacity-50" 
              }`}
            onClick={() => handleImageClick(image.id)}
          >

            <img
              src={image.src}
              alt={image.label}
              className="w-full h-full rounded-[20px] object-cover p-[1px]"
            />

   
            {activeId !== image.id && (
              <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center rounded-[20px]">
                <p className="text-white text-center text-[16px] font-semibold -rotate-90">
                  {image.label}
                </p>
              </div>
            )}


            {activeId === image.id && (
              <div className="absolute bottom-0 left-0 w-full h-[120px] bg-black bg-opacity-50 flex items-center justify-between px-4 rounded-b-[20px]">
                <p className="text-white text-[18px] font-semibold">{image.label}</p>

                <button className="w-[70px] h-[70px] bg-black rounded-full flex items-center justify-center text-white">
                  <ArrowUpRight size={24} />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

