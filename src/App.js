import { useState, useEffect, useRef } from "react";
import Input from "./Input.js";
import Task from "./Task.js";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) ?? []
  );
  const myRef = useRef(null);
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);
  const handleAdd = () => {
    setTodoList([...todoList, inputValue]);
    console.log(myRef.current.value = "");
  };

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleDelete = (index) => {
    const newTodoList = todoList.filter((value, id) => id !== index);
    setTodoList(newTodoList);
    console.log(newTodoList);
  };

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-[#ffc482] to-[#ff8e35]">
        <div className="bg-white w-full  rounded-lg p-4 max-w-2xl drop-shadow-xl min-h-[32rem] flex flex-col">
          <h1 className="text-4xl font-semibold text-[#333] text-center mb-4">
            Todo App
          </h1>
          <Input functionOnChange={(e) => handleOnChange(e)} myRef={myRef}></Input>
          <button
            className="text-lg p-2 w-full bg-orange-400 rounded-lg text-white font-semibold"
            onClick={handleAdd}
          >
            Add task
          </button>
          <div className="flex flex-col flex-1 justify-start mt-4 gap-4">
            {todoList.map((task, index) => (
              <Task key={index} info={task} index={index} functionDelete={()=> handleDelete(index)}></Task>
            ))}
          </div>
          <p className="text-end text-lg">
            You have {todoList.length} {todoList.length > 1 ? "tasks" : "task"}
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
