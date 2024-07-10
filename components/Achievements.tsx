import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "@/data";

const Achievements = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading text-white">
        Some of my
        <span className="text-purple"> Acievements and Certifications</span>
      </h1>

      <div className="flex flex-col items-center text-white max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default Achievements;
