"use client";
import { useEffect } from "react";

import { removeAuthCookie } from "../auth/auth";
export default function Logout() {
  useEffect(() => {
    // Remove o cookie de autenticação
    removeAuthCookie();
    // Redireciona para a página inicial após a remoção do cookie
    window.location.href = "/";
  }, []);
  return null;
}
