import React, { useState } from "react";

const ToDoListUpdated = () => {
  const [input, setInput] = useState("");
  const [item, setItem] = useState([]);

  const inputChange = (e) => {
    setInput(e.target.value);
  };

  const addItem = () => {
    setItem([...item, input]);
  };

  const deleteElm = (Id) => {
    //console.log(item);
    console.log(Id);
    const updatedItem = item.filter((curRemElm, ind) => {
      return ind !== Id;
    });
    setItem(updatedItem);
  };

  const editElm = (id) => {
    console.log(id);
    setInput(item[id]);
  };

  return (
    <div>
      <h1>Updated TODO List</h1>
      <input
        type="text"
        placeholder="Enter Items"
        value={input}
        onChange={inputChange}
      />
      <button onClick={addItem}>Add Items</button>
      {item.map((curElm, ind) => {
        return (
          <div key={ind}>
            <h1>
              {ind}
              {curElm}
            </h1>
            <button onClick={() => deleteElm(ind)}> Remove</button>
            <button onClick={() => editElm(ind)}> Edit</button>
          </div>
        );
      })}
    </div>
  );
};

export default ToDoListUpdated;
