import React from "react";

export default function Cta() {
  return (
    <div className=" bg-gradient-to-bl from-gray-900  to-black">
      <div className="m-16 p-12 bg-gradient-to-r from-orange-400 to-rose-400 md:p-28 xl:p-56 rounded-3xl flex flex-col justify-center items-center gap-6 ">
        <div className="text-2xl md:text-3xl font-bold  text-white text-center">
          You can grow faster than you think!
        </div>
        <div className="text-xl text-white  items-center text-center">
          Plan with Crest to fulfil your demand today, and dreams tomorrow. We
          bring the methods and technologies of large global companies to help
          brands of all sizes scale.
        </div>
        <button className=" bg-black rounded-full px-6 py-3 text-white">
          Get started with Crest
        </button>
      </div>
    </div>
  );
}
