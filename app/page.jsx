"use client";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  Typography,
  CardActions,
} from "@mui/material";
import { useEffect, useState } from "react";
import { carregaReceitas } from "./api/Receita";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await carregaReceitas(page);

        const data = await response;
        setRecipes((prevRecipes) => [...prevRecipes, ...data]);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchRecipes();
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
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

      {recipes.map((recipe) => (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          className="w-full"
        >
          <Card
            key={recipe.id}
            variant="outlined"
            className="mx-auto"
            style={{ maxWidth: "400px", width: "400px", padding: "16px" }}
          >
            <CardHeader title={recipe.nomeReceita} />
            <CardMedia
              component="img"
              height="194"
              image="http://localhost:3000/imagens/arroz.jpg"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.primary">
                Ingredientes:
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {recipe.ingredientes}
              </Typography>
              <Typography variant="body2" color="text.primary">
                Modo de preparo:
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {recipe.modoPreparo}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
            <Typography variant="subtitle1"></Typography>

            <Typography variant="subtitle1">
              Receita enviada por: {recipe.nomeCadastrou}
            </Typography>
          </Card>
        </Box>
      ))}

      {loading && <Typography variant="body1">Carregando...</Typography>}

      {error && (
        <Typography variant="body1">
          Erro ao carregar as receitas. Por favor, tente novamente.
        </Typography>
      )}

      {!loading && !error && recipes.length > 0 && (
        <button onClick={handleLoadMore}>Carregar mais receitas</button>
      )}
    </Box>
  );
};

export default HomePage;
