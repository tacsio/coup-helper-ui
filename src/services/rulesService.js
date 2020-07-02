import api from "./apiConfig";

export async function getRules(playersNumber) {
  const response = await api.get("/rules", {
    params: { playersNumber },
  });

  return response;
}
