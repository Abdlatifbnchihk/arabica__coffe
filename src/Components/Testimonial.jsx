import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import { Icon } from "@iconify/react";
import quoteRightIcon from "@iconify/icons-fa6-solid/quote-right";
import starIcon from "@iconify/icons-fa6-solid/star";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// images for testimonials can be replaced with actual images
import imgPerson1 from '/public/img/optimi__images/testimonial-1.jpg';
import imgPerson2 from '/public/img/optimi__images/testimonial-2.jpg';
import imgPerson3 from '/public/img/optimi__images/testimonial-3.jpg';
import imgPerson4 from '/public/img/optimi__images/testimonial-4.jpg';
import imgPerson5 from '/public/img/optimi__images/testimonial-5.jpg';
import imgPerson6 from '/public/img/optimi__images/testimonial-6.jpg';

const TestimonialsSection = () => {
  // Sample testimonial data (customize with real data)
  const testimonials = [
    {
      image: imgPerson1, // Replace with actual image URL
      name: 'John Doe',
      job: 'Food Blogger',
      rating: 4, // Number of stars (out of 5, but user specified 4)
      quote: 'Definitely the best fondant cake you’ll find. Freshly baked and made to order so expect a 30min wait. Worth the wait',
    },
    {
      image: imgPerson3,
      name: 'Jane Smith',
      job: 'Chef',
      rating: 4,
      quote: 'The best breakfast you could try, large portions that fill you up quickly, and service is very respectful and pleasant',
    },
    {
      image: imgPerson4,
      name: 'Mike Johnson',
      job: 'Local Resident',
      rating: 4,
      quote: 'Such beautiful food.. really friendly staff who were happy to change chicken to avocado in the salad as I am veggie.',
    },
    {
      image: imgPerson2,
      name: 'Emily Davis',
      job: 'Event Planner',
      rating: 4,
      quote: 'Very very lovely place, amazing service and food is delicious.',
    },
    {
      image: imgPerson6,
      name: 'Alex Brown',
      job: 'Student',
      rating: 4,
      quote: 'And really nice waiter and the most delicious food for breakfast',
    },
    {
      image: imgPerson5,
      name: 'Sarah Wilson',
      job: 'Business Owner',
      rating: 4,
      quote: 'Perfect for business meetings. The coffee is top-notch, and the atmosphere is professional yet cozy.',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="mx-auto px-4 max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-4xl text-center font-arabic font-bold text-secondary mb-6">
            What Our <span className="text-primary-color">Customers</span> Say
          </h1>
          <p className="text-lg text-gray-600">
            Hear from our satisfied guests about their experiences.
          </p>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000, // Auto-slide every 3 seconds
            disableOnInteraction: false, // Continue auto-sliding after user interaction
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2, // 2 slides on small screens
            },
            1024: {
              slidesPerView: 3, // 3 slides on large screens
            },
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-bg border border-[var(--secondary-color)] p-4 rounded-lg shadow-md  h-full">
                <div className="mb-4 flex justify-between items-center">
                  <div className="flex items-center gap-4 ">
                      {/* Person Image */}
                      <div className="">
                          <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                          />
                      </div>    
                      <div className="">
                          {/* Name and Job */}
                          <h3 className="text-xl font-semibold text-gray-800 mb-1">
                          {testimonial.name}
                          </h3>
                          <p className="text-gray-600 mb-4">
                          {testimonial.job}
                          </p>
                      </div>
                  </div>
                  <div className="flex h-20 w-20 items-start justify-end">
                    <Icon icon={quoteRightIcon} className="text-4xl text-[#9a9a9a]" />
                  </div>
                </div>
                {/* 4 Stars */}
                  <div className="flex justify-start mb-4">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <span key={i} className="text-secondary text-xl"><Icon icon={starIcon} /></span>
                    ))}
                  </div>
                {/* Paragraph */}
                  <p className="text-gray-700 italic">
                    "{testimonial.quote}"
                  </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
