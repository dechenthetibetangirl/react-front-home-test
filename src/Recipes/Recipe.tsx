import { RecipeType } from "./RecipeType";
import Steps from "../Steps/Steps";
import IngredientsWithQuantity from "../Ingredients/IngredientsWithQuantity";
import { useState } from "react";
import { Tags } from "../Tags/Tags";
import { TagType } from "../Tags/TagType";
import { Box, Button } from '@chakra-ui/react';


export const Recipe = ({ recipe, handleTagClick }: { recipe: RecipeType; handleTagClick:  (tag: TagType | string) => void; }) => {
  const [showSteps, setShowSteps] = useState<Boolean>(false);
  const [showIngredients, setShowIngredients] = useState<boolean>(false);

  return (
    <Box
      display="flex"
      flexDirection="row"
      padding="10px"
      boxShadow="5px 5px 7px 2px rgba(0,0,0,0.76)"
      marginTop="20px"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-evenly"
        height="200px"
        width="70%"
        backgroundImage={`url(${recipe.imageURL})`}
        backgroundSize="cover"
      ></Box>
      <Box padding="10px" backgroundColor="lightblue" width="100%">
        <h2>Nom de la recette: {recipe.nom}</h2>
        <Box padding="10px">{recipe.description}</Box>
        <Box display="flex" justifyContent="center">
          <Tags tags={recipe.tags} handleTagClick={handleTagClick} />
        </Box>
        <Box backgroundColor="blanchedalmond" padding="10px" display="flex" flexDirection="column" alignItems="flex-start">
          Ingrédients:
          <Button onClick={() => setShowIngredients(!showIngredients)}>
            {showIngredients ? "Masquer" : "Afficher"}
          </Button>
          {showIngredients && (
            <IngredientsWithQuantity ingredientsWithQuantity={recipe.ingredientsWithQuantity} />
          )}
        </Box>
        <Box
          padding="10px"
          display="flex"
          flexDirection="column"
          alignContent="flex-start"
          alignItems="flex-start"
        >
          <Box padding="10px" display="flex" flexDirection="column">
            Etapes de la recette:
            <Button onClick={() => setShowSteps(!showSteps)}>
              {showSteps ? "Masquer" : "Afficher"}
            </Button>
          </Box>
          {recipe.etapes && showSteps && <Steps steps={recipe.etapes} />}
        </Box>
      </Box>
    </Box>
  );
};

export default Recipe;
