import { useState } from "react";
import "./styles.css";
import Recipes from "./Recipes/Recipes";
import { allRecipes, sugarRecipes, summerRecipes, dessertRecipes, noEggsRecipes, chocolateRecipes, autumnRecipes, veganRecipes, chocolateDessertRecipes, glutenFreeRecipes, quickAndEasyRecipes, winterRecipes, appetizerRecipes } from "./Recipes/RecipeData";
import { TagList } from "./Tagfilter/ListeDesTags";
import { tagList } from "./Tags/TagData";
import { FaTimes } from "react-icons/fa"; 

export default function App() {
  const [filter, setFilter] = useState<string>("all");
  
  // New state to keep track of the selected tag
  const [selectedTag, setSelectedTag] = useState<string>("");

  // Function to handle tag click and filter recipes
  const handleTagClick = (tagId: string) => {
    if (tagId === selectedTag) {
      // If the same tag is clicked again, reset the filter
      setSelectedTag("");
      setFilter("all");
    } else {
      setSelectedTag(tagId);
      setFilter(tagId); // Set the filter to the selected tagId
    }
  };

  
  const handleRemoveTag = () => {
    setSelectedTag("");
    setFilter("all");
  };

  // Filter recipes based on the selected tag
  const filteredRecipes = () => {
    switch (selectedTag) {
      case "chocolate":
        return chocolateRecipes;
      case "sugar":
        return sugarRecipes;
      case "summer":
        return summerRecipes;
      case "dessert":
        return dessertRecipes;
      case "chocolate dessert":
        return chocolateDessertRecipes;
      case "eggs free":
        return noEggsRecipes;
      case "autumn":
        return autumnRecipes;
      case "vegan":
        return veganRecipes;
        case "glutenFree": 
        return glutenFreeRecipes;
      case "quickAndEasy": 
        return quickAndEasyRecipes;
        case "winter": 
        return winterRecipes;
        case "appetizer": 
        return appetizerRecipes;
      default:
        return allRecipes;
    }
  };

  return (
    <div className="App">
      <div>
        <h2>Selected Tags:</h2>
        <div style={{ display: "flex" }}>
          {selectedTag && (
            <div
              style={{
                margin: "5px",
                padding: "5px",
                borderRadius: "3px",
                backgroundColor: "blue",
                color: "white",
              }}
              onClick={handleRemoveTag} // Add onClick to handle tag removal

            >
              {selectedTag}
              <FaTimes style={{ marginLeft: "5px" }} /> 
            </div>
          )}
        </div>
      </div>
      <div>
        <h2>Filter Recipes:</h2>
        <TagList tags={tagList} handleTagClick={handleTagClick} />
        <button onClick={() => handleTagClick("chocolate")}>Chocolat</button>
<button onClick={() => handleTagClick("sugar")}>Sucre</button>
<button onClick={() => handleTagClick("summer")}>Eté</button>
<button onClick={() => handleTagClick("dessert")}>Dessert</button>
<button onClick={() => handleTagClick("chocolate dessert")}>
  dessert chocolat
</button>
<button onClick={() => handleTagClick("eggs free")}>Sans Oeufs</button>
<button onClick={() => handleTagClick("autumn")}> Autumn</button>
<button onClick={() => handleTagClick("vegan")}> Vegan</button>
      </div>
      <Recipes recipes={filteredRecipes()} handleTagClick={handleTagClick} />
    </div>
  );
}
