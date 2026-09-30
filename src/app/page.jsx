"use client";
import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbarr.jsx';
import HeroSection from '../components/Herosection/Hero.jsx';
import Section from '../components/Section/projects.jsx';
import ServicesAll from '../components/Services/ServicesAll.jsx';
import Testomonial from '../components/Testomonial/testomonial.jsx';
import Aichat from '../components/Aichat.jsx';
import Contact from '../components/Section/contact.jsx';
import Homeblog from '../components/Section/homeblog.jsx';

const Page = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  return (
    <>
      <Navbar visible={showNavbar} />
      <HeroSection setShowNavbar={setShowNavbar} />
      <Section />
      <ServicesAll />
      <Aichat/>
      <Homeblog/>
      {/* <Testomonial/> */}
      <Contact/>
    </>
  );
};

export default Page;
