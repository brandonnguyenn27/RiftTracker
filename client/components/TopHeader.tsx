// header for search bar and title
import { useState } from "react";
import { Input, Button } from "@nextui-org/react";

const TopHeader = ({ getGame }) => {
  const [searchPlayer, setSearchPlayer] = useState("");

  const handleClick = () => {
    getGame(searchPlayer);
  };

  return (
    <div className="text-center">
      <p className="text-4xl font-bold mt-3">Rift Tracker</p>
      <div className="flex justify-center items-center">
        <Input
          className="m-2 p-1 text-center w-96"
          radius="full"
          type="text"
          classNames={{
            input: "p-2",
          }}
          onChange={(e) => setSearchPlayer(e.target.value)}
          placeholder="Game Name + #NA1"
          size="sm"
        ></Input>

        <Button
          radius="full"
          className="text-gray-500 font-semibold bg-gray-100 h-12"
          onClick={handleClick}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default TopHeader;
