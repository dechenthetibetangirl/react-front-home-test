import { useState } from "react";
import { TagType } from "./TagType";
import { Box } from '@chakra-ui/react';

export const Tag = ({
  tag,
  isSelected,
  handleTagClick,
}: {
  tag: TagType;
  isSelected: boolean;
  handleTagClick: (tag: TagType | string) => void;
}) => {
  return (
    <Box
      as="div"
      margin="10px"
      padding="5px"
      borderRadius="3px"
      display="flex"
      flexDirection="row"
      justifyContent="center"
      backgroundColor={tag.color}
      cursor="pointer"
      border={isSelected ? "2px solid red" : "none"}
      onClick={() => handleTagClick(tag)}
    >
      {tag.name.fr}
    </Box>
  );
};