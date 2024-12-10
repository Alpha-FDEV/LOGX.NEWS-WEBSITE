import { Send } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenComments } from "../../../slices/SelectedFeedSlice";

function CommentForm() {
  const [commentText, setCommentText] = useState("");
  const isOpen = useSelector((state) => state.feedSelection.openComments);
  const dispatch = useDispatch();
  return (
    <div
      className={`${
        isOpen
          ? "flex flex-col border-2 border-gray-600 px-2 py-4 gap-8 shadow-lg rounded-lg scale-y-105 h-full opacity-100 will-change-transform transition-all duration-500 ease-in-out my-14"
          : "h-0 opacity-0 will-change-transform transition-all duration-200 border-2"
      } `}
    >
      <div className="flex justify-between">
        <h3 className="text-gray-800 font-roboto font-bold">
          What do you have in mind?🤔💭
        </h3>
        <span
          onClick={() => dispatch(setOpenComments(false))}
          className="text-4xl flex justify-center items-center cursor-pointer font-bold text-orange-500 px-2 py-0 bg-orange-100"
        >
          &times;
        </span>
      </div>

      <form className="flex flex-col items-end">
        <textarea
          value={commentText}
          onChange={() => setCommentText((e) => e.target.value)}
          cols="30"
          rows="6"
          placeholder="Type your comment here..."
          className="bg-gray-100 border-gray-200 w-full border-2  font-roboto font-semibold tracking-wide text-base px-2 py-2 outline-none focus:bg-white will-change-transform transition-all duration-200 focus:border-gray-300 focus:scale-y-105"
        ></textarea>

        <button
          type="submit"
          className="mt-4 bg-orange-500 px-4 py-1 rounded-sm flex justify-center items-center text-white"
        >
          {<Send />}
        </button>
      </form>
    </div>
  );
}

export default CommentForm;
