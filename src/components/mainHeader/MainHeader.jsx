import React from "react";
import { NavLink } from "react-router-dom";

const MainHeader = () => {
  return (
    <header className="sticky top-0 w-full layout py-4 bg-bg2 text-white flex items-center gap-6 justify-between z-40">
      <div className=" h-10">
        <NavLink to={"/"}>
          <img
            src="/Logo.svg"
            alt="Legal Web"
            width={100}
            height={50}
            loading="eager"
            className="w-full h-full object-contain"
          />
        </NavLink>
      </div>
      <nav className="space-x-4">
        <NavLink
          to={"/services"}
          className={({ isActive }) =>
            `text-xl font-normal ${
              isActive
                ? "font-bold underline underline-offset-8"
                : ""
            }`
          }>
          Services
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            `text-xl font-normal ${
              isActive
                ? "font-bold underline underline-offset-8"
                : ""
            }`
          }>
          Schedule a Consult
        </NavLink>
      </nav>
    </header>
  );
};

export default MainHeader;
