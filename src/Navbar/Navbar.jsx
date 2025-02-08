import { useMemo } from "react";
import { Menu, Phone, ChevronDown } from "lucide-react"; 
import NavItem from "./NavItem";
import logo from "../assets/Logo/Frame 1597884515.svg";

export default function Navbar() {
  const navItems = useMemo(() => [
    { title: "Home" },
    { title: "About Us" },
    { title: "Commercial", dropdown: true, icon: <ChevronDown size={16} /> },
    { title: "Residential", dropdown: true, icon: <ChevronDown size={16} /> },
    { title: "Plots", dropdown: true, icon: <ChevronDown size={16} /> },
    { title: "Sneh Shilp Foundation" }
  ], []);

  return (
    <nav className="fixed top-0 left-0 w-full p-4 flex items-center justify-between bg-[rgba(0,0,0,0.4)] backdrop-blur-sm shadow-md z-50 px-10">
      <div className="flex flex-col text-white">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-10 w-auto" />
        
        </div>
      </div>

      <div className="hidden md:flex gap-10 text-white">
        {navItems.map((item, index) => (
          <NavItem key={index} title={item.title} dropdown={item.dropdown} icon={item.icon} />
        ))}
      </div>

      <div className="flex items-center gap-6">
        <button className="border border-white text-white px-4 py-1 rounded-full bg-transparent hover:bg-white hover:text-black transition">
          Enquiry Now
        </button>
        <Phone className="cursor-pointer text-white" />
        <Menu className="cursor-pointer text-white"  />
      </div>



    </nav>
  );
}
