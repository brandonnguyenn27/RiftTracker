"use client";
import React, { useState } from "react";
import axios from "axios";
import PlayerMatchContainer from "@/components/PlayerMatchContainer";
import {Input} from "@nextui-org/react";

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
        <div className="text-center">
          <p className="text-4xl font-bold mt-3">Rift Tracker</p>
          <div className="w-1/2 flex items-center justify-center">
          <Input
            className="m-2 p-1 text-center"
            type="text"
            onChange={(e) => setSearchPlayer(e.target.value)}
            placeholder="Game Name + #NA1"
            size="sm"
          ></Input>
          </div>
          <button
            className="rounded-sm border border-black p-1"
            onClick={getPlayerGames}
          >
            Search
          </button>
        </div>
        {gameList.length !== 0 ? (
          <div className="m-8 p-2 border-0">
            <p className="text-center p-2">Player Found!</p>
            {gameList.map((gameData, index) => (
              <div className="border rounded-lg border-b-0 p-3">
                <h2 className=" bg-gray-400 bg-opacity-30 rounded-md p-2 font-semibold">
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