import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  Typography,
  CardActions,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";

const RecipeCard = ({ recipe, handleOpenEditDialog }) => {
  // Add handleOpenEditDialog as a prop
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      className="w-full"
    >
      <Card
        className="mx-auto"
        style={{
          maxWidth: "400px",
          width: "400px",
          padding: "16px",
          boxShadow: "none",
        }}
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
          {handleOpenEditDialog && (
            <IconButton onClick={() => handleOpenEditDialog(recipe)}>
              <EditIcon />
            </IconButton>
          )}
        </CardActions>
        <Typography variant="subtitle1">
          Receita enviada por: {recipe.nomeCadastrou}
        </Typography>
        <hr />
      </Card>
    </Box>
  );
};

export default RecipeCard;
