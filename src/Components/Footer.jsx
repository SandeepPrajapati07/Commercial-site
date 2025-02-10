import logo from "../assets/Logo/Vector.svg";
import Facebook from "../assets/social/Facebook.svg";
import Instagram from "../assets/social/Instagram.svg";
import Twitter from "../assets/social/Twitter.svg";
import Linkdin from "../assets/social/Linkedin.svg";
import Youtube from "../assets/social/Youtube.svg";

import phone from '../assets/Arrows/bi_phone.svg'
import email from '../assets/Arrows/codicon_mail.svg'
import location from '../assets/Arrows/Group.svg'
export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 py-10 px-6 border-t border-gray-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex space-x-4 justify-end mb-[55px] items-center">
          <span>Follow us on</span>
          <img
            src={Facebook}
            alt="Facebook"
            className="h-8 w-8 cursor-pointer "
          />
          <img
            src={Instagram}
            alt="Instagram"
            className="h-8 w-8 cursor-pointer "
          />
          <img
            src={Twitter}
            alt="Twitter"
            className="h-8 w-8 cursor-pointer "
          />
          <img
            src={Linkdin}
            alt="LinkedIn"
            className="h-8 w-8 cursor-pointer "
          />
          <img
            src={Youtube}
            alt="YouTube"
            className="h-6 w-6 cursor-pointer "
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-10 gap-8">
  <div className="md:col-span-4">
    <div className="flex items-center">
      <img src={logo} alt="logo" className="h-10 w-auto" />
    </div>
    <p className="mt-2 text-sm text-[#000000] pt-10">
      To be the obvious, the most trusted choice in real estate, creating a
      better, livable, and comfortable life for everyone.
    </p>
  </div>

  <div className="md:col-span-2">
    <h3 className="text-lg font-semibold text-[#000000]">Quick Links</h3>
    <ul className="mt-2 space-y-2 text-[16px]  text-[#000000] font-semibold">
      <li className="pt-3">
        <a href="#" className="hover:text-gray-900 text-[#000000] text-sm">Home</a>
      </li>
      <li className="pt-3">
        <a href="#" className="hover:text-gray-900 text-[#000000] text-sm">Commercial</a>
      </li>
      <li className="pt-3">
        <a href="#" className="hover:text-gray-900 text-[#000000] text-sm">Residential</a>
      </li>
      <li className="pt-3">
        <a href="#" className="hover:text-gray-900 text-[#000000] text-sm">Plots</a>
      </li>
      <li className="pt-3">
        <a href="#" className="hover:text-gray-900 text-[#000000] text-sm">About Us</a>
      </li>
    </ul>
  </div>

  <div className="md:col-span-4">
    <h3 className="text-lg font-semibold text-[#000000]">Contact Us</h3>
    <p className="mt-2 text-sm flex items-center pt-3 text-[#000000]">
      <img src={location} alt="Location" className="h-5 w-5 mr-2" />
      SHILP HOUSE, Rajpath Rangoli Rd, opposite Rajpath Club, Bodakdev,
      Ahmedabad, Gujarat 380054.
    </p>
    <p className="mt-2 text-sm flex items-center pt-3 text-[#000000]" >
      <img src={phone} alt="Phone" className="h-5 w-5 mr-2" />
      +91 7435811123
    </p>
    <p className="mt-2 text-sm flex items-center pt-3 text-[#000000]">
      <img src={phone} alt="Phone" className="h-5 w-5 mr-2" />
      +91 7069613123
    </p>
    <p className="mt-2 text-sm flex items-center pt-3 text-[#000000]">
      <img src={email} alt="Email" className="h-5 w-5 mr-2" />
      sales@shilp.co.in
    </p>
  </div>
</div>


        <div className="mt-10 border-t border-gray-300 pt-4 flex flex-col md:flex-row justify-between text-[14px] text-[#000000]">
          <p>© 2025. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-900 text-[#000000] text-[14px]">
              Terms of use
            </a>
            <a href="#" className="hover:text-gray-900 text-[#000000] text-[14px]">
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
