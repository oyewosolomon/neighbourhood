import React from 'react';
import { Smartphone, MapPin, Home } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <h1 className="text-3xl font-extrabold italic">
          Get the most out of your neighbourhood with Nextdoor
        </h1>
        <p className="text-md text-gray-700 leading-relaxed">
          It&apos;s where communities come together to greet newcomers, exchange recommendations, and read the latest local news. Where neighbours support local businesses and get updates from public services. Where neighbours borrow tools and sell sofas. It's how to get the most out of everything nearby. Welcome, neighbour.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-12 mb-16">
        {/* Essential Feature */}
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div className="w-16 h-16 bg-[#fff5d1] rounded-full flex items-center justify-center">
              <Smartphone className="w-8 h-8 text-[#006341]" />
            </div>
          </div>
          <h3 className="text-xl font-bold italic mb-4">Essential</h3>
          <p className="text-gray-700">
            Relevant news and information from neighbours, businesses, and public agencies in real time.
          </p>
        </div>

        {/* Local Feature */}
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div className="w-16 h-16 bg-[#e8fcd9] rounded-full flex items-center justify-center">
              <MapPin className="w-8 h-8 text-[#006341]" />
            </div>
          </div>
          <h3 className="text-xl font-bold italic mb-4">Local</h3>
          <p className="text-gray-700">
            The only way to instantly connect to the people, businesses, and happenings near your home.
          </p>
        </div>

        {/* Trusted Feature */}
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div className="w-16 h-16 bg-[#ffe8e0] rounded-full flex items-center justify-center">
              <Home className="w-8 h-8 text-[#006341]" />
            </div>
          </div>
          <h3 className="text-xl font-bold italic mb-4">Trusted</h3>
          <p className="text-gray-700">
            A secure environment where all neighbours are confirmed.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-3xl font-bold italic mb-8">
          Instantly connect with your neighbourhood
        </h2>
        <button className="bg-[#95e065] text-black px-8 py-3 rounded-full font-medium hover:bg-[#85cc59] transition-colors">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default FeaturesSection;