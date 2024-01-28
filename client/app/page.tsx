"use client";
import React, { useState } from "react";
import axios from "axios";
import PlayerMatchContainer from "@/components/PlayerMatchContainer";
import TopHeader from "@/components/TopHeader";


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
      <div>
        <TopHeader getGame={getPlayerGames}></TopHeader>
        {gameList.length !== 0 ? (
          <div className="m-6 border-0">
            <p className="text-center p-2">Player Found!</p>
            {gameList.map((gameData, index) => (
              <div className="m-3 p-2">
                <PlayerMatchContainer
                  matchData={gameData}
                  puuid={playerPUUID}
                  key={index}
                  gameIndex={index + 1}
                ></PlayerMatchContainer>
              </div>
            ))}
          </div>
        ) : (
          <>
            <p className="text-center p-2">Player Not Found!</p>
          </>
        )}
      </div>
    </main>
  );
}

export default Home;
