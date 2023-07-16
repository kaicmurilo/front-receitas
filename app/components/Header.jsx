"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";
import { verifyToken, removeAuthCookie } from "../auth/auth";
import { Button } from "@mui/material";
const Header = () => {
  const pathname = usePathname();
  const [token, setToken] = useState(Cookies.get("token"));
  const [decoded, setDecoded] = useState(null);
  useEffect(() => {
    const fetchToken = async () => {
      console.log("veficiando token");
      try {
        const decodedToken = await verifyToken();
        setDecoded(decodedToken);
      } catch (error) {
        console.error("Erro ao verificar o token:", error);
        // Lógica para tratar o erro de verificação do token
      }
    };
    fetchToken();
  }, [token]);
  const handleLogout = async () => {
    try {
      await removeAuthCookie();
      setToken(null);
      setDecoded(null);
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };
  const navItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Sobre",
      href: "/about",
    },
    {
      label: "FAQ",
      href: "/about/faq",
    },
    {
      label: decoded ? "Receita+" : "",
      href: decoded ? "/novaReceita" : "",
    },
    {
      label: decoded ? decoded.nome + ", Sair." : "Entrar",
      href: decoded ? "/logout" : "/login",
      onClick: decoded ? handleLogout : null,
    },
  ];
  return (
    <div>
      <ul className="flex gap-5 py-10">
        {navItems.map((link, index) => (
          <li key={index}>
            {link.onClick ? (
              <button onClick={link.onClick}>{link.label}</button>
            ) : (
              <Link
                href={link.href}
                className={
                  pathname === `${link.href}` ? "text-blue-500 font-bold" : ""
                }
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Header;
