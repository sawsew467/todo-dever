import React from "react";

function TodoItem({task, index, deleteHandler}) {
  return (
    <>
      <div className="flex flex-row items-center gap-4" key={index}>
        <div className="text-lg py-2 px-4 bg-orange-400 text-white rounded-lg">
          {index + 1}
        </div>
        <p className="text-lg flex-1">{task}</p>
        <button
          className="text-lg text-[#da1414]"
          onClick={() => deleteHandler(index)}
        >
          DELETE
        </button>
      </div>
    </>
  );
}

export default TodoItem;
