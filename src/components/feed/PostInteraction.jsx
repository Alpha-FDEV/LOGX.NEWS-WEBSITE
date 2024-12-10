import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import { Comment, BookmarkAddOutlined, Bookmark } from "@mui/icons-material";
import LikesAndDislikes from "../utilities/LikesAndDislikes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBookMark, setSelectedCard } from "../../slices/LatestSlice";
import { setCardModel, setOpenComments } from "../../slices/SelectedFeedSlice";

function PostInteraction({ article, likes, toLink = "",setTotalLikes }) {
  const [isLiked, setIsliked] = useState(true);

  const [link] = useState(toLink);
  const [copied, setCopied] = useState(false);

  const handleCopy = function () {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1000);
      })
      .catch((err) => console.error("Failed to copy: ", err));
  };

  return (
    <div className="flex justify-between items-center mt-auto relative ">
      <LikesAndDislikes isLiked={isLiked} likes={likes} setTotalLikes={setTotalLikes} />
      <ShowComment article={article} />

      <BookmarkIcon article={article} />
      <p
        className={` ${
          copied
            ? "text-base font-medium text-gray-200 bg-gray-400 shadow-lg px-2 py-2 absolute top-1 right-0 z-10 max-h-min -translate-y-4 flex  justify-center items-center will-change-transform transition-all  duration-500 ease-in-out min-w-max min-h-min translate-x-0"
            : " opacity-0  -z-10 w-0 will-change-transform transition-all duration-500 ease-in-out h-0 -translate-x-8 bg-white"
        }`}
      >
        {copied ? " Link copied!" : " "}
      </p>

      <span
        onClick={handleCopy}
        title="copy link "
        className="hover:bg-orange-200"
      >
        <span className="relative">
          {" "}
          <ContentCopyOutlinedIcon className="likes-custom hover:bg-orange-200" />
        </span>
      </span>
    </div>
  );
}

function ShowComment({ article }) {
  const openModel = useSelector((state) => state.feedSelection.openCardModel);
  const dispatch = useDispatch();
  return (
    <div className="flex gap-1 items-center ">
      <span
        onClick={() => {
          if (!openModel) {
            dispatch(setSelectedCard(article));
            dispatch(setCardModel(true));
          }
          if (openModel) dispatch(setOpenComments(openModel));
        }}
      >
        <Comment className="person-custom hover:bg-orange-200" />
      </span>

      <p className="text-base font-semibold ">20</p>
    </div>
  );
}
function BookmarkIcon({ isLiked, article }) {
  const bookmarkSuccess = () =>
    toast("Post Bookmarked", {
      autoClose: 2000, // 2 seconds
    });
  const dispatch = useDispatch();
  function handleAddBookmark(bookmarkedItem) {
    if (!bookmarkedItem) return;
    dispatch(addBookMark(bookmarkedItem));
  }
  const Isbookmarked = useSelector((state) => state.latestNews.bookmarks).some(
    (item) => item.title === article?.title
  );

  return (
    <div
      onClick={() => {
        handleAddBookmark(article);
        if (!Isbookmarked) bookmarkSuccess();
      }}
      className="hover:bg-orange-200"
    >
      {Isbookmarked ? (
        <Bookmark className="likes-custom" />
      ) : (
        <BookmarkAddOutlined className="likes-custom" />
      )}
    </div>
  );
}

export default PostInteraction;
