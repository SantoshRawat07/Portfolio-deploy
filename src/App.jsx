import React, { useState } from 'react';
import './index.css';
import Navbar from './assets/Components/Navbar/Navbarr.jsx';
import HeroSection from './assets/Components/Herosection/Hero.jsx';
import Footer from './assets/Components/Footer/footer.jsx'; 
import Section from './assets/Components/Section/projects.jsx';
import Service from './assets/Components/Services/service.jsx';
import Services from './assets/Components/Services/service1.jsx'
import Servicelast from './assets/Components/Services/Servicelast.jsx'
import Testomonial from './assets/Components/Testomonial/testomonial.jsx'
import Aichat from './Aichat.jsx';
import Contact from './assets/Components/Section/contact.jsx';
import Homeblog from './assets/Components/Section/homeblog.jsx';


const App = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  return (
    <>
      <Navbar visible={showNavbar} />
      <HeroSection setShowNavbar={setShowNavbar} />
      <Section />
      <Service />
      <Services/>
      <Servicelast/>
      <Aichat/>
      <Homeblog/>
      <Testomonial/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;