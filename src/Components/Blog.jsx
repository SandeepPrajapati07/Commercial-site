import { useState, useCallback } from "react";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import Img1 from "../assets/Blog/Img1.jfif";
import Img2 from "../assets/Blog/Img2.jfif";
import Img3 from "../assets/Blog/Img3.jfif";

const initialBlogData = [
  {
    id: 1,
    image: Img1,
    date: "25 July, 2024",
    title: "Decoding Rera Carpet Area...",
    description: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos imenaeos.",
  },
  {
    id: 2,
    image: Img2,
    date: "28 July, 2024",
    title: "Impact of AI on Indian startups...",
    description: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos imenaeos.",
  },
  {
    id: 3,
    image: Img3,
    date: "25 July, 2024",
    title: "Gandhinagar: A Growing City...",
    description: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos imenaeos.",
  },

];

export default function BlogSection() {
  const [blogData, setBlogData] = useState(initialBlogData);

  const handleNext = useCallback(() => {
    setBlogData((prevData) => [...prevData.slice(1), prevData[0]]);
  }, []);

  const handlePrev = useCallback(() => {
    setBlogData((prevData) => [
      prevData[prevData.length - 1],
      ...prevData.slice(0, -1),
    ]);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center w-full px-6 md:px-10 py-6 bg-white text-gray-700 gap-10 mt-[170px]">
      <div className="flex flex-col items-start w-[20%] gap-20">
      <div>
        <span className="font-montserrat font-normal text-[16px] leading-[19.5px] tracking-[1%] text-[#727272]">
          Blogs
        </span>
        <div className="w-[90px] h-[1px] bg-gradient-to-r from-[#727272] to-transparent mt-1"></div>

        <h1 className="font-montserrat font-normal text-[28px] leading-[34.13px] tracking-[1%] text-black mt-2 w-[313px]">
          News & Updates
        </h1>
        </div>

        <div className="flex gap-20 mt-4 self-start ">
          <button onClick={handlePrev} className="p-0 bg-white border-none hover:border-none">
            <ArrowLeft size={60} className="text-black" />
          </button>
          <button onClick={handleNext} className="p-0 bg-white border-none hover:border-none">
            <ArrowRight size={60} className="text-black" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto w-[80%]">
      <div className="w-[100%] gap-6  flex">

          {blogData.map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col items-start w-full p-4"
            >
              <img
                src={blog.image}
                alt="Blog"
                className="w-full h-[200px] object-cover rounded-lg"
                loading="lazy"
              />
              <div className="flex items-center mt-2 text-gray-500">
                <Calendar size={16} className="mr-2" /> {blog.date}
              </div>
              <h2 className="text-lg font-semibold mt-2">{blog.title}</h2>
              <p className="text-sm text-gray-600 mt-1">{blog.description}</p>
              <ol className="list-disc ms-[17px]">
                <li>
                  <a href="#" className="text-[#000000] mt-2">
                    Read more...
                  </a>
                </li>
              </ol>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

