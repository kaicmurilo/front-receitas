"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";
import { verifyToken, removeAuthCookie } from "../auth/auth";
const Header = () => {
  const pathname = usePathname();
  const [token, setToken] = useState(Cookies.get("token"));
  const [decoded, setDecoded] = useState(null);
  useEffect(() => {
    const fetchToken = async () => {
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
      console.log("Usuário saiu com sucesso");
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
      // Lógica para tratar o erro de logout
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
      label: decoded ? "Logout" : "Entrar",
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
