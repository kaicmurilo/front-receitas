"use client";
import { useState } from "react";
import { Typography, TextField, Button, Box } from "@mui/material";
import { Snackbar } from "@mui/material";
import { novoUser } from "../api/user";

const CadastroUsuario = () => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConfirmacao, setSenhaConfirmacao] = useState(""); // Nova variável de estado para a confirmação da senha
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleSobrenomeChange = (event) => {
    setSobrenome(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleSenhaConfirmacaoChange = (event) => {
    setSenhaConfirmacao(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Verificar se as senhas são iguais
    if (senha !== senhaConfirmacao) {
      setSnackbarMessage("As senhas não são iguais. Por favor, verifique.");
      setOpenSnackbar(true);
      // Limpar os campos de senha
      setSenha("");
      setSenhaConfirmacao("");
      return;
    }
    // Lógica para enviar os dados do usuário para o servidor ou realizar outras ações
    const res = await novoUser(nome, sobrenome, email, senha);
    setSnackbarMessage(res.message);
    setOpenSnackbar(true);

    // Limpar os campos após o envio
    setSobrenome("");
    setNome("");
    setEmail("");
    setSenha("");
    setSenhaConfirmacao("");
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="50vh"
      >
        <Box textAlign="center">
          <Typography variant="h1" component="h1" className="text-4xl">
            Cadastro de Usuário
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box mb={2}>
              <TextField
                label="Nome"
                value={nome}
                onChange={handleNomeChange}
                required
              />
              <TextField
                label="Sobrenome"
                value={sobrenome}
                onChange={handleSobrenomeChange}
                required
              />
            </Box>

            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <TextField
              label="Senha"
              type="password"
              value={senha}
              onChange={handleSenhaChange}
              required
            />
            <TextField
              label="Confirmar Senha"
              type="password"
              value={senhaConfirmacao}
              onChange={handleSenhaConfirmacaoChange}
              required
            />
            <Box mb={2}>
              <Button type="submit">Cadastrar</Button>
            </Box>
          </form>
        </Box>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        message={snackbarMessage}
      />
    </>
  );
};

export default CadastroUsuario;
