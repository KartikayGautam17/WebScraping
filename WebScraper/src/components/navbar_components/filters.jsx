import { useState } from "react";
import AscendSort from "./filter_algorithms/ascending_sort";
import DescendSort from "./filter_algorithms/descending_sort";
import RangeDiv from "./Range_input";
function Filter({ type, Widgets, setWidgets, fil, setFil }) {
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
  else if (type === "Price") {
    const [show, setShow] = useState(0);
    return (
      <>
        <div className="relative w-[12%] h-4/5 flex items-center mr-5">
          <button
            onClick={() => {
              setShow(show ^ 1);
            }}
            className="relative pt-2 w-full h-full border-2 border-white p-2 flex flex-col justify-between items-center hover:bg-green-500 hover:bg-opacity-50 duration-500"
          >
            <div className="text-m m-0">Range</div>
            <div className="text-center flex justify-center [color:rgba(255,255,255,0.6)] w-1/2">
              <div>{fil[0] == "0" ? "" : fil[0]}</div>
              <div className="mx-[1%]">-</div>
              <div>{fil[1] == "0" ? "" : fil[1]}</div>
            </div>
          </button>
        </div>
        <RangeDiv show={show} fil={fil} setFil={setFil} setShow={setShow} />
      </>
    );
  } else return <></>;
}

export default Filter;
