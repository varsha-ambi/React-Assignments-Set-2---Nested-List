import React from "react";
export default function Town({ towns }) {
  return (
    <>
      {towns.map((ele, index) => {
        return <div id={`town${index + 1}`}>{ele.name}</div>;
      })}
    </>
  );
}
