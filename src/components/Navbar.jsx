import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Rocket } from 'lucide-react';

const Navbar = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    
    const handleHover = () => {
      gsap.to(button, {
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleHoverOut = () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    button.addEventListener('mouseenter', handleHover);
    button.addEventListener('mouseleave', handleHoverOut);

    return () => {
      button.removeEventListener('mouseenter', handleHover);
      button.removeEventListener('mouseleave', handleHoverOut);
    };
  }, []);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Rocket className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-800">InnovateTech</span>
        </div>
        <button
          ref={buttonRef}
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;