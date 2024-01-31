
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import React from "react";
import ChampionIconContainer from "./ChampionIconContainer";
import ItemImageContainer from "./ItemImageContainer";
import DamageContainer from "./DamageContainer";

const gameTypeConverter = (queueID) => {
  if (queueID == 400) {
    return "Normal";
  }
  if (queueID == 440) {
    return "Ranked Flex";
  }
  if (queueID == 450) {
    return "ARAM";
  }
  if (queueID == 420) {
    return "Ranked Solo/Duo";
  } else {
    return "0";
  }
};
const renderItems = (gamePlayer) => {
  return (
  <>
  <ItemImageContainer imageID={gamePlayer.item0}></ItemImageContainer>
  <ItemImageContainer imageID={gamePlayer.item1}></ItemImageContainer>
  <ItemImageContainer imageID={gamePlayer.item2}></ItemImageContainer>
  <ItemImageContainer imageID={gamePlayer.item3}></ItemImageContainer>
  <ItemImageContainer imageID={gamePlayer.item4}></ItemImageContainer>
  <ItemImageContainer imageID={gamePlayer.item5}></ItemImageContainer>
  <ItemImageContainer imageID={gamePlayer.item6}></ItemImageContainer>
  </>
  );
};

const secondsToMin = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedSeconds =
    remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
  return `${minutes}:${formattedSeconds}`;
};
const PlayerMatchContainer = ({ matchData, puuid, gameIndex }) => {
  let playerIndex = matchData.metadata.participants.indexOf(puuid);
  let playerInfo = matchData.info.participants[playerIndex];
  let participantList = matchData.info.participants;
  let winBoolean = playerInfo.win ?? playerInfo.gameEndedInEarlySurrender;
  let date = new Date(matchData.info.gameCreation);
  let printDate = date.toLocaleDateString("en-US");


  const damageNumberArray = (participantList: any) => {
    let maxDamage: number = participantList[0].totalDamageDealtToChampions;
    for (let i = 1; i < participantList.length; i ++) {
      const current: number = participantList[i].totalDamageDealtToChampions;
      if (current > maxDamage) {
        maxDamage = current;
      }
    }
    return maxDamage;
  };
  const maxDamage: number = damageNumberArray(participantList);
  

  //let winBoolean = playerInfo.win !== null ? playerInfo.win : playerInfo.gameEndedInEarlySurrender;
  //{winBoolean ? "Victory" : "Defeat"}
  //const color = playerInfo.win ? 'blue-500' : 'red-500';
  //border-${playerInfo.win === true ? 'blue' : 'red'}-500
  return (
    <>
      <div className={`${playerInfo.win === true ? 'bg-blue-500' : 'bg-red-500'} border-gray-400 border bg-opacity-90 rounded-b-none rounded-md`}>
        <p className={`bg-opacity-30 rounded-md rounded-b-none p-3 font-semibold text-white`}>
          Game {gameIndex}
        </p>
      </div>
      <Accordion className="border border-gray-400 rounded-md rounded-t-none bg-gray-700">
        <AccordionItem
          key="1"
          aria-label="Player Info Container"
          title={
            <div className="flex">
              <div className="pr-2">
              <ChampionIconContainer 
              championName={playerInfo.championName}
              />
              </div>
            <p className="text-white">
              {printDate} {"| "} {gameTypeConverter(matchData.info.queueId)}{" "}
              {"| "} {secondsToMin(matchData.info.gameDuration)} {"| "}{" "}
              {winBoolean ? "Victory" : "Defeat"} {" | "}
              {playerInfo.kills}/{playerInfo.deaths}/{playerInfo.assists}
            </p>
            </div>
          }
        >
          <div className="flex">
            <div
              className="border border-white rounded-md m-2 flex-1 bg-gray-600 border-b-0"
            >
              {participantList.slice(0, 5).map((gamePlayer, index1) => (
                <div className="border-b-1 rounded-sm p-1">
                  <div className="flex items-center m-1">
                  <ChampionIconContainer
                    championName={gamePlayer.championName}/>
                  <p key={index1} className="p-2 text-white">
                    {gamePlayer.riotIdGameName} {"| "} {gamePlayer.championName}{" "}
                    {"| "} {gamePlayer.kills}/{gamePlayer.deaths}/
                    {gamePlayer.assists}
                  </p>
                  </div>
                  <div className="flex items-center">
                  <>
                  {renderItems(gamePlayer)}
                  </>
                  <div className="pl-2">
                  <DamageContainer
                  damage={gamePlayer.totalDamageDealtToChampions}
                  maxDamage={maxDamage}
                  />
                  </div>
                  </div>
                </div>
              ))}

            </div>
            <div
              className="border border-white rounded-md m-2 flex-1 bg-gray-600 border-b-0"
            >
              {participantList.slice(-5).map((gamePlayer, index2) => (
                <div className="border-b-1 rounded-sm p-1">
                  <div className="flex items-center m-1">
                  <ChampionIconContainer
                    championName={gamePlayer.championName}/>
                  <p key={index2} className="p-2 text-white">
                    {gamePlayer.riotIdGameName} {"| "} {gamePlayer.championName}{" "}
                    {"| "} {gamePlayer.kills}/{gamePlayer.deaths}/
                    {gamePlayer.assists}
                  </p>
                  </div>
                  <div className="flex">
                    <>
                  {renderItems(gamePlayer)}
                  </>
                  <div className="pl-2">
                  <DamageContainer
                  damage={gamePlayer.totalDamageDealtToChampions}
                  maxDamage={maxDamage}
                  />
                  </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default PlayerMatchContainer;
