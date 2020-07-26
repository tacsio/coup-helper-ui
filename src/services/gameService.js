import api from "./apiConfig";

import parseError from "./utils/parserApiErrors";

/** Game ingress **/
const createGame = async (playersNumber) => {
  try {
    const response = await api.post("/game", {
      numeroJogadores: playersNumber,
    });

    return response.data;
  } catch (e) {
    return Promise.reject(parseError(e));
  }
};

const joinGame = async (gameCode, playerName) => {
  try {
    const response = await api.post("/sign-in", {
      codigoPartida: gameCode,
      nomeJogador: playerName,
    });

    return response.data;
  } catch (e) {
    return Promise.reject(parseError(e));
  }
};

const quitGame = async (gameCode, playerId) => {
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
    return Promise.reject(parseError(e));
  }
};

/** Game status **/
const gameStatus = async (gameCode, playerId) => {
  try {
    const response = await api.get(`/status/${gameCode}/${playerId}`);

    return response.data;
  } catch (e) {
    return Promise.reject(parseError(e));
  }
};

/** Coin management **/
const incrementCoin = async (playerId) => {
  try {
    const response = await api.put(`/coins/increment?idJogador=${playerId}`);
    const { quantidade } = response.data;

    return quantidade;
  } catch (e) {
    return Promise.reject(parseError(e));
  }
};

const decrementCoin = async (playerId) => {
  try {
    const response = await api.put(`/coins/decrement?idJogador=${playerId}`);
    const { quantidade } = response.data;

    return quantidade;
  } catch (e) {
    return Promise.reject(parseError(e));
  }
};

const endMyRound = async (playerId) => {
  try {
    const response = await api.put(`/round/${playerId}`);

    return response.data;
  } catch (e) {
    return Promise.reject(parseError(e));
  }
};

const uncoverCard = async (playerId, cardId) => {
  try {
    const response = await api.put(`/card/${playerId}/${cardId}`);

    return response.data;
  } catch (e) {
    return Promise.reject(parseError(e));
  }
};

const terminateCard = async (playerId, cardId) => {
  try {
    const response = await api.delete(`/card/${playerId}/${cardId}`);

    return response.data;
  } catch (e) {
    return Promise.reject(parseError(e));
  }
};

const changeCard = async (playerId, cardId) => {
  try {
    const response = await api.put(
      `/card/change?idJogador=${playerId}&idCarta=${cardId}`
    );

    return response.data;
  } catch (e) {
    return Promise.reject(parseError(e));
  }
};

const retriveAmbassadorCards = async (gameCode, playerId) => {
  try {
    const response = await api.get(`/card/ambassador/${gameCode}/${playerId}`);

    return response.data.cartas;
  } catch (e) {
    return Promise.reject(parseError(e));
  }
};

const changeAmbassadorCards = async (
  gameCode,
  playerId,
  returnedCardIds,
  keepedCardIds
) => {
  try {
    const payload = {
      codigoPartida: gameCode,
      idJogador: playerId,
      idCartasDevolvidas: returnedCardIds,
      idCartasMantidas: keepedCardIds,
    };

    const response = await api.put("/card/ambassador", payload);

    return response.data;
  } catch (e) {
    return Promise.reject(parseError(e));
  }
};

export {
  createGame,
  joinGame,
  quitGame,
  gameStatus,
  incrementCoin,
  decrementCoin,
  endMyRound,
  uncoverCard,
  terminateCard,
  changeCard,
  retriveAmbassadorCards,
  changeAmbassadorCards,
};
