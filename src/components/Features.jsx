import React from "react";
import FeaturesCard from "./FeaturesCard";
import icon1 from "/images/icon1.svg";
import icon2 from "/images/icon2.svg";
import icon3 from "/images/icon3.svg";
import icon4 from "/images/icon4.svg";
export const Features = () => {
  return (
    <div>
      <div className="p-16 flex justify-center items-center text-5xl font-bold">
        Four key questions answered by Crest
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-24 py-16 gap-8 ">
        <FeaturesCard
          icon={icon1}
          title="What to order"
          content="Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle."
        />
        <FeaturesCard
          icon={icon2}
          title="When to order"
          content="Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you're never left guessing."
        />
        <FeaturesCard
          icon={icon3}
          title="How much to stock"
          content="Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes."
        />
        <FeaturesCard
          icon={icon4}
          title="Where to place"
          content="Our tool suggests how to move stock within your supply chain. So you'll always have products available across cities."
        />
      </div>
    </div>
  );
};
