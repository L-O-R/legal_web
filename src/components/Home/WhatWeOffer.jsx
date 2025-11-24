import { section } from "motion/react-client";
import React from "react";
import { NavLink } from "react-router-dom";

const servicesData = [
  "Business formation",
  "Contract drafting",
  "Mergers and Acquisitions",
  "Property Protection",
  "Employment Law",
  "Corporate Governance",
  "Shareholder Disputes",
];

const WhatWeOffer = () => {
  return (
    <section className="layout min-h-screen flex flex-col md:flex-row gap-14 justify-center py-24 bg-bg2 text-white">
      <header className="w-[30%]">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-center">
          What we offer
        </h2>
      </header>
      <div className="w-[70%]">
        <ul className="space-y-1">
          {servicesData.map((item, index) => (
            <li
              key={index * 1}
              className="text-4xl md:text-5xl lg:text-7xl">
              {item}
            </li>
          ))}
        </ul>
        <NavLink to={"/services"}>
          <span className="block mb-10 text-4xl md:text-5xl lg:text-7xl text-Highlight/50 font-medium">
            More+
          </span>
        </NavLink>

        <NavLink to={"/services"}>
          <button
            type="button"
            className="bg-white text-black rounded-4xl py-4 px-6 cursor-pointer">
            Services
          </button>
        </NavLink>
      </div>
    </section>
  );
};

export default WhatWeOffer;
