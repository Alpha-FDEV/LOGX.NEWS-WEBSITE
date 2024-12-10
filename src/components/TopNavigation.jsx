import {
  Notifications as NotificationIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import Logo from "./LogoApp";
import SearchInput from "./SearchInput";
import { useState } from "react";
import RevokedCreatePost from "./createPost/RevokedCreatePost";
import Overlay from "./utilities/Overlay";

export default function TopNavigation({ query, dispatch }) {
  const [showSearch, setShowSerach] = useState(false);
  const [modelCardOpen, setModelCardOpen] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "updateQuery", payload: e.target.value });
  }
  return (
    <>
      {" "}
      {modelCardOpen && (
        <>
          <RevokedCreatePost setModelCardOpen={setModelCardOpen} />
          <Overlay close={() => setModelCardOpen(false)} />
        </>
      )}
      <div className="flex items-center  justify-between gap-4 md:gap-0 py-4 p-2 z-40 sticky top-0 bg-slate-100 ">
        <div className="flex items-center gap-3">
          <Logo width={8} height={8} />
          <div className="flex">
            <p className="font-semibold text-xl">Am</p>
            <p className="font-medium text-lg text-orange-500">.News</p>
          </div>
        </div>

        <NavigationCentre>
          <form
            onSubmit={handleSubmit}
            className=" bg-white flex gap-1 items-center shadow-xl sm:w-1/2 rounded-md p-2"
          >
            <div className="hidden sm:flex items-center gap-1">
              <SearchIcon className="search-custom" />
            </div>
            <div
              onClick={() => setShowSerach(true)}
              className={`${
                showSearch
                  ? "hidden"
                  : " flex search-custom items-center justify-center sm:hidden"
              }`}
            >
              <SearchIcon className="search-custom" />
            </div>

            <div className="hidden  sm:flex flex-col w-full ">
              <SearchInput query={query} dispatch={dispatch} />
            </div>

            <div
              className={`${
                showSearch
                  ? "fixed w-full top-1 left-0 z-20 shadow-md flex bg-white items-center sm:hidden py-3"
                  : " hidden "
              }  `}
            >
              <SearchIcon className="search-custom" />
              <SearchInput query={query} dispatch={dispatch} />

              <span
                onClick={() => setShowSerach(false)}
                className="text-2xl text-orange-500 font-semibold"
              >
                &times;
              </span>
            </div>

            <div className="mr-4 hidden md:flex">Ctrl+K</div>
          </form>
        </NavigationCentre>

        <div className="ml-auto md:ml-0">
          <RightNavigation setModelCardOpen={setModelCardOpen} />
        </div>
      </div>
    </>
  );
}

function NavigationCentre({ children }) {
  return <>{children}</>;
}

function RightNavigation({setModelCardOpen}) {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <div className="flex justify-between gap-4 items-center relative">
      <div className="hidden lg:flex gap-2">
        <button
          onClick={() => setModelCardOpen(true)}
          title="Create post"
          className="text-lg font-roboto font-medium py-1 px-2 bg-orange-500 rounded-md"
        >
          Create Post
        </button>
        <span>
          <NotificationIcon className="notification-custom" />
        </span>
      </div>
      <div className="hidden lg:flex">
        <ProfilePicture />
      </div>
      <div
        onClick={() => setShowDropDown((t) => !t)}
        className="lg:hidden flex"
      >
        <ProfilePicture />
      </div>

      <div
        className={`${
          showDropDown
            ? "absolute top-3 right-0 translate-y-1/4 -translate-x-1/5 transition-all duration-700 opacity-100 lg:hidden"
            : "hidden opacity-0 h-0"
        }`}
      >
        <ProfileDropDown />
      </div>
    </div>
  );
}

function ProfileDropDown() {
  return (
    <div className="bg-white shadow-lg rounded-sm py-3 transition-all duration-300 ">
      <ul className="flex flex-col gap-3 text-lg font-semibold text-gray-900 items-start w-60 ">
        <li className=" hover:scale-95 hover:bg-orange-200 w-full text-start transition-all duration-300">
          <span className="px-2 w-28  ml-10"> Create Post</span>
        </li>
        <li className="transition-all duration-300 hover:scale-95 hover:bg-orange-200 w-full text-start">
          <span className="px-2  ml-10 "> Notifiactions</span>
        </li>
        <li className="transition-all duration-300 hover:scale-95 hover:bg-orange-200 w-full text-start">
          <span className="px-2   ml-10">Profile</span>
        </li>
        <li className="transition-all duration-300 hover:scale-95 hover:bg-orange-200 w-full text-start">
          <span className="px-2 ml-10 "> Liked Content</span>
        </li>
      </ul>
    </div>
  );
}

function ProfilePicture() {
  return (
    <div>
      <Logo width={8} height={8} />
    </div>
  );
}
