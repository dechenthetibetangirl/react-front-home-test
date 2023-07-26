import { useState } from "react";
import "./styles.css";
import Recipes from "./Recipes/Recipes";
import { allRecipes, /* other recipe data imports */ } from "./Recipes/RecipeData";
import { TagList } from "./Tagfilter/ListeDesTags";
import { tagList } from "./Tags/TagData";
import { TagType } from "./Tags/TagType";
import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import { FaTimes } from "react-icons/fa";


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
    <Box className="App">
      <Box>
        <Heading size="md">Selected Tags:</Heading>
        <Flex>
          {selectedTags.map((tagId) => (
            <Box
              key={tagId}
              margin="5px"
              padding="5px"
              borderRadius="3px"
              backgroundColor="blue"
              color="white"
              onClick={() => handleRemoveTag(tagId)}
              display="flex"
              alignItems="center"
              cursor="pointer"
            >
              {tagList.find((tag) => tag.id === tagId)?.name.en}
              <FaTimes style={{ marginLeft: "5px" }} />
            </Box>
          ))}
        </Flex>
      </Box>
      <Box>
        <Heading size="md">Filter Recipes:</Heading>
        <TagList tags={tagList} selectedTags={selectedTags} handleTagClick={handleTagClick} />
        <Button onClick={() => handleTagClick("chocolate")}>Chocolat</Button>
        <Button onClick={() => handleTagClick("sugar")}>Sucre</Button>
        <Button onClick={() => handleTagClick("summer")}>Eté</Button>
        <Button onClick={() => handleTagClick("dessert")}>Dessert</Button>
        <Button onClick={() => handleTagClick("chocolate dessert")}>
          dessert chocolat
        </Button>
        <Button onClick={() => handleTagClick("eggs free")}>Sans Oeufs</Button>
        <Button onClick={() => handleTagClick("autumn")}>Autumn</Button>
        <Button onClick={() => handleTagClick("vegan")}>Vegan</Button>
      </Box>
      <Recipes recipes={filteredRecipes()} handleTagClick={handleTagClick} />
    </Box>
  );
}