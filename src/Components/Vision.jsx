import { useMemo } from "react";

const Vision = () => {
  const experienceData = useMemo(
    () => [
      { id: 1, value: "21+", label: "Years of Experience" },
      { id: 2, value: "19+", label: "Million SQ. Ft." },
      { id: 3, value: "9000+", label: "Units" },
      { id: 4, value: "10+", label: "Awards Won" },
    ],
    []
  );

  return (
    <div className="max-w-[1400px] mx-auto p-10 flex flex-col md:flex-row justify-between items-center gap-10">
      <div className="w-[428px] flex flex-col gap-6">
        <p className="text-[16px] font-montserrat font-normal leading-[19.5px] tracking-[1%] text-gray-600">
          Our Vision
        </p>
        <div
          className="w-[260px] h-[1px] border border-transparent"
          style={{
            borderImageSource: "linear-gradient(90deg, #727272 0%, rgba(0, 0, 0, 0) 100%)",
            borderImageSlice: 1,
          }}
        ></div>

        <h2 className="text-[28px] font-montserrat font-normal leading-[34.13px] tracking-[1%] text-black">
          Transforming the Future with Innovation and Excellence
        </h2>

        <p className="text-[16px] font-montserrat font-light leading-[19.5px] tracking-[1%] text-gray-600 w-[395px]">
          We strive to redefine industry standards by delivering top-quality projects with a vision for the future.
        </p>
      </div>

      <div className="flex justify-center items-center gap-16">
        {experienceData.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <p className="text-[32px] font-montserrat font-medium leading-[39.01px] tracking-[1%] text-black">
              {item.value}
            </p>
            <p className="text-[16px] font-montserrat font-light leading-[19.5px] tracking-[1%] text-gray-600 text-center">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vision;
