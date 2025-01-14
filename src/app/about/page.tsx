import React from 'react';
import Nav from '../components/Nav';
import Link from 'next/link';
import Footer from '../components/Footer';

export default function AboutPage() {
    return (
      <div>
       <Nav/>
        {/* Hero Section */}
        <div
          className="relative bg-cover bg-center h-[60vh] flex items-center justify-center text-center"
          style={{
            backgroundImage: "url('/about-bg.jpg')",
          }}
        >
          <div className="bg-black bg-opacity-50 text-white p-8 rounded-md">
            <h1 className="text-3xl font-bold"><em>We believe in the possibilities nearby</em></h1>
          </div>
        </div>
  
        {/* Main Content Section */}
        <div className="max-w-4xl mx-auto p-8 space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">
              Neighbourhood is where you connect to the neighbourhoods that matter to you so you can belong.
            </h2>
            <h2 className="text-2xl font-bold mb-4">
              By bringing neighbours and organizations together, we can cultivate a kinder world where everyone has a neighbourhood they can rely on.
            </h2>
          </section>
  
          <section>
            <h2 className="text-xl font-bold mb-2">The Neighbourhood Network</h2>
            <p className='my-2'>
              Neighbours around the world turn to Neighbourhood to receive trusted information, get and give help, get things done, and build real-world connections with those nearby – neighbours, businesses, and public services.
            </p>
            <p className='my-2'>
              Building connections in the real world is a universal human need. That truth, and the reality that neighbourhoods are among the most important communities in our lives, have been guiding principles for Neighbourhood since the beginning.
            </p>
          </section>
  
          <section>
            <h2 className="text-xl font-bold mb-2">Neighbourhood by the Numbers</h2>
            <ul className="list-disc ml-6">
              <li>11 countries</li>
              <li>200,000+ neighbourhoods globally</li>
              <li>1 in 5 USA. households</li>
              <li>1 in 3 London households</li>
              <li>5.5 million business recommendations from neighbours</li>
            </ul>
          </section>
  
          <section>
            <h2 className="text-xl font-bold mb-2">Connecting the Neighbourhood</h2>
            <p>We recognise that thriving communities are made up of the neighbours and organisations that build stronger, more vibrant, and resilient neighbourhoods.</p>
          </section>
  
          <section>
            <h2 className="text-xl font-bold mb-2">How We're Different</h2>
            <ul className="list-disc ml-6">
              <li><strong className='text-black/60'>Trust:</strong> You're connected to real people.</li>
              <li><strong className='text-black/60'>Local perspective:</strong> Whether you need to find...</li>
              <li><strong className='text-black/60'>Proximity:</strong> Automatically connected to everyone nearby.</li>
            </ul>
          </section>
  
          <section>
            <h2 className="text-xl font-bold mb-2">A Global Neighbourhood</h2>
            <p>
            Neighbours in the United States, United Kingdom, the Netherlands, France, Germany, Italy, Spain, Australia, Denmark, Sweden and Canada are using Neighbourhood to meet, gather, exchange and share.
            </p>
          </section>
  
          {/* Call-to-Action Button */}
          <div className="flex justify-center mt-8">
            <Link href="/" className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition">
              Connect to your neighbourhood
            </Link>
          </div>
        </div>
  
        {/* Footer */}
        <Footer/>
      </div>
    );
  }
  