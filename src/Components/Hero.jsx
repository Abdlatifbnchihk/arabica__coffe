import React from 'react';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center h-screen"
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div data-aos="fade-up" data-aos-delay="200">
          <h1 className="text-6xl md:text-6xl font-bold font-arabic mb-4 text-secondary">
          Welcome to <span className="text-black">Your</span> Arabica
          </h1>
          <p className="text-lg md:text-xl tracking-tight text-[#eaeaea] mb-8">
            Where great taste meets great moments.
            A fresh, modern dining experience crafted with quality and creativity.
            Food that excites, comforts, and inspires every time.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6" data-aos="fade-up" data-aos-delay="400">
          <a
            href="#menu"
            className="bg-transparent border-2 border-white hover:bg-[var(--secondary-color)] hover:text-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 w-full sm:w-80 md:w-50 lg:w-50 xl:w-50 text-center cursor-pointer"
          >
            View Menu
          </a>
          <a
            href="https://wa.me/+212610782127"
            className="hover:bg-transparent border-2 border-white bg-[var(--secondary-color)] text-white px-6 py-3 rounded-lg font-semibold transition duration-300 w-full sm:w-80 md:w-50 lg:w-50 xl:w-50 text-center cursor-pointer"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
