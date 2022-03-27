import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const RecipesContext = createContext([]);

export const GeneralProvider = ({ children }) => {
  const [allRecipes, setAllRecipes] = useState([]);
  const [recipeToSearch, setRecipeToSearch] = useState("chicken");
  const callTheApi = async () => {
    try {
      console.log("i am calling"); //have problem
      const request = await axios.get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${recipeToSearch}&app_id=4e3dcbd1&app_key=a764ad8dfc2128b02f14c51e8afb0372%09`
      );
      // recipeToSearch is need to filter inside API
      setAllRecipes(request.data.hits);
    } catch (err) {
      console.error();
    }
  };
  useEffect(() => {
    callTheApi();
    // return()- when it is mount-componentWillUnmount
  }, [recipeToSearch]);
  const data = {
    allRecipes: allRecipes,
    recipeToSearch: recipeToSearch,
    setRecipeToSearch: setRecipeToSearch,
  };
  return (
    <RecipesContext.Provider value={data}>{children}</RecipesContext.Provider>
  );
};
