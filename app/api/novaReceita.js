import api from "../api/config";

export async function login(nomeReceita, ingredientes, modoPreparo) {
  try {
    const response = await api.post("/receitas/nova", {
      nomeReceita,
      ingredientes,
      modoPreparo,
    });
    const res = response.data.token;
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
}
