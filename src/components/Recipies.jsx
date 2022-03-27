import {
  Card,
  CardHeader,
  Grid,
  CardContent,
  Divider,
  Button,
  Box,
  CardMedia,
} from "@mui/material";
import { RecipesContext } from "../Context/GeneralContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
function Recipies() {
  const styleHead = {
    height: 50,
  };
  const { allRecipes } = useContext(RecipesContext);
  return (
    <>
  
      <Grid container spacing={2} style={styleHead}>
        {allRecipes.map((recipe) => (
          <Grid item sx={6} md={3}>
            <Card>
              <CardHeader title={recipe.recipe.label} />
              <Divider />
              <CardContent>
                <CardMedia
                  component="img"
                  image={recipe.recipe.image}
                  height="200"
                />
              </CardContent>
            </Card>
            <Link to={`/Recipe/${recipe.recipe.label}`}>See more</Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
export default Recipies;
