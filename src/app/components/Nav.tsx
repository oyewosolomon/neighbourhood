import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-10 px-4 flex items-center justify-between bg-black/50">
    <div className="flex items-center space-x-8">
        <Link href='/'>
            <img src="/neighbourhood.png" alt="Nextdoor" className="w-44" />
        </Link>
      <div className="flex space-x-6">
        <a href="/" className="text-white hover:text-[#85cc59] font-medium">About</a>
        <a href="#" className="text-white hover:text-[#85cc59] font-medium">Neighbours</a>
        <div className="relative group">
          <a href="#" className="text-white hover:text-[#85cc59] font-medium flex items-center">
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

  )
}

export default Nav