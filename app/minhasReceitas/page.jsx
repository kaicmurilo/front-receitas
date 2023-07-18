"use client";
import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Dialog,
  DialogContent,
  Snackbar,
  InputLabel,
} from "@mui/material";
import { verifyToken } from "../auth/auth";
import { buscarReceitas, editarReceita } from "../api/Receita";
import ReceitaCard from "../components/ReceitaCard";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import FormControl from "@mui/base/FormControl";

const EditarReceitas = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [idReceita, setIdReceita] = useState("");
  const [nome, setNome] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [modoPreparo, setModoPreparo] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [editingRecipe, setEditingRecipe] = useState(null);

  const fetchReceita = async () => {
    try {
      const receita = await buscarReceitas();
      const data = await receita;
      setRecipes(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchToken = async () => {
      console.log("verificando token");
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
    fetchReceita();
  }, []);

  if (!isLoggedIn) {
    return (
      <>
        <TextField>
          A página está indisponível no momento. Por favor, faça o acesso
          através de suas credenciais.
        </TextField>
      </>
    );
  }

  const handleOpenEditDialog = (recipe) => {
    setEditingRecipe(recipe);
    setIdReceita(recipe.idReceita);
    setNome(recipe.nomeReceita);
    setIngredientes(recipe.ingredientes);
    setModoPreparo(recipe.modoPreparo);
    setOpenEditDialog(true);
  };

  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
    setEditingRecipe(null);
    setNome("");
    setIngredientes("");
    setModoPreparo("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const res = await editarReceita(
      //   idReceita,
      //   nome,
      //   ingredientes,
      //   modoPreparo
      // );
      let res = { message: "kaic" };
      setSnackbarMessage(res.message);
      setOpenSnackbar(true);
      if (res.status) {
        setNome("");
        setIngredientes("");
        setModoPreparo("");
      }
    } catch (error) {
      setSnackbarMessage("Erro ao editar receita. Erro: " + error);
    }
  };

  return (
    <>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <ReceitaCard
            recipe={recipe}
            handleOpenEditDialog={handleOpenEditDialog}
          />{" "}
          {/* Pass the handleOpenEditDialog function */}
        </div>
      ))}

      <Dialog
        open={openEditDialog}
        onClose={handleCloseEditDialog}
        fullWidth
        maxWidth="md"
      >
        {editingRecipe && (
          <DialogContent>
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <FormControl style={{ width: "100%" }}>
                <InputLabel>Nome</InputLabel>
                <TextField
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  fullWidth
                />
              </FormControl>
              <FormControl style={{ width: "100%" }}>
                <InputLabel>Ingredientes</InputLabel>
                <TextareaAutosize
                  rowsMin={5}
                  placeholder="Ingredientes"
                  value={ingredientes}
                  onChange={(e) => setIngredientes(e.target.value)}
                  style={{
                    width: "100%",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    padding: "8px",
                  }}
                />
              </FormControl>
              <FormControl style={{ width: "100%" }}>
                <InputLabel>Modo de Preparo</InputLabel>
                <TextareaAutosize
                  rowsMin={5}
                  placeholder="Modo de Preparo"
                  value={modoPreparo}
                  onChange={(e) => setModoPreparo(e.target.value)}
                  style={{
                    width: "100%",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    padding: "8px",
                  }}
                />
              </FormControl>
              <Button type="submit">Salvar</Button>
            </form>
          </DialogContent>
        )}
      </Dialog>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        message={snackbarMessage}
      />
    </>
  );
};

export default EditarReceitas;
