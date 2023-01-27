import { useState } from "react";
import React from "react";

const ToggleWord = () => {
  const [show, setShow] = useState("Pooja Londhe");
  const showText = () => {
    let val = show;
    val === "Pooja Londhe" ? setShow("Pooja Phapale") : setShow("Pooja Londhe");
    //setShow("Pooja Phapale");
  };
  return (
    <div>
      <h1>{show}</h1>
      <button onClick={showText}>Toggle</button>
    </div>
  );
};

export default ToggleWord;
