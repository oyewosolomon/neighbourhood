import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* For Customers */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Neighbourhood</h3>
            <nav className="flex flex-col space-y-3">
              <Link href="/about" className="text-gray-500 hover:text-gray-700">
                About
              </Link>
              <Link href="/connect" className="text-gray-500 hover:text-gray-700">
                Connect
              </Link>
            
            </nav>
          </div>

          {/* For Professionals */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Services</h3>
            <nav className="flex flex-col space-y-3">
              <Link href="/guidelines" className="text-gray-500 hover:text-gray-700">
                Guidelines
              </Link>
              <Link href="/#hero" className="text-gray-500 hover:text-gray-700">
                Get started
              </Link>
            
            
            </nav>
          </div>

         

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-gray-600">hello@neighbourhood.com</p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Link href="/twitter" className="text-gray-400 hover:text-[#85cc59]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.093 4.093 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.615 11.615 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="/facebook" className="text-gray-400 hover:text-[#85cc59]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="/linkedin" className="text-gray-400 hover:text-[#85cc59]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 text-center border-t border-gray-200">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-sm text-gray-500">
              © 2025 Neighbourhood inc.{' '}
             
              <Link href="/cookie-policy" className="hover:text-gray-700">Members Agreement</Link>
              {' / '}
              <Link href="/privacy-policy" className="hover:text-gray-700">Privacy policy</Link>
            </p>

          
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;