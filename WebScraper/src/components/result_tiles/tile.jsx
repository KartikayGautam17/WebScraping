function Tile({ title, img, href, price }) {
  return (
    <div className="flex flex-col w-full h-full gap-3 justify-between border-2 overflow-hidden">
      <div className="flex justify-center items-center w-full h-[50%] border-b-4 border-solid border-red-600">
        <img className="h-full" src={img}></img>
      </div>
      <div className=" w-full h-[50%] overflow-hidden">
        <div className="mx-auto my-4 border-2 w-fit p-3">₹{price}</div>
        <a className="text-center w-4/5 mx-auto block" href={href}>
          {title}
        </a>
      </div>
    </div>
  );
}

export default Tile;
