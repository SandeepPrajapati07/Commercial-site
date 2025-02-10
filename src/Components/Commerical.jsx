import { useMemo } from "react";
import download from "../assets/social/download.svg";
import Location from "../assets/social/location.svg";
import Commercials from "../assets/social/commerical.svg";
import Area from "../assets/social/area.svg";
import icon2 from "../assets/social/Frame 1597884224.svg";
import img1 from "../assets/Vision/Img1.jfif";
import img2 from "../assets/Vision/Img2.jfif";
import img3 from "../assets/Vision/Img3.jfif";
import img4 from "../assets/Vision/Img4.jfif";
import img5 from "../assets/Vision/Img5.jfif";
import img6 from "../assets/Vision/img6.jfif";

export default function Commercial() {
  const sites = useMemo(
    () => [
      {
        id: "01",
        name: "Shilp Centrica",
        img: img1,
        location: "Gift City, Gandhinagar",
        area: "1326-3538 sq. ft.",
      },
      {
        id: "02",
        name: "Shilp Twin Towers",
        img: img2,
        location: "Gift City, Gandhinagar",
        area: "1725-7835 sq. ft.",
      },
      {
        id: "03",
        name: "Shilp Business Gateway",
        img: img3,
        location: "Vaishno Devi, S.G Highway",
        area: "2303-5082 sq. ft.",
      },
      {
        id: "04",
        name: "Shilp One",
        img: img4,
        location: "Shilaj circle Ahmedabad",
        area: "1944-2594 sq. ft.",
      },
      {
        id: "05",
        name: "Upcoming Shilp Commercial",
        img: img5,
        location: "Bopal Ambli",
        area: "1800-2000 sq. ft.",
      },
      {
        id: "06",
        name: "Shilp Incubation Center",
        img: img6,
        location: "Gift City",
        area: "1000-2000 sq. ft.",
      },
    ],
    []
  );

  return (
    <div className="max-w-[1400px] mx-auto p-6 sm:p-8 lg:p-10 text-center">
      <div className="flex items-center justify-center gap-4 w-full">
        <div className="w-[300px] h-[1px] bg-gradient-to-l from-[#727272] to-transparent"></div>
        <p className="text-[16px] font-montserrat font-normal text-gray-600">
          Commercial
        </p>
        <div className="w-[300px] h-[1px] bg-gradient-to-r from-[#727272] to-transparent"></div>
      </div>

      <h1 className="text-[28px] sm:text-[32px] font-montserrat font-normal text-black mt-2">
        Workspaces designed for your success
      </h1>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sites.map((site, index) => (
          <div
            key={site.id}
            className={`relative group transition-transform duration-500 ${
              index % 3 === 1 ? "flex flex-col-reverse" : ""
            }`}
          >
            <div className={`absolute left-4 top-4 flex flex-col items-center gap-2 ${
              index % 3 === 1 ? "top-[165px]" : ""
            }`}>
              <img
                src={icon2}
                alt="Icon"
                className="w-9 h-9  rounded-full  p-1"
              />
              <img
                src={download}
                alt="Download"
                className="w-9 h-9  rounded-full  p-1"
              />
            </div>

            <img
              src={site.img}
              alt={site.location}
              loading="lazy"
              className="w-full h-[300px] sm:h-[350px] lg:h-[400px] rounded-lg border-2 border-white object-cover"
            />
            <div className="bottom-4 left-4 right-4 bg-opacity-70 text-black p-4 rounded-lg flex justify-between items-start">
              <div className="flex flex-col items-start">
                <p className="font-montserrat font-normal text-[14px] leading-[24px] tracking-[1%] text-black text-start">
                  {site.name}
                </p>
                <p className="font-montserrat font-normal text-[30px] leading-[19.5px] tracking-[1%] text-black mt-8">
                  {site.id}
                </p>
              </div>

              <div className="flex flex-col items-end">
                <div className="flex items-center gap-2">
                  <p className="font-montserrat font-light text-[14px] leading-[17.07px] tracking-[1%] text-black text-right w-[221px] h-[34px] content-center">
                    {site.location}
                  </p>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <img
                      src={Location}
                      alt="Download"
                      className="w-8 h-8  p-1"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <p className="font-montserrat font-light text-[14px] leading-[17.07px] tracking-[1%] text-black text-right w-[221px] h-[34px] content-center">
                    {site.area}
                  </p>
                  <div className="w-8 h-8  flex items-center justify-center">
                    <img src={Area} alt="Download" className="w-10 h-10 p-1" />
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <p className="font-montserrat font-light text-[14px] leading-[17.07px] tracking-[1%] text-black text-right w-[221px] h-[34px] content-center">
                    Commercial
                  </p>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center">
                    <img
                      src={Commercials}
                      alt="Download"
                      className="w-10 h-10 p-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
