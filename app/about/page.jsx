import Link from "next/link";
import { Typography, Box } from "@mui/material";

const AboutPage = () => {
  return (
    <Box>
      <Typography variant="h1" component="h1" className="text-4xl">
        Sobre Nosso Projeto
      </Typography>
      <Typography variant="body1" className="py-10">
        Somos uma empresa dedicada a fornecer soluções inovadoras para facilitar
        a vida dos nossos clientes. Nosso compromisso é oferecer produtos de
        alta qualidade e serviços excepcionais, com foco na satisfação do
        cliente. Buscamos constantemente a excelência e aprimoramento, buscando
        superar as expectativas em cada interação.
      </Typography>
    </Box>
  );
};

export default AboutPage;
