// Função para verificar se o token é válido
import api from "../api/config";
import Cookies from "js-cookie";

export async function verifyToken() {
  try {
    const response = await api.get("/auth/verify-token");
    const decoded = response.data;
    console.log(decoded)
    return decoded;
  } catch (error) {
    return null;
  }
}

// Função para remover o cookie de autenticação
export function removeAuthCookie() {
  Cookies.remove("token");
}
