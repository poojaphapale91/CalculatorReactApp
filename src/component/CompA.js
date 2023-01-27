import React from "react";
import CompB from "./CompB";
import { createContext } from "react";
const Biodata = createContext();

function CompA() {
  return (
    <div>
      <Biodata.Provider value={"Pooja Phapale"}>
        <CompB />
      </Biodata.Provider>
    </div>
  );
}

export default CompA;
export { Biodata };
