import Cookies from "js-cookie";


export const getMission = () => {
    return +Cookies.get("mission");
}

export const setMission = (mission: number) => {
    return Cookies.set("mission", mission.toString());
}

export const removeMission = () => {
    return Cookies.remove("mission");
}

export const getPlayers = () => {
    return +Cookies.get("players");
}

export const setPlayers = (players: number) => {
    return Cookies.set("players", players.toString());
}

export const removePlayers = () => {
    return Cookies.remove("players");
}