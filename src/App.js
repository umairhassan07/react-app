import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Copyright from './components/Copyright/Copyright';

import Home from './pages/Home';
import About from './pages/AboutPage';
import Contact from './pages/ContactPage';
import Gallery from './pages/GalleryPage';

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>

        <Footer />
        <Copyright />
      </Router>
    </div>
  );
}

export default App;
