import Image from "next/image";
const ChampionIconContainer = (championName: RiotGamesAPI.Match.Participant["championId"]) => {
  const champName = championName.championName;
  return (
    <>
      <Image
        src={`/champion/${champName}.png`}
        alt="champion icon"
        height={32}
        width={32}
        className="rounded-3xl"
      />
    </>
  );
};

export default ChampionIconContainer;
