import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { PiXLogoBold } from "react-icons/pi";
import  logo from '../assets/Logo/Vector.svg'

export default function Footer(){
  return (
    <footer className="bg-white text-gray-700 py-10 px-6 border-t border-gray-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex space-x-4 justify-end mb-5">
          <span>Follow us on</span>
          <FaFacebookF className="cursor-pointer hover:text-blue-600" />
          <FaInstagram className="cursor-pointer hover:text-pink-500" />
          <PiXLogoBold className="cursor-pointer hover:text-black" />
          <FaLinkedinIn className="cursor-pointer hover:text-blue-700" />
          <FaYoutube className="cursor-pointer hover:text-red-600" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
           <div className="flex items-center">
                     <img src={logo} alt="logo" className="h-10 w-auto" />
                   
                   </div>
            <p className="mt-2 text-sm text-gray-600">
              To be the obvious, the most trusted choice in real estate creating a better, liveable and comfortable life for everyone.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-900 text-[#000000]">Home</a></li>
              <li><a href="#" className="hover:text-gray-900 text-[#000000]">Commercial</a></li>
              <li><a href="#" className="hover:text-gray-900 text-[#000000]">Residential</a></li>
              <li><a href="#" className="hover:text-gray-900n text-[#000000]">Plots</a></li>
              <li><a href="#" className="hover:text-gray-900 text-[#000000]">About Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="mt-2 text-sm">SHILP HOUSE, Rajpath Rangoli Rd, opposite Rajpath Club, Bodakdev, Ahmedabad, Gujarat 380054.</p>
            <p className="mt-2 text-sm">📞 +91 7435811123 <br /> 📞 +91 7069613123</p>
            <p className="mt-2 text-sm">✉️ sales@shilp.co.in</p>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-300 pt-4 flex flex-col md:flex-row justify-between text-sm text-gray-600">
          <p>© 2025. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-900">Terms of use</a>
            <a href="#" className="hover:text-gray-900">Privacy policy</a>
          </div>
        </div>
      </div>

    </footer>
  );
};

