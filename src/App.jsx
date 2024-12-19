import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner/Banner';
import Slider from './components/Slider';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Banner />
      <Slider />
      <About />
      <Services />
      <Testimonials />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;