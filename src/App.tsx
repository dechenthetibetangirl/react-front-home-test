import { useState } from "react";
import "./styles.css";
import Recipes from "./Recipes/Recipes";
import { allRecipes, /* other recipe data imports */ } from "./Recipes/RecipeData";
import { TagList } from "./Tagfilter/ListeDesTags";
import { tagList } from "./Tags/TagData";
import { FaTimes } from "react-icons/fa";
import { TagType } from "./Tags/TagType";

export default function App() {
  // New state to keep track of the selected tags
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagClick = (tag: TagType | string) => {
    const tagId = typeof tag === "string" ? tag : tag.id;
    if (selectedTags.includes(tagId)) {
      setSelectedTags((prevTags) => prevTags.filter((selectedTag) => selectedTag !== tagId));
    } else {
      setSelectedTags((prevTags) => [...prevTags, tagId]);
    }
  };

  const handleRemoveTag = (tagId: string) => {
    setSelectedTags((prevTags) => prevTags.filter((selectedTag) => selectedTag !== tagId));
  };

  const filteredRecipes = () => {
    if (selectedTags.length === 0) {
      return allRecipes; // If no tags selected, show all recipes
    } else {
      return allRecipes.filter((recipe) =>
        selectedTags.every((tagId) => recipe.tags.map((tag) => tag.id).includes(tagId))
      );
    }
  };

  return (
    <div className="App">
      <div>
        <h2>Selected Tags:</h2>
        <div style={{ display: "flex" }}>
          {selectedTags.map((tagId) => (
            <div
              key={tagId}
              style={{
                margin: "5px",
                padding: "5px",
                borderRadius: "3px",
                backgroundColor: "blue",
                color: "white",
              }}
              onClick={() => handleRemoveTag(tagId)}
            >
              {tagList.find((tag) => tag.id === tagId)?.name.en}
              <FaTimes style={{ marginLeft: "5px" }} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2>Filter Recipes:</h2>
        <TagList tags={tagList} selectedTags={selectedTags} handleTagClick={handleTagClick} />
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
