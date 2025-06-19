'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm dark:bg-gray-900/95 dark:backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="#" className="text-xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Sarabjeet
            </span>
          </Link>

          {/* Desktop navbar */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 transition-all duration-200 font-medium dark:text-gray-300 dark:hover:text-blue-400 px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
                >
                  {item.name}
                </Link>
              ))}
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile navbar */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <div className="flex items-center space-x-1">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-gray-600 hover:text-blue-600 transition-all duration-200 font-medium dark:text-gray-300 dark:hover:text-blue-400 px-2 py-1 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
