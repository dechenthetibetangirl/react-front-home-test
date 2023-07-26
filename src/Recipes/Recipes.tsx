import { ListOfRecipes } from "./RecipeType";
import Recipe from "./Recipe";
import { TagType } from "../Tags/TagType";
import { Box } from '@chakra-ui/react';


export const Recipes = ({ recipes, handleTagClick }: { recipes: ListOfRecipes; handleTagClick: (tag: TagType | string) => void; }) => { // Receive handleTagClick as a prop
  return (
    <Box
      padding="10px"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box
        backgroundColor="whitesmoke"
        borderWidth="10px"
        borderColor="black"
        maxWidth="800px"
      >
        {recipes.map((obj) => (
          <Recipe recipe={obj} handleTagClick={handleTagClick} /> 
        ))}
      </Box>
    </Box>
  );
};

export default Recipes;
