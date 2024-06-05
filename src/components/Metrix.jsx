import React from "react";
import MetrixNumberCard from "./MetrixNumberCard";

function Metrix() {
  return (
    <div className=" p-16 md:p-36 xl:p-52  bg-gradient-to-bl from-gray-900  to-black  ">
      <div className="flex  flex-col gap-4 w-full md:flex">
        <MetrixNumberCard
          number={85}
          text={"Reduction in out-of-stock"}
          unit="%"
        />
        <MetrixNumberCard
          number={25}
          text={"Reduction in cash recovery department"}
          unit="days"
        />
        <MetrixNumberCard number={15} text={"Growth in revenue"} unit="%" />
      </div>
    </div>
  );
}

export default Metrix;
