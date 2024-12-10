import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { useState } from "react";

function LikesAndDislikes({ likes = "1.3", setTotalLikes }) {
  const [isLiked, setIsliked] = useState(false);
  const [isDisLiked, setIsDiliked] = useState(false);

  return (
    <div className="flex items-center gap-1">
      <button className="border-r-2 border-orange-300 px-1 flex">
        {isLiked ? (
          <span
            onClick={() => {
              setTotalLikes((likes) => likes - 1);
              setIsliked(false);
            }}
          >
            <ThumbUpIcon className="likes-custom  hover:bg-orange-200" />
          </span>
        ) : (
          <span
            onClick={() => {
              setTotalLikes((likes) => likes + 1);
              setIsliked(true);
              setIsDiliked(false);
            }}
          >
            <ThumbUpOutlinedIcon className="likes-custom  hover:bg-orange-200" />
          </span>
        )}{" "}
        <span>
          {likes > 1000 ? <>{(likes / 1000).toFixed(2)}k</> : <>{likes}</>}
        </span>{" "}
      </button>
      <button className="hover:bg-orange-200">
        {" "}
        {isDisLiked ? (
          <span onClick={() => setIsDiliked(false)}>
            <ThumbDownIcon className="likes-custom" />
          </span>
        ) : (
          <span
            onClick={() => {
              setIsDiliked(true);
              setTotalLikes((likes) => likes - 1);
              setIsliked(false);
            }}
          >
            <ThumbDownOutlinedIcon className="likes-custom" />
          </span>
        )}
      </button>
    </div>
  );
}

export default LikesAndDislikes;
