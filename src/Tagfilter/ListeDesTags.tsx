import { Tag } from "../Tags/Tag";
import { TagType } from "../Tags/TagType";

export const TagList = ({
  tags,
  handleTagClick,
}: {
  tags: TagType[];
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
      }}
    >
      {tags.map((obj) => (
        // Pass the handleTagClick function to Tag component
        <Tag key={obj.id} tag={obj} handleTagClick={handleTagClick} />
      ))}
    </div>
  );
};
