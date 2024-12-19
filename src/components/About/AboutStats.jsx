import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '200+', label: 'Projects Completed' },
  { value: '50+', label: 'Team Members' },
  { value: '95%', label: 'Client Satisfaction' },
];

export const AboutStats = () => {
  const statsRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: statsRef.current,
        start: 'top bottom-=100',
        end: 'bottom top+=100',
        toggleActions: 'play reverse play reverse',
      }
    });

    itemsRef.current.forEach((item, index) => {
      tl.fromTo(item,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
        },
        index * 0.1
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={statsRef} className="grid grid-cols-2 gap-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          ref={el => itemsRef.current[index] = el}
          className="text-center"
        >
          <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
          <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};