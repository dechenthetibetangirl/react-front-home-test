import { useState } from "react";
import { TagType } from "./TagType";

export const Tag = ({
  tag,
  isSelected,
  handleTagClick,
}: {
  tag: TagType;
  isSelected: boolean; // Add the isSelected prop to the type definition
  handleTagClick: (tag: TagType | string) => void;
}) => {
  return (
    <div
      style={{
        margin: "10px",
        padding: "5px",
        borderRadius: "3px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: `${tag.color}`,
        cursor: "pointer",
        border: isSelected ? "2px solid red" : "none", // Apply a border if the tag is selected
      }}
      onClick={() => handleTagClick(tag)}
    >
      {tag.name.fr}
    </div>
  );
};
