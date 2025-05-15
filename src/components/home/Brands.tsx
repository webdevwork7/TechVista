
import React from 'react';

const Brands = () => {
  return (
    <section className="py-10 bg-gray-50 border-y border-gray-200">
      <div className="container">
        <div className="text-center mb-8">
          <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Trusted by leading brands</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {/* Brand logos (represented as text for now) */}
          {['Apple', 'Microsoft', 'Google', 'Samsung', 'Dell', 'HP'].map((brand) => (
            <div key={brand} className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <span className="font-bold text-xl text-gray-700">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
