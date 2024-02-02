declare namespace RiotGamesAPI {
    namespace Match {
        interface metadata {
            dataVersion: string;
            matchId: string;
            participants: Participant[];
        }
        interface info {
            mapId: number;
            matchCreation: number;
            matchId: number;
            matchMode: string;
            matchType: string;
            matchVersion: string;
            participantIdentities: ParticipantIdentity[];
            participants: Participant[];
            plateformId: string;
            queueType: string;
            region: string;
            season: string;
            teams: Team[];
            timeline: Timeline;
        }
        interface Participant {
            championId: championId;
            highestAchievedSeasonTier: string;
            masteries: Mastery[];
            participantId: number;
            runes: Rune[];
            spell1Id: number;
            spell2Id: number;
            stats: ParticipantStats;
            teamId: number;
            timeline: ParticipantTimeline;
        }
        interface Item {
            imageID: number;
        }
        interface championId {
            championName: string;
        }
        interface ParticipantIdentity {
            participantId: number;
            player: Player;
        }
        interface Team {
            bans: BannedChampion[];
            baronKills: number;
            dominionVictoryScore: number;
            dragonKills: number;
            firstBaron: boolean;
            firstBlood: boolean;
            firstDragon: boolean;
            firstInhibitor: boolean;
            firstTower: boolean;
            inhibitorKills: number;
            teamId: number;
            towerKills: number;
            vilemawKills: number;
            winner: boolean;
        }
        interface Timeline {
            frameInverval: number;
            frames: Frame[];
        }
        interface Mastery {
            masteryId: number;
            rank: number;
        }
        interface ParticipantStats {
            assists: number;
            champLevel: number;
            combatPlayerScore: number;
            deaths: number;
            doubleKills: number;
            firstBloodAssist: boolean;
            firstBloodKill: boolean;
            firstInhibitorAssist: boolean;
            firstInhibitorKill: boolean;
            firstTowerAssist: boolean;
            firstTowerKill: boolean;
            goldEarned: number;
            goldSpent: number;
            inhibitorKills: number;
            item0: Item;
            item1: Item;
            item2: Item;
            item3: Item;
            item4: Item;
            item5: Item;
            item6: Item;
            killingSprees: number;
            kills: number;
            largestCriticalStrike: number;
            largestKillingSpree: number;
            largestMultiKill: number;
            magicDamageDealt: number;
            magicDamageDealtToChampions: number;
            magicDamageTaken: number;
            minionsKilled: number;
            neutralMinionsKilled: number;
            neutralMinionsKilledEnemyJungle: number;
            neutralMinionsKilledTeamJungle: number;
            nodeCapture: number;
            nodeCaptureAssist: number;
            nodeNeutralize: number;
            nodeNeutralizeAssist: number;
            objectivePlayerScore: number;
            pentaKills: number;
            physicalDamageDealt: number;
            physicalDamageDealtToChampions: number;
            physicalDamageTaken: number;
            quadraKills: number;
            sightWardsBoughtInGame: number;
            teamObjective: number;
            totalDamageDealt: number;
            totalDamageDealtToChampions: number;
            totalDamageTaken: number;
            totalHeal: number;
            totalPlayerScore: number;
            totalScoreRank: number;
            totalTimeCrowdControlDealt: number;
            totalUnitsHealed: number;
            towerKills: number;
            tripleKills: number;
            trueDamageDealt: number;
            trueDamageDealtToChampions: number;
            trueDamageTaken: number;
            unrealKills: number;
            visionWardsBoughtInGame: number;
            wardsKilled: number;
            wardsPlaced: number;
            winner: boolean;
        }
        interface ParticipantTimeline {
            ancientGolemAssistsPerMinCounts: ParticipantTimelineData;
            ancientGolemKillsPerMinCounts: ParticipantTimelineData;
            assistedLaneDeathsPerMinDeltas: ParticipantTimelineData;
            assistedLaneKillsPerMinDeltas: ParticipantTimelineData;
            baronAssistsPerMinCounts: ParticipantTimelineData;
            baronKillsPerMinCounts: ParticipantTimelineData;
            creepsPerMinDeltas: ParticipantTimelineData;
            csDiffPerMinDeltas: ParticipantTimelineData;
            damageTakenDiffPerMinDeltas: ParticipantTimelineData;
            damageTakenPerMinDeltas: ParticipantTimelineData;
            dragonAssistsPerMinCounts: ParticipantTimelineData;
            dragonKillsPerMinCounts: ParticipantTimelineData;
            elderLizardAssistsPerMinCounts: ParticipantTimelineData;
            elderLizardKillsPerMinCounts: ParticipantTimelineData;
            goldPerMinDeltas: ParticipantTimelineData;
            inhibitorAssistsPerMinCounts: ParticipantTimelineData;
            inhibitorKillsPerMinCounts: ParticipantTimelineData;
            lane: string;
            role: string;
            towerAssistsPerMinCounts: ParticipantTimelineData;
            towerKillsPerMinCounts: ParticipantTimelineData;
            towerKillsPerMinDeltas: ParticipantTimelineData;
            vilemawAssistsPerMinCounts: ParticipantTimelineData;
            vilemawKillsPerMinCounts: ParticipantTimelineData;
            wardsPerMinDeltas: ParticipantTimelineData;
            xpDiffPerMinDeltas: ParticipantTimelineData;
            xpPerMinDeltas: ParticipantTimelineData;
        }
        interface Rune {
            rank: number;
            runeId: number;
        }
        interface Player {
            matchHistoryUri: string;
            profileIcon: number;
            summonerId: number;
            summonerName: string;
        }
        interface BannedChampion {
            championId: number;
            pickTurn: number;
        }
        interface Frame {
            events: Event[];
            participanFrames: Array<{ [str: string]: ParticipantFrame }>;
            timestamp: number;
        }
        interface ParticipantTimelineData {
            tenToTwenty: number;
            thirtyToEnd: number;
            twentyToThirty: number;
            zeroToTen: number;
        }
        interface Event {
            ascendedType: string;
            assistingParticipantIds: number[];
            buildingType: string;
            creatorId: number;
            eventType: string;
            itemAfter: number;
            itemBefore: number;
            itemId: number;
            killerId: number;
            laneType: string;
            levelUpType: string;
            monsterType: string;
            participantId: number;
            pointCaptured: string;
            position: Position;
            skillSlot: number;
            teamId: number;
            timestamp: number;
            towerType: string;
            victimId: number;
            wardType: string;
        }
        interface ParticipantFrame {
            currentGold: number;
            dominionScore: number;
            jungleMinionsKilled: number;
            level: number;
            minionsKilled: number;
            participantId: number;
            position: Position;
            teamScore: number;
            totalGold: number;
            xp: number;
        }
        interface Position {
            x: number;
            y: number;
        }
    }
}