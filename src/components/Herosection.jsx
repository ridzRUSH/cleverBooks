import React from "react";
import heroImage from "/images/heroImg.svg";

const Herosection = () => {
  return (
    <>
      <div className="flex flex-col justify-end md:flex-row items-center h-screen-plus-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black clip-diagonal-bottom rounded-lg">
        <div className="flex flex-col justify-center items-start  md:w-1/2 text-white p-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Every order</h1>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            fulfilled,{" "}
            <span className=" text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
              on time.
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Eliminate overstocking and under-stocking with Crest. Built by
            supply-chain experts, it brings the same technology used by large
            global brands to power fast-growing startups. In short, we make
            supply meet demand, and then help you grow both.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg md:text-xl hover:bg-blue-700 transition">
            Get Started With Crest
          </button>
        </div>
        <div className="md:h-1/2">
          <img src={heroImage} alt="Hero" className="object-cover" />
        </div>
      </div>
    </>
  );
};

export default Herosection;
