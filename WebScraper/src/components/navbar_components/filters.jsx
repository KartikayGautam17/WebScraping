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
        className="w-full border-2 text-gray border-[transparent] rounded-full text-center hover:bg-orange hover:text-black duration-500"
      >
        Ascending ↑
      </button>
    );
  else if (type === "Descending")
    return (
      <button
        onClick={() => DescendSort(Widgets, setWidgets)}
        className="w-full border-2 border-[transparent] text-gray rounded-full text-center hover:bg-orange hover:text-black duration-500"
      >
        Descending ↓
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
            className="relative pt-2 w-full h-full border-2 bg-orange border-[transparent] duration-1000 text-gray p-2 flex flex-col justify-between items-center  "
          >
            <div className="text-m m-0 text-black">Range</div>
            <div className="text-center flex justify-center text-black">
              <div className="text-gray">
                {fil[0] == "0" ? "" : "₹" + fil[0]}
              </div>
              <div className="text-gray mx-[2%]">-</div>
              <div className="text-gray">
                {fil[1] == "0" ? "" : "₹" + fil[1]}
              </div>
            </div>
          </button>
        </div>
        <RangeDiv show={show} fil={fil} setFil={setFil} setShow={setShow} />
      </>
    );
  } else return <></>;
}

export default Filter;
