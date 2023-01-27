import Data from "./ArrayData";
import { useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState(Data);

  const removeElm = (id) => {
    console.log(task);
    const updatedTask = task.filter((curElm) => {
      return curElm.id !== id;
    });
    setTask(updatedTask);
  };

  const clear = () => {
    setTask([]);
  };
  return (
    <>
      <div>
        {task.map((elem) => {
          return (
            <h1 key={elem.id}>
              {elem.name} {elem.age}
              <button onClick={() => removeElm(elem.id)}>Remove</button>
            </h1>
          );
        })}
      </div>
      <button onClick={clear}> Clear</button>
    </>
  );
};

export default TodoList;
