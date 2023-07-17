import { Typography, Box } from "@mui/material";
const FAQ = () => {
  return (
    <Box>
      <Typography variant="h1" component="h1" className="text-4xl">
        Perguntas Frequentes
      </Typography>
      <Typography variant="body1" className="py-10">
        <Typography variant="h5" component="h5">
          1. Como faço para criar uma conta?
        </Typography>
        Para criar uma conta, clique no botão "Criar Conta" na página de logar e
        preencha o formulário com suas informações pessoais.
      </Typography>
      <Typography variant="body1" className="py-10">
        <Typography variant="h5" component="h5">
          2. Como posso entrar em contato com o suporte ao cliente?
        </Typography>
        Você pode entrar em contato com nosso suporte ao cliente através do
        formulário de contato em nossa página "Contato". Responderemos o mais
        breve possível.
      </Typography>
      <Typography variant="body1" className="py-10">
        <Typography variant="h5" component="h5">
          3. Como faço para recuperar minha senha?
        </Typography>
        Na página de login, clique em "Esqueceu sua senha?" e siga as instruções
        para redefinir sua senha por e-mail.
      </Typography>
    </Box>
  );
};
export default FAQ;
