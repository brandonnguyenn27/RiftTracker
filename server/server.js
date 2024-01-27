var express = require('express');
var cors = require('cors');
const axios = require('axios');
const port = 4000

var app = express();

app.use(cors());

const API_KEY = "RGAPI-92d0022e-0e9d-4805-8d45-24f86451fbf4";

function getPlayerPUUID(playerName) {
    var searchPlayerSplit = playerName.split('#');
    var playerGameName = searchPlayerSplit[0];
    var playerTagLine = searchPlayerSplit[1];
    
    return axios.get("https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/"+ playerGameName + "/" + playerTagLine + "?api_key=" + API_KEY)
        .then(response => {
            console.log(response.data);
            return response.data.puuid;
        }).catch(err => err);
}

app.get('/getPlayerID', async (req, res) => {
    const playerName = req.query.username;
    const playerID = await getPlayerPUUID(playerName);
    res.json(playerID);
    console.log(playerID);
});

app.get('/past5Games', async (req, res) => {
    const playerName = req.query.username;
    const PUUID = await getPlayerPUUID(playerName);
    const PUUID_API_CALL = "https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/" + PUUID + "/ids" + "?api_key=" + API_KEY;

    const gameIDs = await axios.get(PUUID_API_CALL)
        .then(response => response.data)
        .catch(err => err)

    console.log(gameIDs);

    var matchDataArray = [];
    for (var i = 0; i < gameIDs.length - 10; i ++) {
        const matchID = gameIDs[i];
        const matchData = await axios.get("https://americas.api.riotgames.com/lol/match/v5/matches/" + matchID + "?api_key=" + API_KEY)
            .then(response => response.data)
            .catch(err => err)
        matchDataArray.push(matchData);
    }

    res.json(matchDataArray);
});

app.listen(port, function() {
    console.log("Server started on port 4000");
});