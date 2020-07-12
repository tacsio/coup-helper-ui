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

export const quitGame = async (gameCode, playerId) => {
  try {
    const payload = {
      data: {
        codigoPartida: gameCode,
        idJogador: playerId,
      },
    };
    const response = await api.delete("/quit", payload);

    return response.data;
  } catch (e) {
    console.log("api", e);
    return Promise.reject(parseError(e));
  }
};

export const gameStatus = async (gameCode, playerId) => {
  try {
    const response = await api.get(`/status/${gameCode}/${playerId}`);
    
    return response.data;
  } catch (e) {
    console.log("api", e);
    return Promise.reject(parseError(e));
  }
};
