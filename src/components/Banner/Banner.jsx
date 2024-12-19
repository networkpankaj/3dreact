import React from 'react';
import { BannerContent } from './BannerContent';
import { BannerModel } from './BannerModel';

const Banner = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <BannerContent />
        <BannerModel />
      </div>
    </div>
  );
};

export default Banner;