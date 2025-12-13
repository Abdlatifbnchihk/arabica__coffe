import React from "react";
import { Icon } from "@iconify/react";

// Social Icons
import facebookIcon from "@iconify/icons-fa6-brands/facebook-f";
import instagramIcon from "@iconify/icons-fa6-brands/instagram";
import whatsappIcon from "@iconify/icons-fa6-brands/whatsapp";

// Contact Icons
import locationDotIcon from "@iconify/icons-fa6-solid/location-dot";
import phoneIcon from "@iconify/icons-fa6-solid/phone";
import emailIcon from "@iconify/icons-ion/mail";

const FooterSection = () => {
  return (
    <footer className="bg-bg text-white py-12">
      <div className="mx-auto px-4 max-w-6xl">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="flex flex-col gap-5">
            <a href="#" className="cursor-pointer">
              <span className="ml-2 text-3xl font-bold text-secondary tracking-wide font-arabic">Arabica</span>
              <span className="ml-2 text-3xl font-bold text-primary font-arabic">café</span>
            </a>

            <p className="text-gray-600">
              Experience exceptional dining with fresh ingredients and warm hospitality. Join us for an unforgettable meal.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="https://web.facebook.com/p/Arabica-caf%C3%A9-61573075074846/?_rdc=1&_rdr#" className="text-[var(--primary-color)] flex justify-center items-center rounded-full bg-[var(--secondary-color)] h-10 w-10 hover:bg-[var(--primary-color)] hover:text-[var(--secondary-color)] transition duration-300 cursor-pointer">
                <Icon icon={facebookIcon} className="text-2xl" />
              </a>

              <a href="https://www.instagram.com/arabica_cafe_agadir/reels/?__d=1%252F" className="text-[var(--primary-color)] flex justify-center items-center rounded-full bg-[var(--secondary-color)] h-10 w-10 hover:bg-[var(--primary-color)] hover:text-[var(--secondary-color)] transition duration-300 cursor-pointer">
                <Icon icon={instagramIcon} className="text-2xl" />
              </a>

              <a className="text-[var(--primary-color)] flex justify-center items-center rounded-full bg-[var(--secondary-color)] h-10 w-10 hover:bg-[var(--primary-color)] hover:text-[var(--secondary-color)] transition duration-300 cursor-pointer" href="https://wa.me/+212610782127">
                <Icon icon={whatsappIcon} className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg text-primary font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-600 hover:text-[var(--secondary-color)] transition duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-[var(--primary-color)] transition duration-300">About</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-[var(--secondary-color)] transition duration-300">Services</a></li>
              <li><a href="#menu" className="text-gray-600 hover:text-[var(--secondary-color)] transition duration-300">Menu</a></li>
              <li><a href="#testimonials" className="text-gray-600 hover:text-[var(--secondary-color)] transition duration-300">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-[var(--secondary-color)] transition duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg text-primary font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-5 text-gray-600">
              <li className="flex items-start gap-3.5">
                <span>
                  <Icon icon={locationDotIcon} className="text-2xl text-secondary" />
                </span>
                en face de mosquée loubnan, Av. Des Forces Armees Royales, Agadir 80000
              </li>

              <li className="flex items-start gap-3.5">
                <Icon icon={phoneIcon} className="text-2xl text-secondary" />
                (+212) 610782127
              </li>

              <li className="flex items-start gap-3.5">
                <Icon icon={emailIcon} className="text-2xl text-secondary" />
                info@example.com
              </li>
            </ul>
          </div>

          {/* Time Work */}
          <div>
            <h4 className="text-lg text-primary font-semibold mb-4">Time Work</h4>
            <div className="space-y-2 text-gray-600">
              <p><span className="font-bold">Sunday: </span> 8 AM – 11 PM</p>
              <p><span className="font-bold">Monday: </span> 8 AM – 11 PM</p>
              <p><span className="font-bold">Tuesday: </span> 8 AM – 11 PM</p>
              <p><span className="font-bold">Wednesday: </span> 8 AM – 12 AM</p>
              <p><span className="font-bold">Thursday: </span> 8 AM – 12 AM</p>
              <p><span className="font-bold">Friday: </span> 8 AM – 12 AM</p>
              <p><span className="font-bold">Saturday: </span> 8 AM – 12 AM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary mt-8 pt-8 text-center text-gray-600">
          <p>
            &copy; 2026 <span className="text-secondary">Arabica café</span>. All rights reserved. | Designed with{" "}
            <span className="text-secondary">Abd Ellatif</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;


