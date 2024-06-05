import React from "react";

function FeaturesCard({ icon, title, content }) {
  return (
    <div className="flex flex-col bg-slate-200 p-8 rounded-xl gap-2">
      <img className=" w-16 h-16 bg" src={icon} alt="" />
      <div className="text-2xl font-bold">{title}</div>
      <div className="">{content}</div>
    </div>
  );
}

export default FeaturesCard;
