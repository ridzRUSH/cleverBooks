import React from "react";

import crestLogo from "/images/crestLogo.png";
export default function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 bg-gradient-to-bl from-gray-900  to-black text-white gap-6 pt-24 pb-24 p-8">
      <div className="flex flex-col gap-4 justify-between">
        {/* first column  */}
        <div>
          <span className="mb-6">
            <img src={crestLogo} alt="" />{" "}
          </span>
          <div className="mt-4">
            Crest is an AI-powered supply chain software that provides companies
            tools for demand forecasting, inventory planning and more. This
            helps them have the right amount of stock, optimise space and fulfil
            every order.
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <span>Copyright 2024 Crest</span>
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
          </div>
        </div>
        <span>
          <div>Conifer Innovations Private Limited</div>
          <span>CIN: U72900KA2022PTC163144</span>
        </span>
      </div>
      <div>
        <div className="flex  flex-col gap-1">
          <div className="font-bold">Explore </div>
          <div>Pricing </div>
          <div>Product </div>
          <div> Customer Service </div>
          <div>Career</div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="font-bold">Learn</div>
        <div>About Us </div>
        <div>Blog</div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-bold">Contact Crest</div>
        <div>sales@getcrest.ai</div>
        <div>
          <div>Registered office :</div>
          <div>
            1507, Incubex, 11th cross road, 19th Main Road, Bengaluru, India.
            560102
          </div>
        </div>
        <div>
          <div>
            Corporate Office:
            <br />
            291, All Time Space,
            <br /> 4th Floor, 15th A Cross,
            <br /> Sector - 6, HSR Layout,
            <br />
            Bengaluru,
            <br />
            India. 560102
          </div>
        </div>
      </div>
    </div>
  );
}
