// make image frame to place item pictures into.
import Image from "next/image";

const ItemImageContainer = (imageID) => {
  const imageIDNumber = imageID.imageID;
  return (
    <div className="border rounded-md h-8 w-8 m-0.5">
      {imageIDNumber == 0 ? (
        <div className="empty-image-frame border border-gray-300"></div>
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
