import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";
function Grid() {
  return (
    <section>
      <BentoGrid>
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.decription}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

export default Grid;
