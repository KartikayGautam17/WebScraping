function Tile({ title, img, href, price }) {
  return (
    <a
      href={href}
      target="newtab"
      className="hover:bg-green-500 hover:bg-opacity-60 hover:shadow-lg hover:bg-orange hover:shadow-cyan"
    >
      <div className="flex flex-col w-full h-full gap-5 border-2 rounded-md overflow-hidden border-topaz">
        <div className="max-h-[260px] flex justify-center items-center w-full h-[50%] border-b-4 border-solid border-red-600">
          <img className="max-w-full h-full" src={img}></img>
        </div>
        <div className=" w-full h-[45%] overflow-hidden">
          <div className="mx-auto mb-5 border-2 w-fit p-3 font-semibold bg-peach">
            ₹{price}
          </div>
          <div className="text-center w-4/5 mx-auto block mb-5">{title}</div>
        </div>
      </div>
    </a>
  );
}

export default Tile;
