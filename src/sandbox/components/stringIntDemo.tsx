import React from "react";

const StringIntDemo = () => {
  let bool = true;
  bool = false;
  return <>{bool ? "yes" : "no"}</>;
};

// const StringIntDemo = () => {
//   let bool = true;
//   bool = false;
//   if (bool) return <>yes</>;
//   if (!bool) return <>no</>;
//   return null;
// };

export default StringIntDemo;
