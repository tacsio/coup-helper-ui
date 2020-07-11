import api from "./apiConfig";

import parseError from "./utils/parserApiErrors";

export async function createGame(playersNumber) {
  try {
    const response = await api.post("/game", {
      numeroJogadores: playersNumber,
    });

    return response.data;
  } catch (e) {
    return Promise.reject(parseError(e));
  }
}

export async function joinGame(gameCode, playerName) {
  try {
    const response = await api.post("/sign-in", {
      codigoPartida: gameCode,
      nomeJogador: playerName,
    });

    return response.data;
  } catch (e) {
    return Promise.reject(parseError(e));
  }
}
