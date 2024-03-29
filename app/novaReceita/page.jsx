"use client";
import React, { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import { verifyToken } from "../auth/auth";
import { novaReceita } from "../api/receita";
import { Snackbar } from "@mui/material";

const CadastroReceitaPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [nome, setNome] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [modoPreparo, setModoPreparo] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  useEffect(() => {
    const fetchToken = async () => {
      console.log("veficiando token");
      try {
        const decodedToken = await verifyToken();
        if (decodedToken) setIsLoggedIn(true);
        else window.location.href = "/login";
      } catch (error) {
        console.error("Usuário não está autenticado:", error);
        window.location.href = "/login";
      }
    };
    fetchToken();
  }, []);

  if (!isLoggedIn) {
    return null; // ou uma mensagem de carregamento, por exemplo
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await novaReceita(nome, ingredientes, modoPreparo);
      setSnackbarMessage(res.message);
      setOpenSnackbar(true);
      if (res.status) {
        setNome("");
        setIngredientes("");
        setModoPreparo("");
      }
    } catch (error) {
      setSnackbarMessage("Erro ao cadastar receita. Erro:" + error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nome da Receita"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Ingredientes"
          value={ingredientes}
          onChange={(e) => setIngredientes(e.target.value)}
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <TextField
          label="Modo de Preparo"
          value={modoPreparo}
          onChange={(e) => setModoPreparo(e.target.value)}
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <Button type="submit">Cadastrar Receita</Button>
      </form>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        message={snackbarMessage}
      />
    </>
  );
};
export default CadastroReceitaPage;
