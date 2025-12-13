import React from 'react';

import imgAbout from '/public/img/optimi__images/about__img.webp';

const AboutSection = () => {
  return (
    <section id="about" className="py-25 md:py-20 bg-gray-50 h-auto">
      <div className="mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-6xl md:text-4xl font-arabic font-bold text-[var(--secondary-color)] mb-4">
            About <span className="text-[var(--primary-color)]">Us</span>
          </h2>
          <p className="text-lg text-gray-600">
            Discover the heart and soul behind <span className=" text-[var(--secondary-color)] text-xl font-bold">Arabica Café</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div data-aos="fade-down" data-aos-delay="200">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-20 bg-[var(--secondary-color)]"></div>
                <h3 className="text-3xl font-bold text-[#562b18]">
                  Our Story
                </h3>
            </div>
            <p className="text-gray-700 mb-4">
              Founded in 2022, Arabica Café has been a beloved spot for food lovers seeking authentic flavors and warm hospitality. Our journey began with a passion for bringing people together through exceptional cuisine, using fresh, locally-sourced ingredients to create dishes that tell a story.
            </p>
            <p className="text-gray-700 mb-8">
              Whether you're celebrating a special occasion or enjoying a casual meal, our team of dedicated chefs and staff are committed to making every visit memorable. From our signature [e.g., pasta dishes] to our cozy dining space, we strive to deliver an experience that feels like home.
            </p>
            <a
              href="https://web.facebook.com/p/Arabica-caf%C3%A9-61573075074846/?_rdc=1&_rdr#"
              className="bg-[var(--secondary-color)] hover:bg-[var(--primary-color)] text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
            >
              See More 
            </a>
          </div>

          {/* Image Placeholder */}
          <div className="flex justify-center" data-aos="fade-up" data-aos-delay="300">
            <img
              src={imgAbout}
              alt="About img"
              className="rounded-2xl shadow-xl w-full max-w-md h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
