import { Tag } from "../Tags/Tag";
import { TagType } from "../Tags/TagType";

export const TagList = ({
  tags,
  selectedTags,
  handleTagClick,
}: {
  tags: TagType[];
  selectedTags: string[];
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
      }}
    >
      {tags.map((tag) => (
        <Tag
          key={tag.id}
          tag={tag}
          isSelected={selectedTags.includes(tag.id)}
          handleTagClick={() => handleTagClick(tag.id)} // Pass the tagId directly as a string
        />
      ))}
    </div>
  );
};
