// import React from "react";
import React, { CSSProperties } from "react";

const Style_Test = () => {
  const purple: CSSProperties = {
    backgroundColor: "purple",
    color: "red",
  };
  let isGreen = true;
  isGreen = false;

  return (
    <>
      <h1 style={{ backgroundColor: "yellow" }}>title</h1>
      <h2 style={purple}>subtitle</h2>
      <hr />
      <p className="paragraph">Hi</p>
      <span style={{ backgroundColor: isGreen ? "green" : "blue" }}>span</span>
    </>
  );
};

export default Style_Test;
