"use client"

import React, { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  
  const backgroundImages = [
    '/29115.jpg',
    '/2149287921.jpg',
    '/21887.jpg'
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-10 px-4 flex items-center justify-between bg-black/50">
        <div className="flex items-center space-x-8">
          <img src="/neighbourhood.png" alt="Nextdoor" className="w-44" />
          <div className="flex space-x-6">
            <a href="#" className="text-white font-medium">Neighbours</a>
            <a href="#" className="text-white font-medium">Public Services</a>
            <div className="relative group">
              <a href="#" className="text-white font-medium flex items-center">
                Business
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <button className="bg-[#95e065] text-black px-4 py-2 rounded-full font-medium hover:bg-[#85cc59] transition-colors">
          Log in
        </button>
      </nav>

      {/* Background Images */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            currentImageIndex === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center relative">
        {/* Sign Up Card */}
        <div className="relative z-10 bg-white rounded-lg p-8 w-full max-w-[27rem] mx-4">
          <h1 className="text-2xl font-bold text-center mb-6">
            Discover your neighbourhood
          </h1>

          <button className="w-full mb-3 flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
            <img src="/google.svg" alt="Google" className="w-5 h-5" />
            Continue with Google
          </button>

          <button className="w-full mb-6 flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
            <img src="/apple.svg" alt="Apple" className="w-5 h-5" />
            Continue with Apple
          </button>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>

          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-3 mb-3 bg-gray-100 rounded-full"
          />

          <div className="relative mb-6">
            <input
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-3 bg-gray-100 rounded-full"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2">
              <Eye className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          <button className="w-full bg-[#95e065] text-black font-medium py-3 rounded-full hover:bg-[#85cc59] transition-colors mb-4">
            Continue
          </button>

          <p className="text-xs text-gray-500 text-center mb-6">
            By signing up, you agree to our{' '}
            <a href="#" className="underline">Privacy Policy</a>,{' '}
            <a href="#" className="underline">Cookie Policy</a> and{' '}
            <a href="#" className="underline">Member Agreement</a>
          </p>

          <div className="text-center mb-4">
            <p className="text-sm">
              Have a business?{' '}
              <a href="#" className="text-black underline font-medium">
                Get started
              </a>
            </p>
          </div>

          <div className="text-center">
            <a href="#" className="text-black underline font-medium">
              Have an invite code?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;