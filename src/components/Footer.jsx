import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const socialLinksRef = useRef([]);

  useEffect(() => {
    socialLinksRef.current.forEach((link, index) => {
      gsap.from(link, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        delay: index * 0.1
      });
    });
  }, []);

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Github, href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">About Us</h3>
            <p className="text-gray-400">
              Transforming businesses through innovative digital solutions.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Digital Marketing</li>
              <li>Cybersecurity</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>contact@example.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Tech Street</li>
              <li>San Francisco, CA 94105</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  ref={el => socialLinksRef.current[index] = el}
                  className="hover:text-blue-400 transition-colors"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 InnovateTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;