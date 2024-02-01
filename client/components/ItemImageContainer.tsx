// make image frame to place item pictures into.
import Image from "next/image";

const ItemImageContainer = (imageID: any) => {
  const imageIDNumber = imageID.imageID;
  return (
    <div className="m-0.5 h-8 w-8">
      {imageIDNumber == 0 ? (
        <div className="border-1 rounded-md border-gray-400 border-opacity-70 h-8 w-8 bg-slate-500"></div>
      ) : (
        <Image
          src={`/item/${imageIDNumber}.png`}
          alt="item image"
          height={32}
          width={32}
          className="rounded-lg"
        />
      )}
    </div>
  );
};

export default ItemImageContainer;
