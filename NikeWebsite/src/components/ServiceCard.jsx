import React from "react";

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 w-full shadow-3xl px-10 py-16">
      <div className="  bg-coral-red rounded-full flex justify-center items-center w-11 h-11">
        <img src={imgURL} alt={label} height={24} width={24} />
      </div>
      <h3 className="text-black font-bold font-palanquin text-3xl leading-normal mt-5">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
