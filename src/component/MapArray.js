import React from "react";
import Data from "./ArrayData";

const MapArray = () => {
  return (
    <div>
      {Data.map((elem) => {
        return (
          <h1 key={elem.id}>
            {elem.name} {elem.age}
          </h1>
        );
      })}
    </div>
  );
};

export default MapArray;
