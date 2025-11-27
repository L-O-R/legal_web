import { section } from "motion/react-client";
import React from "react";

const BannerSection = () => {
  return (
    <section className="layout relative bg-[url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-fixed bg-cover min-h-screen flex justify-start items-end">
      <div className="bg-black/30 absolute top-0 left-0 w-full h-full z-10"></div>

      <div className="relative z-20 pb-[10%]  text-white text-4xl md:text-5xl leading-15">
        <h1>
          At Jones & Brown Legal, we are committed to
          exceptional service and successful outcomes with:
        </h1>
      </div>
    </section>
  );
};

export default BannerSection;
