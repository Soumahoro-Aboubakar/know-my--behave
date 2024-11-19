
import React from 'react';
import CardPrice from "./CardPrice"
import { pricingOptions } from '../constant';
const Prices = () => {
    return (
        <div className='max-w-7xl mx-auto my-20' id="Prices">
        <h2 className="text-center lg:text-4xl text-4xl mb-4 mt-5" id="services">Services</h2>
        <div className="flex-wrap flex my-20">
          {pricingOptions.map((priceOption, index) => (
            <CardPrice priceOption={priceOption} index={index} />
          ))}
        </div>
      </div>
    );
};

export default Prices;