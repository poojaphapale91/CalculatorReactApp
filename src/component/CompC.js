import React, { useContext } from "react";
import { Biodata } from "./CompA";

function CompC() {
  const myName = useContext(Biodata);
  return (
    <div>
      <h1> My name is {myName}</h1>
    </div>
  );
}

export default CompC;
