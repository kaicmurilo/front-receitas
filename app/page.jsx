import Link from "next/link";
import { Typography } from "@mui/material";

const HomePage = () => {
  return (
    <div>
      <Typography variant="h1" component="h1" className="text-4xl">
        Bem-vindo à nossa plataforma de compartilhamento de receitas culinárias!
      </Typography>
      <Typography variant="body1" className="py-10">
        Nossa plataforma permite compartilhar e descobrir receitas, interagir
        com a comunidade e personalizar sua experiência culinária.
      </Typography>
    </div>
  );
};

export default HomePage;
