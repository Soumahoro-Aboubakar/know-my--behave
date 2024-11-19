import React from "react";
import { testimonials } from "../constant";

const ClientTestimonials = () => {


  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">What our Users Said</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <img
              src={testimonial.image}
              alt={`${testimonial.name}'s user-photo`}
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl text-slate-950 text-center font-bold">{testimonial.name}</h3>
            <p className="text-gray-600 text-center mt-4">{testimonial.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientTestimonials;
