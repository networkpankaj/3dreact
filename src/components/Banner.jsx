import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Banner = () => {
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.from(contentRef.current, {
      opacity: 1,
      y: 50,
      duration: 1,
      delay: 0.5
    });

    gsap.to(imageRef.current, {
      rotationY: 360,
      duration: 20,
      repeat: -1,
      ease: "none"
    });
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div ref={contentRef} className="space-y-6">
          <h1 className="text-5xl font-bold text-gray-900">
            Transform Your Digital Presence
          </h1>
          <p className="text-xl text-gray-600">
            We create innovative solutions that help businesses thrive in the digital age.
            Our expertise in modern technologies ensures your success.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition-colors">
            Learn More
          </button>
        </div>
        <div className="flex justify-center">
          <img
            ref={imageRef}
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Digital Innovation"
            className="rounded-2xl shadow-2xl max-w-md w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;