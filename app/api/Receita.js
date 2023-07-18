import api from "./config";
import Cookies from "js-cookie";

export async function novaReceita(nomeReceita, ingredientes, modoPreparo) {
  try {
    const dadosToken = Cookies.get("token");
    const response = await api.post("/receitas/nova", {
      nomeReceita,
      ingredientes,
      modoPreparo,
      dadosToken,
    });
    const res = response.data;
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function carregaReceitas(page) {
  try {
    const response = await api.get("/receitas/" + page);
    const res = response.data;
    console.log("receitas");
    console.log(res);
    return res;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function buscarReceitas() {
  try {
    const dadosToken = Cookies.get("token");
    const response = await api.get("/receitas/minhasreceitas", {
      dadosToken,
    });

    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function editarReceita() {
  try {
    const response = await api.get("/receitas/minhasreceitas");
    res = response.data;
    return res;
  } catch (error) {
    console.error(error);
    return error;
  }
}
