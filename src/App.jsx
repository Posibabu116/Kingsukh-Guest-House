import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import LivingRoom from './components/LivingRoom';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Map from './components/Map';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Router>
        <NavigationBar />
        <HeroSection/>
        <AboutUs/>
        <Services/>
        <LivingRoom/>
        <Gallery/>
        <Contact/>
        <Map/>
        <Footer />
      </Router>
    </>
  );
};

export default App;