import { Accordion, AccordionItem } from "@nextui-org/accordion";
import React from "react";
import { useState, useEffect } from "react";


const gameTypeConverter = (queueID) => {
    if (queueID == 400) {
        return ("Normal")
    }
    if (queueID == 440) {
        return ("Ranked Flex")
    }
    if (queueID == 450) {
        return ("ARAM")
    }
    if (queueID == 420) {
        return ("Ranked Solo")
    }
    else {
        return ("0")
    }
};

const secondsToMin = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
    return `${minutes}:${formattedSeconds}`;
};
const PlayerMatchContainer = ({ matchData, puuid }) => {
  let playerIndex = matchData.metadata.participants.indexOf(puuid);
  let playerInfo = matchData.info.participants[playerIndex];
  let participantList = matchData.info.participants;
  let winBoolean = playerInfo.win ?? playerInfo.gameEndedInEarlySurrender;
  let date = new Date(matchData.info.gameCreation);
  let printDate = date.toLocaleDateString("en-US");
  
  
  //let winBoolean = playerInfo.win !== null ? playerInfo.win : playerInfo.gameEndedInEarlySurrender;
  //{winBoolean ? "Victory" : "Defeat"}
  //const color = playerInfo.win ? 'blue-500' : 'red-500';
  //border-${playerInfo.win === true ? 'blue' : 'red'}-500
  return (
    <Accordion
      variant="bordered"
    >
      <AccordionItem
        key="1"
        aria-label="Player Info Container"
        title={
          <h2 className="flex">
           {printDate} {"| "} {gameTypeConverter(matchData.info.queueId)} {"| "} {secondsToMin(matchData.info.gameDuration)} {"| "} {winBoolean ? "Victory" : "Defeat"}  {" | "}
            {playerInfo.kills}/{playerInfo.deaths}/{playerInfo.assists} 
          </h2>
        }
      >
        <div className="flex">
        <div className={`border-2 border-${
            playerInfo.win === true ? "blue" : "red"
          }-500 p-5 rounded-md m-2 border-opacity-50 flex-1`}>
            {participantList.slice(0, 5).map((gamePlayer, index1) => (
            <div className="border rounded-sm p-1">
            <p key={index1} className="p-2">
                {gamePlayer.riotIdGameName} {"| "} {gamePlayer.championName} {"| "} {gamePlayer.kills}/{gamePlayer.deaths}/{gamePlayer.assists}
                
            </p>
            </div>
          ))}
        </div>
        <div className={`border-2 border-${
            playerInfo.win === true ? "blue" : "red"
          }-500 p-5 rounded-md m-2 border-opacity-50 flex-1`}>
        {participantList.slice(-5).map((gamePlayer, index2) => (
            <div className="border rounded-sm p-1">
            <p key={index2} className="p-2">
                {gamePlayer.riotIdGameName} {"| "} {gamePlayer.championName} {"| "} {gamePlayer.kills}/{gamePlayer.deaths}/{gamePlayer.assists}
                
            </p>
            </div>
          ))}
        </div>
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default PlayerMatchContainer;