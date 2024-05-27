import { useState } from "react";
import AscendSort from "./filter_algorithms/ascending_sort";
import DescendSort from "./filter_algorithms/descending_sort";

function Filter({ type, Widgets, setWidgets }) {
  if (type === "Ascending")
    return (
      <button
        onClick={() => {
          AscendSort(Widgets, setWidgets);
        }}
        className="w-full border-2 border-[--w-cyan] rounded-full text-center hover:bg-[rgba(102,252,241,0.8)] hover:text-white duration-500"
      >
        Ascending
      </button>
    );
  else if (type === "Descending")
    return (
      <button
        onClick={() => DescendSort(Widgets, setWidgets)}
        className="w-full border-2 border-[--w-cyan] rounded-full text-center hover:bg-[rgba(102,252,241,0.8)] hover:text-white duration-500"
      >
        Descending
      </button>
    );
  else if (type === "Price")
    return (
      <div className="w-[12%] h-1/2 flex justify-between mr-5">
        <button className="w-full border-2 border-[--w-cyan] rounded-full text-center hover:bg-[rgba(102,252,241,0.8)] hover:text-white duration-500">
          Price
        </button>
      </div>
    );
  else return <></>;
}

export default Filter;
