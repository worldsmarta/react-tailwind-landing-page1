import Banner from "./components/Banner";
import Dropdown from "./components/Dropdown";
import React, { useState, useEffect } from 'react';
import Section from "./components/Section";
import Footer from "./components/Footer";
import Section1 from "./components/Section1";


function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });


  return (
    <>

      <Banner toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Section1 />
      <Section />
      <Footer />
    </>
  );
}

export default App;
