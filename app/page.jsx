"use client";
import React, { useEffect, useState, useCallback } from "react";
import { Box, Typography } from "@mui/material";
import ReceitaCard from "./components/ReceitaCard"; // Componente separado para o cartão da receita
import { carregaReceitas } from "./api/Receita";
const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  
  const fetchRecipes = useCallback(async () => {
    try {
      const response = await carregaReceitas(page);
      const data = await response;
      setRecipes((prevRecipes) => [...prevRecipes, ...data]);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }, [page]);
  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const renderContent = () => {
    if (loading) {
      return <Typography variant="body1">Carregando...</Typography>;
    }
    if (error) {
      return (
        <Typography variant="body1">
          Erro ao carregar as receitas. Por favor, tente novamente.
        </Typography>
      );
    }
    return (
      <>
        {recipes.map((recipe) => (
          <ReceitaCard key={recipe.id} recipe={recipe} />
        ))}
        {recipes.length > 0 && (
          <button onClick={handleLoadMore}>Carregar mais receitas</button>
        )}
      </>
    );
  };
  return (
    <Box>
      <Typography variant="h1" component="h1" className="text-4xl">
        Bem-vindo à nossa plataforma de compartilhamento de receitas culinárias!
      </Typography>
      <Typography variant="body1" className="py-10">
        Nossa plataforma permite compartilhar e descobrir receitas, interagir
        com a comunidade e personalizar sua experiência culinária.
      </Typography>
      {renderContent()}
    </Box>
  );
};
export default HomePage;
