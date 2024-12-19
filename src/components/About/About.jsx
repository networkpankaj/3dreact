import React from 'react';
import { AboutContent } from './AboutContent';
import { AboutStats } from './AboutStats';
import { AboutImage } from './AboutImage';

const About = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AboutContent />
          <div className="space-y-16">
            <AboutImage />
            <AboutStats />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;