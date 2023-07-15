import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: `http://localhost:3000`,
  headers: {
    Authorization: Cookies.get("token"), // Obtém o token do cookie e o envia no cabeçalho da requisição
  },
});
export async function getUsers() {
  try {
    const response = await api.get("/users"); // substitua pelo endpoint da sua API
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function login(email, senha) {
  try {
    const response = await api.post("/users/login", {
      email,
      senha,
    });
    const token = response.data.token;
    Cookies.set("token", token);
    return token;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default api;
