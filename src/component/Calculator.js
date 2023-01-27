import React, { useState } from "react";

const Calculator = () => {
  const [val, setVal] = useState("");

  const handleNum = (e) => {
    setVal(val + e.target.name);
  };

  const calc = () => {
    // eslint-disable-next-line
    setVal(eval(val));
  };

  const clear = () => {
    setVal("");
  };

  const backSpace = () => {
    setVal(val.slice(0, val.length - 1));
  };
  return (
    <>
      <div className="container">
        <h1>Calculator App</h1>
        <input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.name)}
        />
        <div className="btns">
          <button name="C" onClick={clear}>
            C
          </button>
          <button name="B" onClick={backSpace}>
            B
          </button>
          <button name="%" onClick={handleNum}>
            %
          </button>
          <button className="oper" name="/" onClick={handleNum}>
            /
          </button>
        </div>
        <div className="btns">
          <button name="9" onClick={handleNum}>
            9
          </button>
          <button name="8" onClick={handleNum}>
            8
          </button>
          <button name="7" onClick={handleNum}>
            7
          </button>
          <button className="oper" name="*" onClick={handleNum}>
            *
          </button>
        </div>
        <div className="btns">
          <button name="6" onClick={handleNum}>
            6
          </button>
          <button name="5" onClick={handleNum}>
            5
          </button>
          <button name="4" onClick={handleNum}>
            4
          </button>
          <button className="oper" name="-" onClick={handleNum}>
            -
          </button>
        </div>
        <div className="btns">
          <button name="3" onClick={handleNum}>
            3
          </button>
          <button name="2" onClick={handleNum}>
            2
          </button>
          <button name="1" onClick={handleNum}>
            1
          </button>
          <button className="oper" name="+" onClick={handleNum}>
            +
          </button>
        </div>
        <div className="btns">
          <button name="0" onClick={handleNum}>
            0
          </button>
          <button name="." onClick={handleNum}>
            .
          </button>
          <button name="()" onClick={handleNum}>
            ()
          </button>
          <button className="oper" name="=" onClick={calc}>
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
