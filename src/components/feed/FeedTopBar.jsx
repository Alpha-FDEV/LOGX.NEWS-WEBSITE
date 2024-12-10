import SetFeedDisplay from "./SetFeedDisplay";

import { Feed } from "@mui/icons-material";
import ShowOnline from "./ShowOnline";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedFeed } from "../../slices/SelectedFeedSlice";

export default function FeedTopBar({ isOnline }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate()
  const dispatch =useDispatch()
  const handleClick = function () {
    dispatch(setSelectedFeed(true))
    
     navigate("Am.News/feedoverview");
    
  }
  return (
    <div className="flex justify-between bg-white   shadow-sm px-2 sm:px-4 py-2 border-b-2 border-zinc-200 w-full ">
      <div className="flex justify-between items-center gap-3 sm:gap-5 relative">
        <div onClick={handleClick} className="">
          <FeedSettingsBtn
            text="Feed settings"
            icon={<Feed className="online-custom" />}
          />
        </div>

        <div
          onMouseEnter={() => setIsHovered(true)}
          className="scale-95 sm:scale-100 "
        >
          <FeedSettingsBtn text="Feeds" />
        </div>
        <div
          className={`absolute top-14 left-0  sm:left-20  transition-all duration-700 ease-in-out ${
            isHovered ? "opacity-100  block  z-10" : " opacity-0  hidden"
          }`}
          onMouseLeave={() => setIsHovered(false)}
        >
          <SetFeedDisplay setIsHovered={setIsHovered} />
        </div>
      </div>
      <ShowOnline isOnline={isOnline} />
    </div>
  );
}
function FeedSettingsBtn({ text, icon }) {
  return (
    <button
      className={`feed-btn flex gap-2 bg-white border-2 border-orange-500 h-10 ${
        icon ? "w-40" : " w-28"
      } px-1 hover:bg-orange-100`}
    >
      <span>{icon ? icon : ""}</span>
      <p className="">{text}</p>
    </button>
  );
}
