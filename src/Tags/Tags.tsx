import { Tag } from "./Tag";
import { TagType } from "./TagType";

export const Tags = ({
  tags,
  handleTagClick,
}: {
  tags: TagType[];
  handleTagClick: (tag: TagType | string) => void; // Accept both TagType and string as the tag parameter
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
        <Tag key={tag.id} tag={tag} handleTagClick={() => handleTagClick(tag)} isSelected={false} />
      ))}
    </div>
  );
};
