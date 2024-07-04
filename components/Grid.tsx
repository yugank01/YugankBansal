import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";
import { LayoutGrid } from "./ui/LayoutGrid";

export const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map(({id, title, description, className, img, imgClassName, titleClassName, spareImg}) => (
          <BentoGridItem
            id={id}
            key={id}
            title={title}
            description={description}
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
          />
        ))}
      </BentoGrid>

      {/* <LayoutGrid cards= {[
        {id: 1, className: "flex w-full h-full", thumbnail: "/public/b1.svg"},
        {id: 2, className: "flex w-full h-full", thumbnail: "/public/b4.svg"},
        {id: 3, className: "flex w-full h-full", thumbnail: "/b5.svg"}
      ]} /> */}
    </section>
  );
};
