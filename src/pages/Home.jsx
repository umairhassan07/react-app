import React from 'react';
import Banner from '../components/Banner/Banner';
import About from '../components/About/About';
import Gallery from '../components/Gallery/Gallery';
import Services from '../components/Services/Services';
import Testimonials from '../components/Testimonials/Testimonials';
import Contact from '../components/Contact/Contact';


function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Gallery />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default Home;
