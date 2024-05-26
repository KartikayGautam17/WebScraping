import { useState } from "react";
function Filter() {
  return (
    <div className="w-[25%] h-1/2 flex justify-between gap-3">
      <button className="w-full border-2 border-[--w-cyan] rounded-full text-center hover:bg-[rgba(102,252,241,0.8)] hover:text-white duration-500">
        Ascending
      </button>
      <button className="w-full border-2 border-[--w-cyan] rounded-full text-center hover:bg-[rgba(102,252,241,0.8)] hover:text-white duration-500">
        Descending
      </button>
    </div>
  );
}

export default Filter;
