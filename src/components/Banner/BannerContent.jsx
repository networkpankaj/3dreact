import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const BannerContent = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(contentRef.current?.querySelector('h1'),
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      }
    ).fromTo(contentRef.current?.querySelector('p'),
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      },
      '-=0.5'
    ).fromTo(contentRef.current?.querySelector('button'),
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      },
      '-=0.5'
    );
  }, []);

  return (
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
  );
};