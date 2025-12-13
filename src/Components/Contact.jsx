import React from 'react';
import { Icon } from "@iconify/react";

import locationDotIcon from "@iconify/icons-fa6-solid/location-dot";
import phoneIcon from "@iconify/icons-fa6-solid/phone";
import emailIcon from "@iconify/icons-ion/mail";


const ContactSection = () => {

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto px-4 max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-4xl text-center font-arabic font-bold text-secondary mb-10">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-lg text-gray-600">
            Visit Arabica café and enjoy a warm atmosphere with exceptional coffee.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 bg-bg items-center rounded-2xl shadow-lg w-full">
          {/* Location Map */}
          <div className="p-8 lg:col-span-3 overflow-hidden h-[500px]">
          <iframe
            title="Arabica Cafe Location"
            src="https://www.google.com/maps?q=30.4238793,-9.5994536&z=17&output=embed"
            className="w-full h-full rounded-lg"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
          <p className="text-gray-600">
            Arabica café located in Agadir, Morocco near Avenue des Forces Armées Royales.
          </p>
        </div>

          {/* socail contact */}
          <div className="flex flex-col justify-center gap-8 p-8 lg:col-span-2">
            <div className="flex gap-4 py-8 px-3 border border-[var(--secondary-color)] rounded-lg">
                <Icon icon={locationDotIcon} className="text-5xl text-secondary mb-4" />
                <div>
                    <h3 className="text-2xl font-bold text-black mb-2">Address</h3>
                    <p>en face de mosquée loubnan, Av. Des Forces Armees Royales, Agadir 80000</p>
                </div>
            </div>
            <div className="flex gap-4 py-8 px-3 border border-[var(--secondary-color)] rounded-lg">
                <Icon icon={emailIcon} className="text-5xl text-secondary mb-4" />
                <div>
                    <h3 className="text-2xl font-bold text-black mb-2">Email</h3>
                    <p>info@example.com</p>
                </div>
            </div>
            <div className="flex gap-4 py-8 px-3 border border-[var(--secondary-color)] rounded-lg">
                <Icon icon={phoneIcon}  className="text-5xl text-secondary mb-4" />
                <div>
                    <h3 className="text-2xl font-bold text-black mb-2">Phone Number</h3>
                    <p>(+212) 610782127</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
