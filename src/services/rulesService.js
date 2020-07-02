import api from "./apiConfig";

export async function getRegrasCriacao(playersNumber) {
  const response = await api.get("/rules", {
    params: { playersNumber },
  });

  return response;
}

export async function getRegrasPartida(codigoPartida) {
  try {
    const response = await api.get(`/rules/${codigoPartida}`);
    return response.data;
  } catch (e) {
    return {
      error: "Partida não encontrada.",
    };
  }
}
