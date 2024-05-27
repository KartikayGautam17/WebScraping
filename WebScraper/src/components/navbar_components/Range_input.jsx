function RangeDiv({ show, fil, setFil }) {
  let toggle;
  if (show === 0) toggle = " left-[-250px] ";
  else toggle = " left-0 ";
  return (
    <div
      className={
        "py-2 px-2 flex flex-col w-[230px] h-[100px] m-4 mt-0 ml-0 absolute " +
        toggle +
        "text-black w-[200px] h-[100px] top-0 border-2 bg-[--w-clayblack]  flex flex-col gap-2 duration-500"
      }
    >
      <input
        type="text"
        placeholder="₹Min"
        className="w-4/5 h-full pl-1"
        value={fil[0] || null}
        onChange={(value) => {}}
      ></input>
      <input
        type="text"
        placeholder="₹Max"
        className="w-4/5 h-full pl-1"
        value={fil[1] === "null" ? null : fil[1]}
        onChange={() => {}}
      ></input>
    </div>
  );
}

export default RangeDiv;
