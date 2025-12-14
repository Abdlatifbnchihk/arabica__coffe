import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-bg shadow-md fixed top-0 left-0 z-50 border-b border-gray-200">
      <div className="mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" rel="noopener noreferrer" className="flex items-center justify-between cursor-pointer text-3xl font-bold font-arabic gap-2">
          <span className="text-secondary tracking-wide">Arabica</span>
          <span className="text-primary">café</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 pr-5">
          <a href="#home" className="text-gray-700 hover:text-[var(--secondary-color)] text-md transition duration-300">Home</a>
          <a href="#about" className="text-gray-700 hover:text-[var(--secondary-color)] text-md transition duration-300">About</a>
          <a href="#services" className="text-gray-700 hover:text-[var(--secondary-color)] text-md transition duration-300">Services</a>
          <a href="#menu"  className="text-gray-700 hover:text-[var(--secondary-color)] text-md transition duration-300">Menu</a>
          <a href="#testimonials" className="text-gray-700 hover:text-[var(--secondary-color)] text-md transition duration-300">Testimonial</a>
          <a href="#contact"className="text-gray-700 hover:text-[var(--secondary-color)] text-md transition duration-300">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 border border-[var(--secondary-color)] px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] cursor-pointer"
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden bg-[var(--bg-color)] shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`} >
          <nav className="flex flex-col items-start space-y-4 px-6 py-5">
            <a href="#home" className="text-gray-700 hover:text-[var(--secondary-color)] text-xl transition duration-300" onClick={toggleMenu}>Home</a>
            <a href="#about" className="text-gray-700 hover:text-[var(--secondary-color)] text-xl transition duration-300" onClick={toggleMenu}>About</a>
            <a href="#services" className="text-gray-700 hover:text-[var(--secondary-color)] text-xl transition duration-300" onClick={toggleMenu}>Services</a>
            <a href="#menu" className="text-gray-700 hover:text-[var(--secondary-color)] text-xl transition duration-300" onClick={toggleMenu}>Menu</a>
            <a href="#testimonials" className="text-gray-700 hover:text-[var(--secondary-color)] text-xl transition duration-300" onClick={toggleMenu}>Testimonial</a>
            <a href="#contact" className="text-gray-700 hover:text-[var(--secondary-color)] text-xl transition duration-300" onClick={toggleMenu}>Contact</a>
          </nav>
        </div>
    </header>
  );
};

export default Header;