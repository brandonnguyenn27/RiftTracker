"use client";
import React, { useState } from "react";
import axios from "axios";
import PlayerMatchContainer from "@/components/PlayerMatchContainer";
import TopHeader from "@/components/TopHeader";
import PlayerIconHeader from "@/components/PlayerIconHeader";

function Home() {
  const [gameList, setGameList] = useState([]);
  const [playerPUUID, setPlayerPUUID] = useState("");

  async function getPlayerGames(searchPlayer) {
    axios
      .get("http://localhost:4000/past5Games", {
        params: { username: searchPlayer },
      })
      .then(function (response) {
        setGameList(response.data);
      });
    try {
      const response_1 = await axios.get("http://localhost:4000/getPlayerID", {
        params: { username: searchPlayer },
      });
      setPlayerPUUID(response_1.data);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(gameList);

  return (
    <main>
      <div className="h-screen bg-gray-500">
        <TopHeader getGame={getPlayerGames}></TopHeader>
        {gameList.length !== 0 ? (
          <>
            <PlayerIconHeader player={gameList[0]} puuid={playerPUUID} />
            <div className="border-0 bg-gray-600">
              {gameList.map((gameData, index) => (
                <div className={`${index === 0 ? 'm-3 mt-0' : 'm-3' } ${index === 9 ? 'mb-0' : ''} p-2`}>
                  <PlayerMatchContainer
                    matchData={gameData}
                    puuid={playerPUUID}
                    key={index}
                    gameIndex={index + 1}
                  ></PlayerMatchContainer>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <p className="text-center p-2 text-white">Player Not Found!</p>
          </>
        )}
      </div>
    </main>
  );
}

export default Home;
