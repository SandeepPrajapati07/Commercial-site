import Home from '../src/Components/Home';
import Footer from '../src/Components/Footer';
import Navbar from '../src/Navbar/Navbar';
import AboutUs from '../src/Components/AboutUs';
import OurService from './Components/Service';
import Vision from './Components/Vision'; // Import Vision component
import Commercial from './Components/Commerical';
import BLog from './Components/Blog';
import Testimonials from './Components/Testimonials';

import WhatsappIcon from './assets/social/Whatsapp.svg';

function App() {
  return (
    <div className="relative min-h-screen bg-[#FFFFFF] text-white flex flex-col overflow-auto">
      <Navbar />
      <div className="flex-grow">
        <Home />
        <AboutUs />
        <OurService />
        <Vision /> 
        <Commercial />
        <BLog />
        <Testimonials />
      </div>
      <Footer />

      <a 
        href="https://wa.me/yourphonenumber" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-20 right-[120px] z-50"
      >
        <img src={WhatsappIcon} alt="WhatsApp" className="w-10 h-10 drop-shadow-lg hover:scale-110 transition-transform duration-300" />
      </a>
    </div>
  );
}

export default App;
