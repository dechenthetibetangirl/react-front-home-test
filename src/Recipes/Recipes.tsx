import { ListOfRecipes } from "./RecipeType";
import Recipe from "./Recipe";
import { TagType } from "../Tags/TagType";

export const Recipes = ({ recipes, handleTagClick }: { recipes: ListOfRecipes; handleTagClick: (tag: TagType | string) => void; }) => { // Receive handleTagClick as a prop
  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "whitesmoke",
          borderWidth: "10px",
          borderColor: "black",
          maxWidth: "800px",
        }}
      >
        {recipes.map((obj) => (
          <Recipe recipe={obj} handleTagClick={handleTagClick} /> 
          ))}
      </div>
    </div>
  );
};

export default Recipes;
