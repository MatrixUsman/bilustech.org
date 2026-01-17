'use client';

import Link from 'next/link';
import Logo from './Logo';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-slate-900 shadow-md dark:shadow-slate-950 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Logo className="w-10 h-10 transition-transform group-hover:scale-110" />
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-blue-900 dark:text-orange-600">BilusTech</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Low Voltage Solutions</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-orange-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-orange-600 font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="/products"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-orange-600 font-medium transition-colors"
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-orange-600 font-medium transition-all duration-200 transform hover:scale-105"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 dark:text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2 bg-white dark:bg-slate-800 rounded-lg mt-2">
            <Link
              href="/"
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-orange-600 font-medium py-2 px-4"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-blue-900 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/products"
              className="block text-gray-700 hover:text-blue-900 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="block bg-blue-900 text-white px-6 py-2 rounded-lg font-medium text-center hover:bg-orange-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Get Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
