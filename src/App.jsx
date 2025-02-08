import Home from '../src/Components/Home';
import Footer from '../src/Components/Footer';
import Navbar from '../src/Navbar/Navbar';
import AboutUs from '../src/Components/AboutUs';
import OurService from './Components/Service';
import Vision from './Components/Vision'; // Import Vision component
import Commercial from './Components/Commerical';
import BLog from './Components/Blog';
import Testimonials from './Components/Testimonials';

function App() {
  return (
    <div className="relative min-h-screen bg-[#FFFFFF] text-white flex flex-col overflow-auto">
      <Navbar />
      <div className="flex-grow">
        <Home />
        <AboutUs />
        <OurService />
        <Vision /> {/* Added Vision below OurService */}
        <Commercial/>
        <BLog/>
        <Testimonials/>

      </div>
      <Footer />
    </div>
  );
}

export default App;
