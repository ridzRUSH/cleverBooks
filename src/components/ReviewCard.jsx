import React, { useCallback, useState } from "react";
import authImage2 from "/images/rp1.jpg";
import productImage2 from "/images/ri1.webp";
import brandImage2 from "/images/rc1.svg";
import authImage1 from "/images/rp2.webp";
import productImage1 from "/images/ri2.webp";
import brandImage1 from "/images/rc2.svg";
export default function ReviewCard() {
  const reviews = [
    {
      authImage: authImage2,
      productImage: productImage2,
      brandImage: brandImage2,
      text: "As Co-founders, we had zero clue on the real time stock levels in our warehouse. It felt like a battle to manually update invoices from EE to Zoho, so that at least some data points can be tracked. While we had already implemented Crest I had no clue that they could make this API integration work for us and exactly the way we wanted it to work. Thank you team Rahul Vishwakarma & Yogesh Byahatti for identifying the problem and being so quick with the solution, kudos to the amazing team you have.",
      degination: "Co-founder, P-TAL",
      authName: "Kirti Goel",
    },
    {
      authImage: authImage1,
      productImage: productImage1,
      brandImage: brandImage1,
      text: "D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Crest automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see Crest unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.",
      degination: "Co-founder , Samosa Party",
      authName: "Diksha Pande",
    },
  ];

  const [index, setIndex] = useState(0);

  const handleForward = () => {
    setIndex((prev) => {
      return (prev + 1) % 2;
    });
  };

  const handleBack = () => {
    setIndex((prev) => {
      return (prev - 1) % 2;
    });
  };
  return (
    <div className=" md:flex  w-full justify-center items-center p-4 border  border-blue-400 m-4 rounded-xl gap-8">
      <div className=" flex flex-col  md:w-1/2">
        <div className="text-xl">{reviews[index].text}</div>
        <div className="flex mt-4 justify-between mb-6">
          <div className="flex gap-2  ">
            <img
              src={reviews[index].authImage}
              className="rounded-full w-[70px] h-[70px]"
              alt="auth image "
            />
            <span className="flex flex-col">
              <span className="text-xl font-bold">
                {reviews[index].authName}
              </span>
              <span> {reviews[index].degination}</span>
            </span>
          </div>
          <span>
            <img src={reviews[index].brandImage} alt="product image " />
          </span>
        </div>
        <div className="text-xl flex gap-4 mb-4">
          <button onClick={handleBack}>
            <span className="border border-blue-600 flex justify-center items-center rounded-full">
              &larr;
            </span>
          </button>
          <button onClick={handleForward}>
            <span className="border border-blue-600 flex justify-center items-center rounded-full">
              &rarr;
            </span>
          </button>
        </div>
      </div>
      <div className="">
        <img
          className=" border border-black rounded-3xl md:w-[500px] md:h-[570px] "
          src={reviews[index].productImage}
          alt=""
        />
      </div>
    </div>
  );
}
