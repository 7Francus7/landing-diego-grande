import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandLogos from './components/BrandLogos';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import VehicleSelector from './components/VehicleSelector';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-secondary min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <BrandLogos />
        <HowItWorks />
        <Services />
        <VehicleSelector />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
