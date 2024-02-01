import Image from "next/image";
const PlayerIconHeader = ({ player, puuid }) => {
  console.log(player);
  const playerIndex = player.metadata.participants.indexOf(puuid);
  const playerInfo = player.info.participants[playerIndex];
  console.log(playerInfo);
  let icon = playerInfo.profileIcon;
  console.log(icon);
  return (
    <div className="flex items-center bg-gray-700">
      <Image
        src={`/profileicon/${icon}.png`}
        alt="player icon"
        width={100}
        height={100}
        className="rounded-xl m-6"
      />
      <p className="text-3xl font-semibold text-white">{playerInfo.riotIdGameName}</p>
      <p className="text-2xl font-light m-1 text-gray-300 ">#{playerInfo.riotIdTagline}</p>
    </div>
  );
};

export default PlayerIconHeader;
