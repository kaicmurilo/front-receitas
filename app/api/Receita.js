import api from "./config";
import Cookies from "js-cookie";

export async function novaReceita(nomeReceita, ingredientes, modoPreparo) {
  try {
    const dadosToken = Cookies.get("token");
    const response = await api.post("/receitas/nova", {
      nomeReceita,
      ingredientes,
      modoPreparo,
      dadosToken
    });
    const res = response.data;
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
}
