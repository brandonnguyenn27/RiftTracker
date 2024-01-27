"use client";
import React, { useState } from "react";
import axios from "axios";
import PlayerMatchContainer from "@/components/PlayerMatchContainer";

function Home() {
  const [searchPlayer, setSearchPlayer] = useState("");
  const [gameList, setGameList] = useState([]);
  const [playerPUUID, setPlayerPUUID] = useState("");

  function getPlayerGames(event) {
    axios
      .get("http://localhost:4000/past5Games", {
        params: { username: searchPlayer },
      })
      .then(function (response) {
        setGameList(response.data);
      });
    return axios
      .get("http://localhost:4000/getPlayerID", {
        params: { username: searchPlayer },
      })
      .then(function (response) {
        setPlayerPUUID(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  console.log(gameList);

  return (
    <main>
      <div>
        <div className="text-center mt-5">
          <h2 className="text-4xl">RiftStats</h2>
          <input
            className="m-2 p-1 rounded-sm border border-black"
            type="text"
            onChange={(e) => setSearchPlayer(e.target.value)}
          ></input>
          <button
            className="rounded-sm border border-black p-1"
            onClick={getPlayerGames}
          >
            Search
          </button>
        </div>
        {gameList.length !== 0 ? (
          <div className="m-8 p-2">
            <p className="text-center p-2">Player Found!</p>
            {gameList.map((gameData, index) => (
              <div className="m-3 border-2 rounded-lg">
                <h2 className=" bg-gray-400 p-1 bg-opacity-30 rounded-md">
                  Game {index + 1}
                </h2>
                <PlayerMatchContainer
                  matchData={gameData}
                  puuid={playerPUUID}
                ></PlayerMatchContainer>
              </div>
            ))}
          </div>
        ) : (
          <>
            <p className="text-center">Player Not Found!</p>
          </>
        )}
      </div>
    </main>
  );
}

export default Home;