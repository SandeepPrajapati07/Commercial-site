import React, { useMemo } from "react";
import backgroundImage from "../../src/assets/Image/Mainbackground.png";

export default function Home(){
  const backgroundStyle = useMemo(() => ({
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }), []);

  return (
    <div className="relative w-full flex items-center justify-center bg-gray-200 min-h-screen" style={backgroundStyle}>
    </div>
  );
};


