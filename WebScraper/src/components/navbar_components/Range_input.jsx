import { useState } from "react";

function RangeDiv({ show, fil, setFil, setShow }) {
  let toggle;
  if (show === 0) toggle = " left-[-250px] ";
  else toggle = " left-0 ";
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  return (
    <div
      className={
        "inline-flex w-[230px] h-[75px] top-2 m-4 mt-0 ml-0 absolute border-2 bg-[--w-clayblack] duration-500 items-center justify-around" +
        toggle
      }
    >
      <div className="inline-flex flex-col gap-2 p-2 w-[70%] text-black">
        <input
          type="text"
          placeholder="₹Min"
          className="w-full h-full pl-1"
          onChange={(val) => {
            setMin(val.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="₹Max"
          className="w-full h-full pl-1"
          onChange={(val) => {
            setMax(val.target.value);
          }}
        ></input>
      </div>

      <button
        className="flex items-center justify-center border-2 h-1/2 w-10 mr-4 rounded-lg hover:bg-cyan-400"
        onClick={() => {
          setFil([min, max]);
          setShow(0);
        }}
      >
        <img
          src="./check-lg.svg"
          alt="232"
          className="w-10 h-5 object-contain "
        ></img>
      </button>
    </div>
  );
}

export default RangeDiv;
