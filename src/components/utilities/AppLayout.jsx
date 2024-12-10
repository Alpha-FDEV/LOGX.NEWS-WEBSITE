import TopNavigation from "../TopNavigation";
import SideBar from "../Sidebar";
import HeadlinesSidebar from "../headlines/HeadlinesSidebar";

import UseFetchHeadlines from "../newsData/UseFetchHeadlines";

// import Overlay from "./components/utilities/Overlay";
import UseFetchNews from "../newsData/UseFetchNews";
import UseHandleStates from "../UseHandleStates.jsz";
import FeedTopBar from "../feed/FeedTopBar";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Routing from "../../routers/Routing";
import Overlay from "../utilities/Overlay";
import { useState } from "react";
import { ArrowForwardIos } from "@mui/icons-material";
import SelectFeed from "../feed/SelectFeed";
import { useDispatch, useSelector } from "react-redux";
import NewsModel from "../feed/newsModel/NewsModel";
import Login from "../login/Login";
import RevokedCreatePost from "../createPost/RevokedCreatePost";
import { setCardModel } from "../../slices/SelectedFeedSlice";

function AppLayout() {
  const [status, articles, query, error, isOnline, dispatch] =
    UseHandleStates();
  UseFetchNews(query);

  return (
    <BrowserRouter>
     
      <div className="relative">
        <TopNavigation query={query} dispatch={dispatch} />

        <div className="">
          <BodyContainer isOnline={isOnline} />
        </div>
      </div>
    </BrowserRouter>
  );
}

function BodyContainer({ isOnline }) {
  const dispatch = useDispatch()
  const [showSideBar, setShowSideBar] = useState(false);
  const [openModel, setOpenModel] = useState();
  const modelCardOpen = useSelector(
    (state) => state.feedSelection.openCardModel
  );
  const openFeed = useSelector((state) => state.feedSelection.selectFeedopen);

  return (
    <div className="content ">
      <div className=" hidden  lg:flex h-[100vh] min-w-52 z-30">
        <SideBar />
      </div>
      {showSideBar ? (
        <div
          className={`${
            showSideBar
              ? " left-0 flex  lg:hidden h-[100vh] min-w-52 z-40 absolute"
              : "  h-[100vh] relative transition-all duration-300 ease-in-out  backdrop-blur-sm left-20"
          } `}
        >
          <div
            onClick={() => setShowSideBar(false)}
            className="bg-orange-400 p-1 h-10 text-white font-bold rounded-sm mt-2 cursor-pointer fixed left-0 translate-x-44   z-30 lg:hidden rotate-180"
          >
            {<ArrowForwardIos />}
          </div>

          <SideBar />
        </div>
      ) : (
        <div
          onClick={() => setShowSideBar(true)}
          className="bg-orange-400 p-1 h-10 text-white font-bold rounded-sm  cursor-pointer sticky top-20 translate-y-2   z-40 lg:hidden"
        >
          {<ArrowForwardIos />}
        </div>
      )}

      <div className="lg:hidden">{showSideBar ? <Overlay /> : " "}</div>

      {openFeed ? (
        <>
          <Overlay />
        </>
      ) : (
        " "
      )}
      {modelCardOpen ? (
        <>
          <Overlay close={() => dispatch(setCardModel(false))} />
          <NewsModel />
        </>
      ) : (
        " "
      )}

      <div className="feed flex flex-col justify-center  items-center w-full    ">
        <div className="flex-2 w-full    sm:mx-2 sticky left-0 top-20 z-10 ">
          <FeedTopBar isOnline={isOnline} setOpenModel={setOpenModel} />
        </div>
        <Routing />;
      </div>
      <div className="headlines hidden">
        <HeadlinesSidebar />
      </div>
    </div>
  );
}

export default AppLayout;
