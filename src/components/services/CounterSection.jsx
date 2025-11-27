import { section } from "motion/react-client";
import React from "react";
import Counter from "../Counter";

const data = [
  {
    num: 38,
    symbol: "+",
    dex: "years of experience",
  },
  {
    num: 98,
    symbol: "%",
    dex: "years of experience",
  },
  {
    num: 120,
    symbol: "+",
    dex: "years of experience",
  },
];
const CounterSection = () => {
  return (
    <section className="layout bg-bg1 flex flex-col gap-12 md:flex-row justify-around py-16 md:py-20">
      {data.map((num, index) => (
        <div key={index} className="">
          <p className="flex text-5xl md:text-7xl lg:text-8xl xl:text-9xl mb-3 md:mb-8">
            <Counter value={num.num} />
            <span>{num.symbol}</span>
          </p>
          <p className="md:text-center text-xl">
            {num.dex}
          </p>
        </div>
      ))}
    </section>
  );
};

export default CounterSection;
