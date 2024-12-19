import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from './utils/SplitText';

gsap.registerPlugin(ScrollTrigger);

export const AboutContent = () => {
  const contentRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const splitHeading = new SplitText(headingRef.current, { type: 'words' });
    const splitText = new SplitText(textRef.current, { type: 'lines' });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contentRef.current,
        start: 'top bottom-=100',
        end: 'bottom top+=100',
        toggleActions: 'play reverse play reverse',
      }
    });

    tl.fromTo(splitHeading.words,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
      }
    ).fromTo(splitText.lines,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
      },
      '-=0.4'
    );

    return () => {
      splitHeading.revert();
      splitText.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={contentRef} className="space-y-6">
      <h2 ref={headingRef} className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        Transforming Ideas into Digital Reality
      </h2>
      <div ref={textRef} className="text-lg text-gray-600 space-y-4">
        <p>
          With over a decade of experience in digital innovation, we've helped countless
          businesses transform their online presence and achieve remarkable growth.
        </p>
        <p>
          Our team of passionate experts combines creativity with technical excellence
          to deliver solutions that not only meet but exceed expectations.
        </p>
        <p>
          We believe in the power of innovation and the impact it can have on businesses
          in today's digital landscape.
        </p>
      </div>
    </div>
  );
};