import React from "react";

import Slider from "../Slider";
const Testimonials = () => {
  return (
    <section className="layout py-16 lg:py-24">
      <header className="flex items-center justify-center flex-col gap-4">
        <h2 className="text-2xl lg:text-4xl font-medium">
          Hear From Our Clients
        </h2>
        <p className="text-lg lg:text-xl max-w-xl text-center">
          We believe that our clients' experiences speak
          volumes about the quality of our legal services.
          Here's what some of them have to say:
        </p>
      </header>
      <Slider />
    </section>
  );
};

export default Testimonials;
