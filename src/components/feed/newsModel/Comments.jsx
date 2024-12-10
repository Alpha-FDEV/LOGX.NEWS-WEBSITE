import { useState } from "react";
import PostInteraction from "../PostInteraction";

function Comment({
  font = "font-bold",
  size = "text-lg",
  textColor = "text-gray-700",
}) {
  const [showmore, setShowMore] = useState(false);
  return (
    <div className="flex flex-col gap-3 justify-center border-2 border-gray-400 rounded-md px-2 py-4">
      <div className="flex gap-3 justify-start">
        <div className="w-14 h-14 rounded-full border-2 border-orange-500 flex justify-center items-center">
          <img src="" alt="Reply Image" className="w-10 h-10 rounded-md object-cover" />
        </div>

        <div className="flex flex-col gap-1">
          <span className={`text-lg font-bold ${textColor}`}>Alpha mureti</span>
          <span className={`text-base ${textColor}`}>{new Date(Date.now()).toDateString()}</span>
        </div>
      </div>
      <div className="flex flex-col gap-4 will-change-transform  duration-700">
        <p
          className={`${font}  tracking-tight will-change-transform  duration-700 ${textColor}`}
        >
          <span className="text-base  text-orange-500 font-semibold ">
            @Alpha mureti,,,
          </span>
          Visual Studio Code (VS Code) has numerous configurable options that
          can enhance a smoother work experience. It is recommended to turn on
          {showmore ? (
            <p className={`${textColor}`}>
              Visual Studio Code (VS Code) has numerous configurable options
              that can enhance a smoother work experience. It is recommended to
              turn on wrap tabs for better tab management, disable the preview
              editor for persistent tabs, uncheck compact folders for better
              folder visibility, shift the
            </p>
          ) : (
            ""
          )}
          <span
            onClick={() => setShowMore((t) => !t)}
            className="text-base text-blue-400 font-medium cursor-default ml-2"
          >
            {showmore ? "show less" : "show more..."}
          </span>
        </p>

        <div>
          <PostInteraction />
        </div>
      </div>
    </div>
  );
}

export default Comment;
