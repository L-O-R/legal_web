import { form } from "motion/react-client";
import React from "react";
import bgD from "../../assets/heroSection/BgD.jpg";
const HeroSection = () => {
  return (
    <section className="layout min-h-screen relative">
      <div className="absolute z-0 w-full h-full top-0 left-0">
        <img
          src={bgD}
          alt="background"
          loading="eager"
          className="w-full h-full object-cover"
        />
      </div>
      <header className=" lg:pt-30 pb-8 relative w-full z-10 flex flex-col justify-end min-h-screen text-white">
        <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl ">
          Jones & Brown Legal
        </h1>
        <div className="flex justify-between w-full flex-col md:flex-row mt-14 ">
          <p className="text-2xl lg:text-3xl font-medium">
            Deep expertise, decisive courtroom presence
          </p>
          <p className="max-w-sm text-xl ">
            We've been serving the Los Angeles area with
            expert legal counsel since 1976.
          </p>
        </div>
      </header>
    </section>
  );
};

export default HeroSection;
