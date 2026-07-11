import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left Side: Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-xl font-bold text-gray-900">
            MyLogo
          </Link>
        </div>

        {/* Right Side: Navigation Links */}
        <nav className="flex space-x-8">
          <Link 
            href="/about" 
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
