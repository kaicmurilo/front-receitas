import api from "./config";
import Cookies from "js-cookie";

export async function novoUser(nome, sobrenome, email, senha) {
  try {
    const response = await api.post("/users/register", {
      nome,
      sobrenome,
      email,
      senha,
    });
    const res = response.data;
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
}
