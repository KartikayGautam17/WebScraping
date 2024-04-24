function Tile(props) {
  return (
    <div className="w-[300px] h-[400px] flex flex-col overflow-hidden border-2">
      <div className="w-full h-1/2 border-2 flex items-center justify-center">
        Picture
      </div>
      <div className="w-full h-1/2 border-2 flex items-center justify-center ">
        <div className="flex flex-col justify-center items-center">
          <p>Title</p>
          <p>Description</p>
          <p>Price</p>
        </div>
      </div>
    </div>
  );
}

export default Tile;
