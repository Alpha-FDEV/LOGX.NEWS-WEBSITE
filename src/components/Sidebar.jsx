import {
  Edit as EditIcon,
  Person as PersonIcon,
  Bookmark as BookmarkIcon,
  ThumbUp,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="px-2 pt-8  bg-slate-100 sidebar fixed  -translate-y-1/5 z-20  overflow-y-scroll    border-t-2 border-slate-400 min-w-52  ">
      <div className="flex flex-col gap-2 mt-10  ">
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-md font-semibold text-lg bg-orange-500 flex items-center justify-center text-white">
            A
          </div>
          <ReuseButton text={"My feed"} />
        </div>
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-md font-semibold text-lg bg-orange-500 flex items-center justify-center text-white">
            <EditIcon />
          </div>
          <NavLink to="/contentandlanguage">
            <ReuseButton text={"Custom news"} />
          </NavLink>
        </div>
        <Preferences />
        <DiscoverSidebarLinks />
        <PromptFeedBack />
      </div>
    </div>
  );
}
function ReuseButton({ text }) {
  return <button className=" feed-btn ">{text}</button>;
}
function Preferences() {
  return (
    <div className="flex flex-col items-start">
      <div className="flex flex-col w-full">
        <h5 className="text-lg font-medium flex gap-1 border-b-2 max-w-28 border-slate-300 mt-3">
          Preference{" "}
          <span className="text-orange-500 text-lg font-medium">:</span>
        </h5>
        <ul className="flex flex-col items-start ml-1 ">
          <li className="sidebarLinks">
            <NavLink
              to="Am.News/following"
              className={({ isActive }) =>
                isActive
                  ? " bg-orange-200 hover:text-gray-500  text-gray-900 flex items-center gap-1 w-full"
                  : "  flex hover:text-gray-500 text-gray-900 items-center gap-1 w-full"
              }
            >
              <span>
                <PersonIcon className="person-custom" />
              </span>
              <span>Following</span>
            </NavLink>
          </li>
          <li className="sidebarLinks">
            <NavLink
              to="Am.News/bookmarkedPosts"
              className={({ isActive }) =>
                isActive
                  ? " bg-orange-200 hover:text-gray-500   text-gray-900 flex items-center gap-1 w-full"
                  : "  flex hover:text-gray-500 text-gray-900 items-center gap-1 w-full"
              }
            >
              <span>
                <BookmarkIcon className="person-custom" />
              </span>
              <span>Bookmark</span>
            </NavLink>
          </li>
          <li className="sidebarLinks">
            <NavLink
              to="Am.News/users"
              className={({ isActive }) =>
                isActive
                  ? " bg-orange-200 hover:text-gray-500   text-gray-900 flex items-center gap-1 w-full"
                  : "  flex hover:text-gray-500 text-gray-900  items-center gap-1 w-full"
              }
            >
              <span>
                <ThumbUp className="person-custom" />
              </span>
              <span>Likes</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
function DiscoverSidebarLinks() {
  return (
    <div className="flex flex-col items-start">
      <div className="flex flex-col w-full">
        <h5 className="text-lg font-medium border-b-2 flex gap-1 border-slate-300 mt-3 max-w-28 ">
          Discover{" "}
          <span className="text-orange-500 text-lg font-medium">:</span>
        </h5>
        <ul className="flex flex-col items-start ml-1  ">
          <li className="sidebarLinks">
            <span>
              <PersonIcon className="person-custom" />
            </span>
            <span>Explore</span>
          </li>
          <li className="sidebarLinks">
            <span>
              <PersonIcon className="person-custom" />
            </span>
            <span>Trending</span>
          </li>
          <li className="sidebarLinks">
            <span>
              <BookmarkIcon className="person-custom" />
            </span>
            <span>Discussions</span>
          </li>
          <li className="sidebarLinks">
            <span>
              <BookmarkIcon className="person-custom" />
            </span>
            <span>Sources</span>
          </li>
          <li className="sidebarLinks">
            <span>
              <BookmarkIcon className="person-custom" />
            </span>
            <span>Ranks</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
function PromptFeedBack() {
  return (
    <div>
      <button className="max-w-64 w-full flex border-2 rounded-md hover:bg-orange-50 border-orange-400 gap-1 bg-white justify-center items-center mb-4 mt-4 py-3">
        <span className="person-custom">📩</span>
        <p className="text-base  font-roboto font-normal flex justify-center items-center  pt-2 rounded-sm">
          Feedback
        </p>
      </button>
    </div>
  );
}
