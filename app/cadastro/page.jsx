"use client";
import { useState } from "react";
import { Typography, TextField, Button, Box } from "@mui/material";

const CadastroUsuario = () => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConfirmacao, setSenhaConfirmacao] = useState(""); // Nova variável de estado para a confirmação da senha

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

  const handleSubmit = (event) => {
    event.preventDefault();

    // Verificar se as senhas são iguais
    if (senha !== senhaConfirmacao) {
      alert("As senhas não são iguais. Por favor, verifique.");

      // Limpar os campos de senha
      setSenha("");
      setSenhaConfirmacao("");
      return;
    }

    // Lógica para enviar os dados do usuário para o servidor ou realizar outras ações

    // Limpar os campos após o envio
    setSobrenome("");
    setNome("");
    setEmail("");
    setSenha("");
    setSenhaConfirmacao("");
  };

  return (
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
  );
};

export default CadastroUsuario;
