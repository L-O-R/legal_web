import React from "react";
import HeroSection from "../components/Home/HeroSection";
import About from "../components/Home/About";
import WhatWeOffer from "../components/Home/WhatWeOffer";
import bg2 from "../assets/bannerImages/bg_2.png";
import bg2T from "../assets/bannerImages/bg_2T.png";
import bg2M from "../assets/bannerImages/bg_2M.png";
import Testimonials from "../components/Home/Testimonials";
const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <WhatWeOffer />
      <section className="min-h-screen bg-bg2 relative">
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            src={bg2}
            alt="just an banner"
            className="hidden lg:block w-full h-full object-cover"
          />
          <img
            src={bg2T}
            alt="just an banner"
            className=" hidden md:block lg:hidden w-full h-full object-cover"
          />
          <img
            src={bg2M}
            alt="just an banner"
            className=" md:hidden w-full h-full object-cover"
          />
        </div>
      </section>
      <Testimonials />
    </>
  );
};

export default Home;
