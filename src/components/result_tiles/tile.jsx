function Tile({ title, img, href, price }) {
  return (
    <div className="flex flex-col w-fit h-fit justify-between border-2">
      <img src={img} className="inline w-full h-full" />
      <div>
        <a href={href}>{title}</a>
      </div>
      <div>{price}</div>
    </div>
  );
}

export default Tile;
