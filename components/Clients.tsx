import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { companies, testimonials } from "@/data";

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading mb-16">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center">
        <InfiniteMovingCards
          items={testimonials}
          speed="slow"
          direction="left"
        />
        <div
          className="flex flex-wrap items-center 
        justify-center gap-4 md:gap-16 max-lg: t-10"
        >
          {companies.map(({ id, img, name, nameImg }) => {
            return (
              <div key={id} className="flex md:max-w-60 max-w-32 gap-2 mt-16">
                <img src={img} alt={name} className="w-5 md:w-10" />
                <img src={nameImg} alt={name} className="w-20 md:w-24" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Clients;
