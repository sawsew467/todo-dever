import React from "react";

function Input({functionOnChange, myRef}) {
  return (
    <input
      type="text"
      className="border-[1px] border-[#666] rounded-lg w-full h-12 py-2 px-4 text-lg mb-4 outline-[#ff8e35]"
      placeholder="Task name"
      onChange={(e) => functionOnChange(e)}
      ref={myRef}
    ></input>
  );
}

export default Input;
