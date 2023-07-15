"use client";
import { useState } from "react";
import { login } from "../api/config";
import Cookies from "js-cookie";
import { Typography, TextField, Button, Box, Link } from "@mui/material";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await login(email, senha);
    window.location.href = "/";
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="50vh"
    >
      <Box textAlign="center">
        <Typography variant="h3">Autenticar Usuário</Typography>
        <form onSubmit={handleSubmit}>
          <Box mb={2}>
            <TextField
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="E-mail"
            />
          </Box>
          <Box mb={2}>
            <TextField
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              label="Senha"
            />
          </Box>
          <Button type="submit" variant="contained" color="grey">
            Entrar
          </Button>
          <Box>
            <Link href="/cadastro">Criar Conta</Link>
          </Box>
        </form>
      </Box>
    </Box>
  );
};
export default LoginPage;
