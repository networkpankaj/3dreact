import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from(sectionRef.current, {
      opacity: 1,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none none reverse"
      }
    });
  }, []);

  return (
    <div className="py-20 bg-white">
      <div ref={sectionRef} className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">About Us</h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          We are a team of passionate innovators dedicated to creating exceptional
          digital experiences. With years of expertise in cutting-edge technologies,
          we help businesses transform their digital presence and achieve remarkable
          growth. Our commitment to excellence and innovation drives everything we do.
        </p>
      </div>
    </div>
  );
};

export default About;