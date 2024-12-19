import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const companies = [
  "Microsoft", "Google", "Apple", "Amazon", "Meta", "Netflix", "Tesla", "IBM",
  "Intel", "Adobe", "Salesforce", "Oracle", "Twitter", "Spotify", "Uber"
];

const Slider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    
    gsap.to(slider, {
      x: "-50%",
      duration: 20,
      repeat: -1,
      ease: "none"
    });

    return () => {
      gsap.killTweensOf(slider);
    };
  }, []);

  return (
    <div className="bg-blue-600 py-12 overflow-hidden">
      <div className="whitespace-nowrap" ref={sliderRef}>
        {[...companies, ...companies].map((company, index) => (
          <span
            key={index}
            className="inline-block mx-8 text-2xl font-bold text-white/90"
          >
            {company}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Slider;