import { TabPanel, TabList, TabContext } from "@mui/lab";
import { CardMedia, Grid, Tab } from "@mui/material";
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { RecipesContext } from "../Context/GeneralContext";
import DrawerMenu from "./Drawer";

function Recipe() {
  const [value, setValue] = useState("1");
  const { recipe } = useParams();
  const { allRecipes } = useContext(RecipesContext);
  const data = allRecipes.filter((el) => el.recipe.label === recipe); //recipe is from useParams()
  //console.log(data)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <DrawerMenu/>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <h1>{recipe}</h1>
          <CardMedia
            component="img"
            image={data[0].recipe.image}
            alt={recipe}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TabContext value={value}>
            <TabList onChange={handleChange} aria-label="description">
              <Tab label="Ingredients" value="1"></Tab>
              <Tab label="Gramms" value="2"></Tab>
              <Tab label="Nutricional" value="3"></Tab>
            </TabList>
            <TabPanel value="1">{data[0].recipe.ingredientLines.map(el => <div>{el}</div>)}</TabPanel>
            <TabPanel value="2">Panel 2</TabPanel>
            <TabPanel value="3">Panel 3</TabPanel>
          </TabContext>
        </Grid>
      </Grid>
    </>
  );
}
export default Recipe;
