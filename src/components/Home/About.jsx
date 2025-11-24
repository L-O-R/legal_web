import { section } from "motion/react-client";
import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <section className="layout py-24 min-h-screen bg-bg1 text-black space-y-8 flex flex-col gap-10 justify-center">
      <h2 className="text-4xl lg:text-5xl font-medium">
        Welcome to Jones & Brown Legal
      </h2>

      <div className="flex flex-col md:flex-row gap-14 md:items-start max-w-5xl">
        <p className="text-lg md:text-xl">
          Jones & Brown Legal has been a pillar of the Los
          Angeles legal community, providing expert legal
          counsel across a wide spectrum of practice areas.
          We are more than just attorneys, we are trusted
          advisors, dedicated advocates, and strategic
          partners committed to achieving the best possible
          outcomes for our clients.
        </p>
        <p className="text-lg md:text-xl">
          We combine decades of experience with a deep
          understanding of the complexities of California
          law. Our team of seasoned trial attorneys boasts a
          proven track record of success in courtrooms
          throughout Los Angeles and beyond. We pride
          ourselves on our comprehensive expertise, covering
          nearly every field of law, ensuring that whatever
          your legal challenge, we have the knowledge and
          experience to guide you.
        </p>
      </div>

      <NavLink to={"/contact"}>
        <button
          type="button"
          className="bg-btn1 text-white py-4 px-6 text-lg lg:text-xl rounded-4xl cursor-pointer transition-all duration-300 ease-linear hover:bg-btn1/70">
          Schedule a Consult
        </button>
      </NavLink>
    </section>
  );
};

export default About;
