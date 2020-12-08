import React, { useState } from "react";
import Town from "./town";

export default function City({ cities, index }) {
  const [townIndex, setTownIndex] = useState(index);

  const handleTown = (index) => {
    if (townIndex === index) {
      setTownIndex(-1);
      return;
    }
    setTownIndex(index);
  };

  return (
    <>
      {cities.map((ele, index) => {
        return (
          <>
            <div id={`city${index + 1}`} onClick={() => handleTown(index)}>
              {ele.name}
            </div>
          </>
        );
      })}
      {townIndex !== -1 && <Town towns={cities[townIndex].towns}></Town>}
    </>
  );
}
