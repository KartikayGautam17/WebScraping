function Tile({ title, img, href, price }) {
  return (
    <a
      href={href}
      target="newtab"
      className="hover:bg-green-500 hover:bg-opacity-60 hover:shadow-lg hover:shadow-lime-600"
    >
      <div className="flex flex-col w-full h-full gap-3 justify-between border-2 overflow-hidden">
        <div className="max-h-[260px] flex justify-center items-center w-full h-[50%] border-b-4 border-solid border-red-600">
          <img className="w-full h-full" src={img}></img>
        </div>
        <div className=" w-full h-[40%] overflow-hidden">
          <div className="mx-auto mb-5 border-2 w-fit p-3 font-semibold">
            ₹{price}
          </div>
          <div className="text-center w-4/5 mx-auto block mb-5">{title}</div>
        </div>
      </div>
    </a>
  );
}

export default Tile;
