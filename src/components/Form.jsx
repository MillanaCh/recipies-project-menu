import { TextField, Box, Grid, FormControl } from "@mui/material";
import { RecipesContext } from "../Context/GeneralContext";
import { useContext } from "react";
import { debounce } from "lodash";
function Form() {
  const { recipeToSearch, setRecipeToSearch } = useContext(RecipesContext);
  const handlerWithDebounce = debounce((value) => {
    setRecipeToSearch(value);
  }, 700);
  return (
    <Grid container spacing={2}>
      {/* Grid will divide by 12, 1 - 100px
            xs - extra small,  md- medium size */}
      <Grid item xs={1} md={3}></Grid>
      <Grid item xs={10} md={6}>
        <Box sx={{ m: "2rem" }}>
          <FormControl fullWidth>
            <TextField
              type="text"
              onChange={(e) => handlerWithDebounce(e.target.value)}
            />
          </FormControl>
        </Box>
      </Grid>
      <Grid item xs={1} md={3}></Grid>
    </Grid>
  );
}
export default Form;
