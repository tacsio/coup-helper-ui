import api from "./apiConfig";

import parseError from "./utils/parserApiErrors";

export async function getRegrasCriacao(playersNumber) {
  try {
    const response = await api.get("/rules", { params: { playersNumber } });
    return response.data;
  } catch (e) {
    return Promise.reject(parseError(e));
  }
}

export async function getRegrasPartida(codigoPartida) {
  try {
    const response = await api.get(`/rules/${codigoPartida}`);
    return response.data;
  } catch (e) {
    return Promise.reject(parseError(e));
  }
}
