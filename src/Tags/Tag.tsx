import { useState } from "react";
import { TagType } from "./TagType";

export const Tag = ({
  tag,
  handleTagClick,
}: {
  tag: TagType;
  handleTagClick: (tagId: string) => void;
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
      }}
      // Call handleTagClick when the tag is clicked
      onClick={() => handleTagClick(tag.id)}
    >
      {tag.name.fr}
    </div>
  );
};
