import React, { useState } from 'react';

import {menuData} from './Menu__data.jsx';
import img__menu from '/public/img/optimi__images/menu__img.webp';

const MenuSection = () => {
    const [isAnimating, setIsAnimating] = useState(false);
  // Convert to array for easier mapping
  const menuCategories = Object.keys(menuData).map(key => ({
    category: key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1'), // Capitalize and space (e.g., "hotDrinks" -> "Hot Drinks")
    items: menuData[key],
  }));

  const [activeCategory, setActiveCategory] = useState(menuCategories[0].category); // Default to first category

  const handleCategoryChange = (category) => {
    if (category === activeCategory) return;

    setIsAnimating(true);

    setTimeout(() => {
        setActiveCategory(category);
        setIsAnimating(false);
    }, 300); // duration must match CSS
};


  // Get all items if 'All' is selected, else filter by category
  const displayedItems = activeCategory === 'All'
    ? menuCategories.flatMap(cat => cat.items)
    : menuCategories.find(cat => cat.category === activeCategory)?.items || [];
  return (
    <section id="menu" className="py-20 bg-white">
      <div className=" mx-auto px-4 max-w-7xl">
        {/* Enhanced H1 Heading */}
        <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="100">
          <h1 className="text-6xl md:text-4xl text-center font-arabic font-bold text-secondary mb-6">
            Our <span className="text-primary"> Menu</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Discover our fresh and delicious offerings, perfect for any time of day.
          </p>
        </div>

        {/* Enhanced Category Tabs */}
        <div className="flex justify-center mb-12" data-aos="fade-up" data-aos-delay="200">
          <div className="flex flex-wrap justify-center gap-4 md:space-x-4">
            {menuCategories.map((cat, index) => (
              <button
                key={index}
                onClick={() => handleCategoryChange(cat.category)}
                className={`px-6 py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 transform cursor-pointer ${
                  activeCategory === cat.category
                    ? 'bg-secondary text-black shadow-lg'
                    : 'bg-white text-gray-700 border border-[var(--secondary-color)]'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Menu Items List */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto w-full" data-aos="fade-up" data-aos-delay="300">
            <div className="md:col-span-3">
                <div className={`pace-y-4 grid grid-rows-3 gap-6 transition-all duration-300
                ${isAnimating ? 'opacity-0 translate-x-4' : 'opacity-100 translate-y-0'}
            `}>
                {displayedItems.map((item, index) => (
                    <div
                    key={index}
                    className="p-4 transition-all duration-300 flex gap-4 items-stretch overflow-hidden bg-bg border border-gray-200 rounded-lg hover:shadow-lg"
                    
                    >
                    {/* Image Section */}
                    <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 overflow-hidden rounded-full border border-gray-200">
                        <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 flex flex-col justify-between py-2">
                        <div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">
                            {item.name}
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            {item.details || 'Fresh and delicious.'}
                        </p>
                        </div>
                    </div>

                    {/* Price and Button Section */}
                    <div className="flex flex-col justify-between items-end py-2 flex-shrink-0">
                        <div className="flex flex-col items-end bg-primary py-1 px-3 rounded-full">
                            <span className="text-xl md:text-2xl font-bold text-secondary">
                            {item.price}
                            </span>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>    
            <div className="flex justify-center md:col-span-2" data-aos="fade-up" data-aos-delay="400">
                <img src={img__menu} className='w-100 h-auto rounded-2xl shadow-xl' alt="IMG" loading="lazy" />
            </div>
        </div>    
      </div>
    </section>
  );
};

export default MenuSection;

