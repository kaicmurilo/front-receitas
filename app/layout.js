import "./globals.css";
import { Poppins } from "next/font/google";

import Header from "./components/Header";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Plataforma de Compartilhamento de Receitas",
  description: "Desenvolvido por Kaic Murilo Nunes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={poppins.className}>
        <div className="max-w-4xl mx-auto px-5">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
